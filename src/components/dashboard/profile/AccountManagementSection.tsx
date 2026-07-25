import { CheckCircleIcon, GoogleIcon, LockIcon, TrashIcon } from "../icons";

const iconMap = {
  "change-password": LockIcon,
  "google-account": GoogleIcon,
  "delete-account": TrashIcon,
};

type AccountManagementItem = {
  id: string;
  title: string;
  description: string;
  connected?: boolean;
  danger?: boolean;
};

type AccountManagementSectionProps = {
  items: AccountManagementItem[];
};

export function AccountManagementSection({ items }: AccountManagementSectionProps) {
  return (
    <div>
      <h2 className="text-xs font-semibold text-heading">Account Management</h2>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {items.map((item) => {
          const Icon = iconMap[item.id as keyof typeof iconMap];
          return (
            <button
              key={item.id}
              type="button"
              className={`flex items-center gap-3 rounded-2xl border bg-white p-5 text-left shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)] transition-colors ${
                item.danger
                  ? "border-red-200 hover:bg-red-50"
                  : "border-card-border hover:bg-badge-pink/10"
              }`}
            >
              <div
                className={`flex size-9 shrink-0 items-center justify-center rounded-full ${
                  item.danger ? "bg-red-50" : "bg-badge-pink"
                }`}
              >
                <Icon className={`size-4 ${item.danger ? "text-red-500" : "text-brand"}`} />
              </div>
              <div>
                <p className={`text-xs font-semibold ${item.danger ? "text-red-500" : "text-heading"}`}>
                  {item.title}
                </p>
                <p
                  className={`mt-0.5 flex items-center gap-1 text-xs ${
                    item.connected ? "text-emerald-600" : item.danger ? "text-red-400" : "text-muted"
                  }`}
                >
                  {item.description}
                  {item.connected && <CheckCircleIcon className="size-3" />}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
