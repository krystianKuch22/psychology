export default function Star({ fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        position: "relative",
        overflow: "hidden",
        color: "#ffd700",
      }}
    >
      {/* Pusta gwiazdka */}
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z"
        fill="#e4e5e9"
      />

      {/* Wypełnienie */}
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z"
        fill="#ffd700"
        style={{
          clipPath: `inset(0 ${(1 - fill) * 100}% 0 0)`,
        }}
      />
    </svg>
  );
}
