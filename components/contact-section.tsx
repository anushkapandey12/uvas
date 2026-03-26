"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Building2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Script from "next/script";

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("sending")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setFormStatus("sent")
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setTimeout(() => setFormStatus("idle"), 4000)
    } catch (error) {
      setFormStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message")
      setTimeout(() => setFormStatus("idle"), 4000)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "uvasinfraproduit2013@gmail.com",
      href: "mailto:uvasinfraproduit2013@gmail.com"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "241C, Patel House, Patliputra Colony, Patna - 800013, Bihar",
      href: null
    },
    {
      icon: MapPin,
      label: " Corporate Address",
      value: "202, Brahmaputra Apartment, Dr. BD Marg, New Delhi - 110001",
      href: null
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon - Sat: 9:00 AM - 6:00 PM",
      href: null
    }
  ]

  return (
    <section id="contact" ref={sectionRef} className="relative py-28 bg-card overflow-hidden z-10">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "4s" }} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }} />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary/20 rounded-full animate-ping" style={{ animationDuration: "3s" }} />
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-accent/20 rounded-full animate-bounce" style={{ animationDuration: "3.5s" }} />

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`inline-block text-primary font-medium text-sm uppercase tracking-wider transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Contact Us
          </span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-foreground mt-4 leading-[1.15] tracking-tight text-balance transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Let{"'"}s <span className="text-primary">Connect</span> Today
          </h2>
          <p className={`text-base md:text-lg text-muted-foreground mt-5 leading-relaxed transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Ready to discuss your infrastructure needs? Reach out to us for inquiries about our
            services, partnerships, or business opportunities. Our team is here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-5">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`group flex items-start gap-4 p-5 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                  <info.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-foreground font-medium hover:text-primary transition-colors mt-1 block">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium mt-1">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Company Details Card */}
            <Card className={`mt-8 bg-gradient-to-br from-primary to-accent text-primary-foreground border-0 shadow-xl shadow-primary/15 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '800ms' }}>
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-foreground/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold">Company Details</CardTitle>
                    <CardDescription className="text-primary-foreground/60 text-xs">
                      Official registration information
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-primary-foreground/15">
                  <span className="text-primary-foreground/60 text-xs">Legal Name</span>
                  <span className="font-medium text-sm">UVAS INFRA PRODUIT PVT. LTD.</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary-foreground/15">
                  <span className="text-primary-foreground/60 text-xs">GST Number</span>
                  <span className="font-medium tracking-wide text-sm">10AABCU6427H2ZM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-primary-foreground/60 text-xs">GST Scheme</span>
                  <span className="font-medium bg-primary-foreground/15 px-3 py-1 rounded-full text-xs">Regular</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary-foreground/15">
                  <span className="text-primary-foreground/60 text-xs">CIN Number</span>
                  <span className="font-medium tracking-wide text-sm">U45400BR2013PTC021288</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary-foreground/15">
                  <span className="text-primary-foreground/60 text-xs">NIC Code</span>
                  <span className="font-medium tracking-wide text-sm">4540</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className={`border border-border shadow-xl shadow-muted/10 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{ transitionDelay: '500ms' }}>
            <CardHeader className="bg-muted/20 border-b border-border pb-6 pt-6">
              <CardTitle className="text-xl font-bold">Send us a Message</CardTitle>
              <CardDescription className="text-sm">
                Fill out the form below and we{"'"}ll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <a href="https://form.typeform.com/to/PISvIWdL" target="_blank">
                <button className="w-full h-12 bg-primary text-white rounded-lg text-base font-medium">
                  Connect to Us
                </button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
