import Link from 'next/link';
import Image from 'next/image';
import { Check } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import { pricingCards } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export default function Home() {
  return (
    <main className='h-full'>
      <Navbar />

      <div>
        <section className='h-full w-full md:pt-44 mt-[-70px] relative flex items-center justify-center flex-col'>
          <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10' />

          <p className='text-center'>Run your agency, in one place</p>
          <div className='bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative'>
            <h1 className='text-9xl font-bold text-center md:text-[300px]'>
              Plura
            </h1>
          </div>
          <div className='flex justify-center items-center relative md:mt-[-70px]'>
            <Image
              src='/assets/preview.png'
              alt='banner image'
              height={1000}
              width={1000}
              className='rounded-tl-2xl rounded-tr-2xl border-2 border-muted'
            />
            <div className='bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10' />
          </div>
        </section>

        <section className='flex justify-center items-center flex-col gap-4 md:!mt-20 pb-8'>
          <h2 className='text-4xl text-center'>Choose what fits you right</h2>
          <p className='text-muted-foreground text-center'>
            Our straightforward pricing plans are tailored to meet your needs.
            If you&apos;re not <br />
            ready to commit you can get started for free.
          </p>
          <div className='flex justify-center gap-4 flex-wrap mt-6'>
            {pricingCards.map((card) => (
              <Card
                key={card.title}
                className={cn(
                  'flex flex-col justify-between w-80',
                  card.isRecommended && 'border-2 border-primary'
                )}
              >
                <CardHeader>
                  <CardTitle
                    className={cn(
                      !card.isRecommended && 'text-muted-foreground'
                    )}
                  >
                    {card.title}
                  </CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className='text-4xl font-bold'>{card.price}</span>
                  <span className='text-muted-foreground'>/m</span>
                </CardContent>
                <CardFooter className='flex flex-col items-start gap-4'>
                  <div>
                    {card.features.map((feature) => (
                      <div key={feature} className='flex items-center gap-2'>
                        <Check className='text-muted-foreground h-4' />
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/agency?plan=${card.priceId}`}
                    className={buttonVariants({
                      className: cn(
                        'w-full',
                        !card.isRecommended && '!bg-muted-foreground'
                      ),
                    })}
                  >
                    Get Started
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
