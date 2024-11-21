import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { DashboardNav } from "@/components/dashboard/nav"
import { EventsList } from "@/components/dashboard/events-list"
import { getAllEvents } from "@/lib/sanity.client"
import { Event } from "@/lib/types"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    redirect("/auth/signin")
  }

  const isAdmin = session.user.role === "ADMIN"
  let events: Event[] = []

  try {
    events = await getAllEvents()
  } catch (error) {
    console.error('Error fetching events:', error)
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="lg:w-1/5">
          <DashboardNav isAdmin={isAdmin} />
        </aside>
        <div className="flex-1 lg:max-w-4xl">
          <h1 className="text-2xl font-bold mb-6">Content Management</h1>
          <EventsList events={events} />
        </div>
      </div>
    </div>
  )
} 