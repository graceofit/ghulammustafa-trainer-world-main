import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "embroidery", label: "Embroidery Digitizing" },
    { id: "graphic", label: "Graphic Design" },
    { id: "uiux", label: "UI/UX Design" },
  ];

  const projects = [
    {
      id: 1,
      title: "Custom Logo Embroidery",
      category: "embroidery",
      description: "High-quality embroidery digitizing for corporate branding",
      tools: ["Wilcom", "Adobe Illustrator"],
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "E-commerce Website Design",
      category: "uiux",
      description: "Modern and responsive e-commerce platform design",
      tools: ["Figma", "Adobe XD"],
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Corporate Brand Identity",
      category: "graphic",
      description: "Complete brand identity package for business clients",
      tools: ["Adobe Illustrator", "Photoshop"],
      image: "/placeholder.svg",
    },
    {
      id: 4,
      title: "Textile Pattern Design",
      category: "embroidery",
      description: "Intricate embroidery patterns for fashion industry",
      tools: ["Wilcom", "CorelDRAW"],
      image: "/placeholder.svg",
    },
    {
      id: 5,
      title: "Mobile App Interface",
      category: "uiux",
      description: "User-friendly mobile application interface design",
      tools: ["Figma", "Sketch"],
      image: "/placeholder.svg",
    },
    {
      id: 6,
      title: "Print Media Campaign",
      category: "graphic",
      description: "Comprehensive print media design for marketing",
      tools: ["Adobe InDesign", "Photoshop"],
      image: "/placeholder.svg",
    },
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="heading-secondary mb-6">Portfolio</h2>
          <p className="text-professional max-w-3xl mx-auto">
            Explore my diverse portfolio showcasing expertise in embroidery digitizing, 
            graphic design, and UI/UX development. Each project represents years of 
            refined skills and creative innovation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id 
                  ? "bg-primary text-primary-foreground" 
                  : "btn-outline-primary"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} className="card-hover group">
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <Button size="sm" className="bg-white text-primary hover:bg-white/90">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tools Used */}
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up">
          <Card className="card-elegant bg-gradient-secondary text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-white/90 mb-6">
                Let's discuss how I can help bring your vision to life with 
                professional design and digitizing services.
              </p>
              <Button className="bg-white text-secondary hover:bg-white/90">
                Get a Quote Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;