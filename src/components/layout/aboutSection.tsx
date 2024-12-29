"use client"
import Image from 'next/image';
import React, { useState } from 'react'

function AboutSection() {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleToggle = () => {
      setIsExpanded((prev) => !prev);
    };
  return (

  <div id='about' className="flex flex-col md:flex-row w-full">
    <div className="w-full md:w-[60%] md:mr-8 flex flex-col md:justify-center pr-4 pl-4"> 
    <h2 className="text-2xl md:text-4xl font-bold md:w-[55%] mb-4"> تجربة <span className='text-primary'> تسوق</span> لا مثيل لها!
      </h2> 
      <div className={`transition-all duration-500 md:mr-8 ${isExpanded  ? 'h-auto' : 'h-20 overflow-hidden'}`}>
        <p className=" text-base text-secondary-foreground md:mt-4">
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

  )
}

export default AboutSection