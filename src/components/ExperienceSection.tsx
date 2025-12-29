import { Briefcase, Shield, Award, Calendar, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Software Engineering Student",
    organization: "Arba Minch University",
    period: "2021 – Present",
    description:
      "Currently a 5th-year Software Engineering student, building a strong foundation in software development, system design, data structures, and modern web and backend technologies through academic projects and practical experience.",
    icon: GraduationCap,
    current: true,
  },
  {
    title: "Software Engineering Intern",
    organization: "INSA (Information Network Security Administration)",
    period: "Jan 2025 – Jun 2025",
    description:
      "Gained hands-on experience in cybersecurity and software development within Ethiopia's premier information security institution.",
    icon: Shield,
    current: false,
  },
  {
    title: "INSA Talent Center Graduate",
    organization: "INSA Talent Center",
    period: "Jul 2025 – Oct 2025",
    description:
      "Completed an advanced training program focused on cutting-edge technologies, innovation, and professional development in the tech sector.",
    icon: Award,
    current: false,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Experience & Training
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Professional <span className="text-gradient">Journey</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 mt-8 md:mt-6 z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="glass rounded-xl p-6 glass-hover group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <exp.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {exp.current && (
                            <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/20 text-primary">
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-primary font-medium mb-2">
                          {exp.organization}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <p className="text-muted-foreground">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
