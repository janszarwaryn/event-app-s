import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AuthCTA() {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <p className="text-muted-foreground mb-8">
          Sign up to get access to exclusive events and more
        </p>
        <Button asChild size="lg">
          <Link href="/auth/signin">Get Started</Link>
        </Button>
      </div>
    </section>
  );
}
