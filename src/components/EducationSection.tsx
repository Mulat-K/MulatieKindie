import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Education
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Academic & <span className="text-gradient">Professional Learning</span>
            </h2>
          </div>

          <div className="space-y-12">
            {/* University Education */}
            <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col md:flex-row gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">
                    BSc in Software Engineering
                  </h3>
                  <p className="text-xl text-primary font-medium mb-4">
                    Arba Minch University
                  </p>

                  <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Expected Graduation: 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>Arba Minch, Ethiopia</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    Pursuing a comprehensive education in software engineering,
                    covering software design, algorithms, database systems,
                    web and mobile development, AI fundamentals, and software
                    project management, supported by hands-on academic and team projects.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Data Structures",
                      "Algorithms",
                      "Web Development",
                      "Database Systems",
                      "Software Architecture",
                      "AI & ML",
                    ].map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Online & Professional Education */}
            <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col md:flex-row gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-8 w-8 text-primary" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">
                    Online & Professional Certifications
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Completed industry-recognized online programs to strengthen
                    practical skills in web development, artificial intelligence,
                    cloud computing, networking, and data science, complementing
                    formal university education.
                  </p>

                  <ul className="space-y-3 text-muted-foreground">
                    <li>
                      <span className="font-medium text-foreground">Coursera:</span>{" "}
                      Web Programming
                    </li>
                    <li>
                      <span className="font-medium text-foreground">freeCodeCamp:</span>{" "}
                      Machine Learning
                    </li>
                    <li>
                      <span className="font-medium text-foreground">Huawei ICT Academy:</span>{" "}
                      Computing, Cloud, AI & Networking Fundamentals
                    </li>
                    <li>
                      <span className="font-medium text-foreground">
                        Udacity (Five Million Coders Initiative):
                      </span>{" "}
                      Web Fundamentals, AI Fundamentals, Application Development,
                      Data Science Fundamentals
                    </li>
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Web Programming",
                      "Machine Learning",
                      "Cloud Computing",
                      "AI Fundamentals",
                      "Networking",
                      "Data Science",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* End Online Education */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
