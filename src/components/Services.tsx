import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Palette, Smartphone, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Embroidery Digitizing",
      description: "Transform your designs into high-quality embroidery files with precision and attention to detail. Specialized in complex logos, text, and artistic designs.",
      features: [
        "Custom digitizing for all embroidery machines",
        "Complex logo and text conversion",
        "Color separation and thread optimization",
        "Fast turnaround and unlimited revisions"
      ],
      tools: ["Wilcom", "Tajima DG/ML", "CorelDRAW"],
      pricing: "Starting from $15"
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Professional graphic design services for print and digital media. From brand identity to marketing materials, creating visually compelling designs that communicate your message.",
      features: [
        "Logo design and brand identity",
        "Print media and marketing materials",
        "Digital graphics and social media content",
        "Complete brand style guides"
      ],
      tools: ["Adobe Illustrator", "Photoshop", "InDesign"],
      pricing: "Starting from $25"
    },
    {
      icon: Smartphone,
      title: "UI/UX Design",
      description: "Modern and user-friendly interface designs for web and mobile applications. Focus on user experience and contemporary design trends.",
      features: [
        "Website and mobile app interfaces",
        "User experience optimization",
        "Interactive prototypes",
        "Responsive design solutions"
      ],
      tools: ["Figma", "Adobe XD", "Sketch"],
      pricing: "Starting from $50"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="heading-secondary mb-6">Professional Services</h2>
          <p className="text-professional max-w-3xl mx-auto">
            Comprehensive design and digitizing services backed by 20+ years of experience 
            and a commitment to excellence. Each service is tailored to meet your specific 
            requirements and delivered with professional quality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="card-hover h-full">
              <CardContent className="p-8 space-y-6 h-full flex flex-col">
                {/* Service Icon */}
                <div className="bg-gradient-primary p-4 rounded-xl w-fit">
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Service Header */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 flex-1">
                  <h4 className="font-medium text-foreground">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">Tools & Software:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-4 border-t border-border space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {service.pricing}
                    </span>
                    <span className="text-sm text-muted-foreground">per project</span>
                  </div>
                  <Button className="btn-secondary w-full group">
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="fade-in-up">
          <Card className="card-elegant">
            <CardContent className="p-8">
              <h3 className="heading-tertiary text-center mb-12">
                My Working Process
              </h3>
              
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    step: "01",
                    title: "Consultation",
                    description: "Understanding your requirements and project scope"
                  },
                  {
                    step: "02",
                    title: "Planning",
                    description: "Creating detailed project timeline and strategy"
                  },
                  {
                    step: "03",
                    title: "Execution",
                    description: "Professional design and development work"
                  },
                  {
                    step: "04",
                    title: "Delivery",
                    description: "Final review, revisions, and project delivery"
                  }
                ].map((process, index) => (
                  <div key={index} className="text-center space-y-3">
                    <div className="bg-gradient-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto text-xl font-bold">
                      {process.step}
                    </div>
                    <h4 className="font-semibold text-foreground">
                      {process.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {process.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Training Section */}
        <div className="mt-16 fade-in-up">
          <Card className="card-elegant bg-gradient-secondary text-white">
            <CardContent className="p-8 text-center space-y-6">
              <h3 className="text-3xl font-semibold">
                Looking to Learn These Skills?
              </h3>
              <p className="text-white/90 max-w-2xl mx-auto">
                Join thousands of students worldwide who have mastered these skills through 
                my comprehensive training programs. Available both online and in-person.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-secondary hover:bg-white/90">
                  Explore Courses
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Training Inquiry
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;