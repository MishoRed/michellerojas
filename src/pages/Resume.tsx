import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import resumePdf from "@/assets/michelle-rojas-resume.pdf.asset.json";

const experience = [
  {
    role: "Digital Marketing Manager",
    company: "Distant Lands Coffee — Renton, Washington",
    period: "January 2025 – August 2026",
    description:
      "Lead branded national coffee programs across D2C e-commerce, CRM, and social media, driving audience growth, engagement, acquisition, and brand awareness through data-informed campaigns. Serve as creative director for Panera Coffee and Sprouted Organic Coffee, shaping brand tone, voice, and visual identity across photoshoots and email campaigns. Direct execution across Shopify, Omnisend, Google Ads, Microsoft Ads, Walmart Seller Market/Walmart Connect, Amazon Seller Central, TikTok, and Meta. Manage and maintain the yearly Digital Marketing Department budget to enhance acquisition while minimizing costs. Drove growth across channels: $42K increase in Omnisend email revenue with 58% audience growth, $30K growth in Walmart e-commerce, $66K growth in Shopify e-commerce, and a 25% lift in Google Ads conversions. Develop and present high-level reports on digital channel performance, campaign results, and growth opportunities at General Management meetings.",
  },
  {
    role: "Senior Marketing Specialist",
    company: "Sterlitech — Auburn, Washington",
    period: "December 2023 – April 2024",
    description:
      "Owned daily operations of B2B marketing and brand presence, reporting directly to the Director of Marketing and presenting initiatives to the Founder and President. Partnered with international, cross-functional teams to align brand messaging and campaigns with organizational goals. Directed marketing product launches, trade shows, promotions, events, and branded promotional materials, ensuring consistent brand presentation across touchpoints. Produced executive reporting using NetSuite, Magento, Power BI, GA4, and Google Ads to evaluate campaign and brand performance. Improved email deliverability, open rates, and conversion rates by 20% using Bloom Growth and Klaviyo, refining brand messaging and creative along the way. Trained and mentored a Marketing Specialist, strengthening team creative capability and brand consistency.",
  },
  {
    role: "SEO Specialist",
    company: "Portent — Seattle, Washington",
    period: "February 2022 – April 2023",
    description:
      "Strengthened brand visibility for agency clients through advanced SEO strategy, technical audits, and stakeholder consulting in a fast-paced agency environment. Partnered with Development and Content teams to align technical execution with brand voice and content strategy. Led SEO strategy using Ahrefs, SEMrush, Screaming Frog, STATS, and Google Analytics to strengthen brand visibility and organic reach. Delivered SEO improvements of 25%+ across stakeholder campaigns within given timeframes. Built roadmaps and action plans that increased organization, consistency, and efficiency across client engagements. Led the Employee Engagement Committee, organizing company culture and brand-building events.",
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
  "Leadership",
  "Campaign Strategy",
  "Email Marketing",
  "Social Media",
  "UX Design",
  "E-Commerce",
  "Technical SEO",
  "Executive Reporting & Communication",
  "Product Marketing",
  "Brand Partnerships",
  "English / Spanish",
];

const recognition = [
  { name: "Omnisend Email Revenue", type: "+$42K with 58% audience growth", year: "Distant Lands" },
  { name: "Shopify E-Commerce", type: "+$66K growth", year: "Distant Lands" },
  { name: "Google Ads Conversions", type: "25% lift", year: "Distant Lands" },
  { name: "Email Deliverability & Conversion", type: "20% improvement", year: "Sterlitech" },
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
                  Results-focused brand and marketing strategist with a passion for creative direction.
                </h1>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-4">
              <ScrollReveal delay={200}>
                <p className="text-ink-light">
                  Seattle, Washington
                  <br />
                  206-351-0831
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
                    href={resumePdf.url}
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
                  Results-focused, strategic professional with a passion for brand building and creative marketing. Proven leader able to oversee cross-functional teams and cultivate a supportive environment. Expert in developing brand strategy, positioning, and creative direction that bring a brand's story to life across every touchpoint, from website design to social media. Entrepreneurial mindset, natural collaborator, exceptionally organized and detail-oriented. Recognized for elevating local to global brand campaigns with a proven record of exceptional results.
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
                Download the full CV as a PDF, or reach out if you'd like to
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
                    href={resumePdf.url}
                    download="Michelle-Rojas-Resume.pdf"
                    className="inline-flex items-center gap-2"
                  >
                    <Download size={18} strokeWidth={1.5} />
                    Download CV
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
