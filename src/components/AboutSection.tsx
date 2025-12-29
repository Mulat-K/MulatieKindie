import { Code2, Lightbulb, Target, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Building robust and scalable applications with modern technologies",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Exploring emerging technologies and creative solutions",
  },
  {
    icon: Target,
    title: "Problem Solving",
    description: "Analytical approach to complex challenges",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Leveraging technology for meaningful impact",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Driven by <span className="text-gradient">Passion</span> for Technology
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-foreground font-medium">5th year Software Engineering student</span> at 
                Arba Minch University, deeply passionate about software development and emerging technologies. 
                My journey in tech is driven by a desire to create solutions that make a real difference.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a <span className="text-foreground font-medium">motivated and competitive learner</span>, 
                I constantly seek opportunities to grow, compete, and contribute to the tech ecosystem. 
                I believe in the transformative power of technology and its potential to drive 
                <span className="text-primary font-medium"> digital transformation</span> across Africa and beyond.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My goal is to become a leading software engineer who builds innovative solutions 
                that address real-world challenges and inspire the next generation of technologists.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">5+</div>
                  <div className="text-sm text-muted-foreground mt-1">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">3+</div>
                  <div className="text-sm text-muted-foreground mt-1">Awards</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">4+</div>
                  <div className="text-sm text-muted-foreground mt-1">Years Coding</div>
                </div>
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="p-6 rounded-xl glass glass-hover group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
