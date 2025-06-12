import Image from "next/image";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact", highlight: true },
];

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center">
      <div className="flex items-center bg-black/80 rounded-full px-3 py-1.5 shadow-lg">
        <div className="flex items-center mr-4">
          <Image
            src="/images/nav-logo.png"
            alt="Robust India Nav Logo"
            width={36}
            height={36}
          
          />
        </div>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`px-4 py-2 rounded-full font-medium text-sm transition-colors duration-200 ${
              link.highlight
                ? "bg-violet-600 text-white shadow-md border border-violet-400"
                : "text-white/90 hover:bg-white/10"
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
} 