import Link from 'next/link'


export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            <Link
              href="/"
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
            >
              <svg 
              id="logo"
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 264.98 227.35">
                <defs>
                  <linearGradient id="logo-gradient" gradientUnits="userSpaceOnUse" x1="0" y1="113.68" x2="264.98" y2="113.68">
                    <stop offset="0" style={{ stopOpacity: 1, stopColor: '#173652' }} />
                    <stop offset="1" style={{ stopOpacity: 1, stopColor: '#AE3FD8' }} />
                  </linearGradient>
                </defs>
                  <path className="logo-fil" d="M40.81 0l-40.81 0 127.82 227.35 24.06 -39.86 -111.07 -187.49zm27.36 0l18.41 33.18 113.65 0 -58.67 99.12 20.89 37.66 102.53 -169.96 -196.81 0z"/>
                </svg>
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  )
}
