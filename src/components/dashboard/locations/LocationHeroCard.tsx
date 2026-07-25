import { FileTextIcon, UsersSmallIcon } from "../icons";
import { keyHub, prominentCharacters } from "./data";

export function LocationHeroCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-card-border bg-white shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]">
      <div className="relative h-56 w-full overflow-hidden bg-[linear-gradient(180deg,#2c2338_0%,#4a2f3f_45%,#7a3b3f_75%,#c9793f_100%)]">
        <div className="absolute inset-0 opacity-90">
          <svg viewBox="0 0 700 220" preserveAspectRatio="none" className="h-full w-full">
            <polygon points="0,220 0,120 40,90 80,130 120,70 170,130 170,220" fill="#1c1522" />
            <polygon points="150,220 150,100 200,60 250,110 300,80 340,120 340,220" fill="#241a2a" />
            <polygon points="320,220 320,90 370,50 420,100 470,60 520,110 520,220" fill="#2c1f30" />
            <polygon points="500,220 500,110 550,75 600,120 640,85 700,120 700,220" fill="#1c1522" />
            <circle cx="90" cy="95" r="3" fill="#ffd9a0" />
            <circle cx="260" cy="88" r="3" fill="#ffd9a0" />
            <circle cx="440" cy="78" r="3" fill="#ffd9a0" />
            <circle cx="600" cy="98" r="3" fill="#ffd9a0" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <span className="absolute left-5 top-5 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-md">
          {keyHub.badge}
        </span>

        <h2 className="absolute bottom-5 left-5 font-heading text-base font-bold text-white">
          {keyHub.name}
        </h2>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-base text-muted">
            <span className="flex items-center gap-1.5">
              <FileTextIcon className="size-4 text-brand" />
              Chapters {keyHub.chapters}
            </span>
            <span className="flex items-center gap-1.5">
              <UsersSmallIcon className="size-4 text-brand" />
              {keyHub.charactersEncountered} Characters encountered
            </span>
          </div>

          <div className="text-right">
            <p className="font-heading text-base font-bold leading-tight text-brand">
              {keyHub.plotDensity}
            </p>
            <p className="text-xs text-muted">Plot Density</p>
          </div>
        </div>

        <p className="mt-4 text-base leading-relaxed text-body">{keyHub.description}</p>

        <div className="mt-5 border-t border-border/40 pt-4">
          <p className="text-xs font-bold uppercase tracking-wide text-muted">
            Prominent Characters
          </p>
          <div className="mt-2.5 flex -space-x-2">
            {prominentCharacters.map((character, index) => (
              <div
                key={index}
                className="flex size-9 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white shadow-sm"
                style={{ backgroundImage: character.avatarGradient }}
              >
                {character.initials.slice(0, 2)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
