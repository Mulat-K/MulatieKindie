import { FileCheck, Users, ExternalLink } from "lucide-react";

const certificates = [
  {
    category: "Online Learning",
    icon: FileCheck,
    items: [
      { title: "Full Stack Web Development", platform: "Online Platform" },
      { title: "Data Structures & Algorithms", platform: "Online Platform" },
      { title: "Cloud Computing Fundamentals", platform: "Online Platform" },
      { title: "Cybersecurity Essentials", platform: "Online Platform" },
    ],
  },
  {
    category: "Professional Events",
    icon: Users,
    items: [
      { title: "Tech Conference Volunteer", platform: "Tech Event 2024" },
      { title: "Hackathon Participant", platform: "Innovation Hub" },
      { title: "Community Leadership", platform: "Tech Community" },
      { title: "Workshop Facilitator", platform: "University Event" },
    ],
  },
];

const CertificatesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Certificates & Activities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Continuous <span className="text-gradient">Learning</span>
            </h2>
          </div>

          {/* Certificate Categories */}
          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((category) => (
              <div key={category.category} className="glass rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.items.map((item, index) => (
                    <div
                      key={item.title}
                      className="group flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer"
                    >
                      <div>
                        <h4 className="font-medium group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{item.platform}</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
