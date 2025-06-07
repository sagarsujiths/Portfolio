
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Customer Churn Prediction",
      description: "Built a machine learning model to predict customer churn with 94% accuracy, helping reduce customer loss by 30%.",
      technologies: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
      impact: "30% reduction in churn rate",
      category: "Machine Learning"
    },
    {
      title: "Sales Forecasting Dashboard",
      description: "Developed an interactive dashboard for sales forecasting using time series analysis and LSTM networks.",
      technologies: ["Python", "TensorFlow", "Plotly", "Streamlit"],
      impact: "15% improvement in forecast accuracy",
      category: "Time Series"
    },
    {
      title: "Sentiment Analysis Platform",
      description: "Created a real-time sentiment analysis platform for social media monitoring using NLP techniques.",
      technologies: ["Python", "NLTK", "Docker", "AWS"],
      impact: "Real-time insights for 1M+ posts",
      category: "NLP"
    },
    {
      title: "Recommendation Engine",
      description: "Built a collaborative filtering recommendation system that increased user engagement by 25%.",
      technologies: ["Python", "Surprise", "Redis", "PostgreSQL"],
      impact: "25% increase in engagement",
      category: "Recommendation Systems"
    },
    {
      title: "Financial Risk Assessment",
      description: "Developed a comprehensive risk assessment model for loan approvals using ensemble methods.",
      technologies: ["R", "Random Forest", "Tableau", "SQL"],
      impact: "20% reduction in default rate",
      category: "Finance"
    },
    {
      title: "Supply Chain Optimization",
      description: "Optimized supply chain operations using predictive analytics and operational research techniques.",
      technologies: ["Python", "OptaPlanner", "Apache Spark", "Kafka"],
      impact: "15% cost reduction",
      category: "Operations Research"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my expertise in data science and analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-3 rounded-lg">
                  <p className="text-sm font-medium text-green-700 dark:text-green-400">
                    Impact: {project.impact}
                  </p>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
