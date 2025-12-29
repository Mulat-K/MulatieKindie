import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Phone,
  Youtube,
  Music,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Let's talk about everything!
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm open to internships, graduate roles, freelance work, and collaboration opportunities.
                  Feel free to reach out through email, phone, or social platforms.
                </p>
              </div>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:mulatiekinde@example.com?subject=Career%20Opportunity"
                  className="flex items-center gap-4 p-4 glass rounded-lg glass-hover"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-primary">
                      mulatiekinde@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+251988880085"
                  className="flex items-center gap-4 p-4 glass rounded-lg glass-hover"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium text-primary">
                      +251 98 888 0085
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 glass rounded-lg">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Arba Minch, Ethiopia</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with me
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Mulat-K"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg glass glass-hover"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mulatiekindie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg glass glass-hover"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.youtube.com/@mulatiekindie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg glass glass-hover"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>

                  <a
                    href="https://www.tiktok.com/@mulatiekindie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg glass glass-hover flex items-center justify-center"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M12.525 0h3.095c.086 1.53.63 2.98 1.593 4.04 1.016 1.12 2.44 1.77 3.787 1.96v3.095c-1.78.06-3.48-.45-4.98-1.45v6.58c0 3.35-2.71 6.07-6.06 6.07-3.35 0-6.06-2.72-6.06-6.07 0-3.34 2.71-6.06 6.06-6.06.31 0 .61.03.91.09v3.23a2.97 2.97 0 0 0-.91-.15 2.83 2.83 0 0 0-2.83 2.83 2.83 2.83 0 0 0 5.66 0V0z" />
                    </svg>
                  </a>

                  <a
                    href="https://x.com/mulatiekindie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg glass glass-hover"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
