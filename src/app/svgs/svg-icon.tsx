export default function Icon({ dittoId }: { dittoId?: string }) {
  return (
    <svg className="w-auto h-2 block shrink-0 overflow-hidden align-middle [rotate:180deg] pointer-events-none focus:outline-clr-9 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" fill="none" height="8" viewBox="0 0 9 8" width="9" xmlns="http://www.w3.org/2000/svg" data-ditto-id={dittoId}>
      <path d="M4.5 0L0 8H9L4.5 0Z" fill="currentColor" />
    </svg>
  );
}
