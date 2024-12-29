import React from 'react'
import EmailjsComponent from './emailjsComponent'

function ContactUsSection() {
  return (
    <div id='contact' className="w-full flex flex-col md:flex-row justify-center content-around gap-8 ml-auto mr-auto mt-8">
   
   {/* <div className='w-5 h-5 bg-black' ></div> */}
    <div className='max-w-sm max-h-[400px] flex justify-center items-center'>
      <EmailjsComponent />
    </div>
    <div className='max-w-sm max-h-[400px] relative flex justify-center items-center'>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12566.24907857925!2d-6.759959259507299!3d34.0670622735085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda74201d679d52d%3A0x27a133ec19ffb230!2z2YTYudmK2KfZitiv2KnYjCBTYWzDqQ!5e1!3m2!1sen!2sma!4v1735384364123!5m2!1sen!2sma" 
        loading="lazy" 
        className="w-full h-full"
      ></iframe>
      <div className='border-2 z-[-1] rotate-12 mt-8 absolute md:-bottom-20 md:left-0 border-primary w-[180px] h-[180px] rounded-lg'/>
    </div>
  </div>
)
}

export default ContactUsSection