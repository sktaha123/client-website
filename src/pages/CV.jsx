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
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia",
    "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
    "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Botswana", "Brazil",
    "Bulgaria", "Cambodia", "Cameroon", "Canada", "Chile", "China", "Colombia", "Costa Rica",
    "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Estonia", "Ethiopia", "Finland", "France",
    "Georgia", "Germany", "Ghana", "Greece", "Guatemala", "Haiti", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica",
    "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Laos", "Latvia", "Lebanon", "Liberia",
    "Lithuania", "Luxembourg", "Malaysia", "Maldives", "Mexico", "Mongolia", "Morocco",
    "Myanmar", "Nepal", "Netherlands", "New Zealand", "Nigeria", "North Korea", "Norway",
    "Oman", "Pakistan", "Panama", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
    "Romania", "Russia", "Saudi Arabia", "Singapore", "Slovakia", "Slovenia",
    "South Africa", "South Korea", "Spain", "Sri Lanka", "Sweden", "Switzerland",
    "Syria", "Taiwan", "Thailand", "Turkey", "Ukraine", "United Arab Emirates",
    "United Kingdom", "United States", "Vietnam", "Yemen", "Zambia", "Zimbabwe",
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
    <section className="min-h-[90vh] flex items-center justify-center bg-biz-cream px-6 font-dm">
      <AnimatePresence mode="wait">
        {success ? (
          /* ---------- SUCCESS ---------- */
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            className="
              text-center
              bg-biz-cream-light
              p-12
              rounded-[2rem]
              border border-biz-bronze/15
              shadow-[0_30px_90px_rgba(0,0,0,0.06)]
            "
          >
            <h2 className="text-3xl font-light text-biz-charcoal-ink mb-4">
              Application Received
            </h2>
            <p className="text-biz-charcoal-soft">
              Our ATS has successfully processed your profile.
            </p>
          </motion.div>
        ) : (
          /* ---------- FORM ---------- */
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              w-full max-w-[520px]
              bg-biz-cream-light
              p-8 md:p-10
              rounded-[2rem]
              border border-biz-bronze/15
              shadow-[0_40px_120px_rgba(0,0,0,0.08)]
              flex flex-col gap-4
            "
          >
            {/* ---------- PROGRESS ---------- */}
            <div className="mb-2">
              <div className="flex justify-between text-[10px] text-biz-charcoal-soft mb-1">
                <span>Profile Completion</span>
                <span>{progress}%</span>
              </div>
              <div className="h-1 bg-biz-sand rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-biz-bronze"
                  animate={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* ---------- INPUTS ---------- */}
            {/* ---------- BASIC INPUTS ---------- */}
            {/* ---------- BASIC INPUTS ---------- */}
            {[
              ["Name", "name", true],
              ["Email", "email", true, "email"],
              ["City", "City", true],
            ].map(([placeholder, key, required, type = "text"]) => (
              <input
                key={key}
                type={type}
                placeholder={placeholder}
                required={required}
                value={formData[key]}
                onChange={(e) =>
                  setFormData({ ...formData, [key]: e.target.value })
                }
                className="biz-input"
              />
            ))}



            <select
              required
              value={formData.country}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
              className="biz-input appearance-none"
            >
              <option value="">Select Country</option>
              {countries.map((c) => (
                <option key={c.code} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>


            {/* ---------- CATEGORY ---------- */}
            <select
              required
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className="biz-input appearance-none"
            >
              <option value="">Select Category</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {/* ---------- CONTACT ---------- */}
            <input
              type="tel"
              placeholder="Contact (e.g. +91 9876543210)"
              required
              value={formData.contact}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  contact: e.target.value.replace(/[^\d+ ]/g, ""),
                })
              }
              className="biz-input"
              inputMode="tel"
              pattern="^\+?[0-9 ]{7,15}$"
            />

            {/* ---------- ALTERNATE CONTACT ---------- */}
            <input
              type="tel"
              placeholder="Alternate Contact (optional)"
              value={formData.altContact}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  altContact: e.target.value.replace(/[^\d+ ]/g, ""),
                })
              }
              className="biz-input"
              inputMode="tel"
              pattern="^\+?[0-9 ]{7,15}$"
            />



            {/* ---------- COUNTRY (ALL COUNTRIES) ---------- */}


            {formData.category === "Other" && (
              <input
                placeholder="Please specify"
                maxLength={40}
                required
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    otherCategory: e.target.value,
                  })
                }
                className="biz-input"
              />
            )}

            {/* ---------- CV UPLOAD ---------- */}
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              className="
                border-2 border-dashed border-biz-bronze/30
                rounded-xl p-6
                text-center
                text-biz-charcoal-soft
                bg-biz-cream
                transition-all duration-300
                hover:border-biz-bronze
                hover:bg-biz-cream-dark
              "
            >
              {file ? (
                <p className="font-medium text-biz-charcoal-ink">
                  {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </p>
              ) : (
                <p>Drag & drop CV here or click below</p>
              )}

              <input
                type="file"
                accept=".pdf,.doc"
                onChange={(e) => handleFile(e.target.files[0])}
                className="
                  mt-3 text-sm
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full
                  file:border-0
                  file:bg-biz-bronze
                  file:text-white
                  file:font-medium
                  hover:file:bg-biz-bronze-dark
                  transition
                "
              />
            </div>

            {/* ---------- ERROR ---------- */}
            {error && <p className="text-sm text-red-600">{error}</p>}

            {/* ---------- SUBMIT ---------- */}
            <button
              disabled={loading}
              className="
                mt-4 py-3 rounded-full
                bg-biz-charcoal-ink
                text-biz-cream-light
                font-semibold tracking-wide
                hover:bg-biz-bronze
                transition-all duration-300
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {loading ? "Submitting..." : "Submit CV"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CV;
