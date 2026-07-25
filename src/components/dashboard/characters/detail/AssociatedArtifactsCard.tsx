import { WandIcon, CloakIcon, LocationAtlasIcon } from "../../icons";
import type { Artifact } from "../data";

const icons = [WandIcon, CloakIcon, LocationAtlasIcon];

type AssociatedArtifactsCardProps = {
  artifacts: Artifact[];
};

export function AssociatedArtifactsCard({ artifacts }: AssociatedArtifactsCardProps) {
  return (
    <div className="rounded-2xl bg-badge-purple/40 p-6">
      <p className="text-xs font-bold uppercase tracking-wide text-[#625595]">
        Associated Artifacts
      </p>

      <div className="mt-3 flex flex-col gap-2">
        {artifacts.map(({ name, detail }, index) => {
          const Icon = icons[index % icons.length];
          return (
            <div
              key={name}
              className="flex items-center gap-3 rounded-xl bg-white/70 px-3 py-2.5"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-[#625595]">
                <Icon className="size-4" />
              </span>
              <div>
                <p className="text-xs font-semibold text-heading">{name}</p>
                {detail && <p className="text-xs text-muted">{detail}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
