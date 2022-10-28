export function Loader() {
  return (
    <div className="h-full flex items-center justify-center">
      <div
        className="animate-spin inline-block w-32 h-32 border-[6px] border-current border-t-transparent text-green-600 rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
