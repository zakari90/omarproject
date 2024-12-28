'use client';

import { Button } from '@/components/ui/button';
// import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export function NavBar() {

  return (
      <nav className="shadow-md py-4 px-6 flex justify-between">
        
      <div className='w-1/6 flex justify-around items-center'>
      <div className="flex items-center gap-4">
          {/* <SignedIn>
           
            <UserButton afterSignOutUrl="/" > */}
            <div className='ml-2 '>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <ShoppingCart  />
        </div>
            {/* </UserButton>
          </SignedIn>
          <SignedOut>
              <SignInButton > */}
        <Button variant="ghost" className='bg-primary text-secondary' >
                التسجيل
            </Button>
                
          {/* </SignInButton>
          </SignedOut> */}
        </div>
        <Button variant="ghost" className='text-primary underline' >  تسجيل الدخول</Button>  
        <div className='ml-2 '>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <ShoppingCart  />
        </div>
        </div>     
      <ul className="w-2/6 flex justify-around items-center">
              <li>
                <Link
                  href="/about"
                  className="block px-4 py-2 text-primary hover:bg-gray-100"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block px-4 py-2 text-secondary-foreground hover:bg-gray-100"
                >
                  تواصل معنا
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block px-4 py-2 text-secondary-foreground hover:bg-gray-100"
                >
                نبذة عنا
                </Link>
              </li>
              <li>
  <Link
    href="/contact"
className="block px-4 py-2 text-secondary-foreground underline underline-offset-2 underline-[20px] decoration-primary decoration-2"  
>
    التصنيفات
  </Link>
</li>

            </ul>
      <div className="text-2xl font-bold text-primary">
        <Link href="/">متجر <span className='text-[#F0B70D]'>علمقاس</span></Link>
      </div>      
    </nav>
  );
}