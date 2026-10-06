import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";

import portraitMain from "@/assets/projects/michelle-rojas-graduation.webp";
import workspace from "@/assets/projects/mrc-beaded-vw-beetle.webp";

const values = [
  {
    number: "01",
    title: "Clarity over complexity",
    description: "The best solutions are often the simplest. I distill ideas to their essence, removing noise to reveal what matters.",
  },
  {
    number: "02",
    title: "Strategy before aesthetics",
    description: "Beautiful design without purpose is decoration. Every visual decision is grounded in strategic thinking.",
  },
  {
    number: "03",
    title: "Long-term thinking",
    description: "I create systems designed to evolve. Brands built on strong foundations adapt and grow with their organizations.",
  },
];

const recognition = [
  { name: "UW Screen Summit", type: "Professionals' Choice Award - Eve AI Skincare", year: "2026" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <p className="eyebrow mb-6">About</p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-ink">
                  Building brands with purpose.
                </h1>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-5">
              <ScrollReveal delay={200}>
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={portraitMain}
                    alt="Michelle Rojas"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="text-xl md:text-2xl text-ink leading-relaxed mb-8 first-letter:text-8xl md:first-letter:text-9xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:mt-0 first-letter:leading-[0.75]">
                I'm Michelle, a digital marketer, designer, and brand strategist based in
                Seattle. I was raised in South King County and began my career as an SEO
                Specialist. For over a decade, I've partnered with organizations, from
                ambitious startups to established institutions, to build brands that
                connect and campaigns that convert. My background spans leading campaigns
                and creative direction for national coffee brands, managing B2B marketing
                operations, and optimizing SEO strategy for agency clients across the
                region.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-ink-light mb-8">
                My approach is rooted in attention to detail and intention. I believe the
                most powerful brands are built on clarity: a deep understanding of who
                you are, who you serve, and how to reach them. That understanding shapes
                everything from a logo to a landing page to the strategy behind a
                campaign. In 2021, I founded Michelle Rojas Collective, a website design
                and SEO consulting practice built on ethics, transparency, and
                principle-led client relationships.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-ink-light mb-8">
                I enjoy learning about marketing and have a lasting passion for brand and
                design. I recently earned my Master's in Communication Leadership and
                Digital Media from the University of Washington, which deepened my
                expertise in strategic communication and digital brand storytelling. I'm
                now looking to bring that combination of hands-on experience and
                strategic thinking to a branding agency.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <p className="eyebrow mb-16 md:mb-20">Approach</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.number} delay={index * 100}>
                <div>
                  <span className="text-sm text-ink-muted tracking-wide">{value.number}</span>
                  <h3 className="font-serif text-2xl text-ink mt-4 mb-4">{value.title}</h3>
                  <p className="text-ink-light">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="section-padding border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <ScrollReveal>
                <p className="eyebrow mb-4">Recognition</p>
                <h2 className="text-ink">Awards</h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="divide-y divide-divider">
                {recognition.map((item, index) => (
                  <ScrollReveal key={item.name} delay={index * 50}>
                    <div className="py-6 flex items-center justify-between">
                      <div>
                        <h4 className="font-serif text-lg text-ink">{item.name}</h4>
                        <p className="text-sm text-ink-muted">{item.type}</p>
                      </div>
                      <span className="text-sm text-ink-muted">{item.year}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <ScrollReveal>
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={workspace}
                    alt="Michelle's workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <ScrollReveal delay={100}>
                <p className="eyebrow mb-4">Beyond Work</p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-ink-light mb-6">
                  Outside of my work, I dedicate my time to family, friends, pets, and
                  the outdoors. I have a genuine interest in art and lifelong learning
                  across a wide range of subjects.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className="text-ink-light">
                  I believe creativity is fueled by curiosity, and that the most
                  meaningful ideas emerge from seeing the world through both your own
                  perspective and the perspectives of others.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream-darker">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-ink mb-6">
                Hiring? Let's Talk.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-ink-light mb-10 max-w-xl mx-auto">
                I bring a decade of digital marketing experience. I'd be glad to hear
                what your company is building next.
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
