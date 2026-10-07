import { useState, useEffect } from "react";
import { useJobs } from "../context/JobsContext";
import JobCard from "../components/JobCard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Opportunities() {
  const { jobs } = useJobs();

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase());

    const matchesType =
      typeFilter === "All" || job.type === typeFilter;

    const matchesStatus =
      statusFilter === "All" || job.status === statusFilter;

    return matchesSearch && matchesType && matchesStatus;
  });

  useEffect(() => {
    console.log(
      `Showing ${filteredJobs.length} opportunities`
    );
  }, [search, typeFilter, statusFilter, jobs]);

  const clearFilters = () => {
    setSearch("");
    setTypeFilter("All");
    setStatusFilter("All");
  };

  const filtersActive =
    search !== "" ||
    typeFilter !== "All" ||
    statusFilter !== "All";

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="flex">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="min-w-0 flex-1">

          {/* Navbar */}
          <Navbar />

          <main className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">

            {/* ================= PAGE HEADER ================= */}
            <section className="relative mb-8 overflow-hidden rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100 sm:p-9">

              {/* Decorative Red Shape */}
              <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-red-50" />

              <div className="absolute -bottom-20 right-24 h-32 w-32 rounded-full bg-rose-50" />

              <div className="relative">

                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-[#E5394F]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E5394F]" />
                  Opportunity Hub
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Find your next opportunity
                </h1>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                  Explore jobs and internships, discover companies,
                  and keep your career opportunities organized in one place.
                </p>

                {/* Quick Stats */}
                <div className="mt-6 flex flex-wrap gap-3">

                  <div className="rounded-xl bg-slate-50 px-4 py-3">
                    <p className="text-xs text-slate-400">
                      Total
                    </p>

                    <p className="mt-0.5 text-lg font-bold text-slate-900">
                      {jobs.length}
                    </p>
                  </div>

                  <div className="rounded-xl bg-red-50 px-4 py-3">
                    <p className="text-xs text-red-400">
                      Internships
                    </p>

                    <p className="mt-0.5 text-lg font-bold text-[#E5394F]">
                      {
                        jobs.filter(
                          (job) => job.type === "Internship"
                        ).length
                      }
                    </p>
                  </div>

                  <div className="rounded-xl bg-emerald-50 px-4 py-3">
                    <p className="text-xs text-emerald-500">
                      Applied
                    </p>

                    <p className="mt-0.5 text-lg font-bold text-emerald-600">
                      {
                        jobs.filter(
                          (job) => job.status === "Applied"
                        ).length
                      }
                    </p>
                  </div>

                </div>

              </div>
            </section>

            {/* ================= SEARCH & FILTER ================= */}
            <section className="mb-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

              {/* Search */}
              <div className="relative">

                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400">
                  ⌕
                </span>

                <input
                  type="text"
                  placeholder="Search by job title, company or location..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#E5394F] focus:bg-white focus:ring-4 focus:ring-red-50"
                />

              </div>

              {/* Filters */}
              <div className="mt-4 grid gap-4 md:grid-cols-3">

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Opportunity Type
                  </label>

                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-[#E5394F] focus:ring-4 focus:ring-red-50"
                  >
                    <option value="All">All Types</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Application Status
                  </label>

                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-[#E5394F] focus:ring-4 focus:ring-red-50"
                  >
                    <option value="All">All Statuses</option>
                    <option value="Saved">Saved</option>
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    onClick={clearFilters}
                    disabled={!filtersActive}
                    className={`w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      filtersActive
                        ? "bg-slate-900 text-white hover:bg-[#E5394F]"
                        : "cursor-not-allowed bg-slate-100 text-slate-400"
                    }`}
                  >
                    Clear Filters
                  </button>
                </div>

              </div>

              {/* Result Information */}
              <div className="mt-5 flex flex-col justify-between gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center">

                <p className="text-sm text-slate-500">
                  Showing{" "}
                  <span className="font-bold text-slate-900">
                    {filteredJobs.length}
                  </span>{" "}
                  of{" "}
                  <span className="font-bold text-slate-900">
                    {jobs.length}
                  </span>{" "}
                  opportunities
                </p>

                {filtersActive && (
                  <span className="inline-flex w-fit items-center rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold text-[#E5394F]">
                    Filters active
                  </span>
                )}

              </div>

            </section>

            {/* ================= JOB GRID ================= */}
            {filteredJobs.length > 0 ? (

              <section>

                <div className="mb-5 flex items-center justify-between">

                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Available Opportunities
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Explore opportunities that match your search.
                    </p>
                  </div>

                  <div className="hidden rounded-xl bg-white px-4 py-2 text-xs font-semibold text-slate-500 shadow-sm ring-1 ring-slate-100 sm:block">
                    {filteredJobs.length} results
                  </div>

                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

                  {filteredJobs.map((job) => (
                    <JobCard
                      key={job.id}
                      title={job.title}
                      company={job.company}
                      location={job.location}
                      type={job.type}
                      status={job.status}
                    />
                  ))}

                </div>

              </section>

            ) : (

              /* ================= EMPTY STATE ================= */
              <section className="rounded-3xl border border-dashed border-red-200 bg-white px-6 py-16 text-center shadow-sm">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-red-50 text-3xl text-[#E5394F]">
                  ⌕
                </div>

                <h2 className="mt-6 text-xl font-bold text-slate-900">
                  No opportunities found
                </h2>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                  We couldn't find any opportunities matching your
                  current search and filters. Try adjusting your criteria.
                </p>

                <button
                  onClick={clearFilters}
                  className="mt-6 rounded-xl bg-[#E5394F] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-200 transition hover:bg-[#B91C35]"
                >
                  Reset Search
                </button>

              </section>

            )}

          </main>
        </div>
      </div>
    </div>
  );
}

export default Opportunities;