import { PropsWithChildren } from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import Navbar from '@/components/Navbar';

export default function layout({ children }: PropsWithChildren) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <main className='h-full'>
        <Navbar />

        {children}
      </main>
    </ClerkProvider>
  );
}
