import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-12 justify-self-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center md:text-left justify-items-center">
          <div>
            <h3 className="font-semibold text-lg mb-4">TechMeet</h3>
            <p className="text-sm text-muted-foreground">
              Discover and book the most exciting technology events, conferences, and meetups.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-center md:justify-start">
                <Link href="/events" className="text-muted-foreground hover:text-foreground">Events</Link>
              </li>
              <li className="flex justify-center md:justify-start">
                <Link href="/categories" className="text-muted-foreground hover:text-foreground">Categories</Link>
              </li>
              <li className="flex justify-center md:justify-start">
                <Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link>
              </li>
              <li className="flex justify-center md:justify-start">
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-center md:justify-start">
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link>
              </li>
              <li className="flex justify-center md:justify-start">
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link>
              </li>
              <li className="flex justify-center md:justify-start">
                <Link href="/cookies" className="text-muted-foreground hover:text-foreground">Cookie Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://github.com" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-6 border-t justify-self-center">
        <div className="flex justify-center items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TechMeet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
