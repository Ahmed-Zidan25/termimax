

import LogoSwiper from "@/components/LogoSwipper";

export default function HomePage() {
  
  const logos = [
    { src: "/logos/PAX_Technology_Inc_logo.png", alt: "PAX Logo" },
    { src: "/logos/logo_active.c5420012.svg", alt: "TOPWISE" },
    { src: "/logos/Copilot_20260108_210913-modified.png", alt: "PediaPay" },
    { src: "/logos/download-Photoroom.png", alt: "NewLand" },
    { src: "/logos/zolon.png", alt: "ZOLON" },
    { src: "/logos/Onomondo.png", alt: "Onomondo" },
  ];

  return (
    <div className="w-full"> {/* Added missing opening div */}
      {/* Partners/Brands Section */}
      <section className="py-12 md:py-16">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
           
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 animate-fade-in-up text-foreground">
            <span className="text-primary">Authorized Partner</span> of Leading Brands in UAE
          </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
         
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <LogoSwiper logos={logos}/>
        </div> 
      </section>
    </div>
  )
}