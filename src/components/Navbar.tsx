import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { UserButton } from '@clerk/nextjs';
import { ModeToggle } from './ModeToggle';

export default function Navbar() {
  return (
    <div className='fixed left-0 right-0 top-0 p-4 z-10 flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <Image
          src='assets/plura-logo.svg'
          width={40}
          height={40}
          alt='plura logo'
        />
        <span className='text-xl font-bold'> Plura.</span>
      </div>

      <nav className='hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]'>
        <ul className='flex items-center justify-center gap-8'>
          <li>
            <Link href='#'>Pricing</Link>
          </li>
          <li>
            <Link href='#'>About</Link>
          </li>
          <li>
            <Link href='#'>Documentation</Link>
          </li>
          <li>
            <Link href='#'>Features</Link>
          </li>
        </ul>
      </nav>

      <div className='flex items-center gap-x-2'>
        <Link href='/agency' className={buttonVariants({ className: 'h-9' })}>
          Login
        </Link>
        <UserButton />
        <ModeToggle />
      </div>
    </div>
  );
}
