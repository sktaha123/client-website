import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= COUNTRIES (BROWSER DEPENDENT) ================= */
const getAllCountries = () => {
  if (typeof Intl.supportedValuesOf === "function") {
    try {
      const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
      return Intl.supportedValuesOf("region")
        .map((code) => ({ code, name: regionNames.of(code) }))
        .filter((c) => c.name)
        .sort((a, b) => a.name.localeCompare(b.name));
    } catch { /* fall through */ }
  }
  return [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
    "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
    "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada",
    "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
    "Congo (Democratic Republic of the)", "Congo (Republic of the)", "Costa Rica",
    "Croatia", "Cuba", "Cyprus", "Czech Republic", "Côte d'Ivoire", "Denmark",
    "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt",
    "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
    "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
    "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
    "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
    "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
    "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia",
    "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi",
    "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
    "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro",
    "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands",
    "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia",
    "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea",
    "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
    "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
    "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
    "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea",
    "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
    "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga",
    "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
    "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
    "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
    "Zimbabwe"
  ].map((name) => ({ code: name, name })).sort((a, b) => a.name.localeCompare(b.name));
};

const STATIC_COUNTRIES = getAllCountries();

// Apple's signature smooth ease curve
const appleEase = [0.16, 1, 0.3, 1];

