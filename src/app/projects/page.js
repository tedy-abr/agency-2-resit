import { getProjectsPageData } from "@/sanity/queries";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const metadata = {
  title: "Projects | Essayas Abraham Hailu",
  description: "A selection of my recent front-end development projects.",
};

export default async function ProjectsPage() {
  const data = await getProjectsPageData();

  return (
    <div className="flex flex-col flex-1 items-center w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 min-h-[calc(100vh-6rem)] relative">
      {/* Central Background Glow */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-75 md:w-150 h-75 md:h-150 bg-emerald-500/10 rounded-full blur-[100px] md:blur-[150px] z-0 pointer-events-none"></div>

      <main className="w-full z-10 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 tracking-tight">
            Featured Projects
          </h1>
          <div className="w-24 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)] mx-auto mb-8"></div>

          {data?.introduction && (
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light whitespace-pre-wrap mt-8">
              {data.introduction}
            </p>
          )}
        </div>

        {/* Projects List */}
        {data?.projects && data.projects.length > 0 ? (
          <div className="w-full space-y-32 md:space-y-40">
            {data.projects.map((project, index) => {
              // Alternate layout: even index = image left, odd index = image right
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-16`}
                >
                  {/* Image Container */}
                  <div className="w-full lg:w-1/2 relative group">
                    {/* Hover Glow Behind Image */}
                    <div className="absolute -inset-2 bg-linear-to-r from-emerald-500/20 to-emerald-900/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#030712]/50 backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-2">
                      {project.image?.asset?.url ? (
                        <Image
                          src={project.image.asset.url}
                          alt={project.image.alt || project.title}
                          width={800}
                          height={600}
                          className="w-full h-auto aspect-video object-cover"
                          priority={index === 0}
                        />
                      ) : (
                        <div className="w-full aspect-video bg-slate-800/50 flex items-center justify-center text-slate-500">
                          No Image Available
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="w-full lg:w-1/2 flex flex-col space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                      {project.title}
                    </h2>

                    {/* Glassmorphic Description Card */}
                    <div className="p-6 md:p-8 rounded-2xl bg-white/3 border border-white/5 shadow-xl backdrop-blur-md relative overflow-hidden">
                      {/* Subtle inner glow */}
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
                      <p className="text-lg text-slate-300 leading-relaxed font-light whitespace-pre-wrap relative z-10">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Tags */}
                    {project.technologies &&
                      project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium tracking-wide"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                    {/* Links */}
                    <div className="flex flex-wrap gap-6 pt-4">
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-white font-medium bg-emerald-500 hover:bg-emerald-600 px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:-translate-y-1"
                        >
                          View Live <FaExternalLinkAlt size={14} />
                        </Link>
                      )}

                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-slate-300 hover:text-white font-medium bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-1"
                        >
                          Source Code <FaGithub size={18} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Loading / Empty State Skeleton */
          <div className="w-full space-y-32">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="animate-pulse flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
              >
                <div className="w-full lg:w-1/2 aspect-video bg-slate-800/50 rounded-2xl"></div>
                <div className="w-full lg:w-1/2 space-y-8">
                  <div className="h-10 bg-slate-800/50 rounded-lg w-3/4"></div>
                  <div className="h-40 bg-slate-800/50 rounded-2xl w-full"></div>
                  <div className="flex gap-3">
                    <div className="h-8 bg-slate-800/50 rounded-full w-20"></div>
                    <div className="h-8 bg-slate-800/50 rounded-full w-24"></div>
                    <div className="h-8 bg-slate-800/50 rounded-full w-28"></div>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <div className="h-12 bg-slate-800/50 rounded-full w-36"></div>
                    <div className="h-12 bg-slate-800/50 rounded-full w-44"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
