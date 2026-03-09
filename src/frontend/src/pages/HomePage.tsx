import { Link } from "@tanstack/react-router";
import {
  CheckCircle,
  ChevronDown,
  MapPin,
  Shield,
  Star,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { suburbs } from "../data/suburbData";
import { useMetaTags } from "../hooks/useMetaTags";

const faqs = [
  {
    id: "what-is-bond-cleaning",
    q: "What is bond cleaning and why is it required?",
    a: "Bond cleaning (also called end-of-lease or vacate cleaning) is a deep clean you do when you move out of a rental property. Your landlord or property manager checks the place before they give your bond money back. If it's not clean enough, they can take money out of your bond to pay for cleaning. Bond cleaning makes sure the property looks as good as it did when you moved in \u2014 so you get ALL your money back.",
  },
  {
    id: "why-important",
    q: "Why is bond cleaning important?",
    a: "Bond cleaning is super important because it protects your money. In Queensland, bond can be worth four weeks of rent. That\u2019s a lot of cash! If the property isn\u2019t clean, your landlord can use your bond to hire cleaners. Professional bond cleaners know exactly what property managers look for on their inspection checklist. We tick every box so you don\u2019t lose a single dollar.",
  },
  {
    id: "how-much",
    q: "How much does a bond clean cost?",
    a: "Bond cleaning in Gold Coast usually costs between $250 and $800, depending on the size of the property. A small 1-bedroom unit might cost around $250\u2013$350. A 3-bedroom house can cost $450\u2013$700+. Carpet steam cleaning, oven cleaning, and window cleaning might cost extra. At Tru Gold Coast Bond Cleaners, we give you a clear quote upfront \u2014 no hidden surprises.",
  },
  {
    id: "full-bond-clean",
    q: "What is a full bond clean?",
    a: "A full bond clean covers every single part of the property \u2014 inside and out. That means all rooms, bathrooms, kitchen (including oven and rangehood), walls, windows, blinds, carpets, garage, and outdoor areas. It\u2019s the most thorough clean you can get. We follow the REIQ (Real Estate Institute of Queensland) checklist so your property manager is happy.",
  },
  {
    id: "top-companies",
    q: "Which are the top-rated bond cleaning companies near me?",
    a: null,
    customContent: true,
  },
  {
    id: "best-products",
    q: "What cleaning products are best for bond cleaning?",
    a: "The best products for bond cleaning are hospital-grade disinfectants, degreasers for the kitchen, limescale removers for bathrooms, and streak-free glass cleaners for windows. Top brands include: Selleys Sugar Soap (great for walls and surfaces), Exit Mould (powerful mould remover for bathrooms), Jif Cream Cleanser (gentle scrub for sinks and baths), Goo Gone (removes sticky residue), and White King Bleach (for toilets and grout). We use professional-grade products that are safe, effective, and environmentally friendly.",
  },
  {
    id: "professional-cost",
    q: "How much does professional bond cleaning typically cost?",
    a: "Professional bond cleaning in Gold Coast typically costs: 1 bedroom unit: $250\u2013$350 | 2 bedroom unit: $300\u2013$450 | 3 bedroom house: $450\u2013$650 | 4 bedroom house: $550\u2013$800+. Prices vary based on property condition and add-ons like carpet steam cleaning ($80\u2013$200) and oven cleaning ($60\u2013$100). Always ask for a written quote before booking.",
  },
  {
    id: "carpet-products",
    q: "What products are best for bond cleaning carpets?",
    a: null,
    carpetContent: true,
  },
  {
    id: "choose-cleaner",
    q: "How do I choose a reliable bond cleaner?",
    a: "Choose a bond cleaner who: has strong Google reviews (4.5 stars or higher), offers a written bond-back guarantee, follows the REIQ end-of-lease checklist, is fully insured, provides a clear fixed-price quote upfront, and has experience with local property managers. Avoid cleaners who give very low quotes without seeing the property \u2014 they often miss things that cost you your bond.",
  },
  {
    id: "book-online",
    q: "Can I book a bond cleaning company online with a satisfaction guarantee?",
    a: "Yes! You can book Tru Gold Coast Bond Cleaners online or via WhatsApp at any time. We offer a 100% satisfaction guarantee \u2014 if your property manager isn\u2019t happy, we come back and re-clean for free. Our booking process is simple: fill in our contact form, tell us your property size and move-out date, and we\u2019ll confirm your booking fast.",
  },
  {
    id: "hourly-rate",
    q: "How much is a cleaner per hour in Gold Coast?",
    a: "In Gold Coast, professional cleaners charge between $35 and $65 per hour depending on the type of cleaning. General house cleaning starts at around $35\u2013$45/hour. Specialised bond cleaning or deep cleaning is usually $45\u2013$65/hour. Most bond cleaning companies offer fixed-price packages rather than hourly rates for end-of-lease cleans \u2014 this is better for you because you know the exact cost upfront.",
  },
  {
    id: "end-of-lease-cost",
    q: "How much is an end-of-lease clean in Australia? How much to pay a cleaner for 3 hours? What is the 20-minute rule in cleaning?",
    a: "End-of-lease clean in Australia: Across Australia, end-of-lease cleans cost between $200 and $1,000+ depending on property size and condition. Queensland properties on the Gold Coast are on the higher end due to the standard expected by property managers. 3-hour cleaner cost: For a 3-hour clean, expect to pay $105\u2013$195 depending on the hourly rate. This covers a basic clean of a small apartment but is not sufficient for a full bond clean. The 20-minute rule: The 20-minute rule means spending at least 20 minutes on each room during a clean. Professional bond cleaners spend much more than 20 minutes per room \u2014 especially in kitchens and bathrooms.",
  },
];

const whyCards = [
  {
    title: "100% Bond Back Guarantee",
    desc: "Not happy? We come back and re-clean for free. No questions asked. We don\u2019t stop until your property manager is satisfied.",
  },
  {
    title: "Fully Insured Cleaners",
    desc: "Every cleaner on our team is fully insured and background-checked. Your property is in safe hands from start to finish.",
  },
  {
    title: "Same-Day Bookings Available",
    desc: "Need a bond clean fast? We offer same-day and next-day bookings across Gold Coast. Just WhatsApp us and we\u2019ll sort it out.",
  },
];

const serviceCards = [
  {
    img: "/assets/generated/service-kitchen-cleaning.dim_800x500.jpg",
    alt: "Professional kitchen bond cleaning Gold Coast",
    title: "Kitchen Cleaning",
    desc: "Oven, rangehood, cupboards, benches \u2014 spotless.",
  },
  {
    img: "/assets/generated/service-bathroom-cleaning.dim_800x500.jpg",
    alt: "Bathroom bond cleaning Gold Coast",
    title: "Bathroom Cleaning",
    desc: "Tiles, grout, shower screens, toilet \u2014 gleaming.",
  },
  {
    img: "/assets/generated/service-carpet-cleaning.dim_800x500.jpg",
    alt: "Carpet steam cleaning Gold Coast",
    title: "Carpet Steam Clean",
    desc: "Hot water extraction removes deep-set dirt and stains.",
  },
  {
    img: "/assets/generated/service-window-cleaning.dim_800x500.jpg",
    alt: "Window cleaning Gold Coast bond clean",
    title: "Window Cleaning",
    desc: "Streak-free glass inside and out \u2014 every pane.",
  },
];

const bondBullets = [
  "We follow the REIQ inspection checklist",
  "We re-clean for free if anything is missed",
  "We provide a receipt for all services",
  "We service all Gold Coast suburbs",
];

function CompanyList() {
  return (
    <div className="space-y-3 text-sm">
      <p>
        Here are some of the top-rated bond cleaning companies in South East
        Queensland:
      </p>
      <ol className="space-y-3 list-decimal list-inside">
        <li>
          <strong>Jim&apos;s Cleaning Gold Coast</strong> \u2014{" "}
          <a
            href="https://www.jimscleaning.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d4a017] underline"
          >
            jimscleaning.com.au
          </a>{" "}
          \u2014 One of Australia&apos;s most recognised cleaning franchises
          with a large team, satisfaction guarantee, and competitive pricing
          across Gold Coast.
        </li>
        <li>
          <strong>VacateClean</strong> \u2014{" "}
          <a
            href="https://www.vacateclean.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d4a017] underline"
          >
            vacateclean.com.au
          </a>{" "}
          \u2014 Specialises in end-of-lease cleaning across Queensland with
          fixed-price quotes and REIQ checklist compliance.
        </li>
        <li>
          <strong>Bond Cleaning in Gold Coast</strong> \u2014{" "}
          <a
            href="https://www.bondcleaninggoldcoast.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d4a017] underline"
          >
            bondcleaninggoldcoast.com.au
          </a>{" "}
          \u2014 Local Gold Coast specialist focused entirely on vacate and bond
          cleans.
        </li>
        <li>
          <strong>Calibre Cleaning</strong> \u2014{" "}
          <a
            href="https://www.calibrecleaning.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d4a017] underline"
          >
            calibrecleaning.com.au
          </a>{" "}
          \u2014 Operates across Brisbane and Gold Coast with a 100% bond-back
          guarantee.
        </li>
        <li>
          <strong>Tru Gold Coast Bond Cleaners</strong> \u2014{" "}
          <a
            href="https://trubondcleaningbrisbane.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d4a017] underline"
          >
            trubondcleaningbrisbane.com
          </a>{" "}
          \u2014 A trusted local Gold Coast cleaning company specialising in
          vacate and end-of-lease cleans. Known for meticulous attention to
          detail, REIQ checklist compliance, 100% bond-back guarantee, same-day
          bookings, and friendly service. Customers rate them highly for getting
          their full bond refunded every time.
        </li>
      </ol>
    </div>
  );
}

function CarpetProducts() {
  return (
    <div className="space-y-2 text-sm">
      <p>
        For bond cleaning carpets, professionals use hot water extraction (steam
        cleaning) machines with specialised carpet shampoo. Top products
        include:
      </p>
      <ul className="space-y-1 list-disc list-inside">
        <li>
          <a
            href="https://www.bissell.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d4a017] underline"
          >
            Bissell Professional Pet Carpet Shampoo
          </a>{" "}
          \u2014 excellent for stains and odours
        </li>
        <li>
          <a
            href="https://www.proquip.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d4a017] underline"
          >
            Proquip Steam Cleaning Solution
          </a>{" "}
          \u2014 used by Australian professionals
        </li>
        <li>
          <a
            href="https://www.chemspeceurope.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d4a017] underline"
          >
            Chemspec Traffic Lane Cleaner
          </a>{" "}
          \u2014 breaks down heavy soil and traffic stains
        </li>
        <li>
          <a
            href="https://www.rugdoctor.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d4a017] underline"
          >
            Rug Doctor Carpet Detergent
          </a>{" "}
          \u2014 widely available, great results
        </li>
      </ul>
      <p>
        Steam cleaning opens carpet fibres and lifts out deep dirt, leaving
        carpets fresh and dry within a few hours.
      </p>
    </div>
  );
}

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      data-ocid={`faq.item.${index + 1}`}
      className="border border-gray-200 rounded-lg overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        data-ocid={`faq.toggle.${index + 1}`}
        className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-gray-50 text-left transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#0f172a] text-sm md:text-base pr-4">
          {faq.q}
        </span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-[#d4a017] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 py-4 bg-gray-50 text-gray-700 text-sm leading-relaxed border-t border-gray-200">
          {faq.customContent ? (
            <CompanyList />
          ) : faq.carpetContent ? (
            <CarpetProducts />
          ) : (
            <p>{faq.a}</p>
          )}
        </div>
      )}
    </div>
  );
}

