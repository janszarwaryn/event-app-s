import { LoadingSpinner } from "@/components/ui/loading-spinner"

export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <LoadingSpinner size="large" />
    </div>
  )
} 