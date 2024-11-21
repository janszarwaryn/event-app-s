export function LoadingSpinner({ size = "default" }: { size?: "small" | "default" | "large" }) {
  const sizeClasses = {
    small: "h-4 w-4 border-2",
    default: "h-8 w-8 border-3",
    large: "h-12 w-12 border-4"
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] gap-4">
      <div className={`animate-spin rounded-full ${sizeClasses[size]} border-b-blue-500 border-zinc-700`} />
      <p className="text-muted-foreground animate-pulse">Loading...</p>
    </div>
  )
} 