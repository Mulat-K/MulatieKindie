import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Learning Platform",
    description: "A comprehensive online learning platform with course management, video streaming, and progress tracking features.",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    featured: true,
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team workspaces, and productivity analytics.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    featured: true,
  },
  {
    title: "Healthcare System",
    description: "Digital healthcare management system for patient records, appointments, and medical history tracking.",
    techStack: ["Python", "Django", "PostgreSQL", "REST API"],
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with location-based forecasts, alerts, and historical data visualization.",
    techStack: ["React", "OpenWeather API", "Chart.js"],
    featured: false,
  },
  {
    title: "Inventory System",
    description: "Business inventory management system with stock tracking, reporting, and automated reorder alerts.",
    techStack: ["Java", "Spring Boot", "MySQL"],
    featured: false,
  },
  {
    title: "Social Media API",
    description: "RESTful API backend for a social media platform with authentication, posts, and real-time messaging.",
    techStack: ["Node.js", "Express", "MongoDB", "Socket.io"],
    featured: false,
  },
];

const ProjectsSection = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A selection of projects that showcase my skills and passion for building impactful software
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="group glass rounded-2xl p-8 glass-hover relative overflow-hidden"
              >
                {/* Gradient accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Folder className="h-6 w-6 text-primary" />
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
                      Featured
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {/* <div className="flex gap-4">
                    <Button variant="heroOutline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button variant="hero" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <h3 className="text-xl font-bold text-center mb-8">Other Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="group glass rounded-xl p-6 glass-hover"
              >
                <Folder className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 2).map((tech) => (
                    <span key={tech} className="text-xs text-muted-foreground">
                      {tech}
                    </span>
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

export default ProjectsSection;
