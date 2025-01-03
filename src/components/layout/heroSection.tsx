'use client';

import { Card, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, CircleCheck, Search } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function HeroSection() {


  const featuresData = [
    {
      imgSrc: '/wholesale.png',
      title: 'أثمنة مناسبة',
      description: 'توفير الملابس بكميات كبيرة.',
    },
    {
      imgSrc: '/sewing-machine.png',
      title: 'أثمنة مناسبة',
      description: 'المنتوجات الاكثر طلبا تتوفر بثمن اقل.',
    },
    {
      imgSrc: '/fabric-pattern.png',
      title: 'فصالة و خياطة',
      description: 'فصالة و خياطة تحت الطلب. ',
    },
    {
      imgSrc: '/pattern.png',
      title: 'قياسات خاصة',
      description: 'توفير ملابس بقياسات خاصة.',
    },
  ];

  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = async () => {
    if (!searchTerm) return;
    const queryParams = new URLSearchParams();
    queryParams.set('location', searchTerm.toLocaleLowerCase());     
    // router.push(`/search-results?${queryParams.toString()}`);
};
  return (
    <>
    <main id='hero' className=" overflow-hidden">
      <section className='h-screen relative'>     
        <div className='w-full h-3/5 border-2  flex flex-col-reverse md:flex md:flex-row justify-around'>
          <div className=' z-[2] bg-white bg-opacity-50 mr-auto ml-auto border-2 md:w-1/2 flex flex-col justify-center '>
          <h2 className="text-2xl md:text-4xl font-bold lg:w-[55%]">استمتع بتجربة <span className='text-primary'> تسوق</span> لا مثيل لها!
          </h2>
          <p className=" md:block text-base text-secondary-foreground mt-6 mr-6 w-[80%] ">سواء كنت تبحث عن إطلالة رسمية أو كاجوال، لدينا كل ما تحتاجه لتكون دائماً في أفضل حال.</p>
          <div className="flex w-4/5 mr-auto ml-auto h-9 lg:w-3/5 border-2 border-primary rounded-lg mt-4 ">
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
                      <ArrowLeft  size={16} strokeWidth={2} aria-hidden="true" /> :
                      <Search size={16} strokeWidth={2} aria-hidden="true" />
                  }
              </button>
              <Input
                  className="w-full h-full p-2"
                  placeholder="اسم المنتج"
                  type="text"
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)}
              />
        </div>
          <div className='hidden md:flex ml-auto mr-auto gap-4 text-secondary-foreground/80 sm:mt-10 mt-6'>
            <div className='flex flex-col sm:gap-8'>
            <p><CircleCheck fill='#F0B70D' className='text-secondary inline'/> ملابس عالية الجودة </p>
            <p><CircleCheck fill='#F0B70D' className='text-secondary inline'/> تصاميم فريدة وعصرية</p>
            </div>

            <div className='flex flex-col sm:gap-8'>

            <p><CircleCheck fill='#F0B70D' className='text-secondary inline'/> أسعار تنافسية</p>
            <p><CircleCheck fill='#F0B70D' className='text-secondary inline'/> خدمة عملاء مميزة </p>
            </div>

          </div>
          </div>
          <div className=' mr-auto ml-auto md:mt-8 md:w-1/2 flex  '>
          <div className=' md:mt-8 md:w-3/4 relative top-7 '>
            <div className=' border-2 z-[-1] -rotate-45 md:mt-8 absolute top-9 right-16 border-[#F0B810] w-[200px] h-[230px] rounded-lg '/>
            <div className=' border-2 z-[-1] rotate-12 md:mt-8 absolute top-[100px] right-32 border-primary w-[90px] h-[90px] rounded-lg '/>
            <div className='w-full h-full lg:mt-4 relative top-7'>
              <Image 
                src='/banner2.png'
                width={800} height={800} 
                alt='banner'
                layout='responsive' 
                className='z-[1] scale-150 sm:scale-1 mt-2 w-full h-full object-cover rounded-lg '
              />
            </div>
          </div>
          <div className=' md:mt-4 md:w-1/4 flex flex-col gap-4 h-full justify-between md:justify-around'> 
            <Card className="w-[100px] h-[120px]  bg-[#FBEFED] border-[#949494] rounded-lg mx-auto p-2">
              <div className='bg-white rounded-lg'>
                <Image
                  src={`/banner3.png`}
                  width={100}  // Image width
                  height={60}  
                  alt={`صورة العقار`}
                />
              </div>
              <CardFooter className="text-xs text-center">
                نساء
              </CardFooter>
            </Card>
            <Card className="w-[100px] h-[120px] border-[#949494] rounded-lg mx-auto p-2">
              <div className='bg-white rounded-lg'>
                <Image
                  src={`/banner1.png`}
                  width={100}  // Image width
                  height={60}  // Image height
                  alt={`صورة العقار`}
                />
              </div>
              <CardFooter className="text-xs text-center">
              رجال
              </CardFooter>
            </Card>
          </div>
          </div>
        </div>
        <div className='w-full md:h-2/5 gap-3 pt-2 bg-primary/5 bg-opacity-50 backdrop-blur-sm border-2 flex flex-wrap justify-around rounded-lg shadow-lg absolute bottom-0'>
        
          {featuresData.map((card, index) => (
            <Card key={index} className=" mt-auto mb-auto text-center w-[150px] h-[150px] mx-auto p-2 flex flex-col justify-center items-center">
              <Image
                src={card.imgSrc}
                width={40}
                height={40}
                alt={`صورة ${card.title}`}
                className="mx-auto"
              />
              <div className="hidden sm:block text-sm mt-2">
                {card.title}
              </div>
              <div className="text-xs text-secondary-foreground/80 mt-1">
                {card.description}
              </div>
            </Card>
          ))}
        </div> 
      </section>
    </main>


    </>
  );
}
