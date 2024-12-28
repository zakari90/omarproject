'use client';

import React, { useState } from 'react'
import { useFormStatus } from 'react-dom';
import emailjs from "@emailjs/browser";
import { MapPinIcon, PhoneCall } from 'lucide-react';

export default function EmailjsComponent() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const templateParams = {
    from_email: email,
    message: message,
  };
  const Emailjs_service_id = process.env.NEXT_PUBLIC_DOMAINE1;
  const Emailjs_template_id = process.env.NEXT_PUBLIC_DOMAINE2;
  const Emailjs_public_key = process.env.NEXT_PUBLIC_DOMAINE3;
  
  const sendEmail = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send(Emailjs_service_id + "",
      Emailjs_template_id + "",
      templateParams, 
      Emailjs_public_key + "")
    .then((response) => {
      console.log('Email sent successfully!', response);
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
}

  return (
    <form onSubmit={sendEmail} className=" space-y-4 w-80  ">
    <div className='flex items-center flex-col space-y-4'>
      <label htmlFor="email" className="sr-only" >Email</label>
        <input
        className='w-full bg-muted-foreground/10 rounded-md p-2'
        placeholder="بريدك الالكتروني"
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />
      <label htmlFor="message" className="sr-only">ارسل</label>
      
        <textarea
          placeholder="...."
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className='w-full h-24 bg-muted-foreground/10 rounded-md p-2'
        />
    
    <SubmitButton />
    </div>
    <p> <MapPinIcon color='#F38160' className='inline'/>   تجزئة الامين، العيايدة، سلا. الرباط</p>
    <p> <PhoneCall color='#F38160' className='inline'/>    هاتف: 971 4 123 4567+
    </p>

  
  </form>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending} className='bg-[#F38160] p-2 rounded-md h-10 w-24 text-secondary'>
      ارسل
    </button>
  );
}
