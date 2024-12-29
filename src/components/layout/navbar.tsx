'use client';

import { Button } from '@/components/ui/button';
import { Menu, ShoppingCart } from 'lucide-react';
import { Sheet } from '../ui/sheet';
import Link from 'next/link';
import { useState } from 'react';
import { SheetContent, SheetTrigger } from '../ui/sheet';

export function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  

  return (
    <>
    <header>

    <nav className="hidden md:flex shadow-md flex-col sm:flex-row justify-between p-4">
      {/* Left side content */}
      <div className='flex justify-between items-center w-full sm:w-1/6'>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className='bg-primary text-secondary'>
            التسجيل
          </Button>
        </div>
        <Button variant="ghost" className='text-primary underline sm:block hidden'>تسجيل الدخول</Button>  
        <div className='ml-2 relative'>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <ShoppingCart />
        </div>
      </div>

      {/* Center menu items */}
      <ul className="flex flex-col sm:flex-row sm:w-2/6 w-full sm:justify-around items-center mt-4 sm:mt-0">
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

      {/* Store logo */}
      <div className="text-2xl font-bold text-primary mt-4 sm:mt-0">
        <Link href="/">متجر <span className='text-[#F0B70D]'>علمقاس</span></Link>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="sm:hidden flex items-center mt-4">
            <button onClick={toggleMobileMenu} className="text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
    </nav>

      <div className="flex justify-between md:hidden items-center gap-4 m-3">
      
      <div className='flex w-3/5'>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
        </SheetTrigger>
        <SheetContent className="w-60" side="right">

        </SheetContent>
        </Sheet>
      <div className="flex items-center gap-4">
      <Button variant="ghost" className='bg-primary text-secondary'>
        التسجيل
      </Button>
      
      <Button variant="ghost" className='text-primary underline sm:block hidden'>تسجيل الدخول</Button>  
      <div className='ml-2 relative'>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
      </span>
      <ShoppingCart />
      </div>
      </div>
      </div>
      
        <div className="text-xl text-center font-bold text-primary mt-4 sm:mt-0">
      <Link href="/">متجر <span className='text-[#F0B70D]'>علمقاس</span></Link>
      </div>
      </div>
    </header>

    </>

  );
}


