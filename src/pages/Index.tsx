import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { Sparkles, Map, Utensils, Search, ExternalLink } from "lucide-react";

interface Project {
  name: string;
  url: string;
  tagline: string;
  icon: React.ReactNode;
  gradient: string;
}

const projects: Project[] = [
  {
    name: "Oplus",
    url: "https://playoplus.in",
    tagline: "TikTok-styled AI-powered social gaming platform",
    icon: <Sparkles className="w-12 h-12" />,
    gradient: "from-primary to-accent",
  },
  {
    name: "Maplix",
    url: "https://maplix.vercel.app",
    tagline: "Next-gen AI-enabled discovery map",
    icon: <Map className="w-12 h-12" />,
    gradient: "from-secondary to-primary",
  },
  {
    name: "SwapEat",
    url: "https://swap-bite-find.onrender.com/",
    tagline: "Hyperlocal food-sharing platform",
    icon: <Utensils className="w-12 h-12" />,
    gradient: "from-accent to-secondary",
  },
  {
    name: "Yourel",
    url: "https://yourel.in",
    tagline: "Native Search engine for unranked sites",
    icon: <Search className="w-12 h-12" />,
    gradient: "from-primary via-secondary to-accent",
  },
];

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (info.offset.x < -threshold && currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleCardClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
      {/* Logo */}
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-display text-3xl font-bold text-gradient">AIToyz</h1>
        <p className="text-muted-foreground text-sm mt-1">Swipe to explore our projects</p>
      </motion.div>

      {/* Swipable Cards Container */}
      <div className="relative w-full max-w-sm h-[70vh] max-h-[600px]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, scale: 0.9, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div
              onClick={() => handleCardClick(projects[currentIndex].url)}
              className={`h-full w-full rounded-3xl bg-gradient-to-br ${projects[currentIndex].gradient} p-1 shadow-playful hover:shadow-glow transition-shadow duration-300`}
            >
              <div className="h-full w-full rounded-[22px] bg-card/95 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center">
                {/* Icon */}
                <motion.div
                  className={`w-24 h-24 rounded-full bg-gradient-to-br ${projects[currentIndex].gradient} flex items-center justify-center text-white mb-8 shadow-lg`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  {projects[currentIndex].icon}
                </motion.div>

                {/* Project Name */}
                <motion.h2
                  className="font-display text-4xl font-bold mb-4 text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {projects[currentIndex].name}
                </motion.h2>

                {/* Tagline */}
                <motion.p
                  className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xs"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {projects[currentIndex].tagline}
                </motion.p>

                {/* Visit Button */}
                <motion.div
                  className="flex items-center gap-2 text-primary font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <span>Tap to visit</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot Indicators */}
      <div className="flex gap-3 mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary scale-125"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Project Icons Quick Access */}
      <div className="flex gap-6 mt-8">
        {projects.map((project, index) => (
          <motion.button
            key={project.name}
            onClick={() => setCurrentIndex(index)}
            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
              index === currentIndex
                ? `bg-gradient-to-br ${project.gradient} text-white shadow-lg scale-110`
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
            whileHover={{ scale: index === currentIndex ? 1.1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`View ${project.name}`}
          >
            {project.icon}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Index;
