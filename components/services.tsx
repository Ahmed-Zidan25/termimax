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
    image: "/pos-devices.png",
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
    image: "/logistics-warehouse-storage-facility.jpeg",
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
    video: "/dot_connection_02.mp4", // Path to your file in the public folder
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
          <p className