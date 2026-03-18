"use client"

import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className="bg-foreground text-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className={`lg:col-span-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">U</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold leading-tight tracking-tight">UVAS INFRA</h3>
                <p className="text-xs text-background/50 uppercase tracking-wider">Produit Private Limited</p>
              </div>
            </div>
            <p className="text-background/60 max-w-md mb-6 leading-relaxed text-sm">
              A leading infrastructure company specializing in trading, construction materials,
              exports, and slag products. Building India{"'"}s future with quality and integrity
              since our inception.
            </p>
            <div className="p-5 rounded-xl bg-background/5 border border-background/10">
              <p className="text-xs text-background/40 uppercase tracking-wider">Promoter & Director</p>
              <p className="text-background font-semibold text-lg mt-1">Shri Shambhu Sharan Patel</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h4 className="font-semibold text-background mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="group flex items-center gap-2 text-background/60 hover:text-primary transition-all duration-300 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-125 transition-all duration-300" />
                    {link}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h4 className="font-semibold text-background mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="text-background/60 text-sm leading-relaxed">
                  241C, Patel House, Patliputra Colony, Patna - 800013, Bihar
                </span>
              </li>
              <li>
                <a href="mailto:uvasinfraproduit2013@gmail.com" className="group flex items-center gap-3 text-background/60 hover:text-primary transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Mail className="h-4 w-4 text-primary group-hover:text-background transition-colors duration-300" />
                  </div>
                  <span className="font-medium text-xs break-all">uvasinfraproduit2013@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t border-background/10 mt-12 pt-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">&copy; {new Date().getFullYear()} UVAS INFRA PRODUIT PRIVATE LIMITED. All rights reserved.</p>
            <div className="flex items-center gap-2 text-xs">
              <span className="px-3 py-1.5 rounded-full bg-background/10 text-background/60 font-medium">CIN: U45400BR2013PTC021288</span>
              <span className="px-3 py-1.5 rounded-full bg-background/10 text-background/60 font-medium">GST: 10AABCU6427H2ZM</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