/* ================= COMPONENT ================= */
const CV = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    altContact: "",
    City: "",
    country: "",
    category: "",
    otherCategory: "",
  });

  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const categories = [
    "Manufacturing",
    "Healthcare",
    "Technology",
    "Retail",
    "Real Estate",
    "Logistics",
    "Education",
    "Hospitality",
    "Banking & Finance",
    "Energy",
    "Aviation",
    "Construction",
    "Other",
  ];

  const countries = React.useMemo(() => STATIC_COUNTRIES, []);

  /* ---------------- PROGRESS ---------------- */
  const filledFields = Object.values(formData).filter(Boolean).length + (file ? 1 : 0);
  const progress = Math.min(100, Math.round((filledFields / 9) * 100));

  /* ---------------- FILE ---------------- */
  const handleFile = (selectedFile) => {
    setError("");

    if (!selectedFile) return;

    if (!/\.(pdf|doc)$/i.test(selectedFile.name)) {
      setError("Only PDF or DOC files are allowed.");
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      setError("CV size must be under 5MB.");
      return;
    }

    setFile(selectedFile);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!file) {
      setError("Please upload your CV.");
      return;
    }

    setLoading(true);

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const payload = {
        ...formData,
        category:
          formData.category === "Other"
            ? formData.otherCategory
            : formData.category,
        fileData: reader.result.split(",")[1],
        fileName: formData.name.replace(/\s+/g, "_"),
        mimeType: file.type,
      };

      try {
        await fetch(
          "https://script.google.com/macros/s/AKfycbwAfEvirqqAbDjiZL58jsowiLolBGUWy3J69ciIKqNWS8PU5EYxE2G7wlETuVj7UXrl/exec",
          {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          }
        );
        setSuccess(true);
      } catch {
        setError("Submission failed. Please try again.");
      } finally {
        setLoading(false);
      }
    };
  };

  /* ---------------- SHARED INPUT CLASSES ---------------- */
  const inputBaseClasses = "w-full bg-biz-charcoal/5 border border-transparent focus:bg-white focus:border-biz-bronze/40 focus:ring-4 focus:ring-biz-bronze/10 rounded-xl px-4 py-3.5 text-[15px] text-biz-charcoal-ink placeholder:text-biz-charcoal-soft/40 outline-none transition-all duration-300";
  const labelBaseClasses = "block text-[10px] font-bold text-biz-charcoal-soft/60 uppercase tracking-[0.15em] mb-2 pl-1";

  /* ================= RENDER ================= */
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-biz-cream font-dm py-20 px-6 selection:bg-biz-bronze selection:text-white">

      {/* ── Page Header ── */}
      <div className="w-full max-w-3xl mb-10 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: appleEase, duration: 0.6 }}
          className="text-[10px] font-bold uppercase tracking-[0.25em] text-biz-bronze mb-3"
        >
          Join Our Network
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: appleEase, duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-light text-biz-charcoal-ink leading-tight tracking-tight"
        >
          Submit Your CV
        </motion.h1>
      </div>

      {/* ── Main Form Card ── */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: appleEase, duration: 0.8, delay: 0.2 }}
        className="w-full max-w-3xl bg-white p-8 md:p-12 lg:p-16 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-biz-charcoal/5 relative overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {success ? (
            /* ---------- SUCCESS STATE ---------- */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: appleEase }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-biz-bronze/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-biz-bronze/20">
                <svg className="w-10 h-10 text-biz-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-medium text-biz-charcoal-ink tracking-tight mb-4">Application Received</h2>
              <p className="text-[16px] text-biz-charcoal-soft font-light leading-[1.8] max-w-md mx-auto mb-10">
                Thank you for trusting BiznorX. Our intelligent systems have received your profile and will start the matching process immediately.
              </p>
              <button
                onClick={() => { setSuccess(false); setFormData({name: "", email: "", contact: "", altContact: "", City: "", country: "", category: "", otherCategory: ""}); setFile(null); }}
                className="bg-biz-charcoal-ink text-white text-[14px] font-medium px-8 py-3.5 rounded-full hover:bg-biz-bronze transition-colors duration-300"
              >
                Submit Another Profile
              </button>
            </motion.div>
          ) : (
            /* ---------- FORM STATE ---------- */
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="flex flex-col gap-8 relative z-10"
            >
              
              {/* Form Header & Progress */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-biz-charcoal/5">
                <div>
                  <h3 className="text-xl font-medium text-biz-charcoal-ink tracking-tight mb-1">Your Profile</h3>
                  <p className="text-[14px] text-biz-charcoal-soft font-light">Join our network of global talent.</p>
                </div>
                <div className="flex flex-col items-start md:items-end w-full md:w-48">
                  <div className="flex justify-between w-full mb-2">
                    <span className="text-[10px] font-bold text-biz-charcoal-soft/60 uppercase tracking-widest">
                      Completion
                    </span>
                    <span className="text-[10px] font-bold text-biz-bronze font-mono">
                      {progress}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-biz-charcoal/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-biz-bronze rounded-full"
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.6, ease: appleEase }}
                    />
                  </div>
                </div>
              </div>

              {/* Grid Layout for Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                
                {/* Name */}
                <div>
                  <label className={labelBaseClasses}>Full Name</label>
                  <input
                    type="text" required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputBaseClasses}
                    placeholder="e.g. John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className={labelBaseClasses}>Email Address</label>
                  <input
                    type="email" required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputBaseClasses}
                    placeholder="e.g. john@example.com"
                  />
                </div>

                {/* Contact */}
                <div>
                  <label className={labelBaseClasses}>Contact Number</label>
                  <input
                    type="tel" required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value.replace(/[^\d+ ]/g, "") })}
                    className={inputBaseClasses}
                    placeholder="+91 9876543210"
                  />
                </div>

                {/* Alt Contact */}
                <div>
                  <label className={labelBaseClasses}>Alt. Contact (Optional)</label>
                  <input
                    type="tel"
                    value={formData.altContact}
                    onChange={(e) => setFormData({ ...formData, altContact: e.target.value.replace(/[^\d+ ]/g, "") })}
                    className={inputBaseClasses}
                    placeholder="+91 9876543210 (WhatsApp)"
                  />
                </div>

                {/* City */}
                <div>
                  <label className={labelBaseClasses}>City</label>
                  <input
                    type="text" required
                    value={formData.City}
                    onChange={(e) => setFormData({ ...formData, City: e.target.value })}
                    className={inputBaseClasses}
                    placeholder="Current City"
                  />
                </div>

                {/* Country Dropdown */}
                <div>
                  <label className={labelBaseClasses}>Country</label>
                  <div className="relative">
                    <select
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className={`${inputBaseClasses} appearance-none pr-10 cursor-pointer`}
                    >
                      <option value="" disabled>Select Country</option>
                      {countries.map((c) => (
                        <option key={c.code} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-biz-charcoal-soft/50">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>

                {/* Industry Dropdown */}
                <div className="md:col-span-2">
                  <label className={labelBaseClasses}>Industry Category</label>
                  <div className="relative">
                    <select
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className={`${inputBaseClasses} appearance-none pr-10 cursor-pointer`}
                    >
                      <option value="" disabled>Select Category</option>
                      {categories.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-biz-charcoal-soft/50">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>

                {/* Dynamic "Other" Industry Input */}
                <AnimatePresence>
                  {formData.category === "Other" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                      className="md:col-span-2 overflow-hidden"
                    >
                      <div className="pt-2">
                        <label className={labelBaseClasses}>Specify Category</label>
                        <input
                          type="text" required maxLength={40}
                          value={formData.otherCategory}
                          onChange={(e) => setFormData({ ...formData, otherCategory: e.target.value })}
                          className={inputBaseClasses}
                          placeholder="Please specify your industry"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ---------- CV UPLOAD AREA ---------- */}
              <div className="mt-2">
                <label className={labelBaseClasses}>Upload Resume (PDF/DOC)</label>
                <div
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                  className={`
                    relative group cursor-pointer
                    border border-dashed ${file ? "border-biz-bronze bg-biz-bronze/5" : "border-biz-charcoal/20 bg-biz-charcoal/5 hover:border-biz-bronze/50 hover:bg-biz-bronze/5"}
                    rounded-2xl p-8 md:p-12
                    text-center transition-all duration-300
                  `}
                >
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleFile(e.target.files[0])}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />

                  <div className="flex flex-col items-center gap-4">
                    {file ? (
                      <>
                        <div className="w-12 h-12 bg-white text-biz-bronze rounded-full flex items-center justify-center shadow-sm border border-biz-bronze/20">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-[15px] text-biz-charcoal-ink">{file.name}</p>
                          <span className="text-[12px] text-biz-charcoal-soft font-mono">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-12 h-12 bg-white text-biz-charcoal-soft/50 group-hover:text-biz-bronze rounded-full flex items-center justify-center shadow-sm border border-biz-charcoal/10 group-hover:border-biz-bronze/20 transition-all duration-300">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-[15px] text-biz-charcoal-ink">Click to Upload or Drag & Drop</p>
                          <span className="text-[13px] text-biz-charcoal-soft font-light">PDF or DOC files only (Max 5MB)</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* ---------- ERROR MESSAGE ---------- */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="text-[13px] font-medium text-red-600 bg-red-50 border border-red-100 p-4 rounded-xl flex items-center gap-3">
                      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {error}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ---------- SUBMIT BUTTON ---------- */}
              <button
                disabled={loading}
                className="w-full bg-biz-charcoal-ink text-white font-medium text-[15px] py-4 rounded-xl hover:bg-biz-bronze active:scale-[0.98] transition-all duration-300 flex justify-center items-center gap-3 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Securely Submitting...</span>
                  </>
                ) : (
                  <span>Submit Application</span>
                )}
              </button>

            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default CV;