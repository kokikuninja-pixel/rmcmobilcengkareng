export function Logo() {
  return (
    <svg
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-auto md:h-10"
      aria-hidden="true"
    >
      <text
        x="0"
        y="30"
        fontFamily="Plus Jakarta Sans, Inter, system-ui, sans-serif"
        fontSize="32"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="-0.5"
      >
        RMC
      </text>
      <text
        x="48"
        y="30"
        fontFamily="Plus Jakarta Sans, Inter, system-ui, sans-serif"
        fontSize="12"
        fontWeight="500"
        fill="currentColor"
        opacity="0.7"
        letterSpacing="0.5"
      >
        RENTAL
      </text>
    </svg>
  );
}