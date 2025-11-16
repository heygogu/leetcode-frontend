import { Brain, Trophy, Zap, Users } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Smart Problem Sets",
    description:
      "Curated challenges from easy to expert level. Master algorithms through progressive difficulty.",
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description:
      "Real-time code execution with detailed test results. Debug faster, learn smarter.",
  },
  {
    icon: Trophy,
    title: "Weekly Contests",
    description:
      "Compete with developers worldwide. Climb the leaderboard and earn recognition.",
  },
  {
    icon: Users,
    title: "Community Solutions",
    description:
      "Learn from others' approaches. Share your solutions and discuss optimizations.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need to Excel
          </h2>
          <p className="text-xl text-muted-foreground">
            Built for developers who want to master algorithms and ace technical
            interviews
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-accent cursor-default border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
