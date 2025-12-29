import {
  Code,
  Database,
  Globe,
  Server,
  Cpu,
  GitBranch,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Java", level: 70 },
      { name: "C#", level: 70 },
    ],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: [
      { name: "React", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "HTML/CSS", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Next.js", level: 75 },
    ],
  },
  {
    title: "Mobile App Development",
    icon: Server,
    skills: [
      { name: "React Native", level: 85 },
      { name: "Flutter", level: 75 },
      { name: "Android (Java)", level: 70 },
      { name: "Mobile UI/UX", level: 80 },
      { name: "API Integration", level: 85 },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: Cpu,
    skills: [
      { name: "Machine Learning", level: 80 },
      { name: "TensorFlow / PyTorch", level: 70 },
      { name: "Data Analysis", level: 85 },
      { name: "Deep Learning", level: 70 },
      { name: "Model Evaluation", level: 75 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "Firebase", level: 70 },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: GitBranch,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Docker", level: 75 },
      { name: "Linux", level: 70 },
      
    ],
  },
];

const additionalSkills = [
  "Problem Solving",
  "Data Structures",
  "Algorithms",
  "System Design",
  "REST APIs",
  "GraphQL",
  "Agile/Scrum",
  "UI/UX Design",
  "Cloud Services",
  "Testing",
  "AI Model Deployment",
  "Mobile App Architecture",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Technical Skills
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              My <span className="text-gradient">Toolkit</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Continuously expanding my expertise in software engineering, AI, and mobile application development
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="glass rounded-2xl p-6 glass-hover"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-6">
              Additional Skills
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {additionalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full glass text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
