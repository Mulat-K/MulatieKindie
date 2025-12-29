import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Copyright */}
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-gradient mb-2">Mulatie Kindie</p>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>

            {/* Ethiopian Pride */}
            <div className="flex items-center gap-2">
              {/* <span className="text-sm text-muted-foreground">Made with</span>
              <Heart className="h-4 w-4 text-ethiopia-red fill-ethiopia-red" />
              <span className="text-sm text-muted-foreground">in</span> */}
              <div className="flex gap-0.5">
                <span className="w-4 h-4 rounded-sm bg-ethiopia-green" />
                <span className="w-4 h-4 rounded-sm bg-ethiopia-yellow" />
                <span className="w-4 h-4 rounded-sm bg-ethiopia-red" />
              </div>
              <span className="text-sm font-medium">Ethiopia</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full glass glass-hover group"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5 group-hover:text-primary transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
