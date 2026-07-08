import {
  Home,
  GitPullRequest,
  CircleDot,
  Code,
  Settings,
  HelpCircle,
} from "lucide-react";

export default function Sidebar() {
  const menuItems = [
    { icon: Home, label: "Overview", active: true },
    { icon: CircleDot, label: "Issues" },
    { icon: GitPullRequest, label: "Pull Requests" },
    { icon: Code, label: "Repositories" },
    { icon: Settings, label: "Settings" },
    { icon: HelpCircle, label: "Help" },
  ];

  return (
    <aside className="hidden w-35 shrink-0 flex-col gap-4 pt-10 px-2 bg-transparent text-slate-700 shadow-[0_30px_80px_rgba(0,0,0,0.45)] dark:bg-slate-950/95 dark:text-slate-300 lg:flex m-4 top-0">
      <div className="space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`flex h-14 w-full items-center justify-center rounded-3xl border text-slate-400 transition duration-200 ${
              item.active
                ? "border-slate-700/70 bg-slate-100 text-slate-900 shadow-sm shadow-slate-900/5 dark:border-slate-700/70 dark:bg-slate-900 dark:text-sky-400 dark:shadow-sky-500/10"
                : "border-transparent hover:border-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:hover:border-slate-700 dark:hover:bg-slate-900/80 dark:hover:text-slate-100"
            }`}
            title={item.label}
          >
            <item.icon size={20} />
          </button>
        ))}
      </div>
    </aside>
  );
}
