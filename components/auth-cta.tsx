import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AuthCTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container text-center justify-self-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Ready to Join the Tech Community?
        </h2>
        <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
          Create an account to get personalized event recommendations, save your favorite events,
          and connect with other tech enthusiasts.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/register">
              Sign Up Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