export function HomePage() {
  useMetaTags({
    title:
      "Gold Coast Bond Cleaners | Tru Gold Coast Bond Cleaners | 100% Bond Back Guarantee",
    description:
      "Need a reliable bond cleaner in Gold Coast? Tru Gold Coast Bond Cleaners delivers spotless vacate cleans with a 100% bond back guarantee. Book online today!",
    ogImage: "/assets/generated/hero-bond-cleaning.dim_1200x600.jpg",
    keywords:
      "bond cleaning Gold Coast, vacate cleaning Gold Coast, end of lease cleaning Gold Coast, bond cleaners Gold Coast",
  });

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[580px] flex items-center"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-bond-cleaning.dim_1200x600.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0f172a]/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              {([1, 2, 3, 4, 5] as const).map((s) => (
                <Star
                  key={s}
                  size={20}
                  fill="#d4a017"
                  className="text-[#d4a017]"
                />
              ))}
              <span className="text-white/80 text-sm ml-2">
                Rated 5 stars by Gold Coast tenants
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Gold Coast Bond Cleaners You Can Trust
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
              Get your full bond back \u2014{" "}
              <strong className="text-[#d4a017]">guaranteed</strong>. We clean
              every corner so your landlord says yes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                data-ocid="hero.primary_button"
                className="bg-[#d4a017] hover:bg-[#a07810] text-white font-bold px-8 py-4 rounded-full text-lg text-center transition-all"
              >
                Get a Free Quote
              </Link>
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.whatsapp.button"
                className="bg-[#25D366] hover:bg-[#1da851] text-white font-bold px-8 py-4 rounded-full text-lg text-center transition-all"
              >
                Call Us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#d4a017] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-[#0f172a] font-bold text-sm">
            <span>100% Bond Back Guarantee</span>
            <span>Fully Insured Cleaners</span>
            <span>Same-Day Bookings</span>
            <span>REIQ Checklist</span>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white" aria-labelledby="why-choose-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="why-choose-heading"
              className="font-display text-3xl md:text-4xl font-bold text-[#0f172a] mb-4"
            >
              Why Gold Coast Tenants Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make moving out stress-free. Our professional team delivers
              spotless results every single time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyCards.map((card, i) => (
              <div
                key={card.title}
                data-ocid={`features.card.${i + 1}`}
                className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">
                  {i === 0 ? (
                    <Shield size={40} className="text-[#d4a017]" />
                  ) : i === 1 ? (
                    <CheckCircle size={40} className="text-[#d4a017]" />
                  ) : (
                    <Zap size={40} className="text-[#d4a017]" />
                  )}
                </div>
                <h3 className="font-display font-bold text-[#0f172a] text-xl mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section
        className="py-16 bg-gray-50"
        aria-labelledby="services-preview-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="services-preview-heading"
              className="font-display text-3xl md:text-4xl font-bold text-[#0f172a] mb-4"
            >
              Our Bond Cleaning Services
            </h2>
            <p className="text-gray-600">
              Everything you need for a successful bond inspection \u2014 all in
              one place.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCards.map((svc, i) => (
              <Link
                key={svc.title}
                to="/services"
                data-ocid={`services.card.${i + 1}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="overflow-hidden h-44">
                  <img
                    src={svc.img}
                    alt={svc.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display font-bold text-[#0f172a] text-base mb-1">
                    {svc.title}
                  </h3>
                  <p className="text-gray-500 text-xs">{svc.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              data-ocid="services.view_all.button"
              className="bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold px-8 py-3 rounded-full text-base transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Suburbs We Serve */}
      <section
        className="py-16 bg-white"
        aria-labelledby="suburbs-heading"
        data-ocid="suburbs.grid.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="suburbs-heading"
              className="font-display text-3xl md:text-4xl font-bold text-[#0f172a] mb-4"
            >
              Bond Cleaning Across Gold Coast \u2014 Suburbs We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide professional bond cleaning and vacate cleaning across
              all major Gold Coast suburbs. Click your suburb to learn more.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {suburbs.map((suburb, i) => (
              <Link
                key={suburb.slug}
                to="/suburbs/$suburbSlug"
                params={{ suburbSlug: suburb.slug }}
                data-ocid={`suburbs.card.${i + 1}`}
                className="group bg-[#0f172a] hover:bg-[#d4a017] border border-[#0f172a]/10 rounded-2xl p-5 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="text-[#d4a017] group-hover:text-white flex-shrink-0 mt-0.5 transition-colors"
                  />
                  <div>
                    <p className="font-bold text-white group-hover:text-white text-sm leading-tight mb-1">
                      {suburb.name}
                    </p>
                    <p className="text-white/60 group-hover:text-white/80 text-xs leading-tight">
                      Vacate cleaning in {suburb.name}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bond Refund section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0f172a] mb-6">
                Get Your Full Bond Back \u2014 Every Time
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Hundreds of Gold Coast tenants trust us to get their bond back.
                We follow the full REIQ end-of-lease checklist \u2014 the same
                one your property manager uses \u2014 so nothing gets missed.
              </p>
              <ul className="space-y-3">
                {bondBullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <CheckCircle
                      size={18}
                      className="text-[#d4a017] flex-shrink-0"
                    />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                data-ocid="bond_section.primary_button"
                className="inline-block mt-8 bg-[#d4a017] hover:bg-[#a07810] text-white font-bold px-8 py-3 rounded-full transition-colors"
              >
                Book Your Clean Today
              </Link>
            </div>
            <div>
              <img
                src="/assets/generated/bond-refund-guarantee.dim_800x500.jpg"
                alt="Happy tenants getting bond refund after professional Gold Coast bond clean"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="faq-heading"
              className="font-display text-3xl md:text-4xl font-bold text-[#0f172a] mb-4"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Everything you need to know about bond cleaning in Gold Coast.
            </p>
          </div>
          <div data-ocid="faq.list" className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.id} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0f172a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Your Bond Back?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Book your Gold Coast bond clean today. Fast response, clear pricing,
            100% guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              data-ocid="cta.primary_button"
              className="bg-[#d4a017] hover:bg-[#a07810] text-white font-bold px-10 py-4 rounded-full text-lg transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="cta.whatsapp.button"
              className="bg-[#25D366] hover:bg-[#1da851] text-white font-bold px-10 py-4 rounded-full text-lg transition-colors"
            >
              WhatsApp 0488 841 883
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
