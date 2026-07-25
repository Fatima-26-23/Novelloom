"use client";

import { useMemo, useState } from "react";
import { DashboardFooter } from "../DashboardFooter";
import { CharactersToolbar } from "./CharactersToolbar";
import { CharacterCard } from "./CharacterCard";
import { AddCharacterCard } from "./AddCharacterCard";
import { CoreConflictMapCard } from "./CoreConflictMapCard";
import { characters, type CharacterRole } from "./data";

export function CharactersScreen() {
  const [activeFilter, setActiveFilter] = useState<"All" | CharacterRole>("All");
  const [searchValue, setSearchValue] = useState("");

  const filteredCharacters = useMemo(() => {
    return characters.filter((character) => {
      const matchesFilter = activeFilter === "All" || character.role === activeFilter;
      const matchesSearch = character.name
        .toLowerCase()
        .includes(searchValue.trim().toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchValue]);

  return (
    <div className="flex w-full flex-1 flex-col">
      <div className="flex-1">
        <CharactersToolbar
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          searchValue={searchValue}
          onSearchChange={setSearchValue}
        />

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}

          {activeFilter === "All" && !searchValue && <AddCharacterCard />}

          {filteredCharacters.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center gap-1 rounded-2xl border border-dashed border-card-border bg-white py-16 text-center">
              <p className="font-heading text-base font-bold text-heading">No characters found</p>
              <p className="text-xs text-muted">Try a different search term or filter.</p>
            </div>
          )}
        </div>

        <CoreConflictMapCard />
      </div>

      <DashboardFooter />
    </div>
  );
}
