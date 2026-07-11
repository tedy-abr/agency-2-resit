import { getHomePageData } from "@/sanity/queries";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default async function Home() {
  const homeData = await getHomePageData();

  return (
    <div className="flex flex-col flex-1 justify-center items-center w-full max-w-5xl mx-auto px-6 md:px-12 py-20 min-h-[calc(100vh-6rem)] relative">
      {/* Centered Glowing Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 md:w-150 h-75 md:h-150 bg-emerald-500/10 rounded-full blur-[80px] md:blur-[120px] z-0 pointer-events-none"></div>

      {homeData ? (
        <main className="flex flex-col items-center text-center w-full z-10 space-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 tracking-tight leading-tight max-w-4xl mx-auto">
            {homeData.name}
          </h1>

          <div className="flex items-center justify-center space-x-4 text-xl md:text-3xl text-slate-300 font-light">
            <span className="text-emerald-500 font-mono font-bold">
              {"</>"}
            </span>
            <h2>{homeData.tagline}</h2>
            <span className="text-emerald-500 font-mono font-bold hidden sm:inline-block">
              {"</>"}
            </span>
          </div>

          <p className="text-lg md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto pt-4">
            {homeData.shortIntroduction}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 pt-10 w-full">
            <Link
              href="/projects"
              className="w-full sm:w-auto px-10 py-4 text-lg bg-linear-to-r from-emerald-500 to-emerald-600 text-white font-medium tracking-wide rounded-full border border-white/10 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:scale-[1.02] transition-all duration-300 flex justify-center items-center"
            >
              View Projects
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto px-10 py-4 text-lg bg-[#030712]/50 backdrop-blur-md border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 hover:border-white/20 font-medium tracking-wide rounded-full transition-all duration-300 flex justify-center items-center group hover:scale-[1.02] shadow-lg"
            >
              About Me
              <FiArrowRight className="ml-3 text-xl group-hover:translate-x-1 transition-transform text-emerald-500" />
            </Link>
          </div>
        </main>
      ) : (
        /* Loading Skeleton */
        <div className="animate-pulse flex flex-col items-center justify-center space-y-8 w-full max-w-3xl mx-auto">
          <div className="h-8 bg-slate-700/50 rounded-full w-1/4"></div>
          <div className="h-24 bg-slate-700/50 rounded-2xl w-full"></div>
          <div className="h-10 bg-slate-700/50 rounded-xl w-2/3"></div>
          <div className="h-20 bg-slate-700/50 rounded-xl w-3/4 mt-4"></div>
          <div className="flex gap-6 pt-8">
            <div className="h-16 bg-slate-700/50 rounded-full w-48"></div>
            <div className="h-16 bg-slate-700/50 rounded-full w-48"></div>
          </div>
        </div>
      )}
    </div>
  );
}
