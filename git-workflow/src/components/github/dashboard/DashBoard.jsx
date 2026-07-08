import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import RepositoryGrid from "./RepositoryGrid";
import { Sparkles, Search, Code2 } from "lucide-react";

const metrics = [
  {
    label: "Active repositories",
    value: 4,
    detail: "Monitored in this workspace",
  },
  { label: "Agent issues", value: 12, detail: "Open review tasks" },
  { label: "Open pull requests", value: 3, detail: "Ready for final review" },
  { label: "Workspace health", value: "Stable", detail: "Mock environment" },
];

export default function Dashboard({ onSelectRepo }) {
  const [searchQuery, setSearchQuery] = useState("");

  const scrollToRepositoryGrid = () => {
    document.getElementById("repo-grid")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen w-full bg-transparent text-[#0F172A] dark:text-[#E6EDF3] flex pt-16 transition-colors">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Navbar onRepositoriesClick={scrollToRepositoryGrid} />

        <main className="flex-1 px-0 py-4 overflow-y-auto">
          <section className="grid gap-5 items-start xl:grid-cols-[300px_minmax(0,1fr)]">
            <div className="rounded-[1.5rem] border border-slate-200/70 bg-slate-50/90 p-4 shadow-sm shadow-slate-900/5 dark:border-slate-800/70 dark:bg-[#010409]/80 dark:shadow-slate-950/20">
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Sparkles
                  size={18}
                  className="text-[#0969DA] dark:text-[#58A6FF]"
                />
                <span className="text-xs font-semibold uppercase tracking-[0.24em]">
                  GitHub Workflow
                </span>
              </div>
              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Workspace metrics in one place.
              </h1>
              <p className="mt-3 max-w-xl text-sm text-slate-600 dark:text-slate-400">
                Fast access to repo health, review activity, and workspace
                actions.
              </p>

              <div className="mt-5 grid gap-3">
                {metrics.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-slate-200/80 bg-white px-4 py-3 text-sm shadow-sm shadow-slate-900/5 dark:border-slate-800/80 dark:bg-slate-950/80 dark:shadow-slate-950/10"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-medium text-slate-900 dark:text-slate-100">
                        {item.label}
                      </span>
                      <span className="text-xl font-semibold text-[#0969DA] dark:text-[#58A6FF]">
                        {item.value}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[1.5rem] border border-slate-200/70 bg-slate-950/10 p-4 shadow-sm shadow-slate-900/5 dark:border-slate-800/70 dark:bg-[#010409]/90 dark:shadow-slate-950/20">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                    Repository access
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                    Ready to review repositories?
                  </h3>
                  <button
                    type="button"
                    onClick={scrollToRepositoryGrid}
                    className="inline-flex items-center justify-center rounded-full bg-[#0969DA] px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-[#0969DA]/20 transition hover:bg-[#0B79F3]"
                  >
                    Check repositories
                  </button>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200/70 bg-white/95 p-4 shadow-sm shadow-slate-900/5 dark:border-slate-800/70 dark:bg-[#0B1220]/95 dark:shadow-slate-950/20">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                      Status
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                      Workspace health
                    </h3>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-600 dark:text-emerald-300">
                    Stable
                  </span>
                </div>
                <div className="mt-5 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-3 dark:border-slate-800/80 dark:bg-slate-950/70">
                    <p className="font-medium text-slate-900 dark:text-white">
                      Mock sandbox
                    </p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      Safe experiment mode for repository workflows.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-3 dark:border-slate-800/80 dark:bg-slate-950/70">
                    <p className="font-medium text-slate-900 dark:text-white">
                      Agent-first flow
                    </p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      Track issues, comments, and review actions without
                      friction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-5 rounded-[1.5rem] border border-slate-200/70 bg-slate-950/10 p-4 shadow-sm shadow-slate-900/5 dark:border-slate-800/70 dark:bg-[#010409]/90 dark:shadow-slate-950/20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                  Repository list
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
                  All repositories
                </h2>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <Search size={16} />
                <span>{4} repositories in the current workspace</span>
              </div>
            </div>
            <div className="mt-4 grid gap-3">
              <label className="sr-only" htmlFor="repo-search">
                Search repositories
              </label>
              <div className="relative">
                <Search
                  size={16}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  id="repo-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search repositories"
                  className="w-full rounded-full border border-slate-200 bg-white/90 py-2 pl-10 pr-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#0969DA] focus:ring-2 focus:ring-[#0969DA]/10 dark:border-slate-700 dark:bg-[#010409]/90 dark:text-white"
                />
              </div>
            </div>
            <div className="mt-5" id="repo-grid">
              <RepositoryGrid
                onSelectRepository={onSelectRepo}
                searchQuery={searchQuery}
              />
            </div>
          </section>

          <footer className="mt-5 rounded-[1.5rem] border border-slate-200/70 bg-slate-50/90 p-4 text-sm text-slate-600 shadow-sm shadow-slate-900/5 dark:border-slate-800/70 dark:bg-[#010409]/80 dark:text-slate-300 dark:shadow-slate-950/10">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-2">
                <Code2
                  size={16}
                  className="text-slate-500 dark:text-slate-400"
                />
                <span>© 2026 GitHub Workflow Sandbox</span>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  System online
                </span>
                <span>v2.0.1</span>
                <button className="text-[#0969DA] dark:text-[#58A6FF] hover:underline">
                  System status
                </button>
                <button className="text-[#0969DA] dark:text-[#58A6FF] hover:underline">
                  Documentation
                </button>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
