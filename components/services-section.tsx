"use client"

import { useEffect, useRef, useState } from "react"
import { Building2, Truck, Globe, Factory, ArrowRight, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-8")
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Building2,
      title: "Construction",
      description: "We provide end-to-end construction services and premium quality materials for residential, commercial, and industrial projects. Our materials meet stringent industry standards, backed by quality certifications. From foundation to finishing, we offer technical consultation and project support to ensure successful completion.",
      features: ["Quality Materials", "Project Support", "Technical Consultation", "Timely Execution"]
    },
    {
      icon: Truck,
      title: "Trading",
      description: "Our comprehensive trading division connects manufacturers, suppliers, and end-users across India. We specialize in bulk procurement and distribution of construction materials, industrial supplies, and infrastructure components. With competitive pricing and reliable logistics, we ensure seamless supply chain operations for businesses of all scales.",
      features: ["Bulk Material Supply", "Competitive Pricing", "Reliable Delivery", "Quality Assurance"]
    },
    {
      icon: Globe,
      title: "Exports",
      description: "Our export division facilitates international trade of slag and industrial materials to global markets. We are fully compliant with export regulations and international trade standards. Our expertise in documentation, logistics, and quality certification ensures smooth cross-border transactions with partners across Asia, Europe, and beyond.",
      features: ["Global Reach", "Export Documentation", "Quality Certification", "Trade Compliance"]
    },
    {
      icon: Factory,
      title: "Slag Products",
      description: "We are leading suppliers of premium quality slag products for construction and industrial applications. Slag, a sustainable byproduct of steel manufacturing, offers excellent properties for road construction, cement production, and landscaping. Our eco-friendly materials support green building initiatives while delivering superior performance.",
      features: ["Sustainable Materials", "Industrial Grade", "Eco-Friendly", "Cost Effective"]
    }
  ]

  return (
    <section id="services" ref={sectionRef} className="relative py-28 bg-background overflow-hidden z-10">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 animate-pulse" style={{ animationDuration: "4s" }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/3 rounded-full blur-3xl translate-x-1/3 animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }} />
      <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-primary/25 rounded-full animate-ping" style={{ animationDuration: "2.5s" }} />
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-accent/25 rounded-full animate-bounce" style={{ animationDuration: "3s" }} />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`inline-block text-primary font-medium text-sm uppercase tracking-wider transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our Services
          </span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-foreground mt-4 leading-[1.15] tracking-tight text-balance transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Comprehensive <span className="text-primary">Infrastructure</span> Solutions
          </h2>
          <p className={`text-base md:text-lg text-muted-foreground mt-5 leading-relaxed transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            From trading and construction to international exports, we offer a complete suite of 
            services designed to meet all your infrastructure and industrial material needs with 
            uncompromising quality and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 border border-border hover:border-primary/20 overflow-hidden rounded-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 150 + 400}ms` }}
            >
              <CardHeader className="pb-5 pt-7 px-7">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                    <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <CardTitle className="text-xl md:text-2xl font-bold text-foreground mb-2">{service.title}</CardTitle>
                    <div className="w-12 h-0.5 bg-primary rounded-full group-hover:w-20 transition-all duration-500" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-7 pb-7">
                <CardDescription className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {service.description}
                </CardDescription>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="flex items-center gap-2 text-sm p-2 rounded-lg bg-muted/30 group-hover:bg-primary/5 transition-colors duration-300"
                    >
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-foreground text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-5 border-t border-border">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
