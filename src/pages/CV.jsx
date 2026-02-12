import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= COUNTRIES (BROWSER DEPENDENT) ================= */
const getAllCountries = () => {
  // Modern browsers (Chrome 120+, Edge, Firefox 120+)
  if (typeof Intl.supportedValuesOf === "function") {
    try {
      const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

      return Intl.supportedValuesOf("region")
        .map((code) => ({
          code,
          name: regionNames.of(code),
        }))
        .filter((c) => c.name)
        .sort((a, b) => a.name.localeCompare(b.name));
    } catch {
      // fall through to fallback
    }
  }

  // ---------- FALLBACK (ALL COUNTRIES, NO DEPENDENCY) ----------
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
  ]
    .map((name) => ({ code: name, name }))
    .sort((a, b) => a.name.localeCompare(b.name));
};


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

  const countries = getAllCountries();

  /* ---------------- PROGRESS ---------------- */
  const filledFields =
    Object.values(formData).filter(Boolean).length + (file ? 1 : 0);
  const progress = Math.min(100, Math.round((filledFields / 9) * 100));

  /* ---------------- FILE ---------------- */
  const handleFile = (selectedFile) => {
    setError("");

    if (!selectedFile) return;

    if (!/(\.pdf|\.doc)$/i.test(selectedFile.name)) {
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

  /* ================= RENDER ================= */
  return (
    <section className="min-h-screen max-w-[90rem]  mx-auto rounded-4xl flex flex-col lg:flex-row bg-biz-cream font-dm overflow-hidden">

      {/* ================= LEFT PANEL (VISUAL & CONTEXT) ================= */}
      <div className="lg:w-[45%] bg-biz-charcoal relative flex flex-col justify-center p-8 lg:p-16 text-biz-cream-light overflow-hidden">
        {/* Background Visuals */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-biz-bronze/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-biz-bronze/10 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="w-12 h-1 bg-biz-bronze mb-8"></div>
          <h1 className="text-4xl lg:text-6xl font-light tracking-tight mb-6 leading-[1.1]">
            Shape Your <br />
            <span className="font-bold text-biz-bronze">Career Path</span>
          </h1>
          <p className="text-biz-sand text-lg mb-12 max-w-md leading-relaxed">
            Join a network where ambition meets opportunity. We leverage AI-driven insights to match your skills with global organizations.
          </p>

          <div className="space-y-6">
            {[
              { title: "Global Opportunities", desc: "Access roles across India & UAE." },
              { title: "AI-Matching", desc: "Get matched based on skills, not just keywords." },
              { title: "Confidentiality", desc: "Your profile is secure and shared only with intent." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (idx * 0.1) }}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <div className="w-2 h-2 bg-biz-bronze rounded-full" />
                </div>
                <div>
                  <h3 className="text-biz-cream-light font-medium">{item.title}</h3>
                  <p className="text-sm text-biz-charcoal-soft">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ================= RIGHT PANEL (FORM) ================= */}
      <div className="lg:w-[55%] flex items-center justify-center p-6 lg:p-12 relative">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            {success ? (
              /* ---------- SUCCESS ---------- */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center bg-white p-12 rounded-[2rem] border border-biz-bronze/10 shadow-xl"
              >
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-biz-charcoal mb-4">Application Received</h2>
                <p className="text-biz-charcoal-muted max-w-md mx-auto">
                  Thank you for trusting BiznorX. Our intelligent systems have received your profile and will start the matching process immediately.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-8 text-sm font-bold text-biz-bronze uppercase tracking-widest hover:text-biz-charcoal transition-colors"
                >
                  Submit Another
                </button>
              </motion.div>
            ) : (
              /* ---------- FORM ---------- */
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-6"
              >
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-bold text-biz-charcoal">Submit Your CV</h2>
                  <div className="flex flex-col items-end">
                    <span className="text-xs font-bold text-biz-bronze uppercase tracking-wider mb-1">
                      Completion {progress}%
                    </span>
                    <div className="w-32 h-1.5 bg-biz-sand rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-biz-bronze"
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Grid Layout for Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    ["Full Name", "name", true],
                    ["Email Function", "email", true, "email"],
                  ].map(([placeholder, key, required, type = "text"]) => (
                    <div key={key} className="space-y-1">
                      <label className="text-xs font-bold text-biz-charcoal-muted ml-1 uppercase">{placeholder}</label>
                      <input
                        type={type}
                        required={required}
                        value={formData[key]}
                        onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                        className="biz-input"
                        placeholder={placeholder === "Full Name" ? "e.g. John Doe" : "e.g. john@example.com"}
                      />
                    </div>
                  ))}

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-biz-charcoal-muted ml-1 uppercase">Contact Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.contact}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contact: e.target.value.replace(/[^\d+ ]/g, ""),
                        })
                      }
                      className="biz-input"
                      placeholder="+91 9876543210"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-biz-charcoal-muted ml-1 uppercase">City</label>
                    <input
                      type="text"
                      required
                      value={formData.City}
                      onChange={(e) => setFormData({ ...formData, City: e.target.value })}
                      className="biz-input"
                      placeholder="Current City"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-biz-charcoal-muted ml-1 uppercase">Country</label>
                    <select
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="biz-input appearance-none bg-white"
                    >
                      <option value="">Select Country</option>
                      {countries.map((c) => (
                        <option key={c.code} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-biz-charcoal-muted ml-1 uppercase">Industry Category</label>
                    <select
                      required
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="biz-input appearance-none bg-white"
                    >
                      <option value="">Select Category</option>
                      {categories.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Full Width Inputs */}
                {formData.category === "Other" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="space-y-1"
                  >
                    <label className="text-xs font-bold text-biz-charcoal-muted ml-1 uppercase">Specify Category</label>
                    <input
                      placeholder="Please specify your industry"
                      maxLength={40}
                      required
                      onChange={(e) => setFormData({ ...formData, otherCategory: e.target.value })}
                      className="biz-input"
                    />
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-biz-charcoal-muted ml-1 uppercase">Alt. Contact (Optional)</label>
                    <input
                      type="tel"
                      value={formData.altContact}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          altContact: e.target.value.replace(/[^\d+ ]/g, ""),
                        })
                      }
                      className="biz-input"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  {/* Placeholder for symmetry if needed, or expand Alt Contact */}
                </div>


                {/* ---------- CV UPLOAD AREA ---------- */}
                <div className="space-y-2 mt-2">
                  <label className="text-xs font-bold text-biz-charcoal-muted ml-1 uppercase">Upload Resume (PDF/DOC)</label>
                  <div
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    className={`
                      relative group cursor-pointer
                      border-2 border-dashed ${file ? "border-biz-bronze bg-biz-bronze/5" : "border-biz-sand-muted hover:border-biz-bronze"}
                      rounded-xl p-8
                      text-center transition-all duration-300
                    `}
                  >
                    <input
                      type="file"
                      accept=".pdf,.doc"
                      onChange={(e) => handleFile(e.target.files[0])}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />

                    <div className="flex flex-col items-center gap-3">
                      {file ? (
                        <>
                          <div className="w-12 h-12 bg-biz-bronze text-white rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-bold text-biz-charcoal">{file.name}</p>
                            <span className="text-xs text-biz-charcoal-muted">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-12 h-12 bg-biz-cream-dark text-biz-charcoal-muted group-hover:bg-biz-bronze group-hover:text-white rounded-full flex items-center justify-center transition-colors">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-biz-charcoal">Click to Upload or Drag & Drop</p>
                            <span className="text-xs text-biz-charcoal-muted">Max 5MB</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* ---------- ERROR MESSAGE ---------- */}
                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-sm font-medium text-red-600 bg-red-50 p-3 rounded-lg flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* ---------- SUBMIT BUTTON ---------- */}
                <button
                  disabled={loading}
                  className="
                    w-full py-4 rounded-4xl
                    bg-biz-charcoal
                    text-white
                    font-bold tracking-widest uppercase text-sm
                    hover:bg-biz-bronze hover:shadow-lg hover:-translate-y-1
                    active:translate-y-0
                    transition-all duration-300
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    flex items-center justify-center gap-2
                  "
                >
                  {loading && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                  {loading ? "Processing..." : "Submit Application"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CV;
