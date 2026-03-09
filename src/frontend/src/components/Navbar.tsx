import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const pathname = location.pathname;

  const links = [
    { to: "/" as const, label: "Home" },
    { to: "/services" as const, label: "Services" },
    { to: "/about" as const, label: "About" },
    { to: "/contact" as const, label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0f172a] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" data-ocid="nav.link" className="flex-shrink-0">
            <img
              src="/assets/generated/logo-tru-bond-cleaners-transparent.dim_400x120.png"
              alt="Tru Gold Coast Bond Cleaners Logo"
              className="h-10 md:h-14 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
                className={`font-semibold text-sm tracking-wide transition-colors ${
                  pathname === link.to
                    ? "text-[#d4a017] border-b-2 border-[#d4a017] pb-0.5"
                    : "text-white hover:text-[#d4a017]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="nav.whatsapp.button"
              className="bg-[#25D366] hover:bg-[#1da851] text-white font-bold px-4 py-2 rounded-full text-sm transition-colors"
            >
              WhatsApp Us
            </a>
          </nav>

          <button
            type="button"
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#1e293b] border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
                onClick={() => setOpen(false)}
                className={`font-semibold text-base py-2 transition-colors ${
                  pathname === link.to
                    ? "text-[#d4a017]"
                    : "text-white hover:text-[#d4a017]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="nav.mobile.whatsapp.button"
              className="bg-[#25D366] text-white font-bold text-center py-3 rounded-full"
            >
              Chat on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
