export function BrandMark() {
  return (
    <span className="inline-flex items-center gap-2.5 font-extrabold tracking-[-0.035em] text-foreground">
      <span
        className="relative grid size-10 place-items-center rounded-[14px] bg-brand text-white shadow-[0_6px_16px_rgba(57,116,93,0.18)]"
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="size-6" fill="none">
          <path
            d="M12 18.5V10m0 2.5c-2.8 0-5-1.9-5-4.7 2.8 0 5 1.9 5 4.7Zm0-2.2c2.8 0 5-1.8 5-4.8-2.8 0-5 1.9-5 4.8Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 18.5h9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="text-lg">아이누리 배움터</span>
    </span>
  );
}
