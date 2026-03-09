import { Link } from "@tanstack/react-router";
import { CheckCircle } from "lucide-react";
import { useMetaTags } from "../hooks/useMetaTags";

const services = [
  {
    id: "kitchen",
    title: "Kitchen Bond Cleaning \u2014 Gold Coast",
    img: "/assets/generated/service-kitchen-cleaning.dim_800x500.jpg",
    alt: "Professional kitchen bond cleaning Gold Coast \u2014 oven, rangehood, cupboards and benches cleaned spotless",
    items: [
      "Oven \u2014 inside and out, including racks, trays, and glass door",
      "Rangehood \u2014 filter, fan, and exterior",
      "Stovetop / cooktop \u2014 all burners, grates, and surrounding surfaces",
      "Benchtops \u2014 wiped down and sanitised",
      "Sink \u2014 scrubbed, descaled, and polished",
      "Cupboards \u2014 inside and outside, including handles",
      "Drawers \u2014 emptied, wiped out, and sanitised",
      "Splashback \u2014 degreased and streak-free",
      "Walls \u2014 spot-cleaned for grease marks",
      "Light switches and power points \u2014 wiped down",
      "Exhaust fan \u2014 cleaned inside and out",
      "Floor \u2014 mopped and sanitised",
    ],
    body: [
      "The kitchen is the hardest room to clean when you move out. Grease builds up on the stovetop, the oven gets caked with baked-on food, and the rangehood filter gets sticky and smelly. Property managers check the kitchen very carefully during a bond inspection \u2014 it\u2019s one of the most common reasons tenants lose their bond money.",
      "At Tru Gold Coast Bond Cleaners, our kitchen bond cleaning service is thorough and detailed. We clean every single part of your kitchen so your property manager can\u2019t find a single fault.",
      "We use professional-grade kitchen degreasers that cut through even the toughest grease and burnt-on food. Our cleaners know exactly what property managers look for, and we follow the REIQ checklist for every job.",
      "A dirty oven or greasy rangehood is one of the top reasons property managers deduct from your bond. Our kitchen cleaning is included in every full bond clean package, backed by our 100% bond-back guarantee.",
      "We serve all Gold Coast suburbs including Surfers Paradise, Broadbeach, Southport, Robina, Coomera, Hope Island, Burleigh Heads, Palm Beach, Nerang, and more.",
    ],
  },
  {
    id: "bathroom",
    title: "Bathroom Bond Cleaning \u2014 Gold Coast",
    img: "/assets/generated/service-bathroom-cleaning.dim_800x500.jpg",
    alt: "Spotless bathroom bond cleaning Gold Coast \u2014 tiles, grout, shower screens and toilets professionally cleaned",
    items: [
      "Shower screens and tiles \u2014 soap scum removed, streak-free finish",
      "Grout \u2014 scrubbed and mould-treated",
      "Bath \u2014 scrubbed, polished, and sanitised",
      "Toilet \u2014 inside, outside, around the base, and behind the cistern",
      "Vanity and sink \u2014 cleaned, descaled, and polished",
      "Taps and showerhead \u2014 descaled and shining",
      "Mirrors \u2014 streak-free clean",
      "Exhaust fan \u2014 cleaned inside and out",
      "Walls and ceiling \u2014 checked for mould and cleaned",
      "Floor \u2014 mopped and disinfected",
      "Towel rails and toilet roll holders \u2014 wiped down",
    ],
    body: [
      "Bathrooms are one of the most inspected rooms during a bond clean. Soap scum on shower screens, mould on grout, limescale on taps, and dirty toilets are instant red flags for property managers. One dirty bathroom can cost you hundreds of dollars from your bond deposit.",
      "Tru Gold Coast Bond Cleaners makes your bathroom sparkle from top to bottom. Our bathroom bond cleaning service removes soap scum, kills mould, descales taps and showerheads, and leaves every surface gleaming.",
      "We use hospital-grade bathroom disinfectants and mould removers. Our team knows every trick to get rid of stubborn limescale and black mould \u2014 the two things that fail most bathroom inspections.",
      "Mould, soap scum, and limescale are very hard to remove without the right products and experience. Property managers notice these instantly. Our professional clean makes your bathroom look brand new.",
    ],
  },
  {
    id: "carpet",
    title: "Carpet Steam Cleaning \u2014 Gold Coast",
    img: "/assets/generated/service-carpet-cleaning.dim_800x500.jpg",
    alt: "Professional carpet steam cleaning Gold Coast \u2014 deep clean removes stains, dirt and odours",
    items: [
      "Pre-vacuum of all carpeted areas",
      "Pre-treatment of stains and high-traffic areas",
      "Hot water extraction (steam clean) of all carpets",
      "Deodorising treatment",
      "Drying (carpets are usually dry within 2\u20134 hours)",
    ],
    pricing: [
      { size: "1 bedroom", price: "from $80" },
      { size: "2 bedrooms", price: "from $120" },
      { size: "3 bedrooms", price: "from $160" },
      { size: "4 bedrooms", price: "from $200" },
    ],
    body: [
      "Most rental properties in Gold Coast have carpets, and most lease agreements require professional carpet steam cleaning when you move out. If you skip carpet cleaning or do a DIY job, your property manager will almost certainly deduct the cost from your bond.",
      "Tru Gold Coast Bond Cleaners uses professional hot-water extraction (steam cleaning) machines that clean deep into carpet fibres, removing dirt, stains, allergens, pet hair, and odours. Our carpet cleaning is included in our full bond clean packages or available as a standalone service.",
      "We service all carpet types including loop pile, cut pile, and Berber carpets. Our machines are powerful enough to remove even old, set-in stains.",
      "Most Queensland tenancy agreements include a clause requiring professional carpet cleaning on vacate. Your property manager will ask for a receipt from a professional cleaner. We provide a receipt for every job.",
    ],
  },
  {
    id: "windows",
    title: "Window Cleaning \u2014 Gold Coast",
    img: "/assets/generated/service-window-cleaning.dim_800x500.jpg",
    alt: "Professional window cleaning Gold Coast \u2014 streak-free interior and exterior windows for bond inspections",
    items: [
      "All interior windows (glass, frame, sill)",
      "Sliding glass doors \u2014 inside and tracks",
      "Mirrors in all rooms",
      "Glass splashbacks in kitchen",
    ],
    body: [
      "Dirty windows are surprisingly hard to clean and easy to spot during a bond inspection. Streaks, smudges, dirt, and water marks on windows and glass sliding doors are common reasons property managers raise issues during inspections.",
      "Tru Gold Coast Bond Cleaners provides streak-free window cleaning as part of every full bond clean. We clean all interior windows and sliding doors, tracks, and frames. External windows at ground level are also included.",
      "We use professional-grade window cleaning solutions and microfibre cloths to leave every glass surface perfectly clear with zero streaks.",
    ],
  },
  {
    id: "full-vacate",
    title: "Full Vacate Cleaning Package \u2014 Gold Coast",
    img: "/assets/generated/hero-bond-cleaning.dim_1200x600.jpg",
    alt: "Complete vacate bond cleaning package Gold Coast \u2014 everything included for full bond refund",
    items: [
      "Full kitchen clean (oven, rangehood, cupboards, benches)",
      "All bathrooms and toilets",
      "All bedrooms \u2014 vacuumed, dusted, wiped",
      "Living areas \u2014 vacuumed, mopped, dusted",
      "Laundry \u2014 tub, machine area, shelves",
      "Windows and sliding doors (interior + tracks)",
      "Walls \u2014 spot-cleaned",
      "Skirting boards, light switches, power points",
      "Ceiling fans and exhaust fans",
      "Garage \u2014 swept and cleaned",
      "Outdoor areas \u2014 swept",
    ],
    addons: [
      "Carpet steam cleaning",
      "External window cleaning (upper floors)",
      "Pressure washing",
    ],
    body: [
      "Our full vacate cleaning package covers the entire property from top to bottom. This is our most popular service because it includes everything your property manager checks \u2014 all in one fixed price.",
      "We service all Gold Coast suburbs and follow the full REIQ end-of-lease checklist on every job.",
      "Book today for a fast, free quote. Same-day bookings available.",
    ],
  },
];

