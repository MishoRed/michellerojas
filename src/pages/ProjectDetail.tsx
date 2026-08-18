import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Lightbox } from "@/components/shared/Lightbox";
import { projects } from "@/data/projects";

import northlightHero from "@/assets/projects/northlight-hero.jpg";
import bornXRaisedHero from "@/assets/gallery/gallery-1.jpg";
import pccCommunityMarketsHero from "@/assets/gallery/gallery-2.jpg";
import bornXRaised1 from "@/assets/projects/born-x-raised-1.webp";
import bornXRaised2 from "@/assets/projects/born-x-raised-2.webp";
import bornXRaised3 from "@/assets/projects/born-x-raised-3.webp";
import bornXRaised4 from "@/assets/projects/born-x-raised-4.webp";
import pccCommunityMarkets1 from "@/assets/projects/pcc-community-markets-1.png";
import pccCommunityMarkets2 from "@/assets/projects/pcc-community-markets-2.png";
import pccCommunityMarkets3 from "@/assets/projects/pcc-community-markets-3.png";
import pccCommunityMarkets4 from "@/assets/projects/pcc-community-markets-4.png";
import eveHero from "@/assets/projects/eve-hero.png";
import eveLowFidelityFlow from "@/assets/projects/eve-low-fidelity-flow.png";
import eveLowFidelityFlowPicture from "@/assets/projects/eve-low-fidelity-flow-picture.png";
import eveHiFidelityFlowPicture from "@/assets/projects/eve-hi-fidelity-flow-picture.png";
import eveHiFidelityFlow from "@/assets/projects/eve-hi-fidelity-flow.png";
import paneraBreadHero from "@/assets/projects/panera-bread-hero.png";
import paneraBread1 from "@/assets/projects/panera-bread-1.png";
import paneraBread2 from "@/assets/projects/panera-bread-2.png";
import paneraBread3 from "@/assets/projects/panera-bread-3.png";
import paneraBread4 from "@/assets/projects/panera-bread-4.png";
import metaHeroWide from "@/assets/projects/meta-hero-wide.png";
import meta1 from "@/assets/projects/meta-1.png";
import meta2 from "@/assets/projects/meta-2.png";
import meta3 from "@/assets/projects/meta-3.png";
import meta4 from "@/assets/projects/meta-4.png";
import soundcloudHeroWide from "@/assets/projects/soundcloud-hero-wide.png";

const projectImages: Record<string, string[]> = {
  "born-x-raised": [bornXRaisedHero, bornXRaised1, bornXRaised2, bornXRaised3, bornXRaised4],
  "pcc-community-markets": [pccCommunityMarketsHero, pccCommunityMarkets1, pccCommunityMarkets2, pccCommunityMarkets3, pccCommunityMarkets4],
  "eve": [eveHero, eveLowFidelityFlow, eveLowFidelityFlowPicture, eveHiFidelityFlowPicture, eveHiFidelityFlow],
  "panera-bread": [paneraBreadHero, paneraBread1, paneraBread2, paneraBread3, paneraBread4],
  "meta": [metaHeroWide, meta1, meta2, meta3, meta4],
  "soundcloud": [soundcloudHeroWide],
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];
  const images = projectImages[slug!] || [northlightHero];
  // Projects with a dedicated hero image supply more than 3 images; the
  // gallery below uses the remaining ones instead of doubling up the hero.
  const detailImages = images.length > 3 ? images.slice(1) : images;

  return (
    <Layout>
      {/* Hero Image */}
      <section className="pt-24 md:pt-32">
        <div className="w-full">
          <ScrollReveal>
            <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
              <img
                src={images[0]}
                alt={project.title}
                className={`w-full h-full object-cover ${slug === "eve" ? "object-left" : ""}`}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Project Info */}
      <section className="section-padding">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <p className="eyebrow mb-4">Overview</p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="font-serif text-4xl md:text-5xl text-ink mb-8">
                  {project.title}
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-xl text-ink-light leading-relaxed mb-8">
                  {project.overview}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="space-y-6">
                  <div>
                    <p className="eyebrow mb-2">The Challenge</p>
                    <p className="text-ink-light">{project.challenge}</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-2">The Solution</p>
                    <p className="text-ink-light">{project.solution}</p>
                  </div>
                  {project.presentationUrl && (
                    <div>
                      <a
                        href={project.presentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="arrow-link text-ink"
                      >
                        VIEW PRESENTATION
                        <ArrowRight size={18} strokeWidth={1.5} />
                      </a>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 lg:col-start-9">
              <ScrollReveal delay={200}>
                <div className="lg:sticky lg:top-32 space-y-8">
                  <div>
                    <p className="eyebrow mb-2">Client</p>
                    <p className="text-ink">{project.client}</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-2">Industry</p>
                    <p className="text-ink">{project.industry}</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-2">Services</p>
                    <ul className="space-y-1">
                      {project.services.map((service) => (
                        <li key={service} className="text-ink">{service}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow mb-2">Year</p>
                    <p className="text-ink">{project.year}</p>
                  </div>
                  {project.award && (
                    <div>
                      <p className="eyebrow mb-2">Award Winning</p>
                      <p className="text-ink">{project.award}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="pb-16 md:pb-24">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="space-y-8 md:space-y-12">
            {slug === "soundcloud" ? (
            <ScrollReveal>
              <div className="max-w-3xl mx-auto">
                <iframe
                  width="100%"
                  height="450"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay; encrypted-media"
                  title="The Thabbs - Yay Energy on SoundCloud"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2106833628&color=%23e2d9d5&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                />
                <div
                  style={{
                    fontSize: "10px",
                    color: "#cccccc",
                    lineBreak: "anywhere",
                    wordBreak: "normal",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                    fontWeight: 100,
                  }}
                >
                  <a
                    href="https://soundcloud.com/misho-red"
                    title="Michelle"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#cccccc", textDecoration: "none" }}
                  >
                    Michelle
                  </a>
                  {" · "}
                  <a
                    href="https://soundcloud.com/misho-red/the-thabbs-yay-energy"
                    title="The Thabbs - Yay Energy"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#cccccc", textDecoration: "none" }}
                  >
                    The Thabbs - Yay Energy
                  </a>
                </div>
              </div>
            </ScrollReveal>
            ) : (
            <>
            {/* Full Width Image */}
            <ScrollReveal>
              <button
                onClick={() => openLightbox(0)}
                className={`block w-full text-left overflow-hidden cursor-pointer group ${slug === "born-x-raised" ? "aspect-square" : "aspect-[16/10]"} ${slug === "meta" ? "bg-cream-darker" : ""}`}
                style={slug === "meta" ? { aspectRatio: "3332 / 1554" } : undefined}
                aria-label={`Open ${project.title} gallery image 1 in lightbox`}
              >
                <img
                  src={detailImages[0]}
                  alt={`${project.title} detail`}
                  className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.02] ${slug === "meta" ? "object-contain" : "object-cover"} ${slug === "born-x-raised" ? "object-[50%_80%]" : ""}`}
                />
              </button>
            </ScrollReveal>

            {/* Two Column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <ScrollReveal>
                <button
                  onClick={() => openLightbox(1)}
                  className={`block w-full text-left aspect-[4/5] overflow-hidden cursor-pointer group ${slug === "meta" ? "bg-cream-darker" : ""}`}
                  style={slug === "meta" ? { aspectRatio: "2522 / 1570" } : undefined}
                  aria-label={`Open ${project.title} gallery image 2 in lightbox`}
                >
                  <img
                    src={detailImages[1]}
                    alt={`${project.title} detail`}
                    className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.02] ${slug === "meta" ? "object-cover" : slug === "panera-bread" ? "object-contain bg-cream-darker" : "object-cover"}`}
                  />
                </button>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <button
                  onClick={() => openLightbox(2)}
                  className={`block w-full text-left aspect-[4/5] overflow-hidden cursor-pointer group ${slug === "meta" ? "bg-cream-darker" : ""}`}
                  style={slug === "meta" ? { aspectRatio: "2522 / 1570" } : undefined}
                  aria-label={`Open ${project.title} gallery image 3 in lightbox`}
                >
                  <img
                    src={detailImages[2]}
                    alt={`${project.title} detail`}
                    className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.02] ${slug === "panera-bread" || slug === "meta" ? "object-contain bg-cream-darker" : "object-cover"}`}
                  />
                </button>
              </ScrollReveal>
            </div>

            {/* Full Width Image */}
            <ScrollReveal>
              <button
                onClick={() => openLightbox(detailImages[3] ? 3 : 0)}
                className={`block w-full text-left overflow-hidden cursor-pointer group ${slug === "born-x-raised" ? "aspect-square" : "aspect-[21/9]"} ${slug === "meta" ? "bg-cream-darker" : ""}`}
                style={slug === "meta" ? { aspectRatio: "3152 / 1294" } : undefined}
                aria-label={`Open ${project.title} gallery image 4 in lightbox`}
              >
                <img
                  src={detailImages[3] ?? detailImages[0]}
                  alt={`${project.title} detail`}
                  className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.02] ${slug === "meta" ? "object-contain" : "object-cover"} ${slug === "born-x-raised" ? "object-[50%_80%]" : ""}`}
                />
              </button>
            </ScrollReveal>
            </>
            )}
          </div>
        </div>
      </section>

      <Lightbox
        images={detailImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
        alt={project.title}
      />

      {/* Next Project */}
      <section className="border-t border-divider">
        <Link 
          to={`/work/${nextProject.slug}`}
          className="group block"
        >
          <div className="container-editorial px-6 md:px-12 lg:px-20 py-16 md:py-24">
            <div className="flex items-center justify-between">
              <div>
                <p className="eyebrow mb-4">Next Project</p>
                <h2 className="font-serif text-3xl md:text-4xl text-ink group-hover:opacity-70 transition-opacity duration-300">
                  {nextProject.title}
                </h2>
              </div>
              <ArrowRight 
                size={32} 
                strokeWidth={1} 
                className="text-ink transition-transform duration-300 group-hover:translate-x-2" 
              />
            </div>
          </div>
        </Link>
      </section>

      {/* Back Link */}
      <section className="bg-cream-dark">
        <div className="container-editorial px-6 md:px-12 lg:px-20 py-8">
          <Link 
            to="/work" 
            className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors duration-300"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
            Back to all projects
          </Link>
        </div>
      </section>
    </Layout>
  );
}
