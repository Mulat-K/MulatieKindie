import { Trophy, Medal, Globe, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "North Africa Regional Third-Level Winner",
    event: "Huawei ICT Competition 2025",
    description: "Demonstrated exceptional technical skills competing against top talent across North Africa",
    color: "accent",
  },
  {
    icon: Medal,
    title: "National First-Level Winner",
    event: "Huawei ICT Competition 2025",
    description: "Achieved first place nationally, showcasing expertise in ICT and innovation",
    color: "primary",
  },
  {
    icon: Globe,
    title: "Seeds for the Future Participant",
    event: "Huawei Program, China – 2025",
    description: "Selected for prestigious international program fostering global tech leaders",
    color: "ethiopia-red",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Achievements & Honors
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Recognition of <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Competing at the highest levels and representing Ethiopia on the global stage
            </p>
          </div>

          {/* Achievement Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="group relative"
              >
                <div className="glass rounded-2xl p-8 h-full glass-hover relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
                    achievement.color === "accent" ? "from-accent to-transparent" :
                    achievement.color === "ethiopia-red" ? "from-ethiopia-red to-transparent" :
                    "from-primary to-transparent"
                  }`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                      achievement.color === "accent" ? "bg-accent/10 group-hover:bg-accent/20" :
                      achievement.color === "ethiopia-red" ? "bg-ethiopia-red/10 group-hover:bg-ethiopia-red/20" :
                      "bg-primary/10 group-hover:bg-primary/20"
                    }`}>
                      <achievement.icon className={`h-8 w-8 ${
                        achievement.color === "accent" ? "text-accent" :
                        achievement.color === "ethiopia-red" ? "text-ethiopia-red" :
                        "text-primary"
                      }`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                    <p className={`font-medium mb-4 ${
                      achievement.color === "accent" ? "text-accent" :
                      achievement.color === "ethiopia-red" ? "text-ethiopia-red" :
                      "text-primary"
                    }`}>
                      {achievement.event}
                    </p>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">
                Continuously striving for excellence in technology and innovation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
