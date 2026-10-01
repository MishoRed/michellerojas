import { useState } from "react";
import { z } from "zod";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  company: z.string().trim().min(1, "Company/Organization is required").max(150, "Company/Organization must be under 150 characters"),
  role: z.string().trim().min(1, "Role is required").max(150, "Role must be under 150 characters"),
  linkedin: z.string().trim().min(1, "LinkedIn profile URL is required").url("Please enter a valid URL").max(255),
  phone: z.string().trim().min(1, "Phone number is required").max(30, "Phone number must be under 30 characters"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be under 2000 characters"),
});

const encodeFormData = (data: Record<string, string>) =>
  Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&");

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    linkedin: "",
    phone: "",
    message: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      toast({
        title: "Please check your input",
        description: result.error.issues[0]?.message ?? "Invalid form data.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({ "form-name": "contact", ...result.data }),
      });
      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }
      toast({
        title: "Message sent",
        description: "Thank you for reaching out. I'll be in touch within 24-48 hours."
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        role: "",
        linkedin: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again or email rojasmichellec@gmail.com.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <Layout>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="eyebrow mb-6">Get in contact with me</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-ink mb-8">Let's build
our connection.</h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl text-ink-light">
                Fill out the form below to start a conversation about our
                future endeavors.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="section-padding border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <form
                  onSubmit={handleSubmit}
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  className="space-y-8"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden aria-hidden="true">
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </div>

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="eyebrow block mb-3">
                      Name <span className="text-ink-muted">*</span>
                    </label>
                    <input type="text" id="name" name="name" required maxLength={100} value={formData.name} onChange={handleChange} className="input-editorial" placeholder="Your name" />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="eyebrow block mb-3">
                      Email <span className="text-ink-muted">*</span>
                    </label>
                    <input type="email" id="email" name="email" required maxLength={255} value={formData.email} onChange={handleChange} className="input-editorial" placeholder="your@email.com" />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="eyebrow block mb-3">
                      Company/Organization <span className="text-ink-muted">*</span>
                    </label>
                    <input type="text" id="company" name="company" required maxLength={150} value={formData.company} onChange={handleChange} className="input-editorial" placeholder="Your company" />
                  </div>

                  {/* Role */}
                  <div>
                    <label htmlFor="role" className="eyebrow block mb-3">
                      Role You're Reaching Out About <span className="text-ink-muted">*</span>
                    </label>
                    <input type="text" id="role" name="role" required maxLength={150} value={formData.role} onChange={handleChange} className="input-editorial" placeholder="e.g. Brand Manager" />
                  </div>

                  {/* LinkedIn */}
                  <div>
                    <label htmlFor="linkedin" className="eyebrow block mb-3">
                      LinkedIn Profile URL <span className="text-ink-muted">*</span>
                    </label>
                    <input type="url" id="linkedin" name="linkedin" required maxLength={255} value={formData.linkedin} onChange={handleChange} className="input-editorial" placeholder="https://www.linkedin.com/in/yourname" />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="eyebrow block mb-3">
                      Message/Details <span className="text-ink-muted">*</span>
                    </label>
                    <textarea id="message" name="message" required maxLength={2000} rows={6} value={formData.message} onChange={handleChange} className="input-editorial resize-none" placeholder="Tell me about the work opportunity..." />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="eyebrow block mb-3">
                      Phone Number <span className="text-ink-muted">*</span>
                    </label>
                    <input type="tel" id="phone" name="phone" required maxLength={30} value={formData.phone} onChange={handleChange} className="input-editorial" placeholder="(555) 123-4567" />
                  </div>

                  {/* Submit */}
                  <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </ScrollReveal>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-4 lg:col-start-9">
              <ScrollReveal delay={200}>
                <div className="lg:sticky lg:top-32 space-y-10">
                  <div>
                    <p className="eyebrow mb-3">Email</p>
                    <a href="mailto:rojasmichellec@gmail.com" className="text-ink hover:opacity-70 transition-opacity duration-300">
                      rojasmichellec@gmail.com
                    </a>
                  </div>

                  <div>
                    <p className="eyebrow mb-3">Location</p>
                    <p className="text-ink">Seattle, WA</p>
                  </div>

                  <div>
                    <p className="eyebrow mb-3">Social</p>
                    <div className="space-y-2">
                      <a href="https://www.linkedin.com/in/michelle-rojas/" target="_blank" rel="noopener noreferrer" className="block text-ink hover:opacity-70 transition-opacity duration-300">
                        LinkedIn
                      </a>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-divider">
                    <p className="text-sm text-ink-muted">
                      I typically respond within 24-48 hours. For urgent inquiries, 
                      please email directly.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
}
