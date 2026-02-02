import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles, Map, Users } from "lucide-react";

interface Project {
  name: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  gradient: string;
  link: string;
}

const projects: Project[] = [
  {
    name: "oplus",
    description: "An AI-powered productivity suite that supercharges your workflow with intelligent automation and insights.",
    features: ["Smart automation", "AI insights", "Team collaboration"],
    icon: <Sparkles className="w-8 h-8" />,
    gradient: "from-primary to-accent",
    link: "#",
  },
  {
    name: "maplix",
    description: "Revolutionary mapping and location intelligence platform powered by cutting-edge AI algorithms.",
    features: ["AI mapping", "Location analytics", "Real-time data"],
    icon: <Map className="w-8 h-8" />,
    gradient: "from-secondary to-primary",
    link: "#",
  },
  {
    name: "yourel",
    description: "Next-generation relationship management tool that helps you build meaningful connections.",
    features: ["Smart CRM", "AI networking", "Relationship insights"],
    icon: <Users className="w-8 h-8" />,
    gradient: "from-accent to-secondary",
    link: "#",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Card className="group relative overflow-hidden border-0 shadow-card hover:shadow-playful transition-all duration-500 hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
        {/* Gradient accent bar */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />
        
        <CardHeader className="pb-4">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
            {project.icon}
          </div>
          <CardTitle className="font-display text-2xl group-hover:text-primary transition-colors duration-300">
            {project.name}
          </CardTitle>
          <CardDescription className="text-base leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.features.map((feature) => (
              <span
                key={feature}
                className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium"
              >
                {feature}
              </span>
            ))}
          </div>

          <Button
            variant="ghost"
            className="w-full group/btn hover:bg-primary/10 transition-all duration-300"
            asChild
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Visit Project
              <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
            Our Creations
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each project is crafted with passion, powered by AI, and designed to make a difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
