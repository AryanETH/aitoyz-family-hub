import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Github } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const team: TeamMember[] = [
  {
    name: "Team Member 1",
    role: "Founder & CEO",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=founder",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Team Member 2",
    role: "CTO",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=cto",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "Team Member 3",
    role: "Head of Product",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=product",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Team Member 4",
    role: "Lead Designer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=design",
    socials: { linkedin: "#", twitter: "#" },
  },
];

const TeamCard = ({ member, index }: { member: TeamMember; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group border-0 shadow-card hover:shadow-playful transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-card/80 backdrop-blur-sm">
        <CardContent className="p-6 text-center">
          {/* Avatar */}
          <div className="relative w-24 h-24 mx-auto mb-4">
            <div className="absolute inset-0 rounded-full gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
            <img
              src={member.avatar}
              alt={member.name}
              className="relative w-24 h-24 rounded-full bg-muted border-4 border-background shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Info */}
          <h3 className="font-display text-lg font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-4">{member.role}</p>

          {/* Social links */}
          {member.socials && (
            <div className="flex justify-center gap-3">
              {member.socials.linkedin && (
                <a
                  href={member.socials.linkedin}
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {member.socials.twitter && (
                <a
                  href={member.socials.twitter}
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {member.socials.github && (
                <a
                  href={member.socials.github}
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const Team = () => {
  return (
    <section id="team" className="py-24 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            The Humans
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The brilliant minds behind AIToyz who are passionate about building the future.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
