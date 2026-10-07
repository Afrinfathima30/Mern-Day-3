import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import JobCard from "../components/JobCard";
import jobs from "../data/jobs";

function Dashboard() {
  const totalOpportunities = jobs.length;

  const appliedCount = jobs.filter(
    (job) => job.status === "Applied"
  ).length;

  const interviewCount = jobs.filter(
    (job) => job.status === "Interview"
  ).length;

  const savedCount = jobs.filter(
    (job) => job.status === "Saved"
  ).length;

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

            {/* ================= HERO ================= */}
            <section className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-[#B91C35] via-[#E5394F] to-[#FF5A67] p-7 text-white shadow-xl shadow-red-200 sm:p-9">

              {/* Decorative Background */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />

              <div className="absolute -bottom-24 right-24 h-52 w-52 rounded-full bg-white/10" />

              <div className="absolute right-1/3 top-10 h-20 w-20 rounded-full bg-white/5" />

              <div className="relative z-10 max-w-3xl">

                {/* Badge */}
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur">

                  <span className="h-2 w-2 rounded-full bg-emerald-300" />

                  Career workspace
                </div>

                {/* Heading */}
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Good morning, Afrin
                  <span className="ml-2">👋</span>
                </h1>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-red-100 sm:text-base">
                  Keep your job search organized, stay on top of your
                  applications, and move one step closer to your next
                  opportunity.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex flex-wrap gap-3">

                  <a
                    href="/opportunities"
                    className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#C5223C] shadow-lg transition hover:-translate-y-0.5 hover:bg-red-50"
                  >
                    Explore Opportunities
                  </a>

                  <a
                    href="/add-opportunity"
                    className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
                  >
                    + Add Opportunity
                  </a>

                </div>

              </div>
            </section>

            {/* ================= OVERVIEW ================= */}
            <section className="mb-10">

              <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5394F]">
                  Overview
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  Your career activity
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  A quick look at your current job search progress.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

                <StatCard
                  title="Total Opportunities"
                  value={totalOpportunities}
                  description="Opportunities you're tracking"
                  icon="◈"
                  color="text-[#E5394F]"
                />

                <StatCard
                  title="Saved"
                  value={savedCount}
                  description="Opportunities saved for later"
                  icon="☆"
                  color="text-[#F59E0B]"
                />

                <StatCard
                  title="Applied"
                  value={appliedCount}
                  description="Applications submitted"
                  icon="✓"
                  color="text-[#10B981]"
                />

                <StatCard
                  title="Interviews"
                  value={interviewCount}
                  description="Interview opportunities"
                  icon="✦"
                  color="text-[#8B5CF6]"
                />

              </div>
            </section>

            {/* ================= RECENT OPPORTUNITIES ================= */}
            <section>

              <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">

                <div>

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5394F]">
                    Your tracker
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-slate-900">
                    Recent Opportunities
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Keep an eye on the opportunities you're currently
                    tracking.
                  </p>

                </div>

                <a
                  href="/opportunities"
                  className="text-sm font-semibold text-[#E5394F] transition hover:text-[#B91C35]"
                >
                  View all →
                </a>

              </div>

              {jobs.length > 0 ? (

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

                  {jobs.slice(0, 6).map((job) => (
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

              ) : (

                <div className="rounded-3xl border border-dashed border-red-200 bg-white px-6 py-14 text-center">

                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-2xl text-[#E5394F]">
                    ◈
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    No opportunities yet
                  </h3>

                  <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
                    Start building your career pipeline by adding your
                    first job or internship opportunity.
                  </p>

                  <a
                    href="/add-opportunity"
                    className="mt-5 inline-flex rounded-xl bg-[#E5394F] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-200 transition hover:bg-[#B91C35]"
                  >
                    + Add Opportunity
                  </a>

                </div>

              )}

            </section>

            {/* ================= CAREER MESSAGE ================= */}
            <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-xl text-[#E5394F]">
                    ✦
                  </div>

                  <div>

                    <h3 className="font-bold text-slate-900">
                      Small progress is still progress.
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Keep exploring, keep applying, and keep improving.
                      Your next opportunity could be one application away.
                    </p>

                  </div>

                </div>

                <div className="shrink-0 rounded-xl bg-red-50 px-4 py-3 text-center">

                  <p className="text-xs font-medium text-slate-500">
                    Keep going
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#E5394F]">
                    Your career. Organized.
                  </p>

                </div>

              </div>

            </section>

          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;