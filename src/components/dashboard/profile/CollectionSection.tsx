"use client";

import { useState } from "react";
import { BoltIcon, PlusIcon, PortraitIcon, QuillIcon, RingIcon } from "../icons";
import type { CollectionBook } from "./data";

const tabs = ["Novels", "Characters", "Bookmarks"];

const coverIcons = {
  bolt: BoltIcon,
  quill: QuillIcon,
  ring: RingIcon,
  portrait: PortraitIcon,
};

type CollectionSectionProps = {
  books: CollectionBook[];
};

export function CollectionSection({ books }: CollectionSectionProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-semibold text-heading">Your Collection</h2>

        <div className="flex items-center gap-5">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`relative pb-1.5 text-xs font-semibold transition-colors ${
                tab === activeTab ? "text-brand" : "text-muted hover:text-brand"
              }`}
            >
              {tab}
              {tab === activeTab && (
                <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-brand" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {books.map((book) => {
          const Icon = coverIcons[book.coverIcon];
          return (
            <div key={book.id} className="flex flex-col gap-2">
              <div
                className="relative flex aspect-[3/4] w-full items-center justify-center overflow-hidden rounded-xl shadow-md"
                style={{ backgroundImage: book.coverGradient }}
              >
                <Icon className="size-8 text-white/70" />
              </div>
              <p className="truncate text-xs font-semibold text-heading">{book.title}</p>
            </div>
          );
        })}

        <button
          type="button"
          className="flex aspect-[3/4] w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-card-border text-muted transition-colors hover:border-brand hover:text-brand"
        >
          <span className="flex size-9 items-center justify-center rounded-full border border-current">
            <PlusIcon className="size-4" />
          </span>
          <span className="text-xs font-semibold">Add Favorite</span>
        </button>
      </div>
    </div>
  );
}
