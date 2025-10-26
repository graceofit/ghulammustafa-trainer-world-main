import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "Masters in Computer Science",
      institution: "Punjab University",
      year: "2003",
      icon: GraduationCap,
    },
    {
      degree: "Masters in Economics",
      institution: "Punjab University", 
      year: "2007",
      icon: GraduationCap,
    },
    {
      degree: "Professional Diplomas in Advanced Computer Technologies",
      institution: "University of Management and Technology",
      year: "2005",
      icon: Award,
    },
  ];

  const career = [
    {
      title: "Allied College of Textile Management & Administration",
      role: "IT Instructor",
      period: "2005-2010",
      description: "Specialized in textile industry software and embroidery digitizing"
    },
    {
      title: "Grace Commerce Academy & Grace Institute of Computer Studies",
      role: "Senior IT Trainer",
      period: "2010-2015",
      description: "Advanced training in graphic design and computer technologies"
    },
    {
      title: "Kahoot Pharma",
      role: "Graphic Designer",
      period: "2015-2018",
      description: "Corporate branding and pharmaceutical marketing materials"
    },
    {
      title: "Design World & Bismillah Embroidery",
      role: "Lead Designer & Trainer",
      period: "2018-Present",
      description: "Comprehensive design services and international training programs"
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="heading-secondary mb-6">About Professor Ghulam Mustafa</h2>
          <p className="text-professional max-w-3xl mx-auto">
            With over two decades of dedicated experience in IT training and design, I have had the privilege 
            of educating more than 4,000 students across 135+ countries. My journey spans from traditional 
            classroom teaching to modern online platforms like Udemy, always adapting to meet the evolving 
            needs of the digital world.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Section */}
          <div className="space-y-8 fade-in-up">
            <h3 className="heading-tertiary text-primary flex items-center gap-3">
              <GraduationCap className="h-8 w-8" />
              Education & Qualifications
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="card-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <edu.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-foreground mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-muted-foreground mb-2">{edu.institution}</p>
                        <div className="flex items-center gap-2 text-sm text-primary">
                          <Calendar className="h-4 w-4" />
                          {edu.year}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Career Timeline */}
          <div className="space-y-8 slide-in-right">
            <h3 className="heading-tertiary text-primary flex items-center gap-3">
              <MapPin className="h-8 w-8" />
              Career Journey
            </h3>
            
            <div className="space-y-6">
              {career.map((job, index) => (
                <Card key={index} className="card-elegant">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold text-lg text-foreground">
                          {job.title}
                        </h4>
                        <span className="text-sm text-secondary font-medium bg-secondary/10 px-3 py-1 rounded-full">
                          {job.period}
                        </span>
                      </div>
                      <p className="text-primary font-medium">{job.role}</p>
                      <p className="text-muted-foreground leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Highlights */}
        <div className="mt-16 fade-in-up">
          <Card className="card-elegant bg-gradient-primary text-white">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <h3 className="heading-tertiary text-white">
                  Global Impact & Recognition
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-accent-light">20+</div>
                    <div className="text-white/90">Years of Excellence</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-accent-light">4,000+</div>
                    <div className="text-white/90">Students Worldwide</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-accent-light">135+</div>
                    <div className="text-white/90">Countries Reached</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;