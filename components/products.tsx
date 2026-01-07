"use client"

import { RadioTower, Tablet, HandMetal } from "lucide-react" // Added WifiSiren as a placeholder for wifiSync
import { ScrollFadeIn } from "./scroll-animation"

const productsData = [
  {
    icon: Tablet,
    title: "Station",
    description: "Thinner than your imagination | Break connections’ boundaries. High Configurations for Superior Performance",
    features: ["Safe Design", "Station and Tablet", "Station and Eye", "Station and Printer"],
    image: "ElysStationPartImg_7.png",
  },
  {
    icon: HandMetal,
    title: "Kitchen Display System",
    description: "Protection against water and dust, Easy to wipe oil and insect. Expanding capabilities in your kitchen environment.",
    features: ["Full metal construction", "IP54 Waterproof", "Vertical or Horizontal", "PoE"],
    image: "/ElysDisplay1_1.png",
  },
  {
    icon: RadioTower,
    title: "Tower, An Excellent All-in-one ECR",
    description: "Tower comes in an aluminum alloy body with an ultra-thin design to stand out in high-end positioning.",
    features: ["Sleek and Stylish Design", "Brilliant screen", "NFC Contactless", "Easy to Print"],
    image: "/ElysTowerMobilePart_5_2.png",
  }
]

export default function Products() {
  return (
    <section id="products" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 animate-fade-in-up text-foreground">
            Our <span className="text-primary">Product Categories</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto animate-fade-in-up delay-100">
            Discover our comprehensive range of products designed to meet all your point-of-sale needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.map((product, index) => {
            const Icon = product.icon
            return (
              <ScrollFadeIn key={index} delay={index * 100}>
                <div
                  className="group h-full card-futuristic p-6 rounded-xl flex flex-col"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="card-image mb-6 -mx-6 -mt-6 rounded-t-xl overflow-hidden aspect-video relative">
                    {/* Check if product has a video, otherwise show image */}
                    {product.video ? (
                      <video
                        src={product.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="card-image-overlay" />
                  </div>

                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-accent/20 transition-all duration-300">
                    <Icon
                      size={24}
                      className="text-primary group-hover:text-accent group-hover:scale-110 transition-all duration-300"
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300 text-foreground">
                    {product.title}
                  </h3>

                  <p className="text-foreground/60 text-sm mb-4 flex-grow">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {product.features.map((feature, i) => (
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

        <div className="text-center mt-12 animate-fade-in-up delay-500">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300">
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  )
}