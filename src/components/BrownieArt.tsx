
export default function BrownieArt() {
  return (
    <div className="flex min-h-64 items-center justify-center rounded-2xl bg-[#ead8c5]">
      <svg
        viewBox="0 0 240 180"
        className="w-full max-w-sm"
        role="img"
        aria-label="Chocolate brownies"
      >
        <rect x="35" y="75" width="170" height="65" rx="12" fill="#3b1d12" />
        <rect x="35" y="55" width="170" height="65" rx="12" fill="#5b2e1e" />
        <path
          d="M60 75l20 10m30-12l20 12m25-10l20 10"
          stroke="#a87853"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="75" cy="65" r="4" fill="#d6a77d" />
        <circle cx="145" cy="85" r="4" fill="#d6a77d" />
      </svg>
    </div>
  );
}
