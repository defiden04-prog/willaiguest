export function HeliusLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12 2L20 6V12C20 18 12 22 12 22S4 18 4 12V6L12 2Z" fill="currentColor" />
      <path d="M12 8L16 10V14C16 16 12 18 12 18S8 16 8 14V10L12 8Z" fill="white" opacity="0.3" />
    </svg>
  )
}
