"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-card/98 backdrop-blur-md shadow-lg' : 'bg-card/95 backdrop-blur-sm'}`}>
      {/* Top bar */}
      <div className={`bg-primary text-primary-foreground overflow-hidden transition-all duration-500 ${isScrolled ? 'py-1.5' : 'py-2'}`}>
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:uvasinfraproduit2013@gmail.com" className="hidden sm:flex group items-center gap-2 hover:opacity-90 transition-all duration-300">
              <div className="w-6 h-6 rounded-full bg-primary-foreground/15 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Mail className="h-3 w-3" />
              </div>
              <span className="font-medium tracking-wide text-xs">uvasinfraproduit2013@gmail.com</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs font-medium tracking-wider bg-primary-foreground/10 px-3 py-1 rounded-full">
            <span className="opacity-70">GST:</span>
            <span>10AABCU6427H2ZM</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={`container mx-auto px-4 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-4'}`}>
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className={`rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/20 ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}`}>
              <span className={`text-primary-foreground font-bold transition-all duration-500 ${isScrolled ? 'text-lg' : 'text-xl'}`}>U</span>
            </div>
            <div>
              <h1
                className={`font-serif font-semibold text-foreground leading-tight tracking-tight transition-all duration-500 ${isScrolled ? "text-lg" : "text-xl" }`} >
                UVAS INFRA
              </h1>
              <p
                className={`text-foreground leading-tight tracking-tight transition-all duration-500 ${ isScrolled ? "text-lg" : "text-xl"}`}>
                 Produit Private Limited
              </p>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-foreground/70 hover:text-primary transition-all duration-300 font-medium text-sm group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <Button asChild size="sm" className="font-medium shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105">
              <a href="#contact" className="flex items-center gap-1">
                Get in Touch
                <ChevronRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-5 pb-5 border-t border-border pt-5 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/70 hover:text-primary transition-all duration-300 font-medium text-base animate-in slide-in-from-left-4"
                  style={{ animationDelay: `${index * 75}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="w-fit mt-2 font-medium">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
