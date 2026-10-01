import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";

const resumePdfUrl = "/michelle-rojas-resume.pdf";

const experience = [
  {
    role: "Website Design & SEO Consultant",
    company: "Michelle Rojas Collective — Seattle, Washington",
    period: "January 2021 – Current",
    description:
      "Own end-to-end design, optimization, and maintenance of client websites, delivering high-quality user experiences paired with strong search engine visibility. Selected consulting projects include full website builds, SEO audits, and redesigns for small business clients, balanced alongside full-time roles and a graduate program. Lead visual and UX design, translating client goals into engaging, responsive websites that build trust and alignment throughout each project. Implement on-page and off-page SEO strategies to drive organic visibility and long-term traffic growth. Develop wireframes and interactive prototypes in Figma to refine usability, reducing average time-on-task by 20%. Delivered complimentary website and SEO audits for 5 clients, identifying key opportunities to improve search visibility and user experience.",
  },
  {
    role: "Digital Marketing Manager",
    company: "Distant Lands Coffee — Renton, Washington",
    period: "January 2025 – August 2026",
    description:
      "Supported Panera Bread Coffee and Sprouted Organic Coffee programs across D2C e-commerce channels, CRM, and social media platforms, driving over $138K in combined revenue growth across email, Walmart, and Shopify channels. Developed tactics and campaigns that drove earned media, audience growth, owned engagement, acquisition, reach, and brand awareness. Applied company standard social voice, tone, style, and creative. Increased yearly sales per channel, growing Omnisend email revenue by $42K with 58% audience growth, Walmart e-commerce by $30K, Shopify e-commerce by $66K, and Google Ads conversions by 25%. Built and maintained a comprehensive email and social media campaign calendar, ensuring cross-functional alignment and timely execution for all national coffee brands. Managed the yearly Digital Marketing Department budget to enhance acquisition while minimizing costs by 13%.",
  },
  {
    role: "Senior Marketing Specialist",
    company: "Sterlitech — Auburn, Washington",
    period: "December 2023 – April 2024",
    description:
      "Managed daily operations of B2B marketing, reporting directly to the Director of Marketing and presenting initiatives to the Founder and President. Collaborated with international, cross-functional teams across sales, e-commerce, engineering, and operations to align campaigns with organizational goals. Improved email deliverability, open rates, click-through rates, and conversion rates by 48% using Bloom Growth and Klaviyo. Managed and presented 4 marketing product launches, trade shows, promotions, events, and branded promotional items. Produced reports using NetSuite, Magento, Power BI, GA4, and Google Ads on campaign performance, boosting ROI by 20% in the first quarter. Trained Marketing Specialists to improve team effectiveness and drive the mission forward.",
  },
  {
    role: "SEO Specialist",
    company: "Portent — Seattle, Washington",
    period: "February 2022 – April 2023",
    description:
      "Optimized brand visibility by producing high-level SEO deliverables for stakeholders across 14 client campaigns. Led advanced SEO strategy, consulting, and technical audits, including keyword research, SERP analysis, backlink analysis, and internal linking, in a fast-paced agency environment. Achieved SEO quality results within given timeframes, resulting in 25%+ improvement in stakeholder campaigns. Drove an average 68% increase in organic traffic and ranking performance across 14 client campaigns. Completed 9 comprehensive technical SEO audits, identifying and resolving site architecture and indexing issues for agency clients. Championed numerous projects from strategy to execution, partnering with cross-functional teams to deliver measurable visibility gains for agency clients.",
  },
  {
    role: "LATAM Sales Specialist",
    company: "PACCAR Parts — Renton, Washington",
    period: "April 2018 – April 2020",
    description:
      "Managed revenue growth by incentivizing top sales performance, outlining high-volume sales data, and tracking industry trends in support of the Latin American and international sales teams. Generated accurate daily and monthly million-dollar forecasts and produced inclusive reports to support informed business decisions. Optimized sales team presentations and organized executive annual business events. Attended quarterly training classes to strengthen sales, parts, and overall company knowledge. Served as a key collaborator on large dealer orders exceeding $100K, fostering cohesive workflow between marketing and sales staff. Streamlined creation and distribution of memos to senior leadership by successfully navigating DocuSign.",
  },
];

const education = [
  {
    degree: "Master of Communication, Digital Media and Leadership",
    school: "University of Washington",
    period: "September 2024 – June 2026",
  },
];

const capabilities = [
  "Brand Strategy & Positioning",
  "Creative Direction",
  "Digital Marketing",
  "Website Design",
  "SEO",
  "E-Commerce",
  "Email Marketing",
  "Campaign Strategy",
  "UX Design",
  "Social Media Growth",
  "Leadership",
  "Executive Reporting",
  "Problem-Solving",
  "Product Marketing",
  "Brand Partnerships",
  "English / Spanish",
];

const recognition = [
  { name: "Omnisend Email Revenue", type: "+$42K with 58% audience growth", year: "Distant Lands" },
  { name: "Shopify E-Commerce", type: "+$66K growth", year: "Distant Lands" },
  { name: "Google Ads Conversions", type: "25% lift", year: "Distant Lands" },
  { name: "Email Deliverability & Conversion", type: "48% improvement", year: "Sterlitech" },
  { name: "SEO Campaign Performance", type: "25%+ improvement", year: "Portent" },
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
                  Digital Marketer, Driven by Creative Branding.
                </h1>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-4">
              <ScrollReveal delay={200}>
                <p className="text-ink-light">
                  Seattle, Washington
                  <br />
                  <a href="mailto:rojasmichellec@gmail.com" className="hover:text-ink transition-colors">
                    rojasmichellec@gmail.com
                  </a>
                  <br />
                  <a
                    href="https://linkedin.com/in/michelle-rojas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ink transition-colors"
                  >
                    linkedin.com/in/michelle-rojas
                  </a>
                </p>
                <Button asChild className="mt-6">
                  <a
                    href={resumePdfUrl}
                    download="Michelle-Rojas-Resume.pdf"
                    className="inline-flex items-center gap-2"
                  >
                    <Download size={18} strokeWidth={1.5} />
                    Download Resume (PDF)
                  </a>
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Career Summary */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <ScrollReveal>
                <p className="eyebrow mb-4">Career Summary</p>
                <h2 className="text-ink">At a Glance</h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ScrollReveal>
                <p className="text-ink-light text-lg leading-relaxed">
                  Digital marketing, design, and brand strategist with a track record of building brand identity, leading creative direction, and driving measurable growth across e-commerce, SEO, and social channels. Led cross-functional teams and client engagements from strategy through execution, translating brand vision into cohesive campaigns, websites, and creative assets. Combined an entrepreneurial, detail-oriented approach with strong stakeholder communication to deliver consistent, high-impact results for national and global brands, B2B clients, and small businesses alike.
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
                      <a
                        href={resumePdfUrl}
                        download="Michelle-Rojas-Resume.pdf"
                        className="inline-block mt-3 text-sm text-ink-muted underline underline-offset-4 hover:text-ink transition-colors"
                      >
                        Download to view more
                      </a>
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
                <p className="eyebrow mb-4">Areas of Expertise</p>
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
                <p className="eyebrow mb-4">Selected Results</p>
                <h2 className="text-ink mb-10">Key Achievements</h2>
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
                Download the full Resume as a PDF, or reach out if you'd like to
                discuss a project.
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
                  <a
                    href={resumePdfUrl}
                    download="Michelle-Rojas-Resume.pdf"
                    className="inline-flex items-center gap-2"
                  >
                    <Download size={18} strokeWidth={1.5} />
                    Download Resume (PDF)
                  </a>
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
