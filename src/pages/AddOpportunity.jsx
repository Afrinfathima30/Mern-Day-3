import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useJobs } from "../context/JobsContext";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function AddOpportunity() {
  const { addJob } = useJobs();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "Internship",
    deadline: "",
    link: "",
    status: "Saved",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addJob(formData);

    navigate("/opportunities");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="flex">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="min-w-0 flex-1">

          {/* Navbar */}
          <Navbar />

          <main className="mx-auto max-w-5xl px-5 py-8 sm:px-6 lg:px-8">

            {/* ================= HEADER ================= */}
            <section className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-[#B91C35] via-[#E5394F] to-[#FF5A67] p-7 text-white shadow-xl shadow-red-200 sm:p-9">

              {/* Decorative circles */}
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />

              <div className="absolute -bottom-20 right-28 h-36 w-36 rounded-full bg-white/10" />

              <div className="relative">

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-xl backdrop-blur">
                  +
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-100">
                  CareerFlow
                </p>

                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Add a new opportunity
                </h1>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-red-100 sm:text-base">
                  Keep your career search organized by saving every
                  interesting job and internship in one place.
                </p>

              </div>
            </section>

            {/* ================= FORM ================= */}
            <form
              onSubmit={handleSubmit}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >

              {/* Form Header */}
              <div className="border-b border-slate-100 px-6 py-6 sm:px-8">

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#E5394F]">
                    ◈
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-slate-900">
                      Opportunity Details
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Enter the basic information about this opportunity.
                    </p>
                  </div>

                </div>

              </div>

              <div className="px-6 py-7 sm:px-8">

                {/* ================= BASIC INFORMATION ================= */}
                <div className="mb-8">

                  <div className="mb-5">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E5394F]">
                      Basic Information
                    </p>

                    <h3 className="mt-1 text-base font-bold text-slate-900">
                      Tell us about the opportunity
                    </h3>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">

                    {/* Job Title */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Job Title
                        <span className="ml-1 text-[#E5394F]">*</span>
                      </label>

                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="e.g. Frontend Developer"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#E5394F] focus:bg-white focus:ring-4 focus:ring-red-50"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Company
                        <span className="ml-1 text-[#E5394F]">*</span>
                      </label>

                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Google"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#E5394F] focus:bg-white focus:ring-4 focus:ring-red-50"
                      />
                    </div>

                    {/* Location */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Location
                        <span className="ml-1 text-[#E5394F]">*</span>
                      </label>

                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Chennai"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#E5394F] focus:bg-white focus:ring-4 focus:ring-red-50"
                      />
                    </div>

                    {/* Type */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Opportunity Type
                        <span className="ml-1 text-[#E5394F]">*</span>
                      </label>

                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-[#E5394F] focus:bg-white focus:ring-4 focus:ring-red-50"
                      >
                        <option value="Internship">
                          Internship
                        </option>

                        <option value="Full Time">
                          Full Time
                        </option>
                      </select>
                    </div>

                  </div>
                </div>

                {/* ================= APPLICATION DETAILS ================= */}
                <div className="mb-8 border-t border-slate-100 pt-8">

                  <div className="mb-5">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E5394F]">
                      Application
                    </p>

                    <h3 className="mt-1 text-base font-bold text-slate-900">
                      Track your application
                    </h3>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">

                    {/* Deadline */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Application Deadline
                      </label>

                      <input
                        type="date"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#E5394F] focus:bg-white focus:ring-4 focus:ring-red-50"
                      />
                    </div>

                    {/* Status */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Current Status
                      </label>

                      <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-[#E5394F] focus:bg-white focus:ring-4 focus:ring-red-50"
                      >
                        <option value="Saved">
                          Saved
                        </option>

                        <option value="Applied">
                          Applied
                        </option>

                        <option value="Interview">
                          Interview
                        </option>
                      </select>
                    </div>

                  </div>

                  {/* Application Link */}
                  <div className="mt-5">

                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Application Link
                    </label>

                    <input
                      type="url"
                      name="link"
                      value={formData.link}
                      onChange={handleChange}
                      placeholder="https://company.com/careers"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#E5394F] focus:bg-white focus:ring-4 focus:ring-red-50"
                    />

                  </div>

                </div>

                {/* ================= NOTES ================= */}
                <div className="border-t border-slate-100 pt-8">

                  <div className="mb-5">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E5394F]">
                      Additional Notes
                    </p>

                    <h3 className="mt-1 text-base font-bold text-slate-900">
                      Anything else to remember?
                    </h3>
                  </div>

                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Add notes about the role, interview preparation, recruiter details, skills required, etc."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#E5394F] focus:bg-white focus:ring-4 focus:ring-red-50"
                  />

                </div>

              </div>

              {/* ================= FORM ACTIONS ================= */}
              <div className="flex flex-col-reverse gap-3 border-t border-slate-100 bg-slate-50 px-6 py-5 sm:flex-row sm:justify-end sm:px-8">

                <button
                  type="button"
                  onClick={() => navigate("/opportunities")}
                  className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-[#E5394F]"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-xl bg-gradient-to-r from-[#B91C35] to-[#E5394F] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-200 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-red-200"
                >
                  + Add Opportunity
                </button>

              </div>

            </form>

            {/* Small helper */}
            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-400">
              <span className="text-[#E5394F]">✦</span>
              Every opportunity you track brings you one step closer.
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}

export default AddOpportunity;