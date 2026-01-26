{/* Card 1: Top left, 268x184 */}
                <div
                  className="eclipse-mobile-card eclipse-mobile-card-1"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '268px',
                    height: '184px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    color: '#fff',
                                fontWeight: 600
                              }}
                >
                  Card 1
                </div>
                {/* Card 3: 10px below Card 1, 179x183 */}
                <div
                  className="eclipse-mobile-card eclipse-mobile-card-3"
                  style={{
                    position: 'absolute',
                    top: '194px', // 184 + 10
                    left: 0,
                    width: '179px',
                    height: '183px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    color: '#fff',
                    fontWeight: 600
                  }}
                >
                  Card 3
                </div>
                {/* Card 4: 10px to the right of Card 3, 179x183 */}
                <div
                  className="eclipse-mobile-card eclipse-mobile-card-4"
                  style={{
                    position: 'absolute',
                    top: '194px',
                    left: '189px', // 179 + 10
                    width: '179px',
                    height: '183px',
                    background: '#FFFEFC',
                    border: '1px solid #E6E5E1',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    display: 'block',
                  }}
                  >
                    <a
                      href="https://eclipse-color-sheet.alexwil.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        position: 'absolute',
                        left: '14px',
                        bottom: '10px',
                        fontFamily: 'Zalando Sans Regular, sans-serif',
                        fontSize: '10px',
                        color: '#1A1813',
                        lineHeight: 1,
                        letterSpacing: 0,
                        fontWeight: 400,
                        background: 'transparent',
                        padding: 0,
                        margin: 0,
                        zIndex: 2,
                        textDecoration: 'underline',
                        textUnderlineOffset: '2px',
                        cursor: 'pointer',
                        display: 'block',
                      }}
                    >
                      Brand Color Sheet
                    </a>
                  </div>
                {/* Card 6: 10px to the right of Card 5, 179x183 */}
                <div
                  className="eclipse-mobile-card eclipse-mobile-card-6"
                  style={{
                    position: 'absolute',
                    top: '387px',
                    left: '189px', // 179 + 10
                    width: '179px',
                    height: '183px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    color: '#fff',
                    fontWeight: 600
                  }}
                >
                  Card 6
                </div>
                {/* Card 7: 10px to the bottom of Card 5, 179x183 */}
                <div
                  className="eclipse-mobile-card eclipse-mobile-card-7"
                  style={{
                    position: 'absolute',
                    top: '580px',
                    left: '0px',
                    width: '368px',
                    height: '569px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    color: '#fff',
                    fontWeight: 600
                  }}
                >
                  Card 7
                </div>
                {/* Card 8: 10px to the bottom of Card 7, 179x183 */}
                <div
                  className="eclipse-mobile-card eclipse-mobile-card-8"
                  style={{
                    position: 'absolute',
                    top: '1159px',
                    left: '0px',
                    width: '368px',
                    height: '183px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    color: '#fff',
                    fontWeight: 600
                  }}
                >
                  Card 8
                </div>
                {/* Card 9: 10px to the bottom of Card 8, 179x183 */}
                <div
                  className="eclipse-mobile-card eclipse-mobile-card-9"
                  style={{
                    position: 'absolute',
                    top: '1352px',
                    left: '0px',
                    width: '368px',
                    height: '183px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    color: '#fff',
                    fontWeight: 600
                  }}
                >
                  Card 9
                </div>



import NavBar from '../components/NavBar';

