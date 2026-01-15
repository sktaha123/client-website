import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { format, formatDistanceToNow } from 'date-fns';


const token = import.meta.env.VITE_ADMIN_TOKEN;
// Use the variable that includes the token
const API_URL = `https://script.google.com/macros/s/AKfycbwAfEvirqqAbDjiZL58jsowiLolBGUWy3J69ciIKqNWS8PU5EYxE2G7wlETuVj7UXrl/exec?token=${import.meta.env.VITE_ADMIN_TOKEN}`;


const TableSkeleton = () => (
  <div className="animate-pulse space-y-4">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="flex space-x-4 border-b border-gray-100 py-4">
        <div className="h-4 w-1/4 rounded bg-gray-200"></div>
        <div className="h-4 w-1/4 rounded bg-gray-200"></div>
        <div className="h-4 w-1/4 rounded bg-gray-200"></div>
        <div className="h-4 w-1/8 rounded bg-gray-200"></div>
      </div>
    ))}
  </div>
);

export default function ApplicationsTable() {



  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const res = await fetch(API_URL);
        const data = await res.json();

        if (Array.isArray(data)) {
          // --- THE FIX: FILTER OUT EMPTY ROWS ---
          // This checks if the 'Name' or 'Email' exists and isn't just whitespace.
          // If a row is empty, it is removed, and the data below it shifts up.
          const validRows = data.filter(row => {
            const name = (row.Name || row.name || "").toString().trim();
            const email = (row.Email || row.email || "").toString().trim();
            return name !== "" || email !== "";
          });

          setRows(validRows);
        } else {
          console.error("Data received is not an array:", data);
          setRows([]);
        }
      } catch (err) {
        console.error("FETCH ERROR:", err);
        setRows([]);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Filter Logic
  // Ensure this part in your component matches the "Categories" header
  const categories = [
    "All",
    ...new Set(
      rows
        .map(row => (row.Categories || row.category)?.toString().trim())
        .filter(Boolean)
    )
  ];

  const filteredRows = category === "All"
    ? rows
    : rows.filter(row => (row.Categories || row.category) === category);

  if (loading) {
    return (
      <div className="w-full space-y-8 p-6">
        <div className="h-20 w-full rounded-2xl bg-gray-100 animate-pulse"></div> {/* Header Placeholder */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <TableSkeleton />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="w-full space-y-10"
    >
      {/* Header / Filter Bar */}
      <div className="
    flex flex-wrap items-center justify-between gap-6
    rounded-2xl
    bg-[var(--color-biz-cream-light)]
    px-8 py-6
    shadow-sm
  ">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-semibold tracking-tight text-[var(--color-biz-charcoal)]">
              Applications
            </h3>
            <span className="
          rounded-full
          bg-[var(--color-biz-bronze-pale)]
          px-3 py-1
          text-sm font-semibold
          text-[var(--color-biz-bronze-dark)]
        ">
              {filteredRows.length}
            </span>
          </div>

          <p className="mt-1 text-sm text-[var(--color-biz-charcoal-soft)]">
            Review and manage submitted profiles
          </p>
        </div>

        {/* Category Dropdown */}
        <div className="relative min-w-[220px]">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="
      appearance-none
      w-full
      rounded-xl
      border
      border-[var(--color-biz-sand-muted)]
      bg-[var(--color-biz-cream-light)]
      px-5 py-2.5 pr-12
      text-sm font-medium
      text-[var(--color-biz-charcoal)]
      shadow-sm
      transition-all
      hover:border-[var(--color-biz-charcoal-soft)]
      focus:border-[var(--color-biz-bronze)]
      focus:outline-none
      focus:ring-1
      focus:ring-[var(--color-biz-bronze-pale)]
    "
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Custom Chevron */}
          <div className="
    pointer-events-none
    absolute right-4 top-1/2
    -translate-y-1/2
    text-[var(--color-biz-charcoal-soft)]
  ">
            <svg
              width="14"
              height="14"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

      </div>

      {/* Table */}
      <div className="
    overflow-x-auto
    rounded-2xl
    bg-[var(--color-biz-cream-light)]
    shadow-sm
  ">
        <table className="w-full text-sm">
          <thead className="
        sticky top-0
        bg-[var(--color-biz-cream-dark)]
        text-xs uppercase tracking-wide
        text-[var(--color-biz-charcoal-soft)]
      ">
            <tr>
              <th className="px-6 py-4 text-left">Timestamp</th>
              <th className="px-6 py-4 text-left">Candidate</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Contact</th>
              <th className="px-6 py-4 text-left">Alt. Contact</th>
              <th className="px-6 py-4 text-left">Location</th>
              <th className="px-6 py-4 text-left">Country</th>
              <th className="px-6 py-4 text-left">Category</th>
              <th className="px-6 py-4 text-left">CV</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[var(--color-biz-sand)]">
            {filteredRows.map((row, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.02 }}
                className="
              transition
              hover:bg-[var(--color-biz-cream)]
            "
              >
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-[var(--color-biz-charcoal)]">
                    {row.Timestamp
                      ? format(new Date(row.Timestamp), "MMM dd, yyyy")
                      : "N/A"}
                  </div>
                  <div className="mt-0.5 text-[11px] text-[var(--color-biz-charcoal-soft)]">
                    {row.Timestamp
                      ? formatDistanceToNow(new Date(row.Timestamp), { addSuffix: true })
                      : ""}
                  </div>
                </td>

                <td className="px-6 py-4 font-medium text-[var(--color-biz-charcoal)]">
                  {row.name || row.Name}
                </td>

                <td className="px-6 py-4 text-[var(--color-biz-charcoal-muted)]">
                  {row.email || row.Email}
                </td>

                <td className="px-6 py-4 text-[var(--color-biz-charcoal)]">
                  {row.contact || row.Contact}
                </td>

                <td className="px-6 py-4 text-[var(--color-biz-charcoal)]">
                  {row["alternate contact"] || row["Alternate Contact"]}
                </td>

                <td className="px-6 py-4 text-[var(--color-biz-charcoal-muted)]">
                  {row.location || row.Location}
                </td>

                <td className="px-6 py-4 text-[var(--color-biz-charcoal-muted)]">
                  {row.country || row.Country}
                </td>

                <td className="px-6 py-4">
                  <span className="
                inline-flex items-center
                rounded-full
                bg-[var(--color-biz-bronze-pale)]
                px-3 py-1
                text-xs font-medium
                text-[var(--color-biz-bronze-dark)]
              ">
                    {row.category || row.Categories}
                  </span>
                </td>

                <td className="px-6 py-4">
                  {/* Check if either CV Link or fileUrl exists before showing the button */}
                  {(row["CV Link"] || row.fileUrl) ? (
                    <a
                      href={row["CV Link"] || row.fileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="
        inline-flex items-center
        rounded-lg
        border border-[var(--color-biz-sand-muted)]
        px-3 py-1.5
        text-xs font-medium
        text-[var(--color-biz-charcoal)]
        transition
        hover:bg-[var(--color-biz-bronze)]
        hover:text-[var(--color-biz-cream-light)]
      "
                    >
                      View CV
                    </a>
                  ) : (
                    <span className="text-gray-300">—</span> // Shows a dash if no CV exists
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {filteredRows.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
        rounded-2xl
        bg-[var(--color-biz-cream-light)]
        py-20
        text-center
        shadow-sm
      "
        >
          <p className="text-sm text-[var(--color-biz-charcoal-soft)]">
            No applications found for this category.
          </p>
        </motion.div>
      )}
    </motion.div>



  );
}


