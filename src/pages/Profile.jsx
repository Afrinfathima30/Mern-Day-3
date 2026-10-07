import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Profile() {
  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Afrin Fathima",
    role: "B.Tech Information Technology Student",
    email: "afrin@example.com",
    location: "Chennai, India",
    phone: "+91 XXXXX XXXXX",
    bio: "Aspiring Java Full Stack Developer passionate about building useful products, learning new technologies, and creating meaningful digital experiences.",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="flex">

        {/* ================= SIDEBAR ================= */}
        <Sidebar />

        {/* ================= MAIN CONTENT ================= */}
        <div className="min-w-0 flex-1">

          <Navbar />

          <main className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">

            {/* ================= PROFILE HERO ================= */}
            <section className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-[#B91C35] via-[#E5394F] to-[#FF5A67] p-7 text-white shadow-xl shadow-red-200 sm:p-9">

              {/* Decorative Shapes */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />

              <div className="absolute -bottom-24 right-28 h-52 w-52 rounded-full bg-white/10" />

              <div className="absolute left-1/2 top-10 h-20 w-20 rounded-full bg-white/5" />

              <div className="relative z-10 flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

                {/* Profile Identity */}
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                  {/* Avatar */}
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl border-4 border-white/20 bg-white/15 text-3xl font-bold shadow-xl backdrop-blur">
                    AF
                  </div>

                  <div>

                    <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      Career Profile
                    </div>

                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                      {profile.name}
                    </h1>

                    <p className="mt-2 text-sm text-red-100 sm:text-base">
                      {profile.role}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-3 text-xs text-red-100">

                      <span className="rounded-full bg-white/10 px-3 py-1.5">
                        📍 {profile.location}
                      </span>

                      <span className="rounded-full bg-white/10 px-3 py-1.5">
                        ✦ CareerFlow Member
                      </span>

                    </div>

                  </div>

                </div>

                {/* Edit Button */}
                <button
                  onClick={() => setEditing(!editing)}
                  className="w-fit rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#C5223C] shadow-lg transition hover:-translate-y-0.5 hover:bg-red-50"
                >
                  {editing ? "Save Changes" : "Edit Profile"}
                </button>

              </div>
            </section>

            {/* ================= PROFILE CONTENT ================= */}
            <div className="grid gap-6 xl:grid-cols-[1fr_350px]">

              {/* ================= LEFT COLUMN ================= */}
              <div className="space-y-6">

                {/* Personal Information */}
                <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">

                  <div className="border-b border-slate-100 px-6 py-6 sm:px-8">

                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5394F]">
                      Personal Information
                    </p>

                    <h2 className="mt-1 text-xl font-bold text-slate-900">
                      Profile details
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Keep your career information up to date.
                    </p>

                  </div>

                  <div className="grid gap-5 px-6 py-7 sm:grid-cols-2 sm:px-8">

                    {/* Name */}
                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                        disabled={!editing}
                        className={`w-full rounded-xl border px-4 py-3 text-sm font-medium outline-none transition ${
                          editing
                            ? "border-slate-200 bg-slate-50 text-slate-900 focus:border-[#E5394F] focus:bg-white focus:ring-4 focus:ring-red-50"
                            : "border-transparent bg-slate-50 text-slate-700"
                        }`}
                      />
                    </div>

                    {/* Role */}
                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                        Current Role
                      </label>

                      <input
                        type="text"
                        name="role"
                        value={profile.role}
                        onChange={handleChange}
                        disabled={!editing}
                        className={`w-full rounded-xl border px-4 py-3 text-sm font-medium outline-none transition ${
                          editing
                            ? "border-slate-200 bg-slate-50 text-slate-900 focus:border-[#E5394F] focus:bg-white focus:ring-4 focus:ring-red-50"
                            : "border-transparent bg-slate-50 text-slate-700"
                        }`}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                        disabled={!editing}
                        className={`w-full rounded-xl border px-4 py-3 text-sm font-medium outline-none transition ${
                          editing
                            ? "border-slate-200 bg-slate-50 text-slate-900 focus:border-[#E5394F] focus:bg-white focus:ring-4 focus:ring-red-50"
                            : "border-transparent bg-slate-50 text-slate-700"
                        }`}
                      />
                    </div>

                    {/* Location */}
                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                        Location
                      </label>

                      <input
                        type="text"
                        name="location"
                        value={profile.location}
                        onChange={handleChange}
                        disabled={!editing}
                        className={`w-full rounded-xl border px-4 py-3 text-sm font-medium outline-none transition ${
                          editing
                            ? "border-slate-200 bg-slate-50 text-slate-900 focus:border-[#E5394F] focus:bg-white focus:ring-4 focus:ring-red-50"
                            : "border-transparent bg-slate-50 text-slate-700"
                        }`}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                        Phone
                      </label>

                      <input
                        type="text"
                        name="phone"
                        value={profile.phone}
                        onChange={handleChange}
                        disabled={!editing}
                        className={`w-full rounded-xl border px-4 py-3 text-sm font-medium outline-none transition ${
                          editing
                            ? "border-slate-200 bg-slate-50 text-slate-900 focus:border-[#E5394F] focus:bg-white focus:ring-4 focus:ring-red-50"
                            : "border-transparent bg-slate-50 text-slate-700"
                        }`}
                      />
                    </div>

                    {/* Profile Completion */}
                    <div>

                      <div className="mb-2 flex items-center justify-between">

                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                          Profile Completion
                        </label>

                        <span className="text-xs font-bold text-[#E5394F]">
                          85%
                        </span>

                      </div>

                      <div className="rounded-xl bg-slate-50 px-4 py-3">

                        <div className="h-2 overflow-hidden rounded-full bg-slate-200">

                          <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-[#B91C35] to-[#FF5A67]" />

                        </div>

                      </div>

                    </div>

                  </div>

                  {/* Bio */}
                  <div className="border-t border-slate-100 px-6 py-7 sm:px-8">

                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                      About Me
                    </label>

                    <textarea
                      name="bio"
                      value={profile.bio}
                      onChange={handleChange}
                      disabled={!editing}
                      rows="4"
                      className={`w-full resize-none rounded-xl border px-4 py-3 text-sm leading-6 outline-none transition ${
                        editing
                          ? "border-slate-200 bg-slate-50 text-slate-900 focus:border-[#E5394F] focus:bg-white focus:ring-4 focus:ring-red-50"
                          : "border-transparent bg-slate-50 text-slate-600"
                      }`}
                    />

                  </div>

                </section>

                {/* Career Goals */}
                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                  <div className="mb-6">

                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5394F]">
                      Career Direction
                    </p>

                    <h2 className="mt-1 text-xl font-bold text-slate-900">
                      Your career goals
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Define what you're working toward.
                    </p>

                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">

                    <div className="rounded-2xl border border-red-100 bg-red-50 p-5">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#E5394F] shadow-sm">
                        ◈
                      </div>

                      <h3 className="mt-4 text-sm font-bold text-slate-800">
                        Target Role
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Java Full Stack Developer
                      </p>

                    </div>

                    <div className="rounded-2xl border border-violet-100 bg-violet-50 p-5">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
                        ✦
                      </div>

                      <h3 className="mt-4 text-sm font-bold text-slate-800">
                        Focus Area
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Full Stack Development
                      </p>

                    </div>

                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm">
                        ✓
                      </div>

                      <h3 className="mt-4 text-sm font-bold text-slate-800">
                        Current Goal
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Secure a great placement
                      </p>

                    </div>

                  </div>

                </section>

              </div>

              {/* ================= RIGHT COLUMN ================= */}
              <aside className="space-y-6">

                {/* Career Snapshot */}
                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                  <div className="mb-6">

                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5394F]">
                      Snapshot
                    </p>

                    <h2 className="mt-1 text-xl font-bold text-slate-900">
                      Career activity
                    </h2>

                  </div>

                  <div className="space-y-3">

                    <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[#E5394F]">
                          ◈
                        </div>

                        <div>
                          <p className="text-xs text-slate-400">
                            Opportunities
                          </p>

                          <p className="mt-0.5 text-sm font-bold text-slate-800">
                            6
                          </p>
                        </div>

                      </div>

                      <span className="text-xs font-semibold text-[#E5394F]">
                        Tracked
                      </span>

                    </div>

                    <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                          ✓
                        </div>

                        <div>
                          <p className="text-xs text-slate-400">
                            Applications
                          </p>

                          <p className="mt-0.5 text-sm font-bold text-slate-800">
                            2
                          </p>
                        </div>

                      </div>

                      <span className="text-xs font-semibold text-emerald-600">
                        Submitted
                      </span>

                    </div>

                    <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                          ✦
                        </div>

                        <div>
                          <p className="text-xs text-slate-400">
                            Interviews
                          </p>

                          <p className="mt-0.5 text-sm font-bold text-slate-800">
                            1
                          </p>
                        </div>

                      </div>

                      <span className="text-xs font-semibold text-violet-600">
                        Progressing
                      </span>

                    </div>

                  </div>

                </section>

                {/* Skills */}
                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5394F]">
                    Skills
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    Technical toolkit
                  </h2>

                  <div className="mt-5 flex flex-wrap gap-2">

                    {[
                      "Java",
                      "Spring Boot",
                      "React",
                      "JavaScript",
                      "Python",
                      "SQL",
                      "HTML",
                      "CSS",
                      "Git",
                      "Power BI",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-[#E5394F]"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                </section>

                {/* Career Tip */}
                <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-lg">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/15 text-lg text-red-400">
                    ✦
                  </div>

                  <h3 className="mt-5 text-lg font-bold">
                    Build your profile.
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A complete profile makes it easier to keep your
                    career goals, skills, and opportunities aligned.
                  </p>

                  <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">

                    <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-[#E5394F] to-[#FF5A67]" />

                  </div>

                  <p className="mt-2 text-xs text-slate-500">
                    Profile completion: 85%
                  </p>

                </section>

              </aside>

            </div>

          </main>
        </div>
      </div>
    </div>
  );
}

export default Profile;