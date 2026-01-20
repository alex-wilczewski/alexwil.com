'use client'


import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const navRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [justBecameSticky, setJustBecameSticky] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      if (!navRef.current) return;
      const { top } = navRef.current.getBoundingClientRect();
      const nowSticky = top <= 24;
      if (nowSticky && !isSticky) {
        setIsSticky(true);
        setJustBecameSticky(true);
        timeout = setTimeout(() => setJustBecameSticky(false), 500);
      } else if (!nowSticky && isSticky) {
        setIsSticky(false);
        setJustBecameSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeout) clearTimeout(timeout);
    };
    // eslint-disable-next-line
  }, [isSticky]);

  return (
    <main className="min-h-screen bg-[#fafaf8]">
      {/* Hero/Profile Section */}
      <section className="flex flex-col items-center w-full max-w-3xl mx-auto my-16 hero-section-responsive">
        <div className="flex flex-row items-center justify-center gap-8 w-full hero-inner-responsive">
          <img
            src="/alex-profile.png"
            alt="Alex Wilczewski profile"
            width={160}
            height={160}
            className="rounded-full border-4 border-neutral-200 shadow-md bg-white hero-img-responsive"
            style={{ objectFit: 'cover' }}
          />
          <div className="flex flex-col items-start justify-center text-left font-body hero-content-responsive">
            <h1 className="text-2xl font-extrabold mb-0.5 font-zalando hero-title-responsive">Alex Wilczewski</h1>
            <p className="text-neutral-700 mb-1 hero-role-responsive">Design Engineer & Creative</p>
            <p className="text-neutral-500 mb-2 flex items-center gap-0.5 font-light hero-location-responsive">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline-block text-neutral-400"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21c.684 0 6-5.373 6-10.125A6 6 0 0 0 6 10.875C6 15.627 11.316 21 12 21Z"/><circle cx="12" cy="10.875" r="2.25"/></svg>
              Just outside NYC
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div
        ref={navRef}
        className={`relative transition-all duration-300 mt-6 sticky top-4 z-50 flex justify-center gap-2 nav-width-responsive ${isSticky ? 'nav-glassy-rounded' : 'nav-plain'}`}
      >
        {[
          { label: 'About me', href: '#about-me' },
          { label: 'Coming Soon...', href: '#eclipse' }
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="px-2 py-1 text-xs font-medium text-neutral-700 hover:bg-neutral-100 transition-colors font-zalando nav-link-hover"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Main Grid Container - fixed width, centered, horizontal scroll on small screens */}
      <div className="w-full overflow-x-auto">
        <div className="w-[1160px] mx-auto px-0">
        
        {/* ==================== ABOUT ME SECTION ==================== */}
        <section id="about-me" className="py-8" style={{ scrollMarginTop: '80px' }}>
          {/* Fixed pixel grid: 10 columns of 107px each + 9 gaps of 10px = 1160px */}
          <div className="about-grid">
            
            {/* ROW 1 */}
            {/* Folder Card - cols 1-3 (341px), row 1 */}
            <div 
              className="card-folder relative"
            >
              {/* Desktop Folder Image */}
              <img 
                src="/assets/desktop-folder-card.png" 
                alt="About Me Folder Card Desktop" 
                className="folder-desktop"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', display: 'block' }}
              />
              {/* Tablet Folder Image */}
              <img 
                src="/assets/tablet-folder-card.png" 
                alt="About Me Folder Card Tablet" 
                className="folder-tablet"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', display: 'block' }}
              />
              {/* Mobile Folder Image - only render on mobile */}
              <img 
                src="/assets/mobile-folder-card.png" 
                alt="About Me Folder Card Mobile" 
                className="folder-mobile"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', display: 'block' }}
              />
              <span 
                className="absolute text-sm font-bold px-4 py-2 font-zalando"
                style={{ 
                  backgroundColor: '#E7FE96',
                  color: '#1A1813',
                  borderRadius: '11px',
                  bottom: '12px',
                  right: '12px'
                }}
              >
                About me
              </span>
            </div>

            {/* Head of Brand / Current Role - cols 4-5 (224px), row 1 */}
            <div 
              className="card-current-role bg-[#E9E9FC] border border-neutral-200 rounded-[16px] relative"
            >
              <h3 
                className="card-title font-bold leading-tight font-zalando-semi"
                style={{ color: '#1A1813', padding: '20px 20px 0 20px' }}
              >
                Head of Brand + Creative Lead
              </h3>
              <p 
                className="card-bottom-left font-body absolute"
                style={{ color: '#1A1813', left: '18px', bottom: '16px' }}
              >
                Current Role
              </p>
              <img 
                src="/assets/eclipse-favicon.png" 
                alt="Eclipse Favicon" 
                className="eclipse-favicon-desktop absolute"
                style={{ width: '62px', height: '62px', right: '20px', bottom: '20px', display: 'block' }}
              />
              <img 
                src="/assets/eclipse-favicon.png" 
                alt="Eclipse Favicon" 
                className="eclipse-favicon-mobile absolute"
                style={{ width: '42px', height: '42px', right: '14px', bottom: '14px', display: 'none' }}
              />
            </div>

            {/* Purple Bio / SUNY Purchase - cols 6-7 (224px), row 1 */}
            <div 
              className="card-purchase bg-[#462372] rounded-[16px] relative text-white p-[20px]"
            >
              <p className="font-body" style={{ lineHeight: '1.4', fontSize: '16px' }}>
                I'm currently studying to receive my Bachelor of Arts in New Media.
              </p>
              <p 
                className="card-bottom-left font-body absolute"
                style={{ color: 'white', left: '18px', bottom: '16px' }}
              >
                SUNY Purchase BFA
              </p>
            </div>

            {/* Video Games / Web Zine - cols 8-10 (341px), rows 1-2 */}
            <div 
              className="card-webzine rounded-[16px] overflow-hidden relative"
            >
              <img 
                src="/assets/controller-bitmap-desktop.png" 
                alt="Video Games: My Life's Story" 
                className="zine-desktop" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
              />
              <img 
                src="/assets/controller-bitmap-tablet.png" 
                alt="Video Games: My Life's Story" 
                className="zine-tablet" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
              />
              <img 
                src="/assets/controller-bitmap-mobile.png" 
                alt="Video Games: My Life's Story" 
                className="zine-mobile" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
              />
              <a 
                href="https://www.are.na/block/41506452"
                target="_blank"
                rel="noopener noreferrer"
                className="card-bottom-left zine-link-desktop font-body absolute underline"
                style={{ left: '18px', bottom: '16px', color: '#2A6670', display: 'block' }}
              >
                Personal Web Zine ↗
              </a>
            </div>

            {/* ROW 2 */}
            {/* Mockup / Identity Exploration - cols 1-2 (224px), rows 2-3 */}
            <div 
              className="card-mockup rounded-[16px] overflow-hidden relative"
            >
              <img 
                src="/assets/poster-mockup-final.png" 
                alt="Brand Identity v1, Mockup" 
                className="w-full h-full object-cover"
              />
              <p className="card-bottom-left font-body absolute" style={{ color: 'white', left: '18px', bottom: '16px' }}>
                Brand Identity v1, Mockup
              </p>
            </div>

            {/* Personal Brand Mark - cols 3-4 (224px), row 2 */}
            <div 
              className="card-brandmark bg-[#960806] rounded-[16px] relative flex items-center justify-center"
            >
              <img 
                src="/assets/personal-brand-mark.svg" 
                alt="Personal Brand Mark" 
                style={{ width: '175px', height: 'auto' }}
              />
              <p 
                className="card-bottom-left font-body absolute"
                style={{ color: 'white', left: '18px', bottom: '16px' }}
              >
                Personal Brand Mark
              </p>
            </div>

            {/* What inspires me / Mission Statement - cols 5-7 (341px), row 2 */}
            <div 
              className="card-mission bg-[#E8F5E9] rounded-[16px] relative p-[20px]"
            >
              <h4 className="card-title font-bold text-neutral-900 leading-tight font-zalando">What inspires me?</h4>
              <p className="card-body font-body mt-2" style={{ lineHeight: '1.4', color: '#1A1813' }}>
                Great question! Growing up I always asked myself the question; Why? This question drives me still, designing with intent.
              </p>
              <p 
                className="card-bottom-left font-body absolute"
                style={{ color: '#1A1813', left: '18px', bottom: '16px' }}
              >
                Mission Statement
              </p>
            </div>

            {/* ROW 3 */}
            {/* I love supporting great causes - cols 3-6 (458px), row 3 */}
            <div 
              className="card-causes bg-[#1B4D3E] rounded-[16px] relative p-[20px]"
            >
              <h4 className="card-title text-white font-bold leading-tight font-zalando" style={{ fontSize: '16px' }}>I love supporting great causes</h4>
              <p className="card-body font-body mt-2" style={{ lineHeight: '1.4', color: 'rgba(255, 255, 255, 0.8)' }}>
                In 2017, my class's initiative won the Lead2Feed fundraising challenge! Our initiative helped create wells in South-Sudan to support the water crisis, this was my first logo design project.
              </p>
              <a 
                href="https://patch.com/new-york/portchester/port-chester-students-donate-funds-build-wells-south-sudan"
                target="_blank"
                rel="noopener noreferrer"
                className="card-bottom-left font-body absolute underline"
                style={{ left: '18px', bottom: '16px', color: 'white' }}
              >
                Read the news article ↗
              </a>
            </div>

            {/* Apple Specialist - cols 7-8 (224px), row 3 */}
            <div 
              className="card-apple bg-[#F5F5F5] rounded-[16px] relative"
            >
              <img 
                src="/assets/apple-logo.svg" 
                alt="Apple" 
                className="absolute"
                style={{ top: '20px', right: '20px', width: '40px', height: '48px' }}
              />
              <span 
                className="card-bottom-left font-body absolute"
                style={{ left: '18px', bottom: '16px', color: '#1A1813' }}
              >
                Former Apple Specialist
              </span>
            </div>

            {/* Check out my other projects - cols 9-10 (224px), row 3 */}
            <div 
              className="card-projects rounded-[16px] relative bg-[#D4F979] p-[20px]"
            >
              <h4 className="card-title font-bold text-neutral-900 leading-tight font-zalando project-title-desktop">Check out my other work →</h4>
              <h4 className="card-title font-bold text-neutral-900 leading-tight font-zalando project-title-mobile" style={{ display: 'none' }}>Check out my other work →</h4>
              <p className="card-body font-body mt-2 project-body-desktop" style={{ lineHeight: '1.4', color: '#525252' }}>
                Discover some of the work I produced during Fall 2025.
                <span className="projects-tablet-text"> Both my Digital Design and Media Studies courses were incredibly insightful in my design process. I was even inspired by my Art Survey I course!</span>
              </p>
              <p className="card-body font-body mt-2 project-body-mobile" style={{ lineHeight: '1.4', color: '#525252', display: 'none' }}>
                Discover some of the work I produced during Fall 2025.
              </p>
              <a 
                href="https://www.are.na/alex-wilczewski/channels"
                target="_blank"
                rel="noopener noreferrer"
                className="card-bottom-left font-body absolute underline"
                style={{ left: '18px', bottom: '16px', color: '#1A1813' }}
              >
                Learn more ↗
              </a>
            </div>

          </div>
        </section>

        {/* ==================== ECLIPSE SECTION ==================== */}
        <section
          id="eclipse"
          className="flex flex-col items-center justify-center"
          style={{
            scrollMarginTop: '80px',
            marginTop: '16px', // closer to About Me
            marginBottom: '16px', // closer to footer
            minHeight: '120px', // still enough for breathing effect
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%'
            }}
          >
            <span
              className="eclipse-breathing-wave font-zalando"
              style={{
                fontFamily: 'ZalandoSans-Expanded, sans-serif',
                fontSize: '32px',
                fontWeight: 700,
                color: '#1A1813',
                letterSpacing: '0.01em',
                textAlign: 'center',
                display: 'block'
              }}
            >
              {Array.from('Coming soon...').map((char, i) => (
                <span
                  key={i}
                  className="eclipse-breathing-letter"
                  style={{
                    display: 'inline-block',
                    animationDelay: `${i * 0.08}s`
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </div>
        </section>



      </div>
      </div>
    </main>
  );
}
