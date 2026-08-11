'use client';

import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

interface LottieIconProps {
  src: string; // e.g. "boiler.json" or "plumbing.json"
  className?: string;
}

export default function LottieIcon({ src, className = "w-12 h-12" }: LottieIconProps) {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    let isMounted = true;
    fetch(`/${src}`)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) setAnimationData(data);
      })
      .catch((err) => console.error(`Error loading Lottie animation /${src}:`, err));

    return () => {
      isMounted = false;
    };
  }, [src]);

  if (!animationData) {
    return <div className={`${className} bg-white/5 animate-pulse rounded-24`} />;
  }

  return (
    <div className={className}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
