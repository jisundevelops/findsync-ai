export default function AppShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-bg">
      {/* Sidebar Placeholder - 264px expanded / 84px collapsed */}
      <aside className="hidden md:block w-sidebar-expanded border-r border-border bg-surface transition-all duration-300 ease-out">
        <div className="p-6 text-ink font-bold">FindSync AI</div>
      </aside>

      <div className="flex-1 flex flex-col">
        {/* Topbar Placeholder - 76px tall */}
        <header className="h-topbar border-b border-border bg-surface flex items-center px-6">
          <h1 className="text-xl font-extrabold text-ink tracking-heading">
            Dashboard
          </h1>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}