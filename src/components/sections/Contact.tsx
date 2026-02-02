import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle, Loader2, MessageSquare } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export const Contact = () => {
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast({
        title: "Validation error",
        description: result.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert([{
          name: result.data.name,
          email: result.data.email,
          message: result.data.message,
        }]);

      if (error) throw error;

      setIsSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      toast({
        title: "Message sent! 🎉",
        description: "We'll get back to you soon.",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="container max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            Say Hello
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a question, idea, or just want to say hi? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-card border border-border/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {isSubmitted ? (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">Thank you!</h3>
              <p className="text-muted-foreground">We'll be in touch soon.</p>
              <Button
                variant="outline"
                className="mt-6 rounded-full"
                onClick={() => setIsSubmitted(false)}
              >
                Send another message
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="h-12 rounded-xl border-2 focus:border-primary"
                    disabled={isLoading}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="h-12 rounded-xl border-2 focus:border-primary"
                    disabled={isLoading}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us what's on your mind..."
                  className="min-h-[150px] rounded-xl border-2 focus:border-primary resize-none"
                  disabled={isLoading}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 rounded-full gradient-primary text-primary-foreground font-semibold shadow-playful hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
