import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { Sparkles, Map, Utensils, ExternalLink } from "lucide-react";
import yourelLogo from "@/assets/yourel-logo.png";

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
    icon: <Sparkles className="w-6 h-6" />,
    gradient: "from-primary to-accent",
  },
  {
    name: "Maplix",
    url: "https://maplix.vercel.app",
    tagline: "Next-gen AI-enabled discovery map",
    icon: <Map className="w-6 h-6" />,
    gradient: "from-accent to-primary",
  },
  {
    name: "SwapEat",
    url: "https://swap-bite-find.onrender.com/",
    tagline: "Hyperlocal food-sharing platform",
    icon: <Utensils className="w-6 h-6" />,
    gradient: "from-secondary to-accent",
  },
  {
    name: "Yourel",
    url: "https://yourel.in",
    tagline: "Native Search engine for unranked sites",
    icon: <img src={yourelLogo} alt="Yourel" className="w-6 h-6 object-contain" />,
    gradient: "from-primary to-secondary",
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

  const handleVisit = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-6 overflow-hidden">
      {/* Logo */}
      <motion.div
        className="mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-display text-2xl font-bold text-gradient">AIToyz</h1>
        <p className="text-muted-foreground text-xs mt-1">Swipe to explore</p>
      </motion.div>

      {/* Cards - 9:16 on mobile, 16:9 on desktop */}
      <div className="relative w-full max-w-sm md:max-w-4xl aspect-[9/16] md:aspect-video">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, scale: 0.95, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: -100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div
              className={`h-full w-full rounded-2xl bg-gradient-to-br ${projects[currentIndex].gradient} p-1 shadow-playful`}
            >
              <div className="h-full w-full rounded-xl overflow-hidden bg-card relative">
                {/* Live Website Preview */}
                <iframe
                  src={projects[currentIndex].url}
                  className="w-full h-full border-0 pointer-events-none"
                  title={`${projects[currentIndex].name} preview`}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                />
                
                {/* Overlay with project info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-display text-xl font-bold text-white">
                        {projects[currentIndex].name}
                      </h2>
                      <p className="text-white/70 text-sm">
                        {projects[currentIndex].tagline}
                      </p>
                    </div>
                    <button
                      onClick={() => handleVisit(projects[currentIndex].url)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${projects[currentIndex].gradient} text-primary-foreground font-medium text-sm hover:scale-105 transition-transform shadow-lg`}
                    >
                      Visit
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot Indicators */}
      <div className="flex gap-2 mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary w-6"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Project Icons Quick Access */}
      <div className="flex gap-4 mt-6">
        {projects.map((project, index) => (
          <motion.button
            key={project.name}
            onClick={() => setCurrentIndex(index)}
            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
              index === currentIndex
                ? `bg-gradient-to-br ${project.gradient} text-primary-foreground shadow-lg`
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
            whileHover={{ scale: 1.05 }}
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
