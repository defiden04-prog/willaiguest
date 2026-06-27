export function PumpFunLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="8" />
      <path
        d="M100 50C74.1 50 53 71.1 53 97M100 150C125.9 150 147 128.9 147 103"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <circle cx="100" cy="100" r="15" fill="currentColor" />
    </svg>
  )
}
