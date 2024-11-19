import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Globe, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Tech Events Platform</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We're dedicated to connecting tech enthusiasts with the best learning and networking opportunities in the industry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Curated Events</h3>
                <p className="text-muted-foreground">
                  We carefully select and organize high-quality tech events that provide real value to our community members.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Community Focus</h3>
                <p className="text-muted-foreground">
                  Our platform brings together developers, designers, and tech enthusiasts to share knowledge and experiences.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
                <p className="text-muted-foreground">
                  Access events from around the world, both in-person and virtual, to expand your professional network globally.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Cutting-edge Content</h3>
                <p className="text-muted-foreground">
                  Stay ahead with events covering the latest technologies, trends, and best practices in the tech industry.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-muted-foreground mb-6">
          We believe in the power of community and continuous learning in the tech industry. Our mission is to make high-quality tech education and networking opportunities accessible to everyone, regardless of their location or experience level.
        </p>

        <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
          <li>Diverse range of tech events covering various topics and formats</li>
          <li>Easy-to-use platform for discovering and registering for events</li>
          <li>Opportunities to connect with industry experts and peers</li>
          <li>Both in-person and virtual event options</li>
          <li>Regular updates on upcoming events and tech trends</li>
        </ul>
      </div>
    </div>
  )
} 