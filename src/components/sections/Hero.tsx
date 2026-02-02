import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Star } from "lucide-react";

const FloatingShape = ({ 
  className, 
  delay = 0 
}: { 
  className?: string; 
  delay?: number;
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.8, ease: "easeOut" }}
  />
);

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden flex items-center justify-center px-4">
      {/* Floating decorative shapes */}
      <FloatingShape
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 animate-float blur-xl"
        delay={0.2}
      />
      <FloatingShape
        className="absolute top-40 right-20 w-32 h-32 rounded-full bg-accent/20 animate-float-delayed blur-xl"
        delay={0.4}
      />
      <FloatingShape
        className="absolute bottom-32 left-1/4 w-24 h-24 rounded-full bg-secondary/20 animate-float-slow blur-xl"
        delay={0.6}
      />
      <FloatingShape
        className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full bg-primary/30 animate-float blur-lg"
        delay={0.8}
      />
      <FloatingShape
        className="absolute bottom-20 right-10 w-28 h-28 rounded-full bg-accent/15 animate-float-delayed blur-xl"
        delay={1}
      />

      {/* Decorative icons */}
      <motion.div
        className="absolute top-32 left-[15%] text-primary/40"
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <Sparkles className="w-8 h-8 animate-pulse-soft" />
      </motion.div>
      <motion.div
        className="absolute top-[45%] right-[12%] text-accent/40"
        initial={{ opacity: 0, rotate: 20 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <Zap className="w-10 h-10 animate-bounce-gentle" />
      </motion.div>
      <motion.div
        className="absolute bottom-[30%] left-[8%] text-secondary/40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <Star className="w-6 h-6 animate-pulse-soft" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            Building the future with AI
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Welcome to{" "}
          <span className="text-gradient">AIToyz</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          We craft innovative AI-powered products that transform ideas into reality. 
          Explore our playground of intelligent solutions.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Button
            size="lg"
            className="gradient-primary text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-playful hover:shadow-glow transition-all duration-300 hover:scale-105"
            onClick={scrollToProjects}
          >
            Explore Our Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg rounded-full border-2 hover:bg-primary/5 transition-all duration-300"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get in Touch
          </Button>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
