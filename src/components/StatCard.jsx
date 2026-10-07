function StatCard({ title, value, description, icon, color }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className={`mt-2 text-3xl font-bold ${color}`}>
            {value}
          </h2>

          <p className="mt-2 text-xs text-slate-400">
            {description}
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-xl">
          {icon}
        </div>

      </div>

    </div>
  );
}

export default StatCard;