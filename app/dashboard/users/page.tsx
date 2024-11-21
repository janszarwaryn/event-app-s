import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { DashboardNav } from "@/components/dashboard/nav"
import { UserManagement } from "@/components/dashboard/user-management"

export default async function UsersPage() {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    redirect("/auth/signin")
  }

  if (session.user.role !== "ADMIN") {
    redirect("/dashboard")
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="lg:w-1/5">
          <DashboardNav isAdmin={true} />
        </aside>
        <div className="flex-1 lg:max-w-4xl">
          <h1 className="text-2xl font-bold mb-6">User Management</h1>
          <UserManagement />
        </div>
      </div>
    </div>
  )
} 