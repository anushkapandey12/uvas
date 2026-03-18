"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Truck, Globe, ChevronDown } from "lucide-react"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-8")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-bounce" style={{ animationDuration: "3s" }} />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent/30 rounded-full animate-bounce" style={{ animationDuration: "4s", animationDelay: "0.5s" }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary/20 rounded-full animate-bounce" style={{ animationDuration: "3.5s", animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-accent/25 rounded-full animate-ping" style={{ animationDuration: "2s" }} />
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-primary/15 rounded-full animate-pulse" style={{ animationDuration: "2.5s" }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 tracking-wide">
                Trusted Infrastructure Partner
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-foreground leading-[1.1] tracking-tight text-balance">
                Building Tomorrow{"'"}s
                <span className="text-primary block mt-2"> Infrastructure</span>
                <span className="text-foreground/70 text-3xl md:text-4xl font-semibold block mt-3">Today</span>
              </h1>
            </div>

            <p className={`text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              UVAS INFRA PRODUIT PRIVATE LIMITED stands as a beacon of excellence in India{"'"}s infrastructure sector. Established on 9th October,2013 with a vision to transform the landscape of trading, construction, and exports, we have emerged as a trusted partner for businesses across the nation. Our commitment to quality, integrity, and innovation drives every project we undertake, from supplying premium construction materials to facilitating international trade in industrial products.
            </p>

            <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Button size="lg" asChild className="group text-base font-medium px-8 py-6 shadow-lg shadow-primary/15 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300">
                <a href="#services">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base font-medium px-8 py-6 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <a href="#contact">Contact Us</a>
              </Button>
            </div>

            {/* Stats with counter animation */}
            <div className={`grid grid-cols-3 gap-6 pt-10 border-t border-border transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="group cursor-default">
                <p className="text-3xl md:text-4xl font-extrabold text-primary group-hover:scale-110 transition-transform duration-300">12+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div className="group cursor-default">
                <p className="text-3xl md:text-4xl font-extrabold text-primary group-hover:scale-110 transition-transform duration-300">500+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects Completed</p>
              </div>
              <div className="group cursor-default">
                <p className="text-3xl md:text-4xl font-extrabold text-primary group-hover:scale-110 transition-transform duration-300">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Active Clients</p>
              </div>
            </div>
          </div>

          {/* Visual element */}
          <div className="relative hidden lg:block">
            <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              {/* Main card */}
              <div className="relative bg-card rounded-3xl p-10 shadow-xl border border-border hover:shadow-2xl transition-shadow duration-500">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-4 group cursor-default">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                      <Building2 className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">Construction</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Premium quality construction materials and comprehensive project support</p>
                  </div>
                  <div className="space-y-4 group cursor-default">
                    <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center group-hover:bg-accent group-hover:scale-105 transition-all duration-300">
                      <Truck className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">Trading</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Comprehensive trading solutions connecting suppliers across India</p>
                  </div>
                  <div className="col-span-2 space-y-4 pt-6 border-t border-border group cursor-default">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                      <Globe className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">Exports</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">International export of slag and construction materials to global markets</p>
                  </div>
                </div>
              </div>

              {/* Decorative animated elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/15 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1.5s" }} />

              {/* Floating badge */}
              <div className="absolute -top-4 right-8 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce" style={{ animationDuration: "3s" }}>
                GST Registered
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}
