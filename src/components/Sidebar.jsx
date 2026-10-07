import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: "⌂",
    },
    {
      name: "Opportunities",
      path: "/opportunities",
      icon: "◈",
    },
    {
      name: "Applications",
      path: "/applications",
      icon: "✓",
    },
    {
      name: "Add Opportunity",
      path: "/add-opportunity",
      icon: "+",
    },
    {
      name: "Calendar",
      path: "/calendar",
      icon: "◷",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "●",
    },
  ];

  return (
    <aside className="hidden min-h-screen w-64 shrink-0 bg-[#111827] text-white lg:block">
      <div className="sticky top-0 flex min-h-screen flex-col p-5">

        {/* Brand */}
        <div className="mb-9 px-2">
          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-rose-600 text-lg font-bold shadow-lg shadow-red-900/30">
              C
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight">
                Career<span className="text-red-400">Flow</span>
              </h2>

              <p className="mt-0.5 text-[11px] text-slate-500">
                Your career, organized.
              </p>
            </div>

          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1">

          <p className="mb-4 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
            Workspace
          </p>

          <div className="space-y-1.5">

            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `group relative flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-red-600 to-rose-500 text-white shadow-lg shadow-red-900/30"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {/* Active indicator */}
                    {isActive && (
                      <span className="absolute -left-5 h-7 w-1 rounded-r-full bg-red-400" />
                    )}

                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm transition ${
                        isActive
                          ? "bg-white/15 text-white"
                          : "bg-white/5 text-slate-400 group-hover:bg-white/10 group-hover:text-white"
                      }`}
                    >
                      {item.icon}
                    </span>

                    <span>{item.name}</span>

                    {item.name === "Add Opportunity" && (
                      <span className="ml-auto rounded-md bg-red-500/15 px-1.5 py-0.5 text-[10px] font-bold text-red-300">
                        NEW
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            ))}

          </div>
        </nav>

        {/* Career Tip */}
        <div className="rounded-2xl border border-red-500/10 bg-gradient-to-br from-red-600/20 to-rose-600/10 p-5">

          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/15 text-lg text-red-400">
            ✦
          </div>

          <h3 className="font-semibold text-white">
            Career Tip
          </h3>

          <p className="mt-2 text-xs leading-5 text-slate-400">
            Keep your applications updated so you never miss an important
            opportunity.
          </p>

        </div>

        {/* Footer */}
        <div className="mt-6 border-t border-white/5 pt-5">

          <div className="flex items-center justify-between px-2">

            <div>
              <p className="text-xs font-semibold text-slate-300">
                CareerFlow
              </p>

              <p className="mt-1 text-[10px] text-slate-600">
                Career management workspace
              </p>
            </div>

            <span className="text-[10px] text-slate-600">
              v1.0
            </span>

          </div>

        </div>

      </div>
    </aside>
  );
}

export default Sidebar;