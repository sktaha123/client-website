import React, { useState } from "react";
import { motion } from "framer-motion";


const CV = () => {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

   const [formData, setFormData] = useState({
  name: "",
  email: "",
  contact: "",
  altContact: "",
  category: "",
  customCategory: "", // ✅ NEW
  location: "",
  cvFile: null,
});


    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "cvFile") {
            setFormData({ ...formData, cvFile: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.cvFile) {
            setStatus("Please upload your CV.");
            return;
        }

        setLoading(true);
        setStatus("");

        try {
            const reader = new FileReader();

            reader.onload = async () => {
                const base64File = reader.result.split(",")[1];

                const payload = {
                    name: formData.name,
                    email: formData.email,
                    contact: formData.contact,
                    altContact: formData.altContact,
                    category: formData.category,
                    location: formData.location,
                    cvName: formData.cvFile.name,
                    cvType: formData.cvFile.type,
                    cvFile: base64File,
                };

                const controller = new AbortController();
                setTimeout(() => controller.abort(), 15000); // 15s timeout

                const response = await fetch(
                    "https://script.google.com/macros/s/AKfycby_PvdHv2eMYZfrD79METs_JCkJu9AT3fQIUy4lbJT4oFAXK3y42g13YrGXT-AcerCg9g/exec",
                    {
                        method: "POST",
                        body: JSON.stringify(payload),
                        signal: controller.signal,
                    }
                );


                const result = await response.json();

                if (result.success) {
                    setStatus("CV submitted successfully.");
                    setFormData({
                        name: "",
                        email: "",
                        contact: "",
                        altContact: "",
                        category: "",
                        location: "",
                        cvFile: null,
                    });
                } else {
                    setStatus("Submission failed. Please try again.");
                }

                setLoading(false);
            };

            reader.readAsDataURL(formData.cvFile);
        } catch (error) {
            setLoading(false);
            setStatus("Something went wrong. Please try again.");
        }
    };

    return (
        <motion.div
  initial={{ opacity: 0, y: 48 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.6,
    ease: [0.215, 0.61, 0.355, 1],
  }}
  viewport={{ once: true, margin: "-80px" }}
  >
       <form
  onSubmit={handleSubmit}
  className="
    max-w-3xl mx-auto
    p-10 md:p-12
    bg-white
    rounded-[2.5rem]
    shadow-[0_40px_80px_rgba(0,0,0,0.08)]
    space-y-8
  "
>
  {/* Header */}
  <div className="text-center space-y-3">
    <span className="text-xs font-bold tracking-[0.35em] uppercase text-gray-500">
      Career Application
    </span>
    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
      Upload Your CV
    </h2>
    <p className="text-gray-500 text-sm max-w-md mx-auto">
      Share your details and resume. Our team will review your profile carefully.
    </p>
  </div>

  {/* Grid Inputs */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <input
      type="text"
      name="name"
      placeholder="Full Name"
      value={formData.name}
      onChange={handleChange}
      required
      className="input-field"
    />

    <input
      type="email"
      name="email"
      placeholder="Email Address"
      value={formData.email}
      onChange={handleChange}
      required
      className="input-field"
    />

    <input
      type="tel"
      name="contact"
      placeholder="Contact Number"
      value={formData.contact}
      onChange={handleChange}
      required
      className="input-field"
    />

    <input
      type="tel"
      name="altContact"
      placeholder="Alternate Contact (optional)"
      value={formData.altContact}
      onChange={handleChange}
      className="input-field"
    />
  </div>

  {/* Category */}
 <select
  name="category"
  value={formData.category}
  onChange={handleChange}
  required
  className="input-field"
>
  <option value="">Select Category</option>
  <option value="Developer">Developer</option>
  <option value="Designer">Designer</option>
  <option value="Marketing">Marketing</option>
  <option value="Operations">Operations</option>
  <option value="Other">Other</option>
</select>

{formData.category === "Other" && (
  <input
    type="text"
    name="customCategory"
    placeholder="Enter your category"
    value={formData.customCategory}
    onChange={handleChange}
    required
    className="input-field"
  />
)}


  {/* Location */}
  <input
    type="text"
    name="location"
    placeholder="Place of Living"
    value={formData.location}
    onChange={handleChange}
    required
    className="input-field"
  />

  {/* File Upload */}
  <div className="space-y-2">
    <label className="block text-sm font-semibold text-gray-700">
      Upload CV (PDF / DOC)
    </label>
    <label className="inline-flex items-center gap-2 text-xs font-medium text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
  <span className="text-gray-400">Format:</span>
  <span className="font-semibold text-biz-bronze">Name_Category.pdf</span>
</label>

    <input
      type="file"
      name="cvFile"
      accept=".pdf,.doc,.docx"
      onChange={handleChange}
      required
      className="
        w-full
        text-sm
        file:mr-4
        file:py-3
        file:px-6
        file:rounded-full
        file:border-0
        file:bg-black
        file:text-white
        file:font-bold
        hover:file:opacity-90
        cursor-pointer
      "
    />
    <p className="text-xs text-gray-400">
      Max file size: 2MB
    </p>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    disabled={loading}
    className="
      group
      relative
      w-full
      py-4
      rounded-full
      bg-black
      text-white
      font-bold
      tracking-wide
      transition-all
      hover:opacity-90
      disabled:opacity-50
      disabled:cursor-not-allowed
    "
  >
    {loading ? "Submitting..." : "Submit CV"}
  </button>

  {/* Status Message */}
  {status && (
    <p className="text-center text-sm text-gray-600 pt-2">
      {status}
    </p>
  )}
</form>
</motion.div>

    );
};

export default CV;
