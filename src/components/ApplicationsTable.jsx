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
        // FIX: Use API_URL (with token) instead of the hardcoded one
        const res = await fetch(API_URL);
        const data = await res.json();



        if (Array.isArray(data)) {
          setRows(data);
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
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full space-y-10"
    >
      {/* Header / Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-white/70 px-8 py-6 shadow-sm backdrop-blur">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-gray-900">
            Applications
            <span className="rounded-md bg-blue-50 ml-2 px-2.5 py-0.5 text-md font-bold text-blue-600">
            {filteredRows.length}
          </span>
          </h3>
          
          <p className="mt-1 text-sm text-gray-500">
            Review and manage submitted profiles
          </p>
        </div>

        {/* Styled Category Dropdown */}
        <div className="relative">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="
          appearance-none
          rounded-xl
          border border-gray-200
          bg-white/90
          px-5 py-2.5 pr-10
          text-sm text-gray-700
          shadow-sm
          transition
          hover:border-gray-300
          focus:border-gray-400
          focus:outline-none
        "
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            ▾
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl bg-white/70 shadow-sm backdrop-blur">
       
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-gray-50/80 text-xs uppercase tracking-wide text-gray-500 backdrop-blur">
            <tr>
              <th className="px-6 py-4 text-left">Timestamp</th>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Contact</th>
              <th className="px-6 py-4 text-left">Alt. Contact</th>
              <th className="px-6 py-4 text-left">Location</th>
              <th className="px-6 py-4 text-left">Country</th>
              <th className="px-6 py-4 text-left">Category</th>
              <th className="px-6 py-4 text-left">CV</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {filteredRows.map((row, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.02 }}
                className="transition hover:bg-gray-50/60"
              >

                 <td className="px-6 py-4 text-xs text-gray-500">
                  <div className="font-medium text-gray-900">
                    {row.Timestamp ? format(new Date(row.Timestamp), 'MMM dd, yyyy') : 'N/A'}
                  </div>
                  <div className="text-[10px] text-gray-400">
                    {row.Timestamp ? formatDistanceToNow(new Date(row.Timestamp), { addSuffix: true }) : ''}
                  </div>
                </td>
                
                <td className="px-6 py-4 font-medium text-gray-900">
                  {row.name || row.Name}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {row.email || row.Email}
                </td>

                <td className="px-6 py-4 text-gray-700">
                  {row.contact || row.Contact}
                </td>

                <td className="px-6 py-4 text-gray-700">
                  {row["alternate contact"] || row["Alternate Contact"]}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {row.location || row.Location}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {row.country || row.Country}
                </td>

                <td className="px-6 py-4">
                  <span className="inline-flex items-center rounded-full bg-gray-100/70 px-3 py-1 text-xs font-medium text-gray-700">
                    {row.category || row.Categories}
                  </span>
                </td>

               

                <td className="px-6 py-4">
                  <a
                    href={row["CV Link"] || row.fileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="
                  inline-flex items-center
                  rounded-lg
                  px-3 py-1.5
                  text-xs font-medium
                  text-gray-700
                  transition
                  hover:bg-gray-900
                  hover:text-white
                "
                  >
                    View CV
                  </a>
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
          className="rounded-2xl bg-white/70 py-16 text-center shadow-sm backdrop-blur"
        >
          <p className="text-sm text-gray-500">
            No applications found for this category.
          </p>
        </motion.div>
      )}
    </motion.div>

  );
}


