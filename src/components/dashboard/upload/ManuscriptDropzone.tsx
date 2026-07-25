"use client";

import { useRef, useState, type DragEvent } from "react";
import { BookIcon, UploadIcon } from "../icons";

export function ManuscriptDropzone() {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (files && files.length > 0) {
      setFileName(files[0].name);
    }
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    handleFiles(event.dataTransfer.files);
  };

  return (
    <div
      onDragOver={(event) => {
        event.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      className={`flex aspect-square w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed bg-white px-6 text-center transition-colors ${
        isDragging ? "border-brand bg-badge-pink/20" : "border-card-border"
      }`}
    >
      <span className="flex size-16 items-center justify-center rounded-full bg-badge-pink text-brand">
        <BookIcon className="size-7" />
      </span>

      <h3 className="mt-5 font-heading text-base font-bold text-heading">
        Drag &amp; drop your manuscript
      </h3>
      <p className="mt-1.5 text-xs text-muted">
        Supports <span className="font-semibold text-brand">PDF</span> and{" "}
        <span className="font-semibold text-brand">EPUB</span> formats
      </p>

      {fileName && (
        <p className="mt-3 max-w-xs truncate rounded-full bg-badge-purple px-3 py-1 text-xs font-semibold text-[#625595]">
          {fileName}
        </p>
      )}

      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.epub"
        className="hidden"
        onChange={(event) => handleFiles(event.target.files)}
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="mt-5 flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-xs font-bold text-white shadow-md transition-opacity hover:opacity-90"
      >
        <UploadIcon className="size-4" />
        Browse Files
      </button>
    </div>
  );
}
