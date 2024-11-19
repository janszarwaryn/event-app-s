import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Presentation, Users, UserPlus, Video } from "lucide-react"

const categories = [
  {
    title: 'Conference',
    description: 'Large-scale professional events featuring multiple speakers, workshops, and networking opportunities. Perfect for staying up-to-date with industry trends and connecting with peers.',
    icon: Presentation,
    examples: ['Tech Summits', 'Developer Conferences', 'Industry Conventions']
  },
  {
    title: 'Workshop',
    description: 'Hands-on, interactive sessions focused on practical skills and specific technologies. Ideal for learning new tools and techniques in a collaborative environment.',
    icon: Users,
    examples: ['Coding Workshops', 'Technical Training', 'Skill Development Sessions']
  },
  {
    title: 'Meetup',
    description: 'Casual, community-driven gatherings for networking and knowledge sharing. Great for meeting local professionals and discussing specific tech topics.',
    icon: UserPlus,
    examples: ['Local Tech Meetups', 'Developer Gatherings', 'Tech Community Events']
  },
  {
    title: 'Webinar',
    description: 'Online educational sessions accessible from anywhere. Perfect for remote learning and staying updated with the latest tech trends.',
    icon: Video,
    examples: ['Online Tech Talks', 'Virtual Training', 'Remote Workshops']
  }
]

export default function CategoriesPage() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Event Categories</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore different types of tech events we offer and find the perfect format for your learning and networking needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <Card key={category.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium">Common examples:</h4>
                  <ul className="list-disc list-inside text-muted-foreground">
                    {category.examples.map((example) => (
                      <li key={example}>{example}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
} 