import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";

const experience = [
  {
    role: "Senior Brand Designer & Strategist",
    company: "Independent Practice",
    period: "2020 – Present",
    description:
      "Lead brand identity and strategy projects for startups, cultural institutions, and established businesses. Define positioning, visual systems, and launch strategy.",
  },
  {
    role: "Lead Designer",
    company: "Pentagram",
    period: "2017 – 2020",
    description:
      "Collaborated with partners and clients on identity systems, editorial design, and digital experiences across technology, arts, and lifestyle sectors.",
  },
  {
    role: "Designer",
    company: "Collins",
    period: "2014 – 2017",
    description:
      "Developed visual identities, campaign systems, and packaging for a range of brands, refining a process grounded in strategy and storytelling.",
  },
];

const education = [
  {
    degree: "MFA in Graphic Design",
    school: "Yale School of Art",
    period: "2012 – 2014",
  },
  {
    degree: "BFA in Communication Design",
    school: "Parsons School of Design",
    period: "2008 – 2012",
  },
];

const capabilities = [
  "Brand Strategy",
  "Visual Identity",
  "Typography",
  "Art Direction",
  "Packaging Design",
  "Editorial Design",
  "Digital Experience",
  "Creative Direction",
];

const recognition = [
  { name: "Communication Arts", type: "Award of Excellence", year: "2024" },
  { name: "Brand New", type: "Best Identities", year: "2023" },
  { name: "AIGA", type: "50 Books/50 Covers", year: "2023" },
  { name: "Design Week", type: "Rising Star", year: "2022" },
];

export default function Resume() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-8">
              <ScrollReveal>
                <p className="eyebrow mb-6">Resume</p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-ink max-w-4xl">
                  Brand strategist and designer with a passion for clarity.
                </h1>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-4">
              <ScrollReveal delay={200}>
                <p className="text-ink-light">
                  New York, NY
                  <br />
                  hello@michellerojas.com
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section-padding border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <ScrollReveal>
                <p className="eyebrow mb-4">Experience</p>
                <h2 className="text-ink">Where I've Worked</h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="divide-y divide-divider">
                {experience.map((item, index) => (
                  <ScrollReveal key={item.role} delay={index * 100}>
                    <div className="py-8 first:pt-0">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                        <h3 className="font-serif text-xl text-ink">{item.role}</h3>
                        <span className="text-sm text-ink-muted">{item.period}</span>
                      </div>
                      <p className="text-sm text-ink-muted mb-3">{item.company}</p>
                      <p className="text-ink-light">{item.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <ScrollReveal>
                <p className="eyebrow mb-4">Education</p>
                <h2 className="text-ink">Academic Background</h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="divide-y divide-divider">
                {education.map((item, index) => (
                  <ScrollReveal key={item.degree} delay={index * 100}>
                    <div className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <h4 className="font-serif text-lg text-ink">{item.degree}</h4>
                        <p className="text-sm text-ink-muted">{item.school}</p>
                      </div>
                      <span className="text-sm text-ink-muted">{item.period}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Recognition */}
      <section className="section-padding border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Skills */}
            <div className="lg:col-span-5">
              <ScrollReveal>
                <p className="eyebrow mb-4">Capabilities</p>
                <h2 className="text-ink mb-10">Skills</h2>
              </ScrollReveal>
              <div className="flex flex-wrap gap-3">
                {capabilities.map((skill, index) => (
                  <ScrollReveal key={skill} delay={index * 50}>
                    <span className="inline-block px-4 py-2 border border-divider text-sm text-ink-light">
                      {skill}
                    </span>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Recognition */}
            <div className="lg:col-span-6 lg:col-start-7">
              <ScrollReveal>
                <p className="eyebrow mb-4">Recognition</p>
                <h2 className="text-ink mb-10">Awards & Press</h2>
              </ScrollReveal>
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

      {/* CTA */}
      <section className="section-padding bg-cream-darker">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-ink mb-6">
                Want the full résumé?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-ink-light mb-10 max-w-xl mx-auto">
                I'm happy to share a complete CV or portfolio deck on request.
                Reach out and I'll send it over.
              </p>
            </ScrollReveal>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ScrollReveal delay={200}>
                <Button asChild>
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    Get in Touch
                    <ArrowRight size={18} strokeWidth={1.5} />
                  </Link>
                </Button>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <Button asChild variant="outline">
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    <Download size={18} strokeWidth={1.5} />
                    Request CV
                  </Link>
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
