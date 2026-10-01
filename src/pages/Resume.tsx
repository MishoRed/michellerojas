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
      "Own end-to-end design, optimization, and maintenance of client websites, delivering high-quality user experiences paired with strong search engine visibility. Selected consulting projects include full website builds, SEO audits, and redesigns for small business clients, balanced alongside full-time roles and graduate program. Lead visual and UX design, translating client goals into engaging, responsive websites building trust and alignment throughout each project. Implement on-page and off-page SEO strategies to drive organic visibility and long-term traffic growth.",
    tools: ["Figma", "Canva", "Adobe Illustrator", "Google Analytics", "Squarespace", "Wix", "WordPress", "Netlify", "GitHub", "Claude AI"],
    achievements: [
      "Built and maintained a 5-year independent consulting practice while working full-time and completing a graduate degree, reflecting strong time management sustained client trust.",
      "Develop wireframes and interactive prototypes in Figma to refine usability, reducing average time-on-task by 20%.",
      "Delivered complimentary website and SEO audits for 5 clients, identifying key opportunities to improve search visibility and user experience.",
      "Partner closely with stakeholders to define project goals, understand user needs, and shape site strategy from concept through launch.",
      "Design low- and high-fidelity wireframes and mockups for a full website redesign, improving user navigation and content accessibility.",
      "Apply technical SEO expertise, including site architecture, keyword strategy, and performance optimization, to strengthen search rankings and user experience.",
    ],
  },
  {
    role: "Digital Marketing Manager",
    company: "Distant Lands Coffee — Renton, Washington",
    period: "January 2025 – August 2026",
    description:
      "Supported Panera Bread Coffee and Sprouted Organic Coffee programs across D2C e-commerce channels, CRM, and social media platforms, driving over $138K in combined revenue growth across email, Walmart, and Shopify channels. Developed tactics and campaigns that drove earned media, audience growth, owned engagement, acquisition, reach, and brand awareness. Applied company standard social voice, tone, style, and creative.",
    tools: ["Shopify", "Omnisend", "Google Ads", "Microsoft Ads", "Walmart Seller Market & Walmart Connect Ad", "Amazon Seller Central", "TikTok", "Meta", "Photoshop", "Claude AI"],
    achievements: [
      "Increased yearly sales per channel; grew Omnisend email revenue by $42K with 58% audience growth, Walmart e-commerce by $30K, Shopify e-commerce by $66K, and Google Ads conversions by 25%.",
      "Built and maintained a comprehensive email and social media campaign calendar, ensuring cross-functional alignment and timely execution for all national coffee brands.",
      "Managed the yearly Digital Marketing Department budget to enhance acquisition while minimizing costs by 13%.",
      "Directed creative concept and setup for global coffee brands' photoshoots and future creative planning.",
      "Created and presented high-level reports on digital channel sales, email campaigns, and promotional development at General Management meetings.",
    ],
  },
  {
    role: "Senior Marketing Specialist",
    company: "Sterlitech — Auburn, Washington",
    period: "December 2023 – April 2024",
    description:
      "Managed daily operations of B2B marketing, reporting directly to the Director of Marketing and presenting initiatives to the Founder and President. Collaborated with international, cross-functional teams across sales, e-Commerce, engineering, and operations to align campaigns with organizational goals.",
    tools: ["NetSuite", "Magento", "Power BI", "GA4", "Google Ads", "Bloom Growth", "Klaviyo", "Microsoft Office"],
    achievements: [
      "Improved email deliverability, open rates, click-through rates, and conversion rates by 48% using Bloom Growth and Klaviyo.",
      "Managed and presented 4 marketing product launches, trade shows, promotions, events, and branded promotional items.",
      "Produced reports using NetSuite, Magento, Power BI, GA4, and Google Ads on campaign performance boosting ROI by 20% in the first quarter.",
      "Trained Marketing Specialists to improve team effectiveness and drive mission forward.",
    ],
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
                <div className="space-y-4">
                  <p className="text-ink-light text-lg leading-relaxed">
                    Digital marketing, design, and brand strategist with a track record of building brand identity, leading creative direction, and driving measurable growth across e-commerce, SEO, and social channels.
                  </p>
                  <p className="text-ink-light text-lg leading-relaxed">
                    Led cross-functional teams and client engagements from strategy through execution, translating brand vision into cohesive campaigns, websites, and creative assets.
                  </p>
                  <p className="text-ink-light text-lg leading-relaxed">
                    Combined an entrepreneurial, detail-oriented approach with strong stakeholder communication to deliver consistent, high-impact results for national and global brands, B2B clients, and small businesses alike.
                  </p>
                </div>
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
                      <p className="text-ink-light mb-3">{item.description}</p>
                      <p className="text-sm text-ink-muted mb-3">
                        <span className="text-ink">Tools:</span>{" "}
                        <em>{item.tools.join(" | ")}</em>
                      </p>
                      <ul className="list-disc list-outside pl-5 space-y-2">
                        {item.achievements.map((achievement) => (
                          <li key={achievement} className="text-ink-light">
                            {achievement}
                          </li>
                        ))}
                      </ul>
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
                Download my resume as a PDF, or reach out if you'd like to
                discuss an opportunity.
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
