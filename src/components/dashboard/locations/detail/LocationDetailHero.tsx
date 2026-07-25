type LocationDetailHeroProps = {
  name: string;
  badges: string[];
  tagline: string;
  narrativeWeight: number;
};

export function LocationDetailHero({
  name,
  badges,
  tagline,
  narrativeWeight,
}: LocationDetailHeroProps) {
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (narrativeWeight / 100) * circumference;

  return (
    <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#1c1a2e_0%,#2f2540_45%,#4a3350_75%,#6f4a52_100%)] shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]">
      <svg viewBox="0 0 800 288" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-95">
        <circle cx="680" cy="60" r="26" fill="#f2ecd8" opacity="0.9" />
        <circle cx="672" cy="53" r="21" fill="#3a3050" opacity="0.55" />
        <polygon points="60,288 60,180 100,150 140,190 180,130 230,190 230,288" fill="#150f22" />
        <polygon points="210,288 210,160 260,110 320,170 380,130 430,175 430,288" fill="#1c1530" />
        <polygon points="400,288 400,140 450,95 500,150 550,105 600,160 600,288" fill="#221a38" />
        <polygon points="580,288 580,175 630,135 690,185 740,140 800,180 800,288" fill="#150f22" />
        <circle cx="270" cy="130" r="2.5" fill="#ffd9a0" />
        <circle cx="470" cy="112" r="2.5" fill="#ffd9a0" />
        <circle cx="650" cy="150" r="2.5" fill="#ffd9a0" />
        <circle cx="140" cy="165" r="2.5" fill="#ffd9a0" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

      <div className="absolute left-6 top-6 flex gap-2">
        {badges.map((badge, index) => (
          <span
            key={badge}
            className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
              index === 0 ? "bg-brand text-white" : "bg-white/90 text-heading"
            }`}
          >
            {badge}
          </span>
        ))}
      </div>

      <div className="absolute bottom-6 left-6 right-32">
        <h1 className="font-heading text-base font-bold text-white">{name}</h1>
        <p className="mt-2 max-w-xl text-xs leading-relaxed text-white/85">{tagline}</p>
      </div>

      <div className="absolute right-6 top-6 flex size-24 flex-col items-center justify-center rounded-2xl bg-white/85 backdrop-blur-sm">
        <div className="relative flex size-16 items-center justify-center">
          <svg viewBox="0 0 64 64" className="size-16 -rotate-90">
            <circle cx="32" cy="32" r={radius} fill="none" stroke="#f3e6ee" strokeWidth="6" />
            <circle
              cx="32"
              cy="32"
              r={radius}
              fill="none"
              stroke="#a43073"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
            />
          </svg>
          <span className="absolute font-heading text-xs font-bold text-heading">
            {narrativeWeight}%
          </span>
        </div>
        <p className="mt-1 text-center text-[10px] font-bold uppercase tracking-wide text-muted">
          Narrative Weight
        </p>
      </div>
    </div>
  );
}
