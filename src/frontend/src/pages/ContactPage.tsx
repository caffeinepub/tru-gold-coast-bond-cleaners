import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { useMetaTags } from "../hooks/useMetaTags";

const SERVICE_OPTIONS = [
  "Full Bond Clean",
  "Kitchen Only",
  "Bathroom Only",
  "Carpet Steam Cleaning",
  "Window Cleaning",
  "Full Vacate Package",
];

const whyBook = [
  "100% Bond Back Guarantee \u2014 or we re-clean for free",
  "Clear, fixed pricing \u2014 no hidden fees",
  "REIQ checklist \u2014 every single item",
  "Fully insured team",
  "Same-day & next-day bookings",
  "Serving all Gold Coast suburbs",
];

export function ContactPage() {
  useMetaTags({
    title:
      "Contact Tru Gold Coast Bond Cleaners | Get a Free Bond Cleaning Quote",
    description:
      "Contact Tru Gold Coast Bond Cleaners for a free quote on your vacate clean. WhatsApp 0488 841 883 or fill in our online form. Fast response guaranteed.",
  });

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    moveOutDate: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Bond Cleaning Quote Request \u2014 ${form.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nProperty Address: ${form.address}\nService Type: ${form.service}\nMove-Out Date: ${form.moveOutDate}\n\nMessage / Special Requests:\n${form.message}`,
    );
    const r = atob("aHVtcHR5ZHVtcHR5Ym9uZGNsZWFuaW5nQGdtYWlsLmNvbQ==");
    window.location.href = `mailto:${r}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section className="bg-[#0f172a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Get a Free Bond Cleaning Quote
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Fill in the form below or chat with us on WhatsApp. We&apos;ll get
            back to you fast with a clear, fixed price.
          </p>
        </div>
      </section>

      <main className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="font-display text-2xl font-bold text-[#0f172a] mb-6">
                Request a Quote Online
              </h2>
              <form
                onSubmit={handleSubmit}
                data-ocid="contact.form"
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    data-ocid="contact.name.input"
                    placeholder="Your full name"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#d4a017] focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-1"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    data-ocid="contact.phone.input"
                    placeholder="04XX XXX XXX"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#d4a017] focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    data-ocid="contact.email.input"
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#d4a017] focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-semibold text-gray-700 mb-1"
                  >
                    Property Address *
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    required
                    value={form.address}
                    onChange={handleChange}
                    data-ocid="contact.address.input"
                    placeholder="123 Main St, Gold Coast QLD"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#d4a017] focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-gray-700 mb-1"
                  >
                    Service Type *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    data-ocid="contact.service.select"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#d4a017] focus:border-transparent transition bg-white"
                  >
                    <option value="">Select a service...</option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="moveOutDate"
                    className="block text-sm font-semibold text-gray-700 mb-1"
                  >
                    Move-Out Date *
                  </label>
                  <input
                    id="moveOutDate"
                    name="moveOutDate"
                    type="date"
                    required
                    value={form.moveOutDate}
                    onChange={handleChange}
                    data-ocid="contact.date.input"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#d4a017] focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-1"
                  >
                    Message / Special Requests
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    data-ocid="contact.message.textarea"
                    placeholder="Tell us about your property \u2014 number of bedrooms, bathrooms, any special requirements..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#d4a017] focus:border-transparent transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  data-ocid="contact.submit_button"
                  className="w-full bg-[#d4a017] hover:bg-[#a07810] text-white font-bold py-4 rounded-full text-base transition-colors"
                >
                  Send My Quote Request
                </button>
                <p className="text-center text-xs text-gray-400">
                  Clicking &quot;Send&quot; will open your email app to send the
                  message from your own email address.
                </p>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-[#0f172a] rounded-2xl p-8 text-white">
                <h2 className="font-display text-2xl font-bold mb-3">
                  Prefer to Chat?
                </h2>
                <p className="text-white/70 text-sm mb-6">
                  WhatsApp us directly \u2014 we reply fast. Ask us anything
                  about your bond clean.
                </p>
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.whatsapp.button"
                  className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1da851] text-white font-bold px-6 py-4 rounded-full text-lg transition-colors w-full"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    width="24"
                    height="24"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp \u2014 0488 841 883
                </a>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h2 className="font-display text-xl font-bold text-[#0f172a] mb-5">
                  Why Book With Us?
                </h2>
                <ul className="space-y-3">
                  {whyBook.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <CheckCircle
                        size={16}
                        className="text-[#d4a017] flex-shrink-0 mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#d4a017]/10 rounded-2xl p-6">
                <h3 className="font-bold text-[#a07810] mb-2">Service Area</h3>
                <p className="text-sm text-gray-700">
                  We clean properties across all Gold Coast suburbs \u2014
                  Surfers Paradise, Broadbeach, Southport, Robina, Coomera,
                  Burleigh Heads, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
