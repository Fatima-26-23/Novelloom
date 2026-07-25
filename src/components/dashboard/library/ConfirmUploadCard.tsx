"use client";

import { useState } from "react";
import { FileTextIcon } from "../icons";

export function ConfirmUploadCard() {
  const [chapter, setChapter] = useState("");

  return (
    <div className="flex h-full flex-col items-center rounded-2xl border-2 border-dashed border-card-border bg-badge-pink/20 p-5 text-center">
      <span className="flex size-11 items-center justify-center rounded-full bg-white text-brand shadow-sm">
        <FileTextIcon className="size-5" />
      </span>

      <p className="mt-3 text-xs font-bold uppercase tracking-wide text-brand">
        What chapter are you currently on?
      </p>

      <input
        type="number"
        min={1}
        value={chapter}
        onChange={(event) => setChapter(event.target.value)}
        placeholder="e.g. 1"
        className="mt-3 w-full rounded-lg border border-border/40 bg-white px-3 py-2 text-center text-xs text-heading placeholder:text-muted focus:border-brand focus:outline-none"
      />

      <p className="mt-2 text-xs text-muted">
        This controls spoiler protection for your analysis.
      </p>

      <button
        type="button"
        disabled={!chapter}
        className="mt-4 w-full rounded-full bg-brand px-4 py-2.5 text-xs font-bold text-white shadow-md transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Confirm Upload
      </button>
    </div>
  );
}
