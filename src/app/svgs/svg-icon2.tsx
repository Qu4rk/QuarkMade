export default function Icon2({ dittoId }: { dittoId?: string }) {
  return (
    <svg className="w-auto h-6 block overflow-hidden align-middle" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" data-ditto-id={dittoId}>
      <g clipPath="url(#clip0_animated_hamburger)">
        <path d="M0 8L24 8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="transition-[d] duration-300 ease-in-out" />
        <path d="M0 16L24 16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="transition-[d] duration-300 ease-in-out" />
      </g>
      <defs>
        <clipPath id="clip0_animated_hamburger">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
