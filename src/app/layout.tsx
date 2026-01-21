
import '../styles/globals.css'
import Image from 'next/image'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Alex Wilczewski - Portfolio</title>
        <meta name="description" content="Design Engineer, Creative and lover of cats. Get in touch, let's see if we can collaborate to create some amazing projects together." />
        <meta property="og:title" content="Alex Wilczewski - Portfolio" />
        <meta property="og:description" content="Design Engineer, Creative and lover of cats. Get in touch, let's see if we can collaborate to create some amazing projects together." />
        <meta property="og:image" content="https://alexwil.com/assets/og-image-v2.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alexwil.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alex Wilczewski - Portfolio" />
        <meta name="twitter:description" content="Design Engineer, Creative and lover of cats. Get in touch, let's see if we can collaborate to create some amazing projects together." />
        <meta name="twitter:image" content="https://alexwil.com/assets/og-image-v2.png" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preload" as="image" href="/assets/identity-mockup.webp" />
      </head>
      <body className="bg-[#fafaf8] text-neutral-900 min-h-screen flex flex-col overflow-x-hidden">
        {/* Header */}
        <header className="w-full flex justify-between items-center px-8 py-6 max-w-6xl mx-auto">
            <div className="flex items-center gap-2 select-none">
              <a href="https://alexwil.com" aria-label="Home">
                <Image src="/assets/logo-black.svg" alt="Alex Wilczewski Logo" width={180} height={60} className="h-14 w-auto" priority />
              </a>
            </div>
          <button
            id="coming-soon-btn"
            className="text-sm font-semibold px-5 py-2 rounded-[11px] bg-white hover:bg-neutral-100 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-300 border border-neutral-200"
            style={{ minWidth: 110, boxShadow: '0 2px 10px 0 rgba(31,38,135,0.10)' }}
            type="button"
            tabIndex={-1}
            aria-label="Coming soon"
          >
            <span
              className="eclipse-breathing-wave font-zalando"
              style={{
                display: 'inline-block',
                fontSize: '1rem',
                fontWeight: 800,
                letterSpacing: '0.01em',
                fontFamily: 'Zalando Sans Expanded, sans-serif',
                color: '#1A1813',
                textAlign: 'center',
                lineHeight: 1.1
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
          </button>
        </header>
        {/* Main content */}
        <main className="flex-1 flex flex-col items-center w-full px-2">
          {children}
        </main>
        {/* Footer */}
        <footer className="w-full py-12 px-8 flex flex-row justify-between items-center max-w-6xl gap-8 text-sm">
          <div className="w-full border-t border-neutral-200 max-w-6xl flex flex-row justify-between items-center gap-8 pt-8">
            <div className="flex items-center gap-2 select-none md:mb-0">
              <a href="https://alexwil.com" aria-label="Home">
                <Image src="/assets/logo-black.svg" alt="Alex Wilczewski Logo" width={180} height={60} className="h-14 w-auto" />
              </a>
            </div>
            <div className="flex flex-col gap-1 text-neutral-500 text-left">
              <div className="flex flex-col gap-1 mb-1">
                <a href="https://www.linkedin.com/in/alex-wilczewski/" className="underline flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" className="w-4 h-4 text-neutral-500" fill="currentColor"><g><rect className="background" fill="currentColor" x="0" y="0" width="34" height="34" rx="6"/><path d="M8.1 12.7h4.1v13.2H8.1V12.7zm2-6.1c1.3 0 2.1.9 2.1 2.1 0 1.2-.8 2.1-2.1 2.1h-.1c-1.3 0-2.1-.9-2.1-2.1 0-1.2.8-2.1 2.1-2.1zm4.7 6.1h3.9v1.8h.1c.5-.9 1.7-2.1 3.7-2.1 3.9 0 4.6 2.6 4.6 6v7.5h-4.1v-6.7c0-1.6 0-3.7-2.3-3.7-2.3 0-2.7 1.8-2.7 3.6v6.8h-4.1V12.7z" fill="#fff"/></g></svg>
                  LinkedIn ↗
                </a>
                <a href="https://github.com/alex-wilczewski" className="underline flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 text-neutral-500"><path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582 0-.288-.012-1.243-.017-2.252-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.289-1.552 3.295-1.23 3.295-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.625-5.475 5.921.43.372.823 1.104.823 2.226 0 1.606-.015 2.898-.015 3.293 0 .322.218.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  GitHub ↗
                </a>
              </div>
              <span className="footer-copyright">© 2026 Alex Wilczewski</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