export function ServicesPage() {
  useMetaTags({
    title:
      "Bond Cleaning Services Gold Coast | Kitchen, Bathroom, Carpet & More",
    description:
      "Tru Gold Coast Bond Cleaners offers complete vacate cleaning services including kitchen, bathroom, carpet steam cleaning, windows and more. Get your bond back guaranteed.",
    ogImage: "/assets/generated/service-kitchen-cleaning.dim_800x500.jpg",
    keywords:
      "bond cleaning services Gold Coast, kitchen bond clean, bathroom bond clean, carpet steam cleaning Gold Coast",
  });

  return (
    <>
      <section className="bg-[#0f172a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our Bond Cleaning Services
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Professional, thorough, and guaranteed. Every service follows the
            REIQ end-of-lease checklist so your property manager is 100%
            satisfied.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((svc, idx) => (
            <article
              key={svc.id}
              id={svc.id}
              data-ocid={`services.item.${idx + 1}`}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
            >
              <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                <img
                  src={svc.img}
                  alt={svc.alt}
                  className="rounded-2xl shadow-lg w-full object-cover aspect-video"
                />
              </div>
              <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0f172a] mb-4">
                  {svc.title}
                </h2>
                {svc.body.map((para) => (
                  <p
                    key={para.slice(0, 40)}
                    className="text-gray-600 text-sm leading-relaxed mb-4"
                  >
                    {para}
                  </p>
                ))}
                <div className="my-6">
                  <h3 className="font-bold text-[#0f172a] mb-3">
                    What We Clean:
                  </h3>
                  <ul className="space-y-2">
                    {svc.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle
                          size={16}
                          className="text-[#d4a017] mt-0.5 flex-shrink-0"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {"pricing" in svc && svc.pricing && (
                  <div className="my-6 bg-gray-50 rounded-xl p-4">
                    <h3 className="font-bold text-[#0f172a] mb-3">Pricing:</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {svc.pricing.map((p) => (
                        <li
                          key={p.size}
                          className="flex justify-between text-sm bg-white rounded-lg px-3 py-2 border border-gray-100"
                        >
                          <span className="text-gray-600">{p.size}</span>
                          <span className="font-bold text-[#d4a017]">
                            {p.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {"addons" in svc && svc.addons && (
                  <div className="my-6">
                    <h3 className="font-bold text-[#0f172a] mb-3">
                      Optional Add-ons:
                    </h3>
                    <ul className="space-y-1">
                      {svc.addons.map((addon) => (
                        <li
                          key={addon}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <span className="text-[#d4a017]">+</span> {addon}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <Link
                  to="/contact"
                  data-ocid={`services.book.${idx + 1}.primary_button`}
                  className="inline-block bg-[#d4a017] hover:bg-[#a07810] text-white font-bold px-6 py-3 rounded-full text-sm transition-colors mt-2"
                >
                  Book This Service
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-[#0f172a] mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-gray-600 mb-8">
            WhatsApp us and we&apos;ll help you figure out exactly what your
            property needs.
          </p>
          <a
            href="https://wa.me/61488841883"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="services.cta.whatsapp.button"
            className="inline-block bg-[#25D366] hover:bg-[#1da851] text-white font-bold px-10 py-4 rounded-full text-lg transition-colors"
          >
            Chat on WhatsApp \u2014 0488 841 883
          </a>
        </div>
      </section>
    </>
  );
}
