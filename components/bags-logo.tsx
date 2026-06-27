export function BagsLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M7 4H17V7H7V4Z" fill="currentColor" />
      <path d="M6 7H18V20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20V7Z" fill="currentColor" opacity="0.8" />
      <path d="M10 10V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 10V16" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}
