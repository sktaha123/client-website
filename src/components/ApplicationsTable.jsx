import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { format, formatDistanceToNow, isToday, isWithinInterval, subDays } from 'date-fns';

const API_URL = `https://script.google.com/macros/s/AKfycbwAfEvirqqAbDjiZL58jsowiLolBGUWy3J69ciIKqNWS8PU5EYxE2G7wlETuVj7UXrl/exec?token=${import.meta.env.VITE_ADMIN_TOKEN}`;

export default function ApplicationsTable() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");
  const [country, setCountry] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: 'Timestamp', direction: 'desc' });
  

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 20;

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const res = await fetch(API_URL);
        const data = await res.json();
        if (Array.isArray(data)) {
          const validRows = data.filter(row => (row.Name || row.name || "").trim() !== "");
          setRows(validRows);
        }
      } catch (err) { console.error(err); } finally { setLoading(false); }
    }
    loadData();
  }, []);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, category, country]);

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key, direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  /* ---------------- 1. FILTER & SORT (FULL DATA) ---------------- */
  const processedRows = useMemo(() => {
    let filtered = rows.filter(row => {
      const matchesCat = category === "All" || (row.Categories || row.category) === category;
      const matchesCountry = country === "All" || (row.Country || row.country) === country;
      const matchesSearch = (row.Name || row.name || "").toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCat && matchesCountry && matchesSearch;
    });

    return filtered.sort((a, b) => {
      let aVal = a[sortConfig.key] || "";
      let bVal = b[sortConfig.key] || "";
      if (sortConfig.key === 'Timestamp') { aVal = new Date(aVal); bVal = new Date(bVal); }
      if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [rows, category, country, searchTerm, sortConfig]);

  /* ---------------- 2. PAGINATION (LIMIT TO 20) ---------------- */
  const paginatedRows = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return processedRows.slice(startIndex, startIndex + rowsPerPage);
  }, [processedRows, currentPage]);

  const totalPages = Math.ceil(processedRows.length / rowsPerPage);

  /* ---------------- 3. TIME-BASED GROUPING (VISIBLE ONLY) ---------------- */
  const groupedRows = useMemo(() => {
    const now = new Date();
    return paginatedRows.reduce((acc, row) => {
      const date = new Date(row.Timestamp);
      if (isWithinInterval(date, { start: subDays(now, 1), end: now })) acc.Recent.push(row);
      else if (isWithinInterval(date, { start: subDays(now, 7), end: now })) acc.ThisWeek.push(row);
      else acc.Older.push(row);
      return acc;
    }, { Recent: [], ThisWeek: [], Older: [] });
  }, [paginatedRows]);

  const downloadCSV = () => {
    if (!processedRows || processedRows.length === 0) return;
    const headers = Object.keys(processedRows[0]);
    const csvContent = [
      headers.join(","),
      ...processedRows.map(row =>
        headers.map(h => {
          const cellValue = row[h] ?? "";
          return `"${cellValue.toString().replace(/"/g, '""')}"`;
        }).join(",")
      )
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const fileName = `applications_${category}_${country}.csv`.toLowerCase();
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (loading) return <div className="p-10 text-center text-gray-400">Loading ATS Dashboard...</div>;

  return (
   <div className="w-full min-h-screen space-y-8 bg-[var(--color-biz-cream)] p-4 sm:p-6">

  {/* SEARCH & FILTERS */}
  <div className="
    flex flex-col lg:flex-row gap-6 
    rounded-2xl bg-[var(--color-biz-cream-light)] 
    px-5 py-6 sm:px-8 
    shadow-sm
  ">
    {/* LEFT */}
    <div className="flex items-center gap-5">
      <div>
        <h3 className="text-xl font-semibold text-[var(--color-biz-charcoal)]">
          Applications
        </h3>
        <p className="mt-1 text-sm text-[var(--color-biz-charcoal-soft)]">
          Showing {processedRows.length} of {rows.length} results
        </p>
      </div>

      <div className="
        shrink-0 rounded-full 
        bg-[var(--color-biz-bronze-pale)] 
        px-4 py-2
      ">
        <span className="text-lg font-bold text-[var(--color-biz-bronze-dark)]">
          {rows.length}
        </span>
      </div>
    </div>

    {/* RIGHT */}
    <div className="
      flex flex-col sm:flex-row 
      flex-wrap gap-3 
      sm:items-center
    ">
      <button
        onClick={downloadCSV}
        className="
          shrink-0 rounded-xl border 
          border-[var(--color-biz-sand-muted)] 
          bg-[var(--color-biz-cream)]
          px-5 py-2.5 text-sm font-semibold
          hover:bg-[var(--color-biz-bronze)] hover:text-white
          transition
        "
      >
        Export CSV
      </button>

<div className="relative w-full sm:w-48">
  <input
    value={searchTerm}
    placeholder="Search by name"
    onChange={(e) => setSearchTerm(e.target.value)}
    className="
      w-full
      rounded-xl bg-[var(--color-biz-cream)]
      px-4 py-2.5 pr-10
      text-sm
      outline-none
      focus:ring-1 focus:ring-[var(--color-biz-bronze-pale)]
    "
  />

  {searchTerm && (
    <button
      onClick={() => setSearchTerm("")}
      type="button"
      className="
        absolute right-3 top-1/2 -translate-y-1/2
        flex items-center justify-center
       cursor-pointer
       h-10 w-3
      "
      aria-label="Clear search"
    >
      ×
    </button>
  )}
</div>


      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="
          w-full sm:w-auto shrink-0
          rounded-xl bg-[var(--color-biz-cream)]
          px-4 py-2.5 text-sm font-medium
          hover:bg-[var(--color-biz-cream-dark)]
        "
      >
        <option value="All">All Countries</option>
        {[...new Set(rows.map(r => r.Country || r.country).filter(Boolean))]
          .map(c => <option key={c} value={c}>{c}</option>)}
      </select>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="
          w-full sm:w-auto shrink-0
          rounded-xl bg-[var(--color-biz-cream)]
          px-4 py-2.5 text-sm font-medium
          hover:bg-[var(--color-biz-cream-dark)]
        "
      >
        <option value="All">All Categories</option>
        {[...new Set(rows.map(r => r.Categories || r.category).filter(Boolean))]
          .map(c => <option key={c} value={c}>{c}</option>)}
      </select>
    </div>
  </div>

  {/* GROUPED TABLES */}
  <div className="space-y-12">
    {Object.entries(groupedRows).map(([groupName, groupData]) =>
      groupData.length > 0 && (
        <div key={groupName} className="space-y-5">

          {/* GROUP LABEL */}
          <div className="flex items-center gap-4">
            <span className="flex-1 h-px bg-[var(--color-biz-sand-muted)]" />
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-biz-charcoal-soft)]">
              {groupName === 'Recent'
                ? 'Last 24 Hours'
                : groupName === 'ThisWeek'
                ? 'Last 7 Days'
                : 'Older Records'}
            </h4>
            <span className="flex-1 h-px bg-[var(--color-biz-sand-muted)]" />
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto rounded-2xl bg-[var(--color-biz-cream-light)] shadow-sm">
            <table className="min-w-[1100px] w-full text-sm">
              <thead className="bg-[var(--color-biz-cream-dark)] text-[10px] uppercase tracking-wide">
                <tr>
                  {[
                    ['Timestamp','Timestamp'],
                    ['Candidate','name'],
                    ['Email','email'],
                    ['Contact','contact'],
                    ['Alt. Contact','alternate contact'],
                    ['Location','location'],
                    ['Country','country'],
                    ['Category','category'],
                    ['CV','CV Link']
                  ].map(([label,key]) => (
                    <th
                      key={label}
                      onClick={() => handleSort(key)}
                      className="px-6 py-4 text-left cursor-pointer whitespace-nowrap hover:text-[var(--color-biz-charcoal)]"
                    >
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-[var(--color-biz-sand)]">
                {groupData.map((row, i) => (
                  <tr key={i} className="hover:bg-[var(--color-biz-cream)]">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {row.Timestamp
                        ? format(new Date(row.Timestamp),'MMM dd, yyyy')
                        : '—'}
                    </td>

                    <td className="px-6 py-4 font-semibold whitespace-nowrap">
                      {row.name || row.Name}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      {row.email || row.Email}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      {row.contact || row.Contact}
                    </td>

                    <td className="px-6 py-4 italic text-gray-400 whitespace-nowrap">
                      {row['alternate contact'] || '—'}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      {row.location || row.Location}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      {row.country || row.Country}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="
                        inline-block rounded-full
                        bg-[var(--color-biz-bronze-pale)]
                        px-3 py-1 text-[10px] font-bold
                      ">
                        {row.category || row.Categories}
                      </span>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <a
                        href={row['CV Link'] || row.fileUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          inline-block rounded-lg
                          bg-[var(--color-biz-charcoal)]
                          px-4 py-2 text-[10px] font-bold text-white
                          hover:bg-[var(--color-biz-bronze)]
                        "
                      >
                        View CV
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    )}
  </div>

  {/* PAGINATION */}
  <div className="
  fixed bottom-4 left-1/2 -translate-x-1/2
  z-50
  w-[calc(100%-2rem)] max-w-7xl
  flex
  justify-between
  items-center
  px-6 py-3
  bg-[var(--color-biz-cream-light)]/90
  backdrop-blur-md
  rounded-2xl
  border border-[var(--color-biz-sand-muted)]
  shadow-[0_-6px_20px_rgba(0,0,0,0.12)]
">

    <div className="text-sm font-medium">
      Page <strong>{currentPage}</strong> of {totalPages || 1}
    </div>

    <div className="flex gap-3">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(p => p - 1)}
        className="px-5 py-2.5 rounded-xl border text-xs font-black disabled:opacity-40 hover:bg-black hover:text-white"
      >
        PREVIOUS
      </button>
      <button
        disabled={currentPage === totalPages || totalPages === 0}
        onClick={() => setCurrentPage(p => p + 1)}
        className="px-5 py-2.5 rounded-xl border text-xs font-black disabled:opacity-40 hover:bg-black hover:text-white"
      >
        NEXT
      </button>
    </div>
  </div>
</div>

  );
}