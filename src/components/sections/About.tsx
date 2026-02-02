import { motion } from "framer-motion";
import { Lightbulb, Rocket, Heart, Target } from "lucide-react";

const values = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation First",
    description: "We push boundaries and explore new possibilities with AI.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Move Fast",
    description: "Rapid iteration and continuous improvement drive us forward.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "User Love",
    description: "Every product is designed with users at the heart.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Impact Driven",
    description: "We build solutions that create real-world value.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl translate-x-1/2" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              We're Building the{" "}
              <span className="text-gradient">Future of AI</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              AIToyz is a creative lab where innovation meets imagination. We believe AI should be 
              fun, accessible, and transformative. Our mission is to create products that don't just 
              use AI — they make it delightful.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From productivity tools to mapping solutions, each project in our portfolio represents 
              our commitment to excellence and our passion for pushing the boundaries of what's possible.
            </p>
          </motion.div>

          {/* Right - Values grid */}
          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="group p-6 rounded-2xl bg-card shadow-card hover:shadow-playful transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
