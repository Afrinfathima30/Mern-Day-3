import { useState } from "react";

function JobCard({ title, company, location, type, status }) {
  const [saved, setSaved] = useState(status === "Saved");

  const handleSave = () => {
    setSaved(!saved);
  };

  const handleViewDetails = () => {
    alert(
      `Job Details\n\n${title}\n${company}\n${location}\n${type}`
    );
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Top Section */}
      <div className="mb-5 flex items-start justify-between gap-4">

        <div>
          <h2 className="text-xl font-bold text-slate-900">
            {title}
          </h2>

          <p className="mt-1 font-medium text-blue-600">
            {company}
          </p>
        </div>

        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
          {type}
        </span>

      </div>

      {/* Job Information */}
      <div className="space-y-3">

        <p className="text-sm text-slate-500">
          📍 {location}
        </p>

        <div className="flex items-center justify-between">

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            {status}
          </span>

          {saved && (
            <span className="text-xs font-semibold text-blue-600">
              ★ Saved
            </span>
          )}

        </div>

      </div>

      {/* Buttons */}
      <div className="mt-5 flex gap-3">

        <button
          onClick={handleViewDetails}
          className="flex-1 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
        >
          View Details
        </button>

        <button
          onClick={handleSave}
          className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
            saved
              ? "border-blue-600 bg-blue-50 text-blue-600"
              : "border-slate-200 bg-white text-slate-600 hover:border-blue-500 hover:text-blue-600"
          }`}
        >
          {saved ? "★" : "☆"}
        </button>

      </div>

    </div>
  );
}

export default JobCard;