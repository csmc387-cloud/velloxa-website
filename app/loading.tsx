export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-hidden bg-bg-primary/30 pt-20">
      {/* Ambient subtle glow to match the site's premium feel */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-accent-lime/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-accent-cyan/5 blur-[90px] pointer-events-none" />

      {/* Navbar skeleton */}
      <header className="fixed top-0 left-0 w-full border-b border-white/5 bg-bg-primary/40 backdrop-blur-md z-50 h-16 flex items-center justify-between px-6 md:px-12">
        <div className="h-6 w-28 bg-white/10 rounded-md animate-pulse" />
        <div className="hidden md:flex gap-6">
          <div className="h-4 w-16 bg-white/10 rounded-sm animate-pulse" />
          <div className="h-4 w-16 bg-white/10 rounded-sm animate-pulse" />
          <div className="h-4 w-16 bg-white/10 rounded-sm animate-pulse" />
        </div>
        <div className="h-8 w-24 bg-white/10 rounded-md animate-pulse" />
      </header>

      {/* Main Content Skeleton */}
      <main className="max-w-[1280px] w-full mx-auto px-6 md:px-8 py-16 flex-grow flex flex-col items-center justify-start z-10 space-y-12">
        {/* Title area */}
        <div className="flex flex-col items-center space-y-4 w-full max-w-2xl text-center">
          <div className="h-4 w-24 bg-accent-lime/20 rounded-full animate-pulse" />
          <div className="h-10 md:h-16 w-3/4 bg-white/10 rounded-xl animate-pulse" />
          <div className="h-6 w-1/2 bg-white/5 rounded-md animate-pulse" />
        </div>

        {/* Card Grids Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-white/10 bg-bg-primary/40 backdrop-blur-[2px] rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-8 animate-pulse h-64">
              <div className="size-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                <div className="size-5 rounded-full bg-accent-lime/20" />
              </div>
              <div className="space-y-3">
                <div className="h-5 w-1/3 bg-white/10 rounded-md" />
                <div className="h-3 w-5/6 bg-white/5 rounded-sm" />
                <div className="h-3 w-2/3 bg-white/5 rounded-sm" />
              </div>
            </div>
          ))}
        </div>

        {/* Larger Feature Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-6">
          {[1, 2].map((i) => (
            <div key={i} className="border border-white/10 bg-bg-primary/40 backdrop-blur-[2px] rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-6 animate-pulse h-80">
              <div className="size-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                <div className="size-5 rounded-full bg-accent-cyan/20" />
              </div>
              <div className="space-y-3 flex-grow">
                <div className="h-6 w-1/2 bg-white/10 rounded-md" />
                <div className="h-3 w-11/12 bg-white/5 rounded-sm" />
                <div className="h-3 w-5/6 bg-white/5 rounded-sm" />
                <div className="h-3 w-3/4 bg-white/5 rounded-sm" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
