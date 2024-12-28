'use client';

import EmailjsComponent from '@/components/layout/emailjsComponent';
import { Card, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, CircleCheck, FacebookIcon, PhoneIcon, Search, XIcon, YoutubeIcon } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';

export default function Home() {


  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)



  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
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
  const featuresData = [
    {
      imgSrc: '/wholesale.png',
      title: 'أثمنة مناسبة',
      description: 'توفير الملابس بكميات كبيرة.',
    },
    {
      imgSrc: '/sewing-machine.png',
      title: 'بكميات كبيرة',
      description: 'توفير الملابس بكميات كبيرة..',
    },
    {
      imgSrc: '/fabric-pattern.png',
      title: 'قياسات خاصة',
      description: 'فصالة و خياطة تحت الطلب. ',
    },
    {
      imgSrc: '/pattern.png',
      title: 'قياسات خاصة',
      description: 'توفير ملابس بقياسات خاصة.',
    },
  ];

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };
  const handleSearch = async () => {
    if (!searchTerm) return;
    const queryParams = new URLSearchParams();
    queryParams.set('location', searchTerm.toLocaleLowerCase());     
    // router.push(`/search-results?${queryParams.toString()}`);
};
  return (
    <>
    <main className="h-screen relative overflow-hidden">
      {/* Header section */}
      {/* Hero Section */}
      
      <div className='w-full h-2/3 border-2 flex justify-around'>
        <div className='border-2 w-1/2 flex flex-col justify-center'>
        <h2 className="text-4xl font-bold w-[55%]">استمتع بتجربة <span className='text-primary'> تسوق</span> لا مثيل لها!
        </h2>
        <p className="text-base text-secondary-foreground mt-6 mr-6 w-[80%] ">سواء كنت تبحث عن إطلالة رسمية أو كاجوال، لدينا كل ما تحتاجه لتكون دائماً في أفضل حال.</p>
        <div className="flex w-3/5 border-2 border-primary rounded-lg mt-2 ">
            <button
                className={`inline-flex bg-primary w-9 h-full items-center justify-center 
                  rounded-s-lg border border-input text-sm text-muted-foreground/80 ring-offset-background 
                  transition-shadow focus:z-10 focus-visible:border-ring 
                  focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 
                  focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none 
                  disabled:cursor-not-allowed disabled:opacity-50 ${searchTerm !== "" ? 'bg-blue-500 text-white' : 'bg-background'}`}
                aria-label="Subscribe"
                onClick={handleSearch}
            >
                {
                    searchTerm !== "" ? 
                    <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" /> :
                    <Search size={16} strokeWidth={2} aria-hidden="true" />
                }
            </button>
            <Input
                id="input-20"
                className="-me-px flex-1 shadow-none focus-visible:z-10"
                placeholder="المكان"
                type="text"
                value={searchTerm} // Bind the state to the input value
                onChange={(e) => setSearchTerm(e.target.value)} // Update state on input change
            />
      </div>
        <div className='flex gap-4 text-secondary-foreground/80 mt-6'>
        <div className='flex flex-col'>
        <p><CircleCheck fill='#F0B70D' className='text-secondary inline'/> ملابس عالية الجودة </p>
        <p><CircleCheck fill='#F0B70D' className='text-secondary inline'/> تصاميم فريدة وعصرية</p>
        </div>

        <div className='flex flex-col'>

        <p><CircleCheck fill='#F0B70D' className='text-secondary inline'/> أسعار تنافسية</p>
        <p><CircleCheck fill='#F0B70D' className='text-secondary inline'/> خدمة عملاء مميزة </p>
        </div>

        </div>
        </div>
        <div className='border-2 mt-8 w-1/2 flex  '>
        <div className='border-2 mt-8 w-3/4 relative top-7'>
          <div className='border-2 z-[-1] -rotate-45 mt-8 absolute top-9 right-16 border-[#F0B810] w-[200px] h-[230px] rounded-lg '/>
          <div className='border-2 z-[-1] rotate-12 mt-8 absolute top-[100px] right-32 border-primary w-[90px] h-[90px] rounded-lg '/>
          <div className='w-full h-full mt-8 relative top-7'>
            <Image 
              src='/banner1.png'
              width={800} height={800} 
              alt='banner'
              layout='responsive' 
              className='z-[1] w-full h-full object-cover rounded-lg'
            />
          </div>
        </div>
        <div className='border-2 mt-4 w-1/4 flex flex-col justify-around'> 
          <Card className="w-[100px] h-[120px] border-2 bg-[#FBEFED] border-[#949494] rounded-lg mx-auto p-2">
            <div className='bg-white rounded-lg'>
              <Image
                src={`/banner3.png`}
                width={100}  // Image width
                height={60}  // Image height
                alt={`صورة العقار`}
              />
            </div>
            <CardFooter className="text-xs text-center">
              المزيد
            </CardFooter>
          </Card>
          <Card className="w-[100px] h-[120px] border-2  border-[#949494] rounded-lg mx-auto p-2">
            <div className='bg-white rounded-lg'>
              <Image
                src={`/banner2.png`}
                width={100}  // Image width
                height={60}  // Image height
                alt={`صورة العقار`}
              />
            </div>
            <CardFooter className="text-xs text-center">
              المزيد
            </CardFooter>
          </Card>
        </div>
        </div>
      </div>
      <div className='w-full h-1/3 bg-white bg-opacity-50 backdrop-blur-sm border-2 flex justify-around rounded-lg shadow-lg absolute bottom-0'>
        {featuresData.map((card, index) => (
          <Card key={index} className=" text-center after:w-[150px] h-[150px] mx-auto p-2 flex flex-col justify-center items-center">
            <Image
              src={card.imgSrc}
              width={40}
              height={40}
              alt={`صورة ${card.title}`}
              className="mx-auto"
            />
            <div className="text-sm  mt-2">
              {card.title}
            </div>
            <div className="text-xs text-secondary-foreground/80 mt-1">
              {card.description}
            </div>
          </Card>
        ))}
      </div>
      {/* Features Section */}

      {/* product section */}
      
    </main>
    <div 
    ref={scrollContainerRef} 
  className='overflow-x-auto gap-6 space-x-4 w-full h-1/3 bg-opacity-50 backdrop-blur-sm border-2 flex justify-start rounded-lg shadow-lg scrollbar-hide' 
  >  {
    productsData.map((data, index) => (
    <Card 
      key={index} 
      className="w-[160px] h-auto border-2 bg-[#FBEFED] border-[#949494] rounded-lg flex-shrink-0 p-2 flex flex-col items-center space-y-2">
      
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
{/* about section */}
<div className=' mt-4'>
<div className="mt-8 flex w-full">
  
  <div className="w-full md:w-[60%] md:mr-8 flex flex-col justify-center md:p-4"> 
  <h2 className="text-4xl font-bold w-[55%] mb-4"> تجربة <span className='text-primary'> تسوق</span> لا مثيل لها!
    </h2> 
    <div className={`transition-all duration-500 mr-8 ${isExpanded  ? 'h-auto' : 'h-20 overflow-hidden'}`}>
      <p className=" text-base text-secondary-foreground mt-4">
      علمقاس، نحن نلتزم بتقديم أفضل تجربة تسوق لعملائنا من خلال توفير مجموعة واسعة من الملابس التي تتناسب مع جميع الأذواق والمقاسات. نحن نقدم:
      ملابس بقياسات خاصة تناسب الجميع وتلبي احتياجاتك بكل راحة وأناقة.
      خياطة وفصالة تحت الطلب، حيث نخصص لك الملابس التي تناسب ذوقك وحجمك المثالي.
      توفر الملابس بكميات كبيرة لنوفر لك كل ما تحتاجه بأفضل الأسعار.
      المنتجات الأكثر طلباً تتوفر بأسعار مخفضة، مما يمنحك الفرصة لاقتناء الأفضل دون التأثير على ميزانيتك.
      نحن نعمل باستمرار لتوفير ملابس عالية الجودة بتصاميم عصرية وأسعار مناسبة، مع تقديم خدمة عملاء مميزة لضمان رضاك التام.
      [اسم المتجر] هو وجهتك المثالية للأناقة والتفرد في كل وقت.
      </p>
    </div>
    <p  
      className="hover:cursor-pointer font-bold ml-auto mt-2 text-black text-opacity-40 hover:text-opacity-100 transition-opacity"
      onClick={handleToggle}  
    >
      {isExpanded ? 'اقل' : 'معرفة المزيد'}
    </p>
  </div>
  <div className="w-full md:w-[30%] h-full">
  <Image
      src="/size.png"
      width={300}  // Image width
      height={450}  // Image height
      alt={`صورة `}
    />
  </div>
</div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 ml-auto mt-8">
      <div className='max-w-sm max-h-[400px] md:mb-4'>
            <EmailjsComponent/>
        </div>
        <div className='max-w-sm max-h-[400px] relative'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12566.24907857925!2d-6.759959259507299!3d34.0670622735085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda74201d679d52d%3A0x27a133ec19ffb230!2z2YTYudmK2KfZitiv2KnYjCBTYWzDqQ!5e1!3m2!1sen!2sma!4v1735384364123!5m2!1sen!2sma" width="600" height="450"  loading="lazy" ></iframe>
        <div className='border-2 z-[-1] rotate-12 mt-8 absolute -bottom-20 left-0 border-primary w-[180px] h-[180px] rounded-lg '/>

        </div>
 
      </div>


      {/* footer section */}

      <footer className='w-full mt-16 flex' >
      <div className='w-1/4 '>
        <FacebookIcon className='bg-secondary-foreground text-secondary rounded-full p-1 inline mr-2' width={30} height={30} />
        <YoutubeIcon className='bg-secondary-foreground text-secondary rounded-full p-1 inline mr-2' width={30} height={30} />
        <XIcon className='bg-secondary-foreground text-secondary rounded-full p-1 inline mr-2' width={30} height={30} />
        <PhoneIcon className='bg-secondary-foreground text-secondary rounded-full p-1 inline mr-2' width={30} height={30} />
        </div>
        <div className='w-3/4 h-10 bg-primary/15 rounded-lg'>
        <p className='text-left ml-2 mt-1 underline'>سياسة الخصوصية</p>
        </div>
      </footer>

      <div className="mt-4 pt-4 border-t border-gray-700 text-center text-gray-300">
        <p>جميع الحقوق محفوظة © {new Date().getFullYear()}</p>
      </div>
    </>
  );
}
