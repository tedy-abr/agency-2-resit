import { getAboutPageData } from "@/sanity/queries";
import Image from "next/image";

export const metadata = {
  title: "About Me | Essayas Abraham Hailu",
  description:
    "Learn more about my journey, experience, and the tech stack I use as a Front-End Developer.",
};

export default async function AboutPage() {
  const aboutData = await getAboutPageData();

  return (
    <div className="flex flex-col flex-1 items-center w-full max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 min-h-[calc(100vh-6rem)] relative">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 md:right-20 w-75 md:w-125 h-75 md:h-125` bg-emerald-500/10 rounded-full blur-[100px] md:blur-[150px] z-0 pointer-events-none"></div>

      {aboutData ? (
        <main className="w-full z-10 flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Left Column: Image */}
          <div className="w-full max-w-md mx-auto lg:max-w-none lg:w-5/12 shrink-0 relative mt-4 lg:sticky lg:top-32 h-fit">
            {aboutData.profileImage?.asset?.url ? (
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/20 border border-white/10 transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src={aboutData.profileImage.asset.url}
                  alt={aboutData.profileImage.alt}
                  width={600}
                  height={800}
                  className="w-full h-auto aspect-4/5 object-cover"
                  priority
                />
              </div>
            ) : (
              /* Image Placeholder if not uploaded */
              <div className="w-full aspect-4/5 rounded-2xl bg-[#030712]/50 border border-white/5 flex items-center justify-center p-2 backdrop-blur-sm">
                <div className="w-full h-full rounded-xl border border-dashed border-slate-700 flex items-center justify-center text-slate-500">
                  No Image Uploaded
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Text content */}
          <div className="flex-1 flex flex-col space-y-10 w-full">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 tracking-tight mb-6">
                About Me
              </h1>
              <div className="w-20 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
            </div>

            <div className="space-y-8 text-lg md:text-xl text-slate-300 leading-relaxed font-light">
              {aboutData.bio && (
                <p className="whitespace-pre-wrap">{aboutData.bio}</p>
              )}
              {aboutData.background && (
                <p className="whitespace-pre-wrap">{aboutData.background}</p>
              )}
            </div>

            {/* Skills Section */}
            {aboutData.skills && aboutData.skills.length > 0 && (
              <div className="pt-8 border-t border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="text-emerald-500 mr-3">{"</>"}</span> Tech
                  Stack
                </h3>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {aboutData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm md:text-base font-medium text-slate-300 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:-translate-y-0.5 transition-all cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      ) : (
        /* Loading Skeleton */
        <div className="animate-pulse flex flex-col lg:flex-row items-start gap-12 lg:gap-20 w-full mt-4">
          <div className="w-full lg:w-5/12 aspect-4/5 bg-slate-800/50 rounded-2xl"></div>
          <div className="flex-1 flex flex-col space-y-10 w-full">
            <div className="space-y-6">
              <div className="h-14 bg-slate-800/50 rounded-lg w-1/2"></div>
              <div className="w-20 h-1.5 bg-slate-800/50 rounded-full"></div>
            </div>
            <div className="space-y-4">
              <div className="h-5 bg-slate-800/50 rounded w-full"></div>
              <div className="h-5 bg-slate-800/50 rounded w-full"></div>
              <div className="h-5 bg-slate-800/50 rounded w-3/4"></div>
            </div>
            <div className="space-y-4 pt-4">
              <div className="h-5 bg-slate-800/50 rounded w-full"></div>
              <div className="h-5 bg-slate-800/50 rounded w-full"></div>
              <div className="h-5 bg-slate-800/50 rounded w-5/6"></div>
            </div>
            <div className="pt-8 border-t border-white/10">
              <div className="h-8 bg-slate-800/50 rounded w-40 mb-6"></div>
              <div className="flex flex-wrap gap-4">
                <div className="h-10 bg-slate-800/50 rounded-full w-24"></div>
                <div className="h-10 bg-slate-800/50 rounded-full w-32"></div>
                <div className="h-10 bg-slate-800/50 rounded-full w-28"></div>
                <div className="h-10 bg-slate-800/50 rounded-full w-20"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
