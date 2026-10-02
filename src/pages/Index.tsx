import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

import portraitMain from "@/assets/portrait-main.jpg";
import bornXRaisedHero from "@/assets/gallery/gallery-1.jpg";
import pccCommunityMarketsHero from "@/assets/gallery/gallery-2.jpg";
import eveHero from "@/assets/projects/eve-hero.png";
import paneraBreadHero from "@/assets/projects/panera-bread-hero.png";
import metaHero from "@/assets/projects/meta-hero.jpeg";
import soundcloudHero from "@/assets/projects/soundcloud-hero.png";
import kekePalmerMagazineCover from "@/assets/projects/keke-palmer-magazine-cover-original.png";
import paneraBreadCoffeeHero from "@/assets/projects/panera-bread-coffee-hero.webp";
import sproutedOrganicCoffeeGallery from "@/assets/projects/sprouted-organic-coffee-gallery.png";
import cesarCaroHero from "@/assets/projects/cesar-caro-hero.png";
import acaciaTransitionsLogo from "@/assets/projects/acacia-transitions-logo.png";

const projectImages: Record<string, string> = {
  "born-x-raised": bornXRaisedHero,
  "pcc-community-markets": pccCommunityMarketsHero,
  "eve": eveHero,
  "panera-bread": paneraBreadHero,
  "meta": metaHero,
  "soundcloud": soundcloudHero,
  "baby-this-is-keke-palmer": kekePalmerMagazineCover,
  "panera-bread-coffee": paneraBreadCoffeeHero,
  "sprouted-organic-coffee": sproutedOrganicCoffeeGallery,
  "cesar-caro": cesarCaroHero,
  "acacia-transitions": acaciaTransitionsLogo,
};

const customAspectSlugs = ["meta", "soundcloud", "panera-bread-coffee", "acacia-transitions"];
const containFitSlugs = ["meta", "soundcloud", "panera-bread-coffee", "acacia-transitions"];
// These heroes don't fit the shared 4/3 frame without cropping or
// letterboxing, so they get a custom aspect ratio matching their own photo
// instead, at which point cover and contain fit render identically.
const exactAspectRatios: Record<string, string> = {
  "sprouted-organic-coffee": "560 / 548",
  "baby-this-is-keke-palmer": "1612 / 2150",
  "cesar-caro": "3414 / 1546",
};

const services = [
  {
    title: "Website Design",
    description: "Responsive, intuitive experiences that turn visitors into engaged, returning users.",
  },
  {
    title: "Brand Strategy",
    description: "Strategic positioning and storytelling that set a brand apart for the long run.",
  },
  {
    title: "Creative Campaign",
    description: "Bold visuals, compelling narrative, and emotional resonance brought to life.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container-editorial px-6 md:px-12 lg:px-20 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Text Content */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <ScrollReveal>
                <p className="eyebrow mb-6">Digital Marketing, Design and Brand Strategy</p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-ink mb-8">
                  Michelle Rojas
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-lg md:text-xl text-ink-light max-w-xl mb-10">
                  Digital marketer, designer, and brand strategist building thoughtful identities for ambitious brands with precision.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Link
                  to="/work"
                  className="arrow-link text-ink"
                >
                  View Selected Work
                  <ArrowRight size={18} strokeWidth={1.5} />
                </Link>
              </ScrollReveal>
            </div>

            {/* Image */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <ScrollReveal delay={200}>
                <div className="aspect-[4/5] bg-cream-darker overflow-hidden">
                  <img
                    src={portraitMain}
                    alt="Michelle Rojas - Designer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Scroll Indicator */}
          <ScrollReveal delay={500} className="hidden lg:block mt-24">
            <div className="flex items-center gap-3 text-ink-muted">
              <div className="w-px h-12 bg-divider origin-top animate-line-grow" />
              <ArrowDown size={16} strokeWidth={1.5} className="animate-bounce" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Portfolio"
              title="Selected Projects"
              className="mb-16 md:mb-20"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 lg:gap-x-16">
            {[0, 1].map((column) => (
              <div key={column} className={cn("flex flex-col gap-y-16 md:gap-y-24", column === 1 && "md:mt-24")}>
                {projects
                  .filter((_, index) => index % 2 === column)
                  .map((project) => {
                    const index = projects.indexOf(project);
                    return (
                      <ScrollReveal key={project.slug} delay={index * 100}>
                        <ProjectCard
                          slug={project.slug}
                          title={project.title}
                          category={project.category}
                          year={project.year}
                          image={projectImages[project.slug]}
                          aspectRatio={index % 2 === 0 ? "landscape" : "portrait"}
                          objectPosition={project.slug === "eve" || project.slug === "pcc-community-markets" ? "left" : "center"}
                          objectFit={containFitSlugs.includes(project.slug) ? "contain" : "cover"}
                          customAspectRatio={exactAspectRatios[project.slug] ?? (customAspectSlugs.includes(project.slug) ? "4 / 3" : undefined)}
                        />
                      </ScrollReveal>
                    );
                  })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Services"
              title="What I Do"
              className="mb-16 md:mb-20"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <div className="border-t border-divider pt-8">
                  <h3 className="font-serif text-2xl text-ink mb-4">{service.title}</h3>
                  <p className="text-ink-light">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-16 md:mt-20">
            <a
              href="https://michellerojascollective.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="arrow-link text-ink"
            >
              Visit Michelle Rojas Collective
              <ArrowRight size={18} strokeWidth={1.5} />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-cream-darker">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-ink mb-6">
                Let's create something{" "}
                <em className="font-serif italic">meaningful.</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-ink-light mb-10 max-w-xl mx-auto">
                Currently accepting new projects for Q4 2026. I'd love to hear about
                what you're building.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Button asChild>
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Contact Me
                  <ArrowRight size={18} strokeWidth={1.5} />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
