import { getContactPageData } from "@/sanity/queries";
import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt, FaGithub } from "react-icons/fa";

export const metadata = {
  title: "Contact | Essayas Abraham Hailu",
  description:
    "Get in touch with me for work opportunities, collaborations, or just to say hi.",
};

export default async function ContactPage() {
  const data = await getContactPageData();

  return (
    <div className="flex flex-col flex-1 items-center justify-center w-full max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24 min-h-[calc(100vh-6rem)] relative">
      {/* Central Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 md:w-150 h-75 md:h-150 bg-emerald-500/10 rounded-full blur-[100px] md:blur-[150px] z-0 pointer-events-none"></div>

      <main className="w-full z-10 flex flex-col items-center text-center">
        {/* Header */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 tracking-tight mb-6">
          Let&apos;s Connect
        </h1>
        <div className="w-20 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)] mb-12 md:mb-16"></div>

        {data ? (
          <div className="w-full flex flex-col items-center">
            {/* Introduction */}
            {data.introduction && (
              <p className="text-lg md:text-2xl text-slate-300 leading-relaxed font-light whitespace-pre-wrap max-w-2xl mb-16 md:mb-24">
                {data.introduction}
              </p>
            )}

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
              {/* Email Card */}
              {data.email && (
                <a
                  href={`mailto:${data.email}`}
                  className="flex flex-col items-center p-8 md:p-10 rounded-3xl bg-white/2 border border-white/5 shadow-xl backdrop-blur-md hover:bg-white/4 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2 group"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                    <FaEnvelope className="text-3xl text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Email
                  </h3>
                  <span className="text-slate-400 font-light truncate w-full group-hover:text-emerald-400 transition-colors">
                    {data.email}
                  </span>
                </a>
              )}

              {/* Location Card */}
              {data.location && (
                <div className="flex flex-col items-center p-8 md:p-10 rounded-3xl bg-white/2 border border-white/5 shadow-xl backdrop-blur-md hover:bg-white/4 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2 group">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                    <FaMapMarkerAlt className="text-3xl text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Location
                  </h3>
                  <span className="text-slate-400 font-light truncate w-full group-hover:text-emerald-400 transition-colors">
                    {data.location}
                  </span>
                </div>
              )}

              {/* GitHub Card */}
              {data.githubUrl && (
                <Link
                  href={data.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-8 md:p-10 rounded-3xl bg-white/2 border border-white/5 shadow-xl backdrop-blur-md hover:bg-white/4 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2 group"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                    <FaGithub className="text-3xl text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    GitHub
                  </h3>
                  <span className="text-slate-400 font-light truncate w-full group-hover:text-emerald-400 transition-colors">
                    {data.githubUrl.replace(/^https?:\/\/(www\.)?/, "")}
                  </span>
                </Link>
              )}
            </div>
          </div>
        ) : (
          /* Loading Skeleton */
          <div className="w-full flex flex-col items-center">
            <div className="h-8 bg-slate-800/50 rounded-lg w-full max-w-2xl mb-24 animate-pulse"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex flex-col items-center p-10 rounded-3xl bg-slate-800/30 animate-pulse"
                >
                  <div className="w-20 h-20 rounded-full bg-slate-800/50 mb-6"></div>
                  <div className="h-6 bg-slate-800/50 rounded w-24 mb-3"></div>
                  <div className="h-5 bg-slate-800/50 rounded w-32"></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
