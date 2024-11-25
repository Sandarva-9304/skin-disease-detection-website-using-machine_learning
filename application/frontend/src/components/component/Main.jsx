"use client"; // Add this line

import { useState, useRef, useEffect } from "react";
import Hero from "./Hero";
import ImageUpload from "./ImageUpload";
import CommonDiseases from "./CommonDiseases";
import Contact from "./Contact";
import Diagnosis from "./Diagnosis";

function Main() {
  const [diagnosis, setDiagnosis] = useState(null);
  const [loading, setLoading] = useState(false);
  const diagnosisRef = useRef(null); // Ref for smooth scroll

  // Scroll to Diagnosis when diagnosis is ready
  useEffect(() => {
    if (diagnosis && diagnosisRef.current) {
      diagnosisRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [diagnosis]); // Trigger effect when diagnosis is updated

  const handleUploadComplete = (result) => {
    setLoading(true); // Start loading when the upload completes

    setTimeout(() => {
      setDiagnosis(result); // Set the diagnosis result
      setLoading(false); // Stop loading
    }, 2000); // Simulate a delay (adjust this as needed)
  };

  const clearDiagnosis = () => {
    setDiagnosis(null); // Clear the previous diagnosis result
  };

  return (
    <main className="flex-1">
      <Hero />
      <ImageUpload
        onUploadComplete={handleUploadComplete}
        clearDiagnosis={clearDiagnosis}
      />

      {/* Show loader while fetching diagnosis */}
      {loading && (
        <div className="flex items-center justify-center py-5 bg-[#808D7C]">
          <div className="loader"></div>
          {/* Add a spinner or loading animation */}
        </div>
      )}

      {/* Diagnosis component */}
      {diagnosis && (
        <div ref={diagnosisRef}>
          <Diagnosis diagnosis={diagnosis} />
        </div>
      )}

      <CommonDiseases />
      <Contact />
    </main>
  );
}

export default Main;
