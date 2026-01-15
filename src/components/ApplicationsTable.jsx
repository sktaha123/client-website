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

  /* ---------------- 1. QUICK STATS LOGIC ---------------- */
  const stats = useMemo(() => {
    const todayCount = rows.filter(r => r.Timestamp && isToday(new Date(r.Timestamp))).length;
    const uniqueCountries = new Set(rows.map(r => r.Country || r.country).filter(Boolean)).size;
    const catCounts = rows.reduce((acc, r) => {
      const c = r.Categories || r.category || "Unknown";
      acc[c] = (acc[c] || 0) + 1;
      return acc;
    }, {});
    const topCat = Object.entries(catCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "None";
    return { todayCount, uniqueCountries, topCat };
  }, [rows]);

  /* ---------------- 2. MULTI-COLUMN SORTING & FILTERING ---------------- */
  const handleSort = (key) => {
    setSortConfig(prev => ({
      key, direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

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

  /* ---------------- 3. TIME-BASED GROUPING ---------------- */
  const groupedRows = useMemo(() => {
    const now = new Date();
    return processedRows.reduce((acc, row) => {
      const date = new Date(row.Timestamp);
      if (isWithinInterval(date, { start: subDays(now, 1), end: now })) acc.Recent.push(row);
      else if (isWithinInterval(date, { start: subDays(now, 7), end: now })) acc.ThisWeek.push(row);
      else acc.Older.push(row);
      return acc;
    }, { Recent: [], ThisWeek: [], Older: [] });
  }, [processedRows]);

  if (loading) return <div className="p-10 text-center text-gray-400">Loading ATS Dashboard...</div>;


  const downloadCSV = () => {
    if (!rows || rows.length === 0) return;

    const headers = Object.keys(rows[0]);

    const csvContent = [
      headers.join(","), // header row
      ...rows.map(row =>
        headers
          .map(h => `"${(row[h] ?? "").toString().replace(/"/g, '""')}"`)
          .join(",")
      )
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "applications.csv");
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };


  return (
    <div className="
  w-full min-h-screen space-y-10
  bg-[var(--color-biz-cream)]
  p-6
">

      {/* SEARCH & FILTERS */}
      {/* SEARCH & FILTERS + SUMMARY */}
      <div
        className="
    flex flex-wrap items-center justify-between gap-6
    rounded-2xl
    bg-[var(--color-biz-cream-light)]
    px-8 py-6
    shadow-sm
  "
      >
        {/* LEFT: Title + Total Count */}
        <div className="flex items-center gap-6">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-[var(--color-biz-charcoal)]">
              Applications
            </h3>
            <p className="mt-0.5 text-sm text-[var(--color-biz-charcoal-soft)]">
              Total applications received
            </p>
          </div>

          {/* TOTAL APPLICATIONS BADGE */}
          <div
            className="
        flex flex-col items-center justify-center
         shrink-0 
        bg-[var(--color-biz-bronze-pale)]
        px-2 py-1
        rounded-full
      "
          >
            
            <span className="text-lg font-bold text-[var(--color-biz-bronze-dark)]">
              {rows.length}
            </span>
          </div>
        </div>

        {/* RIGHT: Actions + Filters */}
        <div className="flex flex-wrap items-center gap-3">
          {/* EXPORT CSV */}
          <button
            onClick={downloadCSV}
            className="
        inline-flex items-center
        rounded-xl
        border border-[var(--color-biz-sand-muted)]
        bg-[var(--color-biz-cream)]
        px-4 py-2.5
        text-sm font-semibold
        text-[var(--color-biz-charcoal)]
        transition
        hover:bg-[var(--color-biz-bronze)]
        hover:text-[var(--color-biz-cream-light)]
      "
          >
            Export CSV
          </button>

          {/* SEARCH */}
          <input
            placeholder="Search by name"
            className="
        w-48
        rounded-xl
        bg-[var(--color-biz-cream)]
        px-4 py-2.5
        text-sm
        text-[var(--color-biz-charcoal)]
        placeholder:text-[var(--color-biz-charcoal-soft)]
        outline-none
        transition
        focus:ring-1
        focus:ring-[var(--color-biz-bronze-pale)]
      "
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* COUNTRY FILTER */}
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="
        rounded-xl
        bg-[var(--color-biz-cream)]
        px-4 py-2.5
        text-sm font-medium
        text-[var(--color-biz-charcoal)]
        outline-none
        transition
        hover:bg-[var(--color-biz-cream-dark)]
      "
          >
            <option value="All">All Countries</option>
            {[...new Set(rows.map(r => r.Country || r.country).filter(Boolean))]
              .map(c => <option key={c} value={c}>{c}</option>)}
          </select>

          {/* CATEGORY FILTER */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="
        rounded-xl
        bg-[var(--color-biz-cream)]
        px-4 py-2.5
        text-sm font-medium
        text-[var(--color-biz-charcoal)]
        outline-none
        transition
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
      <div className="space-y-14">
        {Object.entries(groupedRows).map(([groupName, groupData]) =>
          groupData.length > 0 && (
            <div key={groupName} className="space-y-6">

              {/* SECTION DIVIDER */}
              <div className="flex items-center gap-4">
                <span className="h-px flex-1 bg-[var(--color-biz-sand-muted)]" />
                <h4 className="
              text-[10px] font-black uppercase tracking-[0.25em]
              text-[var(--color-biz-charcoal-soft)]
            ">
                  {groupName === 'Recent'
                    ? 'Last 24 Hours'
                    : groupName === 'ThisWeek'
                      ? 'Last 7 Days'
                      : 'Older Records'}
                </h4>
                <span className="h-px flex-1 bg-[var(--color-biz-sand-muted)]" />
              </div>

              {/* TABLE */}
              <div className="
            overflow-x-auto
            rounded-2xl
            bg-[var(--color-biz-cream-light)]
            shadow-sm
          ">
                <table className="w-full text-sm">
                  <thead className="
                bg-[var(--color-biz-cream-dark)]
                text-[10px] uppercase tracking-wide
                text-[var(--color-biz-charcoal-soft)]
              ">
                    <tr>
                      {[
                        ['Timestamp', 'Timestamp'],
                        ['Candidate', 'name'],
                        ['Email', 'email'],
                        ['Contact', 'contact'],
                        ['Alt. Contact', 'alternate contact'],
                        ['Location', 'location'],
                        ['Country', 'country'],
                        ['Category', 'category'],
                        ['CV', 'CV Link'],
                      ].map(([label, key]) => (
                        <th
                          key={label}
                          onClick={() => handleSort(key)}
                          className="
                        px-6 py-4 text-left
                        cursor-pointer
                        transition
                        hover:text-[var(--color-biz-charcoal)]
                      "
                        >
                          <div className="flex items-center gap-1">
                            {label}
                            <span className="text-[var(--color-biz-charcoal-soft)]">
                              {sortConfig.key === key
                                ? sortConfig.direction === 'asc'
                                  ? '↑'
                                  : '↓'
                                : '↕'}
                            </span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-[var(--color-biz-sand)]">
                    {groupData.map((row, i) => {
                      const isNew =
                        row.Timestamp &&
                        isWithinInterval(new Date(row.Timestamp), {
                          start: subDays(new Date(), 0.5),
                          end: new Date(),
                        });

                      const isInternational =
                        (row.Country || row.country) !== 'United Arab Emirates';

                      const isIncomplete = !row.contact && !row.location;

                      return (
                        <tr
                          key={i}
                          className="transition hover:bg-[var(--color-biz-cream)]"
                        >
                          <td className="px-6 py-4">
                            <div className="font-medium text-[var(--color-biz-charcoal)]">
                              {row.Timestamp
                                ? format(new Date(row.Timestamp), 'MMM dd, yyyy')
                                : '—'}
                            </div>
                            <div className="text-[10px] text-[var(--color-biz-charcoal-soft)]">
                              {row.Timestamp
                                ? formatDistanceToNow(new Date(row.Timestamp), {
                                  addSuffix: true,
                                })
                                : ''}
                            </div>
                          </td>

                          <td className="px-6 py-4 font-semibold text-[var(--color-biz-charcoal)]">
                            <div className="flex items-center gap-2">
                              {row.name || row.Name}
                              {isNew && (
                                <span className="
                              rounded-sm
                              bg-green-500
                              px-1.5 py-0.5
                              text-[8px] font-black
                              text-[var(--color-biz-cream-light)]
                            ">
                                  NEW
                                </span>
                              )}
                            </div>
                          </td>

                          <td className="px-6 py-4 text-[var(--color-biz-charcoal-muted)]">
                            {row.email || row.Email}
                          </td>

                          <td className="px-6 py-4 text-[var(--color-biz-charcoal)]">
                            {row.contact || row.Contact}
                          </td>

                          <td className="px-6 py-4 italic text-[var(--color-biz-charcoal-soft)]">
                            {row['alternate contact'] ||
                              row['Alternate Contact'] ||
                              '—'}
                          </td>

                          <td className="px-6 py-4">
                            {isIncomplete ? (
                              <span className="italic text-[var(--color-biz-bronze-light)]">
                                Missing Info
                              </span>
                            ) : (
                              <span className="text-[var(--color-biz-charcoal-muted)]">
                                {row.location || row.Location}
                              </span>
                            )}
                          </td>

                          <td className="px-6 py-4">
                            <span
                              className={
                                isInternational
                                  ? 'font-semibold text-[var(--color-biz-bronze)]'
                                  : 'text-[var(--color-biz-charcoal-muted)]'
                              }
                            >
                              {row.country || row.Country}
                            </span>
                          </td>

                          <td className="px-6 py-4">
                            <span className="
                          rounded-full
                          bg-[var(--color-biz-bronze-pale)]
                          px-3 py-1
                          text-[10px] font-bold uppercase
                          text-[var(--color-biz-bronze-dark)]
                        ">
                              {row.category || row.Categories}
                            </span>
                          </td>

                          <td className="px-6 py-4">
                            {(row['CV Link'] ||
                              row.fileUrl ||
                              row.cv ||
                              row.CV ||
                              row.FileUrl) ? (
                              <a
                                href={
                                  row['CV Link'] ||
                                  row.fileUrl ||
                                  row.cv ||
                                  row.CV ||
                                  row.FileUrl
                                }
                                target="_blank"
                                rel="noreferrer"
                                className="
                              inline-flex items-center
                              rounded-lg
                              bg-[var(--color-biz-charcoal)]
                              px-3 py-1.5
                              text-[10px] font-bold
                              text-[var(--color-biz-cream-light)]
                              transition
                              hover:bg-[var(--color-biz-bronze)]
                            "
                              >
                                View CV
                              </a>
                            ) : (
                              <span className="text-[var(--color-biz-charcoal-soft)] text-[10px]">
                                No File
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )
        )}
      </div>
    </div>

  );
}