
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const About = () => {
  const highlights = [
    "3+ Years Experience",
    "Data Science Expert",
    "Machine Learning Specialist",
    "Business Intelligence",
    "Data Visualization",
    "Statistical Analysis"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900">
                <CardContent className="p-0">
                  <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full border-4 border-gradient-to-r from-blue-600 to-purple-600">
                    <img 
                      src="/lovable-uploads/032f1348-e2c9-4804-81f0-5fb7ad9dae58.png" 
                      alt="Sagar Sujith Somepalli" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Sagar Sujith Somepalli</h3>
                    <p className="text-muted-foreground">Data Scientist & Analyst</p>
                    <p className="text-sm text-muted-foreground mt-2">Chicago, IL</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate data scientist currently pursuing my Master of Science in Computer Science 
                at Illinois Institute of Technology, specializing in Artificial Intelligence and Machine Learning. 
                With extensive experience in data analysis, visualization, and machine learning.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach combines technical excellence with business acumen, delivering data-driven solutions 
                that have improved customer retention by 30%, increased conversion rates by 12%, and optimized 
                data processing efficiency by 40%.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="justify-center py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-0"
                  >
                    {highlight}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
