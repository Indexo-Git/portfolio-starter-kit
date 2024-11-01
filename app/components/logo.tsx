

export const Logo = ({ height }) => {
  return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 264.98 227.35"
        height={ height }
        className="md:mt-5"
        >
        <defs>
            <linearGradient id="logo-gradient" gradientUnits="userSpaceOnUse" x1="0" y1="113.68" x2="264.98" y2="113.68">
            <stop offset="0" style={{ stopOpacity: 1, stopColor: '#173652' }} />
            <stop offset="1" style={{ stopOpacity: 1, stopColor: '#AE3FD8' }} />
            </linearGradient>
        </defs>
            <path className="logo-fil" d="M40.81 0l-40.81 0 127.82 227.35 24.06 -39.86 -111.07 -187.49zm27.36 0l18.41 33.18 113.65 0 -58.67 99.12 20.89 37.66 102.53 -169.96 -196.81 0z"/>
    </svg>
  )
}
