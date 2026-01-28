"use client";
import React from 'react';

const NAV_ITEMS = [
  { label: 'About me', href: '#about-me' },
  { label: 'Eclipse', href: '#eclipse', isComingSoon: true },
  { label: 'Coming soon...', href: '#coming-soon', isComingSoon: true }
];

export default function NavBar() {


  return (
    <div
      className="relative mt-6 sticky top-4 z-50 flex justify-center gap-2 nav-width-responsive nav-plain"
    >
      {NAV_ITEMS.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={
            `px-2 py-1 text-xs font-zalando nav-link-hover tracking-wide nav-breathing-hover` +
            (item.isComingSoon ? ' font-bold' : ' font-medium')
          }
          style={{
            fontFamily: item.isComingSoon ? 'Zalando Sans Expanded, sans-serif' : undefined,
            fontWeight: item.isComingSoon ? 800 : undefined,
            letterSpacing: '0.01em',
            color: '#1A1813',
          }}
        >
          {Array.from(item.label).map((char, i) => (
            <span
              key={i}
              className="nav-breathing-letter"
              style={{
                display: 'inline-block',
                animationDelay: `calc(var(--nav-breathing-hover, 0) * ${i * 0.08}s)`
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </a>
      ))}
    </div>
  );
}
