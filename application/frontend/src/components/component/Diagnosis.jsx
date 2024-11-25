import React from "react";
import { Card } from "../ui/card";

function Diagnosis({ diagnosis }) {
  if (!diagnosis) return null; // Render nothing if no diagnosis is available

  const { disease, confidence } = diagnosis;

  return (
    <section
      id="diagnosis"
      className="mx-auto px-6 py-12 border-2 bg-[#808D7C]"
    >
      <h2 className="text-2xl text-white font-bold mb-4">Our Diagnosis</h2>
      <p className="text-white mb-6">
        Based on the information you provided, here are the results.
      </p>
      <Card className="p-6">
        <div className="grid gap-4">
          <div>
            <h3 className="text-lg font-bold">Potential Diagnosis</h3>
            <p className="font-bold text-red-500 text-2xl">{disease}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Confidence Level</h3>
            <div className="flex items-center gap-2">
              <div className="w-full bg-muted rounded-full h-2.5">
                <div
                  className="bg-primary h-2.5 rounded-full"
                  style={{ width: `${confidence}%` }}
                />
              </div>
              <span>{confidence}%</span>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

export default Diagnosis;
