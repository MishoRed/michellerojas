import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { projects } from "@/data/projects";

import portraitMain from "@/assets/portrait-main.jpg";
import bornXRaisedHero from "@/assets/gallery/gallery-1.jpg";
import pccCommunityMarketsHero from "@/assets/gallery/gallery-2.jpg";
import eveHero from "@/assets/projects/eve-hero.png";
import paneraBreadHero from "@/assets/projects/panera-bread-hero.png";

const projectImages: Record<string, string> = {
  "born-x-raised": bornXRaisedHero,
  "pcc-community-markets": pccCommunityMarketsHero,
  "eve": eveHero,
  "panera-bread": paneraBreadHero,
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

      {/* Selected Work Section */}
      <section className="section-padding border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Selected Work"
              title="Projects"
              className="mb-16 md:mb-20"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {projects.slice(0, 4).map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 100}>
                <ProjectCard
                  slug={project.slug}
                  title={project.title}
                  category={project.category}
                  year={project.year}
                  image={projectImages[project.slug]}
                  aspectRatio={index % 3 === 0 ? "portrait" : "landscape"}
                  objectPosition={project.slug === "eve" ? "left" : "center"}
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
              <p className="eyebrow mb-4">Have an opportunity in mind?</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-ink mb-6">
                Let's talk about the role.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-ink-light">
                I'm actively open to new opportunities in digital marketing, brand
                strategy, and creative direction. Reach out and let's discuss how I
                could contribute to your company.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div className="lg:col-span-6">
              <ScrollReveal>
                <p className="eyebrow mb-6">About</p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <blockquote className="font-serif text-3xl md:text-4xl text-ink leading-snug mb-8">
                  "Great marketing gets you noticed. Great brand strategy gets you remembered."
                </blockquote>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-ink-light mb-8">
                  Digital Marketing is precise and measurable, using search, social, and email,
                  turning attention to loyalty. Brand strategy is the compass, the quiet
                  conviction, turning a name people recognize into a name people believe in.
                  Together, they build a brand people choose on purpose.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <Link to="/about" className="arrow-link text-ink">
                  Learn more about my approach
                  <ArrowRight size={18} strokeWidth={1.5} />
                </Link>
              </ScrollReveal>
            </div>

            {/* Image */}
            <div className="lg:col-span-5 lg:col-start-8">
              <ScrollReveal delay={200}>
                <div className="aspect-[4/5] bg-cream-darker overflow-hidden">
                  <img
                    src={portraitMain}
                    alt="Michelle Rojas portrait"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
