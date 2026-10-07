import { useState } from "react";
import { useJobs } from "../context/JobsContext";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Applications() {
  const { jobs } = useJobs();

  const [statusFilter, setStatusFilter] = useState("All");

  const applications = jobs.filter(
    (job) =>
      job.status === "Applied" ||
      job.status === "Interview"
  );

  const filteredApplications =
    statusFilter === "All"
      ? applications
      : applications.filter(
          (job) => job.status === statusFilter
        );

  const appliedCount = applications.filter(
    (job) => job.status === "Applied"
  ).length;

  const interviewCount = applications.filter(
    (job) => job.status === "Interview"
  ).length;

  const totalCount = applications.length;

  const getStatusStyle = (status) => {
    if (status === "Interview") {
      return {
        badge:
          "border-violet-100 bg-violet-50 text-violet-600",
        icon: "✦",
        progress: "bg-violet-500",
      };
    }

    return {
      badge:
        "border-emerald-100 bg-emerald-50 text-emerald-600",
      icon: "✓",
      progress: "bg-emerald-500",
    };
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="flex">

        {/* ================= SIDEBAR ================= */}
        <Sidebar />

        {/* ================= MAIN CONTENT ================= */}
        <div className="min-w-0 flex-1">

          {/* Navbar */}
          <Navbar />

          <main className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">

            {/* ================= HERO ================= */}
            <section className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-[#B91C35] via-[#E5394F] to-[#FF5A67] p-7 text-white shadow-xl shadow-red-200 sm:p-9">

              {/* Decorative Elements */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />

              <div className="absolute -bottom-24 right-20 h-52 w-52 rounded-full bg-white/10" />

              <div className="absolute right-1/3 top-8 h-16 w-16 rounded-full bg-white/5" />

              <div className="relative z-10">

                {/* Badge */}
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur">

                  <span className="h-2 w-2 rounded-full bg-emerald-300" />

                  Application Tracker

                </div>

                {/* Heading */}
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Track every application.
                </h1>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-red-100 sm:text-base">
                  Stay organized, follow your progress, and keep
                  every opportunity moving forward.
                </p>

                {/* Mini Stats */}
                <div className="mt-7 flex flex-wrap gap-3">

                  <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur">
                    <p className="text-xs text-red-100">
                      Total Applications
                    </p>

                    <p className="mt-1 text-2xl font-bold">
                      {totalCount}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur">
                    <p className="text-xs text-red-100">
                      Applied
                    </p>

                    <p className="mt-1 text-2xl font-bold">
                      {appliedCount}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur">
                    <p className="text-xs text-red-100">
                      Interviews
                    </p>

                    <p className="mt-1 text-2xl font-bold">
                      {interviewCount}
                    </p>
                  </div>

                </div>

              </div>
            </section>

            {/* ================= OVERVIEW CARDS ================= */}
            <section className="mb-8">

              <div className="mb-5">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5394F]">
                  Overview
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  Your application pipeline
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  See where your current applications stand.
                </p>

              </div>

              <div className="grid gap-5 md:grid-cols-3">

                {/* Total */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-red-50 transition-transform duration-300 group-hover:scale-150" />

                  <div className="relative flex items-center justify-between">

                    <div>
                      <p className="text-sm font-medium text-slate-500">
                        Total
                      </p>

                      <p className="mt-2 text-3xl font-bold text-[#E5394F]">
                        {totalCount}
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-lg text-[#E5394F]">
                      ◈
                    </div>

                  </div>

                  <p className="relative mt-4 text-xs text-slate-400">
                    Active applications
                  </p>

                </div>

                {/* Applied */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-emerald-50 transition-transform duration-300 group-hover:scale-150" />

                  <div className="relative flex items-center justify-between">

                    <div>
                      <p className="text-sm font-medium text-slate-500">
                        Applied
                      </p>

                      <p className="mt-2 text-3xl font-bold text-emerald-600">
                        {appliedCount}
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-lg text-emerald-600">
                      ✓
                    </div>

                  </div>

                  <p className="relative mt-4 text-xs text-slate-400">
                    Applications submitted
                  </p>

                </div>

                {/* Interviews */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet-50 transition-transform duration-300 group-hover:scale-150" />

                  <div className="relative flex items-center justify-between">

                    <div>
                      <p className="text-sm font-medium text-slate-500">
                        Interviews
                      </p>

                      <p className="mt-2 text-3xl font-bold text-violet-600">
                        {interviewCount}
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-lg text-violet-600">
                      ✦
                    </div>

                  </div>

                  <p className="relative mt-4 text-xs text-slate-400">
                    Opportunities progressing
                  </p>

                </div>

              </div>
            </section>

            {/* ================= APPLICATION LIST ================= */}
            <section>

              {/* Section Header */}
              <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

                <div>

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5394F]">
                    Pipeline
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-slate-900">
                    Your Applications
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Monitor your current application progress.
                  </p>

                </div>

                {/* Filter */}
                <div className="flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm">

                  {["All", "Applied", "Interview"].map(
                    (status) => (
                      <button
                        key={status}
                        onClick={() =>
                          setStatusFilter(status)
                        }
                        className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
                          statusFilter === status
                            ? "bg-[#E5394F] text-white shadow-sm"
                            : "text-slate-500 hover:bg-red-50 hover:text-[#E5394F]"
                        }`}
                      >
                        {status}
                      </button>
                    )
                  )}

                </div>

              </div>

              {/* Application Cards */}
              {filteredApplications.length > 0 ? (

                <div className="space-y-4">

                  {filteredApplications.map((job) => {

                    const style = getStatusStyle(
                      job.status
                    );

                    return (
                      <article
                        key={job.id}
                        className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-red-100 hover:shadow-lg sm:p-6"
                      >

                        {/* Left Accent */}
                        <div
                          className={`absolute left-0 top-0 h-full w-1 ${
                            job.status === "Interview"
                              ? "bg-violet-500"
                              : "bg-emerald-500"
                          }`}
                        />

                        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                          {/* Company + Role */}
                          <div className="flex min-w-0 items-center gap-4">

                            {/* Company Logo */}
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-red-50 to-rose-100 text-sm font-bold text-[#E5394F] ring-1 ring-red-100">
                              {job.company
                                .split(" ")
                                .map(
                                  (word) => word[0]
                                )
                                .join("")
                                .slice(0, 2)
                                .toUpperCase()}
                            </div>

                            <div className="min-w-0">

                              <h3 className="truncate text-lg font-bold text-slate-900">
                                {job.title}
                              </h3>

                              <p className="mt-1 text-sm font-semibold text-[#E5394F]">
                                {job.company}
                              </p>

                              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">

                                <span>
                                  📍 {job.location}
                                </span>

                                <span className="text-slate-300">
                                  •
                                </span>

                                <span>
                                  {job.type}
                                </span>

                              </div>

                            </div>

                          </div>

                          {/* Status */}
                          <div className="flex items-center gap-4 lg:min-w-[230px] lg:justify-end">

                            <div className="hidden text-right sm:block">

                              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                Current Stage
                              </p>

                              <p className="mt-1 text-sm font-semibold text-slate-700">
                                {job.status ===
                                "Interview"
                                  ? "Interview"
                                  : "Application Submitted"}
                              </p>

                            </div>

                            <span
                              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold ${style.badge}`}
                            >
                              <span>
                                {style.icon}
                              </span>

                              {job.status}
                            </span>

                          </div>

                        </div>

                        {/* Progress */}
                        <div className="mt-5 border-t border-slate-100 pt-5">

                          <div className="mb-2 flex items-center justify-between">

                            <span className="text-xs font-medium text-slate-400">
                              Application progress
                            </span>

                            <span className="text-xs font-bold text-slate-600">
                              {job.status ===
                              "Interview"
                                ? "75%"
                                : "50%"}
                            </span>

                          </div>

                          <div className="h-2 overflow-hidden rounded-full bg-slate-100">

                            <div
                              className={`h-full rounded-full transition-all duration-500 ${style.progress}`}
                              style={{
                                width:
                                  job.status ===
                                  "Interview"
                                    ? "75%"
                                    : "50%",
                              }}
                            />

                          </div>

                        </div>

                      </article>
                    );
                  })}

                </div>

              ) : (

                /* ================= EMPTY STATE ================= */
                <div className="rounded-3xl border border-dashed border-red-200 bg-white px-6 py-16 text-center shadow-sm">

                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-red-50 text-3xl text-[#E5394F]">
                    ✓
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    No applications found
                  </h3>

                  <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                    {statusFilter === "All"
                      ? "Once you apply for opportunities, they will appear here so you can track your progress."
                      : `You don't have any ${statusFilter.toLowerCase()} applications yet.`}
                  </p>

                  <a
                    href="/opportunities"
                    className="mt-6 inline-flex rounded-xl bg-[#E5394F] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-200 transition hover:bg-[#B91C35]"
                  >
                    Explore Opportunities
                  </a>

                </div>

              )}

            </section>

            {/* ================= BOTTOM MESSAGE ================= */}
            <section className="mt-8 rounded-3xl border border-red-100 bg-gradient-to-r from-red-50 to-white p-6">

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-xl text-[#E5394F] shadow-sm ring-1 ring-red-100">
                  ✦
                </div>

                <div>

                  <h3 className="font-bold text-slate-900">
                    Keep your momentum going.
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Every application is a step forward. Stay
                    consistent, prepare well, and keep exploring.
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

export default Applications;