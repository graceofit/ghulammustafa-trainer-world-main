import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Users, Globe } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const Hero = () => {
  const stats = [
    { icon: Users, value: "4,000+", label: "Students Trained" },
    { icon: Globe, value: "135+", label: "Countries Reached" },
    { icon: Users, value: "20+", label: "Years Experience" },
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-hero text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <h1 className="heading-primary text-white">
                Professor{" "}
                <span className="text-accent-light">Ghulam Mustafa</span>
              </h1>
              <div className="text-hero text-white/90">
                IT Trainer | Embroidery Digitizing & Graphic Designing Expert | UI/UX Designer
              </div>
              <p className="text-xl text-white/80 leading-relaxed">
                20 Years of IT Training | 4,000+ Students | 135+ Countries
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-medium transition-all duration-300 group"
              >
                View Portfolio
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium transition-all duration-300"
              >
                Contact Me
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <stat.icon className="h-8 w-8 mx-auto text-accent-light" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative slide-in-right">
            <div className="relative z-10">
              <img
                src={heroPortrait}
                alt="Professor Ghulam Mustafa - IT Trainer and Design Expert"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-accent-light/20 rounded-2xl blur-lg -z-10"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-sm font-medium text-white">Masters in CS</div>
              <div className="text-xs text-white/70">Punjab University</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-sm font-medium text-white">Global Instructor</div>
              <div className="text-xs text-white/70">Udemy & Beyond</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;