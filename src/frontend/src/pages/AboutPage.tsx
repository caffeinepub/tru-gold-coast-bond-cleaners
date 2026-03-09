import { Link } from "@tanstack/react-router";
import { CheckCircle, MapPin } from "lucide-react";
import { useMetaTags } from "../hooks/useMetaTags";

const suburbs = [
  "Surfers Paradise",
  "Broadbeach",
  "Southport",
  "Robina",
  "Coomera",
  "Hope Island",
  "Burleigh Heads",
  "Palm Beach",
  "Nerang",
  "Varsity Lakes",
  "Helensvale",
  "Mudgeeraba",
  "Labrador",
  "Runaway Bay",
];

const stats = [
  { label: "Bond Back Rate", value: "100%" },
  { label: "Re-clean Guarantee", value: "Free" },
  { label: "Happy Customers", value: "500+" },
];

const values = [
  {
    title: "REIQ Checklist Every Time",
    desc: "We follow the Real Estate Institute of Queensland end-of-lease checklist on every job. This is the same checklist your property manager uses. We don\u2019t miss a single item.",
  },
  {
    title: "Fully Insured & Background Checked",
    desc: "Every cleaner on our team is fully insured and has passed a background check. Your property and belongings are safe with us.",
  },
  {
    title: "Clear, Fixed Pricing",
    desc: "We give you a clear, fixed price before we start. No hidden fees, no surprises on the day. What we quote is what you pay.",
  },
  {
    title: "We Know Gold Coast Properties",
    desc: "We\u2019ve cleaned hundreds of Gold Coast rental properties \u2014 apartments, townhouses, and houses. We know what local property managers expect and we deliver it every time.",
  },
];

export function AboutPage() {
  useMetaTags({
    title: "About Tru Gold Coast Bond Cleaners | Local Vacate Cleaning Experts",
    description:
      "Tru Gold Coast Bond Cleaners is a local Gold Coast cleaning company with years of experience in vacate and end-of-lease cleaning. Learn about our team and guarantee.",
    ogImage: "/assets/generated/bond-refund-guarantee.dim_800x500.jpg",
  });

  return (
    <>
      <section className="bg-[#0f172a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            About Tru Gold Coast Bond Cleaners
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Your trusted local vacate cleaning team in Gold Coast, QLD.
          </p>
        </div>
      </section>

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src="/assets/generated/bond-refund-guarantee.dim_800x500.jpg"
                alt="Tru Gold Coast Bond Cleaners team \u2014 trusted local vacate cleaning experts"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-[#0f172a] mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Tru Gold Coast Bond Cleaners is a local Gold Coast cleaning
                business. We specialise in bond cleaning, vacate cleaning, and
                end-of-lease cleaning. Our team knows Gold Coast properties
                inside out \u2014 we understand exactly what local property
                managers and real estate agents expect.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We\u2019ve helped hundreds of Gold Coast tenants get their full
                bond back. Our cleaners are experienced, reliable, and dedicated
                to delivering results that pass every inspection \u2014 first
                time, every time.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We\u2019re a local business \u2014 not a franchise. When you
                book with us, you get a dedicated team who cares about your
                move-out experience. We\u2019re just a WhatsApp message away.
              </p>
            </div>
          </div>

          <section
            aria-labelledby="promise-heading"
            className="bg-[#0f172a] text-white rounded-3xl p-10 md:p-16 mb-20"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2
                id="promise-heading"
                className="font-display text-3xl md:text-4xl font-bold mb-6"
              >
                Our Promise \u2014 100% Bond Back Guarantee
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                We stand behind every clean we do. If your property manager
                isn\u2019t satisfied with our work, we come back and re-clean
                the areas in question \u2014{" "}
                <strong className="text-[#d4a017]">for free</strong>. No
                questions asked. That\u2019s our promise to you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-white/10 rounded-xl p-6">
                    <div className="text-4xl font-display font-bold text-[#d4a017] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section aria-labelledby="service-area-heading" className="mb-20">
            <div className="text-center mb-10">
              <h2
                id="service-area-heading"
                className="font-display text-3xl font-bold text-[#0f172a] mb-4"
              >
                Our Service Area
              </h2>
              <p className="text-gray-600">
                We clean properties across the Gold Coast and surrounding areas.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {suburbs.map((suburb) => (
                <span
                  key={suburb}
                  className="flex items-center gap-1.5 bg-[#d4a017]/10 text-[#a07810] font-semibold text-sm px-4 py-2 rounded-full"
                >
                  <MapPin size={14} /> {suburb}
                </span>
              ))}
            </div>
          </section>

          <section aria-labelledby="values-heading">
            <h2
              id="values-heading"
              className="font-display text-3xl font-bold text-[#0f172a] mb-8 text-center"
            >
              What Makes Us Different
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((item, i) => (
                <div
                  key={item.title}
                  data-ocid={`about.card.${i + 1}`}
                  className="flex gap-4 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
                >
                  <CheckCircle
                    size={24}
                    className="text-[#d4a017] flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <h3 className="font-bold text-[#0f172a] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              data-ocid="about.cta.primary_button"
              className="inline-block bg-[#d4a017] hover:bg-[#a07810] text-white font-bold px-10 py-4 rounded-full text-lg transition-colors"
            >
              Book Your Clean Today
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
