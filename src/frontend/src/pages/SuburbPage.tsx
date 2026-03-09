import { Link, useParams } from "@tanstack/react-router";
import { CheckCircle, MapPin } from "lucide-react";
import { suburbs } from "../data/suburbData";
import { useMetaTags } from "../hooks/useMetaTags";

export function SuburbPage() {
  const { suburbSlug } = useParams({ strict: false }) as { suburbSlug: string };
  const suburb = suburbs.find((s) => s.slug === suburbSlug);

  useMetaTags(
    suburb
      ? {
          title: suburb.title,
          description: suburb.metaDescription,
          ogImage: suburb.image,
          keywords: suburb.keywords,
        }
      : {
          title: "Suburb Not Found | Tru Gold Coast Bond Cleaners",
          description: "The suburb page you are looking for does not exist.",
        },
  );

  if (!suburb) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <MapPin size={60} className="text-[#d4a017] mb-6" />
        <h1 className="font-display text-3xl font-bold text-[#0f172a] mb-4">
          Suburb Not Found
        </h1>
        <p className="text-gray-600 mb-8 text-center max-w-md">
          Sorry, we could not find that suburb. Please check our list of Gold
          Coast suburbs we service.
        </p>
        <Link
          to="/"
          data-ocid="suburb_404.home.link"
          className="bg-[#d4a017] hover:bg-[#a07810] text-white font-bold px-8 py-3 rounded-full transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const paragraphs = suburb.content
    .split("\n\n")
    .filter((p) => p.trim().length > 0);

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[420px] flex items-end"
        style={{
          backgroundImage: `url('${suburb.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0f172a]/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <nav
            className="flex items-center gap-2 text-white/60 text-sm mb-4"
            aria-label="Breadcrumb"
          >
            <Link
              to="/"
              data-ocid="suburb.home.link"
              className="hover:text-[#d4a017] transition-colors"
            >
              Home
            </Link>
            <span>/</span>
            <span className="text-white/80">Suburbs</span>
            <span>/</span>
            <span className="text-[#d4a017]">{suburb.name}</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            {suburb.h1}
          </h1>
          <p className="text-white/80 text-lg max-w-xl mb-8">
            Professional vacate cleaning in {suburb.name} with a 100% bond back
            guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              data-ocid="suburb.cta.primary_button"
              className="bg-[#d4a017] hover:bg-[#a07810] text-white font-bold px-8 py-4 rounded-full text-lg text-center transition-all"
            >
              Get a Free Quote
            </Link>
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="suburb.cta.whatsapp.button"
              className="bg-[#25D366] hover:bg-[#1da851] text-white font-bold px-8 py-4 rounded-full text-lg text-center transition-all"
            >
              WhatsApp 0488 841 883
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#d4a017] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-[#0f172a] font-bold text-sm">
            <span>100% Bond Back Guarantee</span>
            <span>Fully Insured Cleaners</span>
            <span>REIQ Checklist</span>
            <span>Free Re-clean If Needed</span>
          </div>
        </div>
      </section>

      {/* Content section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <img
                src={suburb.image}
                alt={suburb.imageAlt}
                className="w-full h-64 object-cover rounded-2xl mb-8 shadow-md"
              />
              <article className="prose prose-gray max-w-none">
                {paragraphs.map((para) => {
                  if (para.startsWith("-")) {
                    const items = para
                      .split("\n")
                      .filter((l) => l.startsWith("-"));
                    return (
                      <ul key={para.slice(0, 40)} className="space-y-2 my-4">
                        {items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <CheckCircle
                              size={18}
                              className="text-[#d4a017] flex-shrink-0 mt-0.5"
                            />
                            <span className="text-sm">{item.slice(2)}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p
                      key={para.slice(0, 40)}
                      className="text-gray-700 leading-relaxed mb-4 text-base"
                    >
                      {para}
                    </p>
                  );
                })}
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-[#0f172a] rounded-2xl p-6 text-white sticky top-6">
                <h2 className="font-display font-bold text-xl mb-4 text-[#d4a017]">
                  Get a Free Quote
                </h2>
                <p className="text-white/80 text-sm mb-6">
                  Book your bond clean in {suburb.name} today. Fast response,
                  clear pricing, and a guarantee you can count on.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "100% Bond Back Guarantee",
                    "Fully Insured Team",
                    "Same-Day Bookings",
                    "REIQ Checklist",
                    "Free Re-clean",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <CheckCircle
                        size={16}
                        className="text-[#d4a017] flex-shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  data-ocid="suburb.sidebar.primary_button"
                  className="block bg-[#d4a017] hover:bg-[#a07810] text-white font-bold px-6 py-3 rounded-full text-center text-sm transition-colors mb-3"
                >
                  Get a Free Quote
                </Link>
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="suburb.sidebar.whatsapp.button"
                  className="block bg-[#25D366] hover:bg-[#1da851] text-white font-bold px-6 py-3 rounded-full text-center text-sm transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other suburbs */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-[#0f172a] mb-6">
            Other Gold Coast Suburbs We Service
          </h2>
          <div className="flex flex-wrap gap-3">
            {suburbs
              .filter((s) => s.slug !== suburb.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  to="/suburbs/$suburbSlug"
                  params={{ suburbSlug: s.slug }}
                  data-ocid="suburb.other.link"
                  className="bg-white border border-gray-200 hover:border-[#d4a017] hover:text-[#d4a017] text-[#0f172a] text-sm font-medium px-4 py-2 rounded-full transition-all"
                >
                  {s.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#0f172a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Ready to Get Your Bond Back in {suburb.name}?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Book your {suburb.name} bond clean today. We are local, fast, and
            trusted by hundreds of Gold Coast tenants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              data-ocid="suburb.footer_cta.primary_button"
              className="bg-[#d4a017] hover:bg-[#a07810] text-white font-bold px-10 py-4 rounded-full text-lg transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="suburb.footer_cta.whatsapp.button"
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
