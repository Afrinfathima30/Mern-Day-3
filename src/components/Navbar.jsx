import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
    },
    {
      name: "Opportunities",
      path: "/opportunities",
    },
    {
      name: "Applications",
      path: "/applications",
    },
    {
      name: "Add Opportunity",
      path: "/add-opportunity",
    },
    {
      name: "Calendar",
      path: "/calendar",
    },
    {
      name: "Profile",
      path: "/profile",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">

      <div className="flex h-20 items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* Mobile Brand */}
        <div className="flex items-center gap-3 lg:hidden">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-rose-600 font-bold text-white shadow-lg shadow-red-200">
            C
          </div>

          <div>
            <h1 className="text-lg font-bold text-slate-900">
              Career<span className="text-red-600">Flow</span>
            </h1>

            <p className="text-[10px] text-slate-400">
              Your career, organized.
            </p>
          </div>

        </div>

        {/* Desktop Left */}
        <div className="hidden lg:block">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Career Workspace
          </p>

          <p className="mt-1 text-sm font-medium text-slate-700">
            Manage your opportunities with confidence.
          </p>

        </div>

        {/* User Area */}
        <div className="hidden items-center gap-4 sm:flex">

          <div className="hidden text-right md:block">

            <p className="text-sm font-semibold text-slate-800">
              Afrin Fathima
            </p>

            <p className="mt-0.5 text-xs text-slate-500">
              IT Student
            </p>

          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-rose-600 text-sm font-bold text-white shadow-md shadow-red-200">
            A
          </div>

        </div>

        {/* Mobile Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xl text-slate-700 shadow-sm transition hover:border-red-300 hover:text-red-600 sm:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 sm:hidden">

          <nav className="space-y-1.5">

            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-red-50 text-red-600"
                      : "text-slate-600 hover:bg-red-50 hover:text-red-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

          </nav>

        </div>
      )}

    </header>
  );
}

export default Navbar;