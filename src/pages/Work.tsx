import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { projects } from "@/data/projects";

import bornXRaisedHero from "@/assets/gallery/gallery-1.jpg";
import pccCommunityMarketsHero from "@/assets/gallery/gallery-2.jpg";
import eveHero from "@/assets/projects/eve-hero.png";
import paneraBreadHero from "@/assets/projects/panera-bread-hero.png";
import metaHero from "@/assets/projects/meta-hero.jpeg";
import soundcloudHero from "@/assets/projects/soundcloud-hero.png";
import kekePalmerMagazineCover from "@/assets/projects/keke-palmer-magazine-cover-original.png";
import paneraBreadCoffeeHero from "@/assets/projects/panera-bread-coffee-hero.webp";
import sproutedOrganicCoffeeHero from "@/assets/projects/sprouted-organic-coffee-hero.png";
import cesarCaroHero from "@/assets/projects/cesar-caro-hero.png";

const projectImages: Record<string, string> = {
  "born-x-raised": bornXRaisedHero,
  "pcc-community-markets": pccCommunityMarketsHero,
  "eve": eveHero,
  "panera-bread": paneraBreadHero,
  "meta": metaHero,
  "soundcloud": soundcloudHero,
  "baby-this-is-keke-palmer": kekePalmerMagazineCover,
  "panera-bread-coffee": paneraBreadCoffeeHero,
  "sprouted-organic-coffee": sproutedOrganicCoffeeHero,
  "cesar-caro": cesarCaroHero,
};

const customAspectSlugs = ["meta", "soundcloud", "panera-bread-coffee"];
const containFitSlugs = ["meta", "soundcloud", "panera-bread-coffee"];
// These heroes don't fit the shared 4/3 frame without cropping or
// letterboxing, so they get a custom aspect ratio matching their own photo
// instead, at which point cover and contain fit render identically.
const exactAspectRatios: Record<string, string> = {
  "sprouted-organic-coffee": "2550 / 1060",
  "baby-this-is-keke-palmer": "1612 / 2150",
  "cesar-caro": "3414 / 1546",
};

export default function Work() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <p className="eyebrow mb-6">Portfolio</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-ink max-w-4xl">Selected Projects</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-x-12 md:gap-y-24 lg:gap-x-16">
            {projects.map((project, index) => (
              <ScrollReveal 
                key={project.slug} 
                delay={index * 100}
                className={index % 3 === 1 ? "md:mt-24" : ""}
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <ScrollReveal>
              <p className="eyebrow mb-4">Have something in mind?</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-ink mb-6">
                Let's discuss your project.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-ink-light">
                I'm always open to exploring new collaborations. 
                Reach out to discuss how we might work together.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
