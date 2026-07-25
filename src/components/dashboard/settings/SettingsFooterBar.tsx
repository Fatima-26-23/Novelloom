export function SettingsFooterBar() {
  return (
    <div className="mt-8 flex items-center justify-end gap-4 border-t border-border/30 pt-6">
      <button type="button" className="text-xs font-semibold text-muted hover:text-body">
        Discard Changes
      </button>
      <button
        type="button"
        className="rounded-full bg-heading px-6 py-2.5 text-xs font-bold text-white shadow-md transition-opacity hover:opacity-90"
      >
        Save Configuration
      </button>
    </div>
  );
}
