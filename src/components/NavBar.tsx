"use client";
import React, { useRef, useEffect, useState } from 'react';

const NAV_ITEMS = [
  { label: 'About me', href: '#about-me' },
  { label: 'Eclipse', href: '#eclipse', isComingSoon: true },
  { label: 'Coming soon...', href: '#coming-soon', isComingSoon: true }
];

export default function NavBar() {
  const navRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      const { top } = navRef.current.getBoundingClientRect();
      const nowSticky = top <= 24;
      if (nowSticky && !isSticky) {
        setIsSticky(true);
      } else if (!nowSticky && isSticky) {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line
  }, [isSticky]);

  return (
    <div
      ref={navRef}
      className={`relative transition-all duration-300 mt-6 sticky top-4 z-50 flex justify-center gap-2 nav-width-responsive ${isSticky ? 'nav-glassy-rounded' : 'nav-plain'}`}
    >
      {NAV_ITEMS.map((item) => (
        item.isComingSoon ? (
          <a
            key={item.label}
            href={item.href}
            className="px-2 py-1 text-xs font-bold hover:bg-neutral-100 transition-colors font-zalando nav-link-hover tracking-wide"
            style={{ fontFamily: 'Zalando Sans Expanded, sans-serif', fontWeight: 800, letterSpacing: '0.01em', color: '#1A1813' }}
          >
            {item.label}
          </a>
        ) : (
          <a
            key={item.label}
            href={item.href}
            className="px-2 py-1 text-xs font-medium hover:bg-neutral-100 transition-colors font-zalando nav-link-hover"
            style={{ color: '#1A1813' }}
          >
            {item.label}
          </a>
        )
      ))}
    </div>
  );
}
