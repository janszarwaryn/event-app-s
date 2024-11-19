import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AuthCTA() {
  return (
    <section className="py-16 bg-muted">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Ready to Join the Tech Community?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Create an account to get personalized event recommendations, save your favorite events, and connect with other tech enthusiasts.
        </p>
        <div className="flex justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white dark:bg-primary dark:text-white dark:hover:bg-primary/90"
          >
            Sign Up Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 dark:border-primary dark:text-primary dark:hover:bg-primary/10"
          >
            Login
          </Button>
        </div>
      </div>
    </section>
  );
}
