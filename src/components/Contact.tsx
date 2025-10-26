import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, Facebook, Linkedin, Youtube, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      details: ["+92 333 4868920", "+92 304 4761089"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["graceinsitute.lhr@gmail.com"],
      action: "Send Email"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["A-2, Johar Town", "Akber Chowk, Lahore"],
      action: "View Map"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "#",
      color: "bg-blue-600"
    },
    {
      icon: Facebook,
      name: "Facebook", 
      url: "#",
      color: "bg-blue-500"
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "#",
      color: "bg-red-600"
    },
    {
      icon: ExternalLink,
      name: "Udemy",
      url: "#",
      color: "bg-purple-600"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="heading-secondary mb-6">Get In Touch</h2>
          <p className="text-professional max-w-3xl mx-auto">
            Ready to start your next project? Have questions about my services or training programs? 
            I'd love to hear from you. Let's discuss how I can help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8 fade-in-up">
            <h3 className="heading-tertiary">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">
                          {info.title}
                        </h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                        <Button 
                          variant="link" 
                          className="p-0 h-auto text-primary hover:text-primary-dark mt-2"
                        >
                          {info.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    size="icon"
                    className={`${social.color} hover:opacity-90 transition-opacity`}
                    asChild
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5" />
                      <span className="sr-only">{social.name}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 slide-in-right">
            <Card className="card-elegant">
              <CardContent className="p-8">
                <h3 className="heading-tertiary mb-8">Send Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-muted border-border focus:border-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-muted border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project requirements or any questions you have..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-muted border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button type="submit" className="btn-hero w-full group">
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 fade-in-up">
          <Card className="card-elegant overflow-hidden">
            <CardContent className="p-0">
              <div className="h-80 bg-muted flex items-center justify-center relative">
                <div className="text-center space-y-4">
                  <MapPin className="h-12 w-12 text-primary mx-auto" />
                  <h4 className="text-xl font-semibold text-foreground">
                    Visit Our Office
                  </h4>
                  <p className="text-muted-foreground">
                    A-2, Johar Town, Akber Chowk, Lahore
                  </p>
                  <Button className="btn-outline-primary">
                    View on Google Maps
                  </Button>
                </div>
                
                {/* Overlay for map integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Contact CTA */}
        <div className="mt-16 text-center fade-in-up">
          <Card className="card-elegant bg-gradient-primary text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Need Immediate Assistance?
              </h3>
              <p className="text-white/90 mb-6">
                For urgent inquiries or quick questions, feel free to reach out directly 
                via WhatsApp or phone. I'm here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  WhatsApp: +92 333 4868920
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Call: +92 304 4761089
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;