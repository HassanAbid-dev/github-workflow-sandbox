import { Sun, Moon, Bell, ChevronDown, Sparkles } from "lucide-react";
import { useTheme } from "../ThemeContext";

export default function Navbar({ onRepositoriesClick }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed left-0 top-0 right-0 z-30 border-b border-[#D0D7DE] dark:border-[#30363D] bg-white dark:bg-[#0D1117] px-6 py-3 flex items-center justify-between transition-colors">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-3xl bg-gradient-to-br from-[#1655BE] to-[#47A3FF] text-white shadow-lg shadow-[#1655BE]/20">
          <Sparkles size={16} />
        </div>
        <span className="text-[11px] font-medium text-[#656D76] dark:text-[#8B949E]">
          <span className="text-[#1F2328] dark:text-[#E6EDF3] font-semibold">
            GitHub Workflow Sandbox
          </span>
        </span>
        <span className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-semibold rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Fleet Status: 4 Active
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onRepositoriesClick}
          className="rounded-full border border-slate-200/70 bg-slate-100 px-3 py-2 text-sm font-semibold hover:cursor-pointer text-slate-700 transition hover:border-[#0969DA] hover:text-[#0969DA] dark:border-slate-800 dark:bg-[#0D1117] dark:text-slate-200 dark:hover:border-[#58A6FF]"
        >
          Repositories
        </button>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-[#F6F8FA] dark:hover:bg-[#161B22] transition-colors hover:cursor-pointer"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <button className="p-2 rounded-lg hover:bg-[#F6F8FA] dark:hover:bg-[#161B22] transition-colors relative hover:cursor-pointer">
          <Bell size={16} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#0969DA]" />
        </button>
        <div className="w-px h-6 bg-[#D0D7DE] dark:bg-[#30363D]" />
        <button className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:cursor-pointer hover:bg-[#F6F8FA] dark:hover:bg-[#161B22] transition-colors">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0969DA] to-[#1F6FEB] flex items-center justify-center text-white text-[11px] font-semibold">
            SU
          </div>
          <span className="text-[12.5px] font-medium hidden sm:inline">
            Sandbox User
          </span>
          <ChevronDown size={14} className="text-[#656D76]" />
        </button>
      </div>
    </header>
  );
}
