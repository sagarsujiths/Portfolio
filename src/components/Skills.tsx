
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";

export const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 95 },
    { name: "R", level: 90 },
    { name: "SQL", level: 92 },
    { name: "Machine Learning", level: 88 },
    { name: "Deep Learning", level: 85 },
    { name: "Data Visualization", level: 90 },
    { name: "Statistical Analysis", level: 92 },
    { name: "Big Data", level: 80 },
  ];

  const tools = [
    { name: "TensorFlow", level: 85 },
    { name: "PyTorch", level: 80 },
    { name: "Scikit-learn", level: 92 },
    { name: "Pandas", level: 95 },
    { name: "NumPy", level: 90 },
    { name: "Matplotlib", level: 88 },
    { name: "Seaborn", level: 85 },
    { name: "Tableau", level: 82 },
  ];

  const radarData = [
    { skill: "Analytics", value: 95 },
    { skill: "ML/AI", value: 88 },
    { skill: "Visualization", value: 90 },
    { skill: "Statistics", value: 92 },
    { skill: "Programming", value: 93 },
    { skill: "Communication", value: 85 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tools & Technologies */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Tools & Technologies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {tools.map((tool, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{tool.name}</span>
                    <span className="text-sm text-muted-foreground">{tool.level}%</span>
                  </div>
                  <Progress value={tool.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Skill Radar */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Core Competencies</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="skill" />
                  <Radar
                    name="Skills"
                    dataKey="value"
                    stroke="#3b82f6"
                    fill="#3b82f6"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
