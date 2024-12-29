"use client"
import Image from 'next/image'
import { useRef, useState } from 'react'
import { Card } from '../ui/card'

function HomeProductsSection() {
    
      const scrollContainerRef = useRef<HTMLDivElement>(null)
      const [canScrollLeft, setCanScrollLeft] = useState(false)
      const [canScrollRight, setCanScrollRight] = useState(true)
    
      const handleScroll = () => {
        if (scrollContainerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
          setCanScrollLeft(scrollLeft > 0)
          setCanScrollRight(scrollLeft < scrollWidth - clientWidth )
        }
      }
    
      const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
          const scrollAmount = direction === 'left' ? -300 : 300
          scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        }
      }
      console.log('scrollContainerRef',canScrollRight);
      console.log('canScrollLeft',canScrollLeft);
      console.log('scrollContainerRef',handleScroll);
      console.log('scrollContainerRef',scroll);
    
      const productsData = [
        {
          imgSrc: '/banner1.png',
          title: ' عنوان',
          description: ' درهم 100 ',
        },
        {
          imgSrc: '/productsample1.png',
          title: ' عنوان',
          description: ' درهم 1500 ',
        },
        {
          imgSrc: '/banner3.png',
          title: ' عنوان',
          description: ' درهم 100 ',
        },
        {
          imgSrc: '/productsample2.png',
          title: ' عنوان',
          description: ' درهم 200 ',
        },
        {
          imgSrc: '/banner1.png',
          title: ' عنوان',
          description: ' درهم 150 ',
        },  {
          imgSrc: '/banner1.png',
          title: ' عنوان',
          description: ' درهم 150 ',
        },  {
          imgSrc: '/banner1.png',
          title: ' عنوان',
          description: ' درهم 150 ',
        },  {
          imgSrc: '/banner1.png',
          title: ' عنوان',
          description: ' درهم 150 ',
        },  {
          imgSrc: '/banner1.png',
          title: ' عنوان',
          description: ' درهم 150 ',
        },
        {
          imgSrc: '/banner1.png',
          title: ' عنوان',
          description: ' درهم 150 ',
        },
        {
          imgSrc: '/banner1.png',
          title: ' عنوان',
          description: ' درهم 150 ',
        },
        {
          imgSrc: '/banner1.png',
          title: ' عنوان',
          description: ' درهم 150 ',
        },
        
      ];

  return (
    <section className='relative'>
        <div 
        ref={scrollContainerRef} 
      className='max-w-[1400] ml-auto mr-auto overflow-x-auto gap-6 space-x-4 w-full h-auto bg-opacity-50 backdrop-blur-sm border-2 flex justify-start rounded-lg shadow-lg scrollbar-hide ' 
      >  {
        productsData.map((data, index) => (
        <Card
          key={index} 
          className=" md:w-[160px] h-auto border-2 bg-[#FBEFED] border-[#949494] rounded-lg flex-shrink-0 p-2 flex flex-col items-center space-y-2">
          
          <div className='p-1 bg-white rounded-lg'>
            <Image
              src={data.imgSrc}
              width={100}  // Image width
              height={100}  // Image height
              alt={`صورة ${data.title}`}
            />
          </div>
    
          <div className="text-sm text-center mt-2">
            {data.title}
          </div>
    
          <div className="text-xs text-primary mt-1 text-center">
            {data.description}
          </div>
      </Card>
    ))}
  </div>    
      {/* <Button
        variant="outline"
        size="icon"
        className={`absolute left-0 top-1/2 -translate-y-1/2 ${!canScrollRight && 'opacity-50 cursor-not-allowed'}`}
        onClick={() => scroll('left')}
        disabled={!canScrollRight}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className={`absolute right-0 top-1/2 -translate-y-1/2 ${!canScrollLeft && 'opacity-50 cursor-not-allowed'}`}
        onClick={() => scroll('right')}
        disabled={!canScrollLeft}
      >
        <ChevronRight className="h-4 w-4" />
      </Button> */}
     </section>
  )
}

export default HomeProductsSection