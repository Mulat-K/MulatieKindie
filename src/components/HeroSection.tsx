import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 ">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float delay-300" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-ethiopia-red/5 rounded-full blur-3xl animate-float delay-500" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Availability Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-up opacity-0"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-up opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <span className="text-gradient">Mulatie Kindie</span>
          </h1>

          {/* Professional Title */}
          <h2
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6 animate-fade-up opacity-0"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            Software Engineer • AI & Web Developer
          </h2>

          {/* Value Proposition */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            I design and build scalable, secure, and intelligent software solutions.
            Passionate about solving real-world problems through modern web technologies,
            artificial intelligence, and cloud-ready systems.
          </p>

          {/* Call to Actions */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up opacity-0"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">
                View Projects
              </a>
            </Button>

            <Button variant="heroOutline" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>

            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div
            className="flex items-center justify-center gap-4 animate-fade-up opacity-0"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <a
              href="https://github.com/Mulat-K"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass glass-hover"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mulatiekindie/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass glass-hover"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:mulatiekinde@gmail.com"
              className="p-3 rounded-full glass glass-hover"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
