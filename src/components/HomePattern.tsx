'use client';

import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

export default function HomePattern() {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        'absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10',
        theme !== 'dark' && 'hidden'
      )}
    />
  );
}
