"use client";

import { Check, X } from "lucide-react";

const rows = [
  {
    feature: "Job Applications",
    usa: "150",
    ukGraduate: "150",
    ukProfessional: "300",
    australia: "150",
  },
  {
    feature: "ATS Resume Optimization",
    usa: true,
    ukGraduate: true,
    ukProfessional: true,
    australia: true,
  },
  {
    feature: "Cover Letter Assistance",
    usa: true,
    ukGraduate: true,
    ukProfessional: true,
    australia: true,
  },
  {
    feature: "LinkedIn Profile Review",
    usa: true,
    ukGraduate: false,
    ukProfessional: true,
    australia: false,
  },
  {
    feature: "Priority Job Matching",
    usa: false,
    ukGraduate: true,
    ukProfessional: true,
    australia: true,
  },
  {
    feature: "Dedicated Recruiter",
    usa: false,
    ukGraduate: false,
    ukProfessional: true,
    australia: false,
  },
  {
    feature: "Interview Preparation",
    usa: true,
    ukGraduate: true,
    ukProfessional: true,
    australia: true,
  },
  {
    feature: "Verified Employers",
    usa: true,
    ukGraduate: true,
    ukProfessional: true,
    australia: true,
  },
];

const Cell = ({ value }: { value: string | boolean }) => {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto text-green-500" size={22} />
    ) : (
      <X className="mx-auto text-red-400" size={22} />
    );
  }

  return (
    <span className="font-semibold text-[#0F2D6B]">
      {value}
    </span>
  );
};

export default function PlanComparison() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Compare Plans
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#0F2D6B]">
            Compare Every Package
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            Compare all ApplyOrbitA plans and choose the one that
            best fits your career goals.
          </p>

        </div>

        <div className="overflow-x-auto rounded-3xl shadow-2xl border border-gray-200">

          <table className="w-full min-w-[900px]">

            <thead>

              <tr className="bg-[#0F2D6B] text-white">

                <th className="text-left px-8 py-6 text-lg">
                  Features
                </th>

                <th className="py-6">
                  🇺🇸 USA
                </th>

                <th className="py-6">
                  🇬🇧 UK Graduate
                </th>

                <th className="py-6 bg-orange-500">
                  ⭐ UK Professional
                </th>

                <th className="py-6">
                  🇦🇺 Australia
                </th>

              </tr>

            </thead>

            <tbody>

              {rows.map((row, index) => (

                <tr
                  key={index}
                  className="border-b hover:bg-orange-50 transition"
                >

                  <td className="px-8 py-6 font-semibold text-[#0F2D6B]">
                    {row.feature}
                  </td>

                  <td className="text-center">
                    <Cell value={row.usa} />
                  </td>

                  <td className="text-center">
                    <Cell value={row.ukGraduate} />
                  </td>

                  <td className="text-center bg-orange-50">
                    <Cell value={row.ukProfessional} />
                  </td>

                  <td className="text-center">
                    <Cell value={row.australia} />
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}