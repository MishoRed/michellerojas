import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Lightbox } from "@/components/shared/Lightbox";
import { projects } from "@/data/projects";

import northlightHero from "@/assets/projects/northlight-hero.jpg";
import meridianHero from "@/assets/projects/meridian-hero.jpg";
import emberHero from "@/assets/projects/ember-hero.jpg";
import stillwaterHero from "@/assets/projects/stillwater-hero.jpg";
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

const projectImages: Record<string, string[]> = {
  "born-x-raised": [bornXRaisedHero, bornXRaised1, bornXRaised2, bornXRaised3, bornXRaised4],
  "pcc-community-markets": [pccCommunityMarketsHero, pccCommunityMarkets1, pccCommunityMarkets2, pccCommunityMarkets3, pccCommunityMarkets4],
  "eve": [emberHero, northlightHero, stillwaterHero],
  "stillwater-journal": [stillwaterHero, emberHero, meridianHero],
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
                className="w-full h-full object-cover"
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
            {/* Full Width Image */}
            <ScrollReveal>
              <button
                onClick={() => openLightbox(0)}
                className={`block w-full text-left overflow-hidden cursor-pointer group ${slug === "born-x-raised" ? "aspect-square" : "aspect-[16/10]"}`}
                aria-label={`Open ${project.title} gallery image 1 in lightbox`}
              >
                <img
                  src={detailImages[0]}
                  alt={`${project.title} detail`}
                  className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] ${slug === "born-x-raised" ? "object-[50%_80%]" : ""}`}
                />
              </button>
            </ScrollReveal>

            {/* Two Column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <ScrollReveal>
                <button
                  onClick={() => openLightbox(1)}
                  className="block w-full text-left aspect-[4/5] overflow-hidden cursor-pointer group"
                  aria-label={`Open ${project.title} gallery image 2 in lightbox`}
                >
                  <img
                    src={detailImages[1]}
                    alt={`${project.title} detail`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </button>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <button
                  onClick={() => openLightbox(2)}
                  className="block w-full text-left aspect-[4/5] overflow-hidden cursor-pointer group"
                  aria-label={`Open ${project.title} gallery image 3 in lightbox`}
                >
                  <img
                    src={detailImages[2]}
                    alt={`${project.title} detail`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </button>
              </ScrollReveal>
            </div>

            {/* Full Width Image */}
            <ScrollReveal>
              <button
                onClick={() => openLightbox(detailImages[3] ? 3 : 0)}
                className={`block w-full text-left overflow-hidden cursor-pointer group ${slug === "born-x-raised" ? "aspect-square" : "aspect-[21/9]"}`}
                aria-label={`Open ${project.title} gallery image 4 in lightbox`}
              >
                <img
                  src={detailImages[3] ?? detailImages[0]}
                  alt={`${project.title} detail`}
                  className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] ${slug === "born-x-raised" ? "object-[50%_80%]" : ""}`}
                />
              </button>
            </ScrollReveal>
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
