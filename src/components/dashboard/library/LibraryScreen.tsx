"use client";

import { useState } from "react";
import { DashboardFooter } from "../DashboardFooter";
import { LibraryTopBar } from "./LibraryTopBar";
import { LibraryFilterBar } from "./LibraryFilterBar";
import { LibraryBookCard } from "./LibraryBookCard";
import { LibraryBookListRow } from "./LibraryBookListRow";
import { ConfirmUploadCard } from "./ConfirmUploadCard";
import { libraryBooks } from "./data";

export function LibraryScreen() {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div className="flex w-full flex-1 flex-col">
      <div className="flex-1">
        <LibraryTopBar />
        <LibraryFilterBar view={view} onViewChange={setView} />

        {view === "grid" ? (
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {libraryBooks.map((book) => (
              <LibraryBookCard key={book.id} book={book} />
            ))}
            <ConfirmUploadCard />
          </div>
        ) : (
          <div className="mt-6 flex flex-col gap-3">
            {libraryBooks.map((book) => (
              <LibraryBookListRow key={book.id} book={book} />
            ))}
            <div className="max-w-sm">
              <ConfirmUploadCard />
            </div>
          </div>
        )}
      </div>

      <DashboardFooter />
    </div>
  );
}
