import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Facebook, Linkedin, Instagram } from "lucide-react";
import logoAsset from "@/assets/firma-projektz-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-ink text-white/80 mt-24">
      <div className="container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center">
            <img
              src={logoAsset.url}
              alt="Firma Projektz Ltd — Total Construction Solutions"
              width={220}
              height={80}
              loading="lazy"
              decoding="async"
              className="h-16 w-auto object-contain bg-white/95 rounded-md p-2"
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-xs">
            A Ghana-based construction and civil engineering firm delivering building,
            infrastructure, design & build project management services — built on engineering
            excellence, safety and long-term client partnerships.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link placeholder"
                className="grid h-9 w-9 place-items-center rounded-md border border-white/15 hover:bg-brand hover:border-brand transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-white uppercase tracking-widest">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              ["/about", "About Us"],
              ["/services", "Services"],
              ["/projects", "Projects"],
              
              ["/privacy", "Privacy Policy"],
              ["/terms", "Terms of Use"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-brand transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-white uppercase tracking-widest">Services</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/60">
            <li>Building Construction</li>
            <li>Civil Engineering</li>
            <li>Design &amp; Build</li>
            <li>Project Management</li>
            <li>Industrial Construction</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-white uppercase tracking-widest">Head Office</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-brand shrink-0" />
              <span>
                Accra, Ghana
                <br />
                <span className="text-white/50">DTD: BAE 30/37 SAKUMONO, TEMA</span>
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-brand shrink-0" />
              <a href="tel:+233555771670" className="hover:text-brand">
                <div className="text-white/70">
                  <div>+233 (0) 555 771 670</div>
                  <div className="mt-1">+233 (0) 540 745 556</div>
                </div>
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-brand shrink-0" />
              <a href="mailto:info@firmaprojektz.com" className="hover:text-brand">
                firmaprojektz@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Firma Projektz Ltd. All rights reserved.</p>
          <p>Total Construction Solutions · Ghana</p>
        </div>
      </div>
    </footer>
  );
}
