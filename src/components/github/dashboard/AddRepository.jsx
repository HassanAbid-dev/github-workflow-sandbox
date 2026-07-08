import { Plus } from "lucide-react";

export default function AddRepository() {
  return (
    <button
      className="
        group relative
        h-[200px]
        bg-white dark:bg-[#0D1117]
        border-2 border-dashed border-[#D0D7DE] dark:border-[#30363D]
        rounded-xl
        flex flex-col items-center justify-center gap-3
        hover:border-[#0969DA] dark:hover:border-[#58A6FF]
        hover:bg-[#F6F8FA] dark:hover:bg-[#161B22]
        transition-all duration-300
        cursor-pointer
      "
    >
      <div className="w-12 h-12 rounded-full border-2 border-[#D0D7DE] dark:border-[#30363D] group-hover:border-[#0969DA] dark:group-hover:border-[#58A6FF] group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
        <Plus
          size={20}
          className="text-[#8B949E] dark:text-[#484F58] group-hover:text-[#0969DA] dark:group-hover:text-[#58A6FF] transition-colors"
        />
      </div>
      <span className="text-[13px] font-medium text-[#656D76] dark:text-[#8B949E] group-hover:text-[#0969DA] dark:group-hover:text-[#58A6FF] transition-colors">
        Add Repository
      </span>
    </button>
  );
}
