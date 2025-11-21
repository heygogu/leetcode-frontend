import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const CodeShowcase = () => {
  return (
    <section id="problems" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Code in Your Favorite Language
          </h2>
          <p className="text-xl text-muted-foreground">
            Write, test, and submit solutions with our powerful code editor
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
            <img
              src={"/code-snippet-1.jpg"}
              alt="Code editor showing Python solution"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-primary/90 text-primary-foreground px-3 py-1.5 rounded-full text-sm font-medium">
              <CheckCircle2 className="h-4 w-4" />
              Accepted
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
            <img
              src={"/code-snippet-2.jpg"}
              alt="Code editor showing JavaScript solution"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-primary/90 text-primary-foreground px-3 py-1.5 rounded-full text-sm font-medium">
              <CheckCircle2 className="h-4 w-4" />
              Accepted
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            "Python",
            "JavaScript",
            "Java",
            "C++",
            "Go",
            "Rust",
            "TypeScript",
            "Swift",
          ].map((lang) => (
            <span
              key={lang}
              className="px-4 py-2 rounded-full bg-secondary border border-border text-secondary-foreground text-sm font-medium hover:border-primary/50 hover:bg-secondary/80 transition-all cursor-pointer"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodeShowcase;
