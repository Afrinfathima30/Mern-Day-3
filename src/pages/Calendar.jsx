import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(7);

  const days = [
    { day: 28, month: "prev" },
    { day: 29, month: "prev" },
    { day: 30, month: "prev" },
    { day: 1, month: "current" },
    { day: 2, month: "current" },
    { day: 3, month: "current" },
    { day: 4, month: "current" },

    { day: 5, month: "current" },
    { day: 6, month: "current" },
    { day: 7, month: "current" },
    { day: 8, month: "current" },
    { day: 9, month: "current" },
    { day: 10, month: "current" },
    { day: 11, month: "current" },

    { day: 12, month: "current" },
    { day: 13, month: "current" },
    { day: 14, month: "current" },
    { day: 15, month: "current" },
    { day: 16, month: "current" },
    { day: 17, month: "current" },
    { day: 18, month: "current" },

    { day: 19, month: "current" },
    { day: 20, month: "current" },
    { day: 21, month: "current" },
    { day: 22, month: "current" },
    { day: 23, month: "current" },
    { day: 24, month: "current" },
    { day: 25, month: "current" },

    { day: 26, month: "current" },
    { day: 27, month: "current" },
    { day: 28, month: "current" },
    { day: 29, month: "current" },
    { day: 30, month: "current" },
    { day: 31, month: "current" },
    { day: 1, month: "next" },
  ];

  const events = {
    7: [
      {
        title: "Microsoft Internship",
        type: "Deadline",
        color: "red",
      },
    ],

    10: [
      {
        title: "Zoho Interview",
        type: "Interview",
        color: "violet",
      },
    ],

    15: [
      {
        title: "TCS Application",
        type: "Application",
        color: "emerald",
      },
    ],

    18: [
      {
        title: "Resume Review",
        type: "Task",
        color: "amber",
      },
    ],

    23: [
      {
        title: "Accenture Internship",
        type: "Deadline",
        color: "red",
      },
    ],

    27: [
      {
        title: "Portfolio Update",
        type: "Task",
        color: "amber",
      },
    ],
  };

  const upcomingEvents = [
    {
      date: "07",
      month: "OCT",
      title: "Microsoft Internship",
      subtitle: "Application deadline",
      type: "Deadline",
      color: "red",
    },
    {
      date: "10",
      month: "OCT",
      title: "Zoho Interview",
      subtitle: "Technical interview",
      type: "Interview",
      color: "violet",
    },
    {
      date: "15",
      month: "OCT",
      title: "TCS Application",
      subtitle: "Submit application",
      type: "Application",
      color: "emerald",
    },
    {
      date: "18",
      month: "OCT",
      title: "Resume Review",
      subtitle: "Update your resume",
      type: "Task",
      color: "amber",
    },
  ];

  const getEventDot = (day) => {
    if (!events[day]) {
      return null;
    }

    const color = events[day][0].color;

    const colors = {
      red: "bg-[#E5394F]",
      violet: "bg-violet-500",
      emerald: "bg-emerald-500",
      amber: "bg-amber-500",
    };

    return colors[color];
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="flex">

        {/* ================= SIDEBAR ================= */}
        <Sidebar />

        {/* ================= MAIN ================= */}
        <div className="min-w-0 flex-1">

          <Navbar />

          <main className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">

            {/* ================= HERO ================= */}
            <section className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-[#B91C35] via-[#E5394F] to-[#FF5A67] p-7 text-white shadow-xl shadow-red-200 sm:p-9">

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />

              <div className="absolute -bottom-24 right-24 h-52 w-52 rounded-full bg-white/10" />

              <div className="absolute right-1/3 top-8 h-20 w-20 rounded-full bg-white/5" />

              <div className="relative z-10">

                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  Career Planner
                </div>

                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Plan your career journey.
                </h1>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-red-100 sm:text-base">
                  Keep interviews, deadlines, applications, and important
                  career tasks organized in one place.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">

                  <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur">
                    <p className="text-xs text-red-100">
                      This Month
                    </p>

                    <p className="mt-1 text-xl font-bold">
                      October 2026
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur">
                    <p className="text-xs text-red-100">
                      Upcoming
                    </p>

                    <p className="mt-1 text-xl font-bold">
                      {upcomingEvents.length} Events
                    </p>
                  </div>

                </div>

              </div>
            </section>

            {/* ================= MAIN GRID ================= */}
            <div className="grid gap-6 xl:grid-cols-[1fr_350px]">

              {/* ================= CALENDAR ================= */}
              <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

                {/* Calendar Header */}
                <div className="flex flex-col gap-4 border-b border-slate-100 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5394F]">
                      Schedule
                    </p>

                    <h2 className="mt-1 text-2xl font-bold text-slate-900">
                      October 2026
                    </h2>
                  </div>

                  <div className="flex items-center gap-2">

                    <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-[#E5394F]">
                      ‹
                    </button>

                    <button className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-[#E5394F]">
                      Today
                    </button>

                    <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-[#E5394F]">
                      ›
                    </button>

                  </div>

                </div>

                {/* Legend */}
                <div className="flex flex-wrap gap-4 border-b border-slate-100 px-6 py-4">

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="h-2 w-2 rounded-full bg-[#E5394F]" />
                    Deadline
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="h-2 w-2 rounded-full bg-violet-500" />
                    Interview
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Application
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    Task
                  </div>

                </div>

                {/* Week Days */}
                <div className="grid grid-cols-7 border-b border-slate-100">

                  {[
                    "Sun",
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat",
                  ].map((day) => (
                    <div
                      key={day}
                      className="px-2 py-3 text-center text-[11px] font-bold uppercase tracking-wider text-slate-400"
                    >
                      {day}
                    </div>
                  ))}

                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7">

                  {days.map((item, index) => {

                    const hasEvent = events[item.day];

                    const isSelected =
                      item.day === selectedDate &&
                      item.month === "current";

                    const isToday =
                      item.day === 7 &&
                      item.month === "current";

                    return (
                      <button
                        key={`${item.day}-${index}`}
                        onClick={() => {
                          if (item.month === "current") {
                            setSelectedDate(item.day);
                          }
                        }}
                        className={`group relative min-h-[92px] border-b border-r border-slate-100 p-2 text-left transition sm:min-h-[105px] ${
                          item.month !== "current"
                            ? "bg-slate-50/70"
                            : "bg-white hover:bg-red-50/40"
                        } ${
                          isSelected
                            ? "bg-red-50/70"
                            : ""
                        }`}
                      >

                        <div className="flex justify-between">

                          <span
                            className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${
                              isToday
                                ? "bg-[#E5394F] text-white shadow-md shadow-red-200"
                                : item.month !== "current"
                                ? "text-slate-300"
                                : isSelected
                                ? "bg-red-100 text-[#E5394F]"
                                : "text-slate-600"
                            }`}
                          >
                            {item.day}
                          </span>

                        </div>

                        {/* Event */}
                        {hasEvent && item.month === "current" && (
                          <div className="mt-3">

                            <div className="hidden rounded-lg bg-slate-50 px-2 py-1.5 text-[10px] font-semibold text-slate-600 sm:block">
                              <span
                                className={`mr-1.5 inline-block h-1.5 w-1.5 rounded-full ${getEventDot(
                                  item.day
                                )}`}
                              />

                              {events[item.day][0].title}
                            </div>

                            <div
                              className={`mt-2 h-1.5 w-1.5 rounded-full sm:hidden ${getEventDot(
                                item.day
                              )}`}
                            />

                          </div>
                        )}

                      </button>
                    );
                  })}

                </div>

              </section>

              {/* ================= UPCOMING EVENTS ================= */}
              <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="mb-6">

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5394F]">
                    Upcoming
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    Important dates
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Don't miss what is coming next.
                  </p>

                </div>

                <div className="space-y-3">

                  {upcomingEvents.map((event) => {

                    const badgeStyles = {
                      red: "bg-red-50 text-[#E5394F]",
                      violet:
                        "bg-violet-50 text-violet-600",
                      emerald:
                        "bg-emerald-50 text-emerald-600",
                      amber:
                        "bg-amber-50 text-amber-600",
                    };

                    return (
                      <div
                        key={event.title}
                        className="group rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition hover:border-red-100 hover:bg-white hover:shadow-md"
                      >

                        <div className="flex gap-3">

                          {/* Date */}
                          <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-100">

                            <span className="text-lg font-bold leading-none text-slate-900">
                              {event.date}
                            </span>

                            <span className="mt-1 text-[8px] font-bold tracking-wider text-[#E5394F]">
                              {event.month}
                            </span>

                          </div>

                          {/* Content */}
                          <div className="min-w-0 flex-1">

                            <div className="flex items-start justify-between gap-2">

                              <h3 className="truncate text-sm font-bold text-slate-800">
                                {event.title}
                              </h3>

                              <span
                                className={`shrink-0 rounded-full px-2 py-1 text-[9px] font-bold ${badgeStyles[event.color]}`}
                              >
                                {event.type}
                              </span>

                            </div>

                            <p className="mt-1 truncate text-xs text-slate-400">
                              {event.subtitle}
                            </p>

                          </div>

                        </div>

                      </div>
                    );
                  })}

                </div>

                {/* Bottom Tip */}
                <div className="mt-6 rounded-2xl border border-red-100 bg-red-50 p-4">

                  <div className="flex gap-3">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-sm text-[#E5394F] shadow-sm">
                      ✦
                    </div>

                    <div>

                      <h3 className="text-xs font-bold text-slate-800">
                        Stay ahead
                      </h3>

                      <p className="mt-1 text-[11px] leading-5 text-slate-500">
                        Check your calendar regularly so
                        important deadlines never sneak up on you.
                      </p>

                    </div>

                  </div>

                </div>

              </aside>

            </div>

            {/* ================= SELECTED DAY ================= */}
            <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5394F]">
                    Selected Date
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    October {selectedDate}, 2026
                  </h2>

                </div>

                <div className="rounded-xl bg-red-50 px-4 py-3 text-center">

                  <p className="text-xs text-slate-500">
                    Events scheduled
                  </p>

                  <p className="mt-1 text-lg font-bold text-[#E5394F]">
                    {events[selectedDate]?.length || 0}
                  </p>

                </div>

              </div>

              {events[selectedDate] ? (

                <div className="mt-5 grid gap-3 sm:grid-cols-2">

                  {events[selectedDate].map((event) => (
                    <div
                      key={event.title}
                      className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4"
                    >

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[#E5394F]">
                        ◷
                      </div>

                      <div>

                        <h3 className="text-sm font-bold text-slate-800">
                          {event.title}
                        </h3>

                        <p className="mt-1 text-xs text-slate-400">
                          {event.type}
                        </p>

                      </div>

                    </div>
                  ))}

                </div>

              ) : (

                <div className="mt-5 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-5 py-8 text-center">

                  <p className="text-sm font-semibold text-slate-600">
                    Nothing scheduled for this day.
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Enjoy the free time or plan your next career move.
                  </p>

                </div>

              )}

            </section>

          </main>
        </div>
      </div>
    </div>
  );
}

export default Calendar;