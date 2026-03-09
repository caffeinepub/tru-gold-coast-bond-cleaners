import { Link } from "@tanstack/react-router";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          <div>
            <img
              src="/assets/generated/logo-tru-bond-cleaners-transparent.dim_400x120.png"
              alt="Tru Gold Coast Bond Cleaners Logo"
              className="h-12 w-auto mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              Gold Coast&apos;s trusted bond cleaning specialists. 100% bond
              back guarantee on every clean.
            </p>
          </div>
          <div>
            <h3 className="font-display font-bold text-[#d4a017] mb-4 text-lg">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { to: "/" as const, label: "Home" },
                { to: "/services" as const, label: "Services" },
                { to: "/about" as const, label: "About Us" },
                { to: "/contact" as const, label: "Get a Quote" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    data-ocid={`footer.${link.label.toLowerCase().replace(/ /g, "-")}.link`}
                    className="text-white/70 hover:text-[#d4a017] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display font-bold text-[#d4a017] mb-4 text-lg">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>\ud83d\udccd Gold Coast, QLD, Australia</li>
              <li>
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="footer.whatsapp.link"
                  className="flex items-center gap-2 text-[#25D366] hover:text-[#1da851] transition-colors font-semibold"
                >
                  <span>\ud83d\udcf1</span> WhatsApp: 0488 841 883
                </a>
              </li>
              <li>\u2705 100% Bond Back Guarantee</li>
              <li>\u26a1 Same-Day Bookings Available</li>
            </ul>
          </div>
        </div>
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>
            \u00a9 {year} Tru Gold Coast Bond Cleaners. All rights reserved.
          </p>
          <p>
            Built with \u2764\ufe0f using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4a017] transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
