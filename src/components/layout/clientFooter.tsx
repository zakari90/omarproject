import { FacebookIcon, PhoneIcon, XIcon, YoutubeIcon } from 'lucide-react'
import React from 'react'

function ClientFooter() {
  return (
    <>
    <footer className='w-full mt-8 md:mt-16 flex' >
        <div className='w-3/5 md:w-1/4 mt-auto mb-auto'>
        <FacebookIcon className='bg-secondary-foreground text-secondary rounded-full p-1 inline mr-2 mt-2' width={30} height={30} />
        <YoutubeIcon className='bg-secondary-foreground text-secondary rounded-full p-1 inline mr-2 mt-2' width={30} height={30} />
        <XIcon className='bg-secondary-foreground text-secondary rounded-full p-1 inline mr-2 mt-2' width={30} height={30} />
        <PhoneIcon className='bg-secondary-foreground text-secondary rounded-full p-1 inline mr-2 mt-2' width={30} height={30} />
        </div>
        <div className='w-3/4 h-10 bg-primary/15 rounded-lg'>
        <p className='text-left ml-2 mt-1 underline'>سياسة الخصوصية</p>
        </div>
    </footer>

    <div className="mt-4 pt-4 border-t border-gray-700 text-center text-gray-300">
        <p>جميع الحقوق محفوظة © {new Date().getFullYear()}</p>
    </div>
    </>
  )
}

export default ClientFooter