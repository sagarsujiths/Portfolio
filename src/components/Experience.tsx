
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Experience = () => {
  const experiences = [
    {
      title: "Freelance Data Analyst",
      company: "Self-Employed",
      period: "May 2025 - Present",
      description: "Delivering data analysis and visualization solutions for clients in retail and e-Commerce sectors.",
      achievements: [
        "Drove 30% improvement in customer retention for e-Commerce client",
        "Built automated dashboards in Power BI for inventory and sales optimization",
        "Analyzed customer purchase patterns, increasing client revenue by 12%",
        "Developed custom data pipelines using Python and SQL"
      ],
      technologies: ["Python", "SQL", "Power BI", "Tableau", "Excel", "Data Visualization"]
    },
    {
      title: "Senior Data Analyst",
      company: "Sigma Software Solutions",
      period: "March 2022 - May 2023",
      description: "Led data analytics initiatives and managed real-time Tableau dashboards for CAC and CLTV monitoring.",
      achievements: [
        "Developed automated SQL and Python pipelines increasing conversion rates by 12%",
        "Built and managed 5 real-time Tableau dashboards driving 12% growth in lead conversions",
        "Conducted root cause analysis informing 3 significant product strategy adjustments",
        "Optimized SQL queries for 30M+ row datasets, reducing processing time by 40%",
        "Mentored 3 junior analysts, improving team productivity by 20%"
      ],
      technologies: ["SQL", "Python", "Tableau", "Excel", "CRM", "A/B Testing"]
    },
    {
      title: "Data Analyst",
      company: "Sigma Software Solutions",
      period: "February 2021 - March 2022",
      description: "Focused on data extraction, cleaning, and reporting to support operational decisions.",
      achievements: [
        "Extracted and cleansed data from multiple databases decreasing report generation time by 40%",
        "Designed 10 Excel dashboards for KPIs, significantly aiding operational decisions",
        "Validated data accuracy across major projects, cutting modeling errors by 15%",
        "Analyzed 5,000+ customer support tickets identifying key product defects",
        "Enhanced reporting accuracy addressing data inconsistencies, improving satisfaction by 10%"
      ],
      technologies: ["SQL", "Excel", "Data Cleaning", "Reporting", "Customer Support Analysis"]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Illinois Institute of Technology",
      period: "August 2023 - May 2025",
      description: "Specialization: Artificial Intelligence and Machine Learning. Coursework: Computer Vision, Data Preparation and Analysis, Big Data Technologies, Natural Language Processing."
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "SRM University AP",
      period: "July 2019 - May 2023",
      description: "Specialization: Artificial Intelligence and Machine Learning"
    }
  ];

  const certifications = [
    {
      name: "IBM AI Engineering Professional",
      issuer: "Coursera",
      date: "July 2020"
    },
    {
      name: "IBM Data Science Professional",
      issuer: "Coursera", 
      date: "July 2020"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Professional Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
                  )}
                  
                  <div className="flex gap-6">
                    {/* Timeline dot */}
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    
                    <Card className="flex-1 border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="text-xl font-bold">{exp.title}</h4>
                            <p className="text-blue-600 font-medium">{exp.company}</p>
                          </div>
                          <Badge variant="outline">{exp.period}</Badge>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold mb-2">Key Achievements:</h5>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Education & Certifications</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline line */}
                  {index !== education.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-20 bg-gradient-to-b from-blue-600 to-purple-600"></div>
                  )}
                  
                  <div className="flex gap-6">
                    {/* Timeline dot */}
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    
                    <Card className="flex-1 border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="text-xl font-bold">{edu.degree}</h4>
                            <p className="text-blue-600 font-medium">{edu.institution}</p>
                          </div>
                          <Badge variant="outline">{edu.period}</Badge>
                        </div>
                        
                        <p className="text-muted-foreground">{edu.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}

              {/* Certifications */}
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4">Professional Certifications</h4>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <Card key={index} className="border-0 shadow-lg">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h5 className="font-semibold">{cert.name}</h5>
                            <p className="text-sm text-blue-600">{cert.issuer}</p>
                          </div>
                          <Badge variant="outline" className="text-xs">{cert.date}</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
