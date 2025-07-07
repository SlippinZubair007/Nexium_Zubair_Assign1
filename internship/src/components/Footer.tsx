import { ZapIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-black backdrop-blur-sm">
      {/* Top border glow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="container mx-auto px-5 py-10">
        <div className="flex flex-col md:flex-row justify-between items-left gap-6">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="px-1 bg-primary/10 rounded">
                <ZapIcon className="animate-pulse w-4 h-4 text-primary" />
              </div>
              <span className="text-xl font-bold font-mono text-primary">
                Quotify<span className="text-foreground">.io</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Quotify.io - All rights reserved
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-2 text-sm">
            <span>
              About
            </span>
            <span
            >
              Terms
            </span>
            <span
            >
              Privacy
            </span>
            <span
            >
              Contact
            </span>
            <span
            >
              Blog
            </span>
            <span
            >
              Help
            </span>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-md bg-background/50">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-xs font-mono">SYSTEM OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;