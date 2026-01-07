"use client"

import { Wifi, Package, Wrench, Lock, Truck, TrendingUp } from "lucide-react"
import { ScrollFadeIn } from "./scroll-animation"
import Link from "next/link";

const services = [
  {
    icon: Wifi,
    title: "IoT Connectivity for POS",
    description:
      "Secure M2M/IoT connectivity designed for POS and ECR deployments with dedicated SIMs and private APN configurations.",
    features: ["Dedicated IoT SIMs", "Private APN", "Nationwide Coverage"],
    image: "/iot-connectivity-pos-devices-network.jpg",
  },
  {
    icon: Package,
    title: "POS Hardware Sales & Distribution",
    description:
      "Authorized PAX Technology reseller supplying certified payment hardware and consumables in accordance with regulations.",
    features: ["POS Terminals", "Genuine Spare Parts", "ECR Devices"],
    image: "/pos-payment-terminals-hardware-devices.jpg",
  },
  {
    icon: Wrench,
    title: "Field Service Management",
    description:
      "Nationwide field service operations supporting the complete POS device lifecycle with SLA-driven delivery.",
    features: ["Device Deployment", "Technical Support", "Device Swap"],
    image: "/field-service-technician-deployment.jpg",
  },
  {
    icon: Lock,
    title: "Authorized Maintenance & Repair",
    description:
      "Certified diagnostics and repair services using genuine spare parts with controlled turnaround times.",
    features: ["Diagnostics & Repair", "Refurbishment", "Quality Assurance"],
    image: "/repair-maintenance-technical-workshop.jpg",
  },
  {
    icon: Truck,
    title: "Secure Storage & Logistics",
    description:
      "Secure warehousing and logistics supporting high-volume POS operations with efficient nationwide rollouts.",
    features: ["POS Warehousing", "Deployment Staging", "Reverse Logistics"],
    image: "/logistics-warehouse-storage-facility.jpg",
  },
  {
    icon: TrendingUp,
    title: "Trade-In & Upgrade Programs",
    description: "Structured trade-in programs enabling device replacement and capital expenditure reduction.",
    features: ["Device Replacement", "Compliance Updates", "Legacy Support"],
    image: "/upgrade-program-technology-refresh.jpg",
  },
  {
    icon: Wifi,
    title: "AirLink (No SIM, All Signal)",
    description: "Zero-touch remote provisioning, Global multi-operator, auto-switching, One-click remote config, Real-time usage monitoring, smart alerts",
    features: ["Solve Poor Coverage", "Speed First", "Touchless eSIM activation"],
    image: "AirLink.PNG",
  
 },


  {
    icon: Wifi,
    title: "AirLoad Solution",
    description: "One-click to provision remotely, Universal process supports multiple operators, One platform to monitor cards and terminals.",
    features: ["Efficient Centralized Management", "One-to-One Correspondence from eSIM to Terminal", "Remote Deployment"],
    image: "/air_load5-2.png",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 animate-fade-in-up text-foreground">
            Our Core <span className="text-primary">Services</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto animate-fade-in-up delay-100">
            Comprehensive POS ecosystem solutions designed for scale, security, and reliability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <ScrollFadeIn key={index} delay={index * 100}>
                <div
                  className="group h-full card-futuristic p-6 rounded-xl flex flex-col"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image with hover expansion effect */}
                  <div className="card-image mb-6 -mx-6 -mt-6 rounded-t-xl overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="card-image-overlay" />
                  </div>

                  {/* Icon with purple glow effect on hover */}
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-accent/20 transition-all duration-300">
                    <Icon
                      size={24}
                      className="text-primary group-hover:text-accent group-hover:scale-110 transition-all duration-300"
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300 text-foreground">
                    {service.title}
                  </h3>

                  <p className="text-foreground/60 text-sm mb-4 flex-grow">{service.description}</p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {service.features.map((feature, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full group-hover:bg-accent/20 group-hover:text-accent transition-all duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollFadeIn>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in-up delay-500">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-accent hover:text-accent-foreground hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 ease-out hover:-translate-y-1">
          <Link href="/quote">Request a Quote</Link>
          </button>
        </div>
      </div>
    </section>
  )
}
