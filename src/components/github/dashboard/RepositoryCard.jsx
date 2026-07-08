import { Package, ArrowUpRight, Star, GitBranch } from "lucide-react";

export default function RepositoryCard({ repository, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-slate-50 p-5 text-left shadow-sm shadow-slate-900/5 transition duration-300 hover:-translate-y-0.5 hover:border-[#0969DA] hover:shadow-[0_20px_50px_rgba(9,105,218,0.14)] dark:border-slate-800/80 dark:bg-[#010409]/80 dark:shadow-slate-950/20 dark:hover:border-[#58A6FF] hover:cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0969DA]/0 to-[#0969DA]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-[#0969DA]/15 to-[#1F6FEB]/15 text-[#0969DA] dark:bg-[#1F6FEB]/15 dark:text-[#58A6FF]">
            <Package size={22} strokeWidth={1.75} />
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white transition-colors group-hover:text-[#0969DA] dark:group-hover:text-[#58A6FF]">
              {repository.name}
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 font-mono break-words">
              {repository.owner}/{repository.repo}
            </p>
          </div>
        </div>

        <span className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300">
          active
        </span>
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
        A curated repository workspace with agent-driven issues and review-ready
        pull requests.
      </p>

      <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-400">
        <span className="inline-flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-slate-700 shadow-sm shadow-slate-900/5 dark:bg-slate-950 dark:text-slate-300 dark:shadow-slate-950/20">
          <Star size={14} className="text-[#f59e0b]" /> 5 stars
        </span>
        <span className="inline-flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-slate-700 shadow-sm shadow-slate-900/5 dark:bg-slate-950 dark:text-slate-300 dark:shadow-slate-950/20">
          <GitBranch size={14} className="text-[#0ea5e9]" /> main
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
        <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
          <ArrowUpRight size={16} className="text-[#0969DA]" /> Open workspace
        </span>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] text-slate-500 dark:bg-slate-900 dark:text-slate-400">
          repo details
        </span>
      </div>
    </button>
  );
}