export default function Home() {

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
            className="rounded-full border-4 border-neutral-200 bg-white hero-img-responsive"
            style={{ objectFit: 'cover' }}
          />
          <div className="flex flex-col items-start justify-center text-left font-body hero-content-responsive">
            <h1 className="text-2xl font-extrabold mb-0.5 font-zalando hero-title-responsive" style={{ color: '#1A1813' }}>Alex Wilczewski</h1>
            <p className="mb-1 hero-role-responsive" style={{ color: '#1A1813' }}>Design Engineer & Creative</p>
            <p className="text-neutral-500 mb-2 flex items-center gap-0.5 font-light hero-location-responsive">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline-block text-neutral-400"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21c.684 0 6-5.373 6-10.125A6 6 0 0 0 6 10.875C6 15.627 11.316 21 12 21Z"/><circle cx="12" cy="10.875" r="2.25"/></svg>
              Just outside NYC
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <NavBar />

      {/* Main Grid Container - fixed width, centered */}
      <div className="w-full">
        <div className="max-w-[1160px] w-full mx-auto px-0">
        {/* ==================== ABOUT ME SECTION ==================== */}
  <section id="about-me" className="py-8 about-me-scroll-margin">
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
              {/* Tablet Folder Image - hidden on desktop, visible on tablet only */}
              <img 
                src="/assets/tablet-folder-card.png" 
                alt="About Me Folder Card Tablet" 
                className="folder-tablet"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', display: 'block', display: 'none' }}
                /* Tablet only: override with media query */
              />
              {/* Mobile Folder Image - hidden on desktop/tablet, visible on mobile only */}
              <img 
                src="/assets/mobile-folder-card.png" 
                alt="About Me Folder Card Mobile" 
                className="folder-mobile"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', display: 'none' }}
                /* Mobile only: override with media query */
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
                className="card-title font-bold leading-tight"
                style={{ color: '#1A1813', padding: '20px 20px 0 20px', fontFamily: 'Zalando Sans Expanded, sans-serif' }}
              >
                Creative Leadership
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
                SUNY Purchase BA
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
                Personal Web Zine
              </a>
            </div>

            {/* ROW 2 */}
            {/* Mockup / Identity Exploration - cols 1-2 (224px), rows 2-3 */}
            <div 
              className="card-mockup rounded-[16px] overflow-hidden relative"
            >
              <link rel="preload" as="image" href="/assets/identity-mockup.webp" />
              <img 
                src="/assets/identity-mockup.webp" 
                alt="Brand Identity v1, Mockup" 
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
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
              className="card-mission bg-[#E8F5E9] border border-neutral-200 rounded-[16px] relative p-[20px]"
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
              className="card-causes bg-[#1B4D3E] border border-neutral-200 rounded-[16px] relative p-[20px]"
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
                Read the article
              </a>
            </div>

            {/* Apple Specialist - cols 7-8 (224px), row 3 */}
            <div 
              className="card-apple bg-[#F5F5F5] border border-neutral-200 rounded-[16px] relative"
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
              className="card-projects border border-neutral-200 rounded-[16px] relative bg-[#D4F979] p-[20px]"
            >
              <h4 className="card-title font-bold text-neutral-900 leading-tight font-zalando project-title-desktop">Check out my other work →</h4>
              <p className="card-body font-body mt-2 project-body-desktop" style={{ lineHeight: '1.4', color: '#525252' }}>
                Discover some of the work I produced during Fall 2025. <span className="projects-tablet-extra" style={{ display: 'none' }}>
                  Both my Digital Design and Media Studies courses were incredibly insightful in my design process. I was even inspired by my Art Survey I course!
                </span>
              </p>
              <a 
                href="https://www.are.na/alex-wilczewski/channels"
                target="_blank"
                rel="noopener noreferrer"
                className="card-bottom-left font-body absolute underline"
                style={{ left: '18px', bottom: '16px', color: '#1A1813' }}
              >
                Learn more
              </a>
            </div>

          </div>
        </section>


        {/* ==================== COMING SOON SECTION ==================== */}
        {/* Section moved below eclipse */}

        {/* ==================== ECLIPSE SECTION ==================== */}
        <section
          id="eclipse"
          className="py-8 eclipse-scroll-margin"
          style={{ paddingBottom: '32px' }}
        >
          <div className="eclipse-grid" style={{ position: 'relative', width: '1160px', height: '1178px', margin: '0 auto' }}>
            {/* Mobile breakpoint grid (visible <=799px) - pixel perfect layout */}
            <div className="block max-[799px]:block min-[800px]:hidden">
              <div className="eclipse-mobile-grid mobile-bento-align" style={{ position: 'relative', height: '1537px' }}>
                {/* Card 1: Top left, 268x184 */}
                <div
                  className="eclipse-mobile-card eclipse-mobile-card-1"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '268px',
                    height: '184px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    padding: 0,
                    margin: 0,
                    display: 'block',
                    background: 'transparent',
                    boxShadow: 'none',
                  }}
                >
                  <img
                    src="/assets/mobile-folder-card.png"
                    alt="Mobile Folder Card"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      borderRadius: '16px',
                    }}
                  />
                </div>
                {/* Card 2: 10px right of Card 1, 90x184 */}
                <div
                  className="eclipse-mobile-card eclipse-mobile-card-2"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '278px', // 268 + 10
                    width: '90px',
                    height: '184px',
                    background: '#FCF9F2',
                    borderColor: '#E6E5E1',
                    borderWidth: '1px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    color: '#fff',
                    fontWeight: 600
                  }}
                >
                  <img
                    src="/assets/night-horizon-graphic.png"
                    alt="Night Horizon Graphic"
                    style={{
                      maxWidth: '50%',
                      maxHeight: '50%',
                      objectFit: 'contain',
                      display: 'block',
                      margin: '0 auto',
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      left: '14px',
                      bottom: '10px',
                      fontFamily: 'Zalando Sans Regular, sans-serif',
                      fontSize: '10px',
                      color: '#1A1813',
                      lineHeight: 1,
                      letterSpacing: 0,
                      fontWeight: 400,
                      background: 'transparent',
                      padding: 0,
                      margin: 0,
                      zIndex: 2,
                    }}
                  >
                    Night Graphic
                  </span>
                </div>
                {/* Card 3: 10px below Card 1, 179x183 */}
                <div
                  className="eclipse-mobile-card eclipse-mobile-card-3"
                  style={{
                    position: 'absolute',
                    top: '194px', // 184 + 10
                    left: 0,
                    width: '179px',
                    height: '183px',
                    background: '#E9E9FC',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    color: '#fff',
                    fontWeight: 600
                  }}
                >
                  <img
                    src="/assets/eclipse-favicon.png"
                    alt="Eclipse Favicon"
                    style={{
                      width: '62px',
                      height: '62px',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      left: '14px',
                      bottom: '10px',
                      fontFamily: 'Zalando Sans Regular, sans-serif',
                      fontSize: '10px',
                      color: '#1A1813',
                      lineHeight: 1,
                      letterSpacing: 0,
                      fontWeight: 400,
                      background: 'transparent',
                      padding: 0,
                      margin: 0,
                      zIndex: 2,
                    }}
                  >
                    Eclipse Favicon
                  </span>
                </div>
                {/* Card 4: 10px to the right of Card 3, 179x183 */}
                <div
                  className="eclipse-mobile-card eclipse-mobile-card-4"
                  style={{
                    position: 'absolute',
                    top: '194px',
                    left: '189px', // 179 + 10
                    width: '179px',
                    height: '183px',
                    background: '#FFFEFC',
                    border: '1px solid #E6E5E1',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    display: 'block',
                  }}
                >
                  <img
                    src="/assets/color-sheet-preview.svg"
                    alt="Color Sheet Preview"
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      right: '12px',
                      width: 'calc(100% - 24px)',
                      height: 'auto',
                      display: 'block',
                    }}
                  />
                  <a
                    href="https://eclipse-color-sheet.alexwil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      position: 'absolute',
                      left: '14px',
                      bottom: '10px',
                      fontFamily: 'Zalando Sans Regular, sans-serif',
                      fontSize: '10px',
                      color: '#1A1813',
                      lineHeight: 1,
                      letterSpacing: 0,
                      fontWeight: 400,
                      background: 'transparent',
                      padding: 0,
                      margin: 0,
                      zIndex: 2,
                      textDecoration: 'underline',
                      textUnderlineOffset: '2px',
                      cursor: 'pointer',
                      display: 'block',
                    }}
                  >
                    Brand Color Sheet
                  </a>
                </div>
                {/* Card 5: 10px below Card 3, 179x183 */}
                <div
                  className="eclipse-mobile-card eclipse-mobile-card-5"
                  style={{
                    position: 'absolute',
                    top: '387px', // 194 + 183 + 10
                    left: 0,
                    width: '179px',
                    height: '183px',
                    background: '#211ADB',
                    borderRadius: '16px',
                    boxShadow: '0 1px 4px 0 rgba(64, 72, 178, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    color: '#fff',
                    fontWeight: 600,
                  }}
                >
                  {/* Combination Mark image, 10px up from center */}
                  <img
                    src="/assets/combination-mark-white.svg"
                    alt="Combination Mark White"
                    style={{
                      position: 'absolute',
                      top: 'calc(50% - 10px)',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '150px',
                      height: '150px',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                  {/* Combination Mark label */}
                  <span
                    style={{
                      position: 'absolute',
                      left: '14px',
                      bottom: '10px',
                      fontFamily: 'Zalando Sans Regular, sans-serif',
                      fontSize: '10px',
                      color: '#fff',
                      fontWeight: 400,
                      letterSpacing: 0,
                      lineHeight: 1,
                      background: 'transparent',
                      padding: 0,
                      margin: 0,
                      zIndex: 2,
                    }}
                  >
                    Combination Mark
                  </span>
                </div>
                {/* Card 6: 10px to the right of Card 5, 179x183 */}
                <div
                  className="eclipse-mobile-card eclipse-mobile-card-6"
                  style={{
                    position: 'absolute',
                    top: '387px',
                    left: '189px', // 179 + 10
                    width: '179px',
                    height: '183px',
                    background: '#FFFEFC',
                    borderRadius: '16px',
                    borderWidth: '1px',
                    borderColor: '#E6E5E1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    color: '#fff',
                    fontWeight: 600
                  }}
                >
                  {/* Ios Mockup image, 10px up from center */}
                  <img
                    src="/assets/mobile-ios-mockup.png"
                    alt="Combination Mark White"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: 'fit-content',
                      height: 'fit-content',
                      objectFit: 'contain',
                      display: 'block',
                      overflow: 'hidden',
                      borderRadius: '16px',
                    }}
                  />
                  {/* Ios Mockup label */}
                  <span
                    style={{
                      position: 'absolute',
                      left: '14px',
                      bottom: '10px',
                      fontFamily: 'Zalando Sans Regular, sans-serif',
                      fontSize: '10px',
                      color: '#1A1813',
                      fontWeight: 400,
                      letterSpacing: 0,
                      lineHeight: 1,
                      background: 'transparent',
                      padding: 0,
                      margin: 0,
                      zIndex: 2,
                    }}
                  >
                    iOS Icon Mockup
                  </span>
                </div>
                                {/* Card 7: 10px to the bottom of Card 5, 179x183 */}
                                <div
                                  className="eclipse-mobile-card eclipse-mobile-card-7"
                                  style={{
                                    position: 'absolute',
                                    top: '580px',
                                    left: '0px',
                                    width: '368px',
                                    height: '569px',
                                    background: '#060522',
                                    borderRadius: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.25rem',
                                    color: '#fff',
                                    fontWeight: 600
                                  }}
                                >
                  {/* Eclipse Sticker 1 image */}
                  <img
                    src="/assets/eclipse-sticker-1.svg"
                    alt="Eclipse Sticker 1"
                    style={{
                      position: 'absolute',
                      top: '15%',
                      left: '70%',
                      transform: 'translate(-50%, -50%)',
                      width: '175px',
                      height: '175px',
                      objectFit: 'contain',
                      display: 'block',
                      overflow: 'hidden',
                      borderRadius: '16px',
                    }}
                  />
                  {/* Eclipse Sticker 2 image */}
                  <img
                    src="/assets/eclipse-sticker-2.png"
                    alt="Eclipse Sticker 2"
                    style={{
                      position: 'absolute',
                      top: '42%',
                      left: '35%',
                      transform: 'translate(-50%, -50%)',
                      width: '200px',
                      height: '200px',
                      objectFit: 'contain',
                      display: 'block',
                      overflow: 'hidden',
                      borderRadius: '16px',
                    }}
                  />
                       {/* Eclipse Sticker 3 image */}
                  <img
                    src="/assets/eclipse-sticker-3.svg"
                    alt="Eclipse Sticker 3"
                    style={{
                      position: 'absolute',
                      top: '75%',
                      left: '60%',
                      transform: 'translate(-50%, -50%)',
                      width: '175px',
                      height: '175px',
                      objectFit: 'contain',
                      display: 'block',
                      overflow: 'hidden',
                      borderRadius: '16px',
                      rotate: '15deg',
                    }}
                  />
                  {/* Sticker Sheet Label */}
                  <span
                    style={{
                      position: 'absolute',
                      left: '14px',
                      bottom: '10px',
                      fontFamily: 'Zalando Sans Regular, sans-serif',
                      fontSize: '10px',
                      color: '#FFFFFF',
                      fontWeight: 400,
                      letterSpacing: 0,
                      lineHeight: 1,
                      background: 'transparent',
                      padding: 0,
                      margin: 0,
                      zIndex: 2,
                    }}
                  >
                    Sticker Sheet
                  </span>
                                </div>
                                {/* Card 8: 10px to the bottom of Card 7, 179x183 */}
                                <div
                                  className="eclipse-mobile-card eclipse-mobile-card-8"
                                  style={{
                                    position: 'absolute',
                                    top: '1159px',
                                    left: '0px',
                                    width: '368px',
                                    height: '183px',
                                    background: '#FFFEFC',
                                    borderWidth: '1px',
                                    borderColor: '#E6E5E1',
                                    borderRadius: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.25rem',
                                    color: '#fff',
                                    fontWeight: 600
                                  }}
                              >
                                {/* Light CTA Button */}
                  <img
                    src="/assets/light-cta-button.svg"
                    alt="Light CTA Button"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: 'fit-content',
                      height: 'fit-content',
                      objectFit: 'contain',
                      display: 'block',
                      overflow: 'hidden',
                      borderRadius: '16px',
                    }}
                  />
                  {/* Light Button CTA Label */}
                  <span
                    style={{
                      position: 'absolute',
                      left: '14px',
                      bottom: '10px',
                      fontFamily: 'Zalando Sans Regular, sans-serif',
                      fontSize: '10px',
                      color: '#1a1813',
                      fontWeight: 400,
                      letterSpacing: 0,
                      lineHeight: 1,
                      background: 'transparent',
                      padding: 0,
                      margin: 0,
                      zIndex: 2,
                    }}
                  >
                    CTA button light mode 
                  </span>
                                </div>
                                {/* Card 9: 10px to the bottom of Card 8, 179x183 */}
                                <div
                                  className="eclipse-mobile-card eclipse-mobile-card-9"
                                  style={{
                                    position: 'absolute',
                                    top: '1352px',
                                    left: '0px',
                                    width: '368px',
                                    height: '183px',
                                    background: '#060522',
                                    borderRadius: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.25rem',
                                    color: '#fff',
                                    fontWeight: 600
                                  }}
                                >
                                  {/* Dark CTA Button */}
                  <img
                    src="/assets/dark-cta-button.svg"
                    alt="Dark CTA Button"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: 'fit-content',
                      height: 'fit-content',
                      objectFit: 'contain',
                      display: 'block',
                      overflow: 'hidden',
                      borderRadius: '16px',
                    }}
                  />
                                </div>
                  {/* Light Button CTA Label */}
                  <span
                    style={{
                      position: 'absolute',
                      left: '14px',
                      bottom: '10px',
                      fontFamily: 'Zalando Sans Regular, sans-serif',
                      fontSize: '10px',
                      color: '#ffffff',
                      fontWeight: 400,
                      letterSpacing: 0,
                      lineHeight: 1,
                      background: 'transparent',
                      padding: 0,
                      margin: 0,
                      zIndex: 2,
                    }}
                  >
                    CTA button dark mode 
                  </span>
              </div>
            </div>
            {/* Tablet breakpoint grid (visible 800px-1199px) */}
            <div className="eclipse-tablet-wrapper">
              <div className="eclipse-tablet folder-card-tablet" style={{ background: '#bbb' }} />
              <div className="eclipse-tablet favicon-card-tablet" style={{ background: '#bbb' }} />
              <div className="eclipse-tablet brand-color-card-tablet" style={{ background: '#bbb' }} />
              <div className="eclipse-tablet light-mode-card-tablet" style={{ background: '#bbb' }} />
              <div className="eclipse-tablet large-gradient-card-tablet" style={{ background: '#bbb' }} />
              <div className="eclipse-tablet dark-mode-card-tablet" style={{ background: '#bbb' }} />
              <div className="eclipse-tablet night-graphic-card-tablet" style={{ background: '#bbb' }} />
              <div className="eclipse-tablet sticker-sheet-card-tablet" style={{ background: '#bbb' }} />
              <div className="eclipse-tablet ios-mockup-card-tablet" style={{ background: '#bbb' }} />
            </div>
            {/* Row 1 */}
            <div className="eclipse-desktop-only">
              <div style={{ position: 'absolute', top: 0, left: 0, width: '341px', height: '224px', overflow: 'hidden' }} className="eclipse-folder-card eclipse-desktop">
                            <span
                              style={{
                                position: 'absolute',
                                bottom: 'calc(12px + 30px * 2 + 10px * 2)', // 12px from bottom + 2 tag heights + 2 gaps
                                right: '12px',
                                borderRadius: '11px',
                                padding: '5px 10px',
                                background: '#e7fe96',
                                color: '#1a1813',
                                fontFamily: 'Zalando Sans Expanded, sans-serif',
                                fontWeight: 400,
                                fontSize: '0.875rem',
                                lineHeight: '1.25rem',
                                zIndex: 2,
                                boxShadow: '0 1px 4px 0 rgba(31,38,135,0.08)'
                              }}
                            >
                              Eclipse
                            </span>
              {/* Tag above folder image */}
              {/* Duplicate tag above the Eclipse tag */}
              {/* Top tag: Eclipse */}
              <span
                style={{
                  position: 'absolute',
                  bottom: 'calc(12px + 30px + 10px)',
                  right: '12px',
                  borderRadius: '11px',
                  padding: '5px 10px',
                  background: '#211ADB',
                  color: '#FFFFFF',
                  fontFamily: 'Zalando Sans Expanded, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '0.875rem',
                  lineHeight: '1.25rem',
                  zIndex: 2,
                  boxShadow: '0 1px 4px 0 rgba(31,38,135,0.08)',
                  WebkitFontWeight: '400 !important',
                  fontWeight: '400 !important'
                }}
              >
                Brand Identity Design
              </span>
              {/* Bottom tag: Brand Identity Design */}
              <span
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  borderRadius: '11px',
                  padding: '5px 10px',
                  background: '#4d48e2',
                  color: '#FFFFFF',
                  fontFamily: 'Zalando Sans Expanded, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '0.875rem',
                  lineHeight: '1.25rem',
                  zIndex: 2,
                  boxShadow: '0 1px 4px 0 rgba(31,38,135,0.08)',
                  WebkitFontWeight: '400 !important',
                  fontWeight: '400 !important'
                }}
              >
                2025-2026
              </span>
              <img src="/assets/desktop-folder-card.png" alt="Folder Card" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }} />
            </div>
            <div style={{ position: 'absolute', top: 0, left: 351, width: '224px', height: '224px', borderRadius: '18px', background: '#E9E9FC' }} className="eclipse-favicon-card eclipse-desktop">
                            <img
                              src="/assets/eclipse-favicon.png"
                              alt="Eclipse Favicon"
                              style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                width: '62px',
                                height: '62px',
                                transform: 'translate(-50%, -50%)',
                                display: 'block'
                              }}
                            />
              <span
                className="card-bottom-left"
                style={{
                  position: 'absolute',
                  left: '18px',
                  bottom: '16px',
                  color: '#1A1813',
                  fontFamily: 'Zalando Sans Regular, sans-serif',
                  fontSize: '1rem',
                  lineHeight: '1.4',
                  fontWeight: 400
                }}
              >
                Eclipse Favicon
              </span>
            {/* Card content goes here */}
            </div>
            <div style={{ position: 'absolute', top: 0, left: 585, width: '224px', height: '224px', border: '2px solid #E6E5E1', borderRadius: '18px' }} className="eclipse-color-card eclipse-desktop">
                            <img
                              src="/assets/color-sheet-preview.svg"
                              alt="Color Sheet Preview"
                              style={{
                                position: 'absolute',
                                top: '14px',
                                left: '14px',
                                right: '14px',
                                width: 'calc(100% - 28px)',
                                height: 'auto',
                                display: 'block',
                                marginLeft: 'auto',
                                marginRight: 'auto'
                              }}
                            />
              <a
                href="https://eclipse-color-sheet.alexwil.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'absolute',
                  left: '18px',
                  bottom: '16px',
                  color: '#1A1813',
                  fontFamily: 'Zalando Sans, sans-serif',
                  fontSize: '12px',
                  lineHeight: '1.4',
                  fontWeight: 400,
                  textDecoration: 'underline'
                }}
              >
                Brand Color Sheet
              </a>
            </div>
            <div style={{ position: 'absolute', top: 0, left: 819, width: '341px', height: '458px', borderRadius: '18px', overflow: 'hidden', border: 'none', outline: 'none' }} className="eclipse-large-top-card eclipse-desktop">
                            <span
                              style={{
                                position: 'absolute',
                                left: '18px',
                                bottom: '16px',
                                color: '#FFFFFF',
                                fontFamily: 'Zalando Sans Regular, sans-serif',
                                fontSize: '12px',
                                lineHeight: '1.4',
                                fontWeight: 400
                              }}
                            >
                              Haze-grain Gradient Background
                            </span>
              <img
                src="/assets/gradient-background-desktop.png"
                alt="Gradient Background"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>

            {/* Row 2 */}
            <div style={{ position: 'absolute', top: 234, left: 0, width: '341px', height: '224px', background: '#FCF9F2', border: '2px solid #E6E5E1', borderRadius: '18px', position: 'absolute' }} className="eclipse-lightmode-card eclipse-desktop">
                            <img
                              src="/assets/light-cta-button.svg"
                              alt="Light CTA Button"
                              style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                display: 'block'
                              }}
                            />
              <span
                style={{
                  position: 'absolute',
                  left: '18px',
                  bottom: '16px',
                  color: '#1A1813',
                  fontFamily: 'Zalando Sans Regular, sans-serif',
                  fontSize: '12px',
                  lineHeight: '1.4',
                  fontWeight: 400
                }}
              >
                CTA button light mode
              </span>
            </div>
            <div style={{ position: 'absolute', top: 234, left: 351, width: '224px', height: '224px', background: '#FCF9F2', border: '2px solid #E5E5E5', borderRadius: '18px' }} className="eclipse-nighthorizon-card eclipse-desktop">
                            <img
                              src="/assets/night-horizon-graphic.png"
                              alt="Night Horizon Graphic"
                              style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '112px',
                                height: '112px',
                                objectFit: 'contain',
                                display: 'block'
                              }}
                            />
              <span
                style={{
                  position: 'absolute',
                  left: '18px',
                  bottom: '16px',
                  color: '#1A1813',
                  fontFamily: 'Zalando Sans Regular, sans-serif',
                  fontSize: '12px',
                  lineHeight: '1.4',
                  fontWeight: 400
                }}
              >
                Night Horizon Graphic
              </span>
            </div>
            <div style={{ position: 'absolute', top: 234, left: 585, width: '224px', height: '224px', background: '#211ADB', border: 'none', borderRadius: '18px' }} className="eclipse-bluebox-card eclipse-desktop">
              <img
                src="/assets/combination-mark-white.svg"
                alt="Combination Mark White"
                style={{
                  position: 'absolute',
                  top: 'calc(50% - 10px)',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  display: 'block'
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  left: '18px',
                  bottom: '16px',
                  color: '#FFFFFF',
                  fontFamily: 'Zalando Sans, sans-serif',
                  fontSize: '10px',
                  lineHeight: '1.4',
                  fontWeight: 400
                }}
              >
                Combination Mark
              </span>
            </div>

            {/* Row 3 - new middle left card */}
            <div style={{ position: 'absolute', top: 468, left: 0, width: '341px', height: '224px', background: '#060522', border: 'none', borderRadius: '18px' }} className="eclipse-middleleft-card eclipse-desktop">
                            <span
                              style={{
                                position: 'absolute',
                                left: '18px',
                                bottom: '16px',
                                color: '#FFFFFF',
                                fontFamily: 'Zalando Sans Regular, sans-serif',
                                fontSize: '12px',
                                lineHeight: '1.4',
                                fontWeight: 400
                              }}
                            >
                              CTA button dark mode
                            </span>
              <img
                src="/assets/dark-cta-button.svg"
                alt="Dark CTA Button"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  display: 'block'
                }}
              />
            </div>

            {/* Row 3 - bottom right long card */}
            <div style={{ position: 'absolute', top: 468, left: 819, width: '341px', height: '710px', border: 'none', borderRadius: '18px' }} className="eclipse-bottomright-card eclipse-desktop">
                            <img
                              src="/assets/eclipse-business-cards.png"
                              alt="Eclipse Business Cards"
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                                borderRadius: '18px'
                              }}
                            />
              <span
                style={{
                  position: 'absolute',
                  left: '18px',
                  bottom: '16px',
                  color: '#1A1813',
                  fontFamily: 'Zalando Sans Regular, sans-serif',
                  fontSize: '12px',
                  lineHeight: '1.4',
                  fontWeight: 400
                }}
              >
                Business Card Mockups
              </span>
            </div>

            {/* Row 3 - middle bottom card */}
            <div style={{ position: 'absolute', top: 468, left: 351, width: '458px', height: '710px', background: '#060522', border: 'none', borderRadius: '18px', position: 'absolute' }} className="eclipse-bottomlarge-card eclipse-desktop">
                                                                    <img
                                                                      src="/assets/eclipse-sticker-3.svg"
                                                                      alt="Eclipse Sticker 3"
                                                                      style={{
                                                                        position: 'absolute',
                                                                        right: '75px',
                                                                        bottom: '100px',
                                                                        width: '200px',
                                                                        height: '200px',
                                                                        objectFit: 'contain',
                                                                        display: 'block',
                                                                        transform: 'rotate(15deg)'
                                                                      }}
                                                                    />
                                                      <img
                                                        src="/assets/eclipse-sticker-2.png"
                                                        alt="Eclipse Sticker 2"
                                                        style={{
                                                          position: 'absolute',
                                                          left: '50px',
                                                          top: '185px',
                                                          width: '240px',
                                                          height: '240px',
                                                          objectFit: 'contain',
                                                          display: 'block'
                                                        }}
                                                      />
                                        <img
                                          src="/assets/eclipse-sticker-1.svg"
                                          alt="Eclipse Sticker 1"
                                          style={{
                                            position: 'absolute',
                                            top: '25px',
                                            right: '50px',
                                            width: '200px',
                                            height: '200px',
                                            objectFit: 'contain',
                                            display: 'block'
                                          }}
                                        />
                          <span
                            style={{
                              position: 'absolute',
                              left: '18px',
                              bottom: '16px',
                              color: '#FFFFFF',
                              fontFamily: 'Zalando Sans Regular, sans-serif',
                              fontSize: '12px',
                              lineHeight: '1.4',
                              fontWeight: 400
                            }}
                          >
                            Sticker Sheet
                          </span>
            </div>

            {/* Row 5 - bottom left card, positioned at bottom left */}
            <div style={{ position: 'absolute', top: 702, left: 0, width: '341px', height: '476px', background: '#FCF9F2', border: '2px solid #E6E5E1', borderRadius: '18px' }} className="eclipse-darkmode-card eclipse-desktop">
                            <span
                              style={{
                                position: 'absolute',
                                left: '18px',
                                bottom: '16px',
                                color: '#1A1813',
                                fontFamily: 'Zalando Sans Regular, sans-serif',
                                fontSize: '12px',
                                lineHeight: '1.4',
                                fontWeight: 400
                              }}
                            >
                              iOS Icon Mockup
                            </span>
              <img
                src="/assets/eclipse-icon-mockup.png"
                alt="Eclipse Icon Mockup"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '18px'
                }}
              />
            </div>
            </div>
          </div>
        </section>

        {/* ==================== COMING SOON SECTION ==================== */}
        <section
          id="coming-soon"
          className="flex flex-col items-center justify-center coming-soon-scroll-margin"
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: 32
            }}
          >
            <span
              className="eclipse-breathing-wave font-zalando"
              style={{
                fontFamily: 'Zalando Sans Expanded, sans-serif',
                fontSize: '32px',
                fontWeight: 800,
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
