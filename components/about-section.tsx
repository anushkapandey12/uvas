"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, Award, Users, Target, Sparkles } from "lucide-react"

export function AboutSection() {
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

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We are relentlessly committed to delivering the highest quality in every project, ensuring our clients receive nothing but the best materials and services."
    },
    {
      icon: Users,
      title: "Integrity",
      description: "Building lasting relationships through transparent business practices, ethical conduct, and honest communication with all stakeholders."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Continuously embracing modern solutions, cutting-edge technologies, and sustainable practices to address infrastructure challenges effectively."
    }
  ]

  return (
    <section id="about" ref={sectionRef} className="relative py-28 bg-card overflow-hidden z-10">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/3 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-accent/3 to-transparent" />
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-primary/20 rounded-full animate-ping" style={{ animationDuration: "3s" }} />
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-accent/20 rounded-full animate-bounce" style={{ animationDuration: "4s" }} />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="space-y-10">
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider">
                <Sparkles className="h-4 w-4" />
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-foreground mt-4 leading-[1.15] tracking-tight text-balance">
                A Legacy of <span className="text-primary">Trust</span> & <span className="text-primary">Quality</span>
              </h2>
            </div>

            <div className={`space-y-5 text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p>
                UVAS INFRA PRODUIT PRIVATE LIMITED is a distinguished infrastructure company
                headquartered in the heart of Patna, Bihar. Founded on 9th October, 2013 with an unwavering vision to
                contribute meaningfully to India{"'"}s rapidly growing infrastructure needs, we have
                established ourselves as a cornerstone of reliability in the trading, construction,
                exports, and industrial materials sector.
              </p>
              <p>
                Our journey began with a simple yet powerful belief: that quality infrastructure
                forms the backbone of national development. Today, we stand proud as a trusted
                partner to hundreds of businesses, contractors, and government agencies across
                the country. Our expertise spans the entire spectrum of construction materials,
                from premium-grade slag products to specialized industrial supplies.
              </p>
            </div>

            <div className={`space-y-3 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {[
                "GST Registered (Regular Scheme) - Fully Compliant",
                "Pan-India Operations with Nationwide Logistics Network",
                "International Export Capabilities - Global Trade Partners",
                "ISO Certified Quality Standards & Best Practices"
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-primary/5 transition-colors duration-300 group"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Values Cards */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`p-7 bg-background rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 group cursor-default ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                style={{ transitionDelay: `${index * 200 + 300}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                    <value.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-xl mb-2">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Leadership highlight */}
            <div className={`p-7 bg-primary rounded-2xl text-primary-foreground transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <p className="text-primary-foreground/70 text-xs font-medium uppercase tracking-wider mb-2">Leadership</p>
              <h4 className="font-extrabold text-xl mb-1">Shri Shambhu Sharan Patel</h4>
              <p className="text-primary-foreground/90 text-sm">Director</p>
              <p className="text-primary-foreground/60 text-sm mt-3 leading-relaxed">
                A visionary leader committed to infrastructure development and economic growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
