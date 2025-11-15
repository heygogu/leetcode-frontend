import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-15 dark:opacity-50 blur-[1px] dark:blur-0"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b 
      from-white/60 via-white/90 to-white
      dark:from-background/50 dark:via-background/80 dark:to-background"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              Master Algorithms & Data Structures
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Code. Compete.
            <br />
            <span className="text-primary">Conquer.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground md:max-w-2xl max-w-md mx-auto">
            Sharpen your coding skills with thousands of algorithmic challenges.
            Test your solutions in real-time and climb the leaderboard.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 group text-md px-8 animate-glow"
            >
              Start Solving
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary text-md px-8"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          <div className="pt-8 flex items-center justify-center gap-12 text-sm text-muted-foreground">
            <div>
              <div className="text-3xl font-bold text-primary">5000+</div>
              <div>Problems</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="text-3xl font-bold text-primary">100K+</div>
              <div>Users</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="text-3xl font-bold text-primary">50+</div>
              <div>Languages</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Blur Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/20 blur-[120px] rounded-full" />
    </section>
  );
};

export default Hero;
