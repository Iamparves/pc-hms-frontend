import { FancyMultiSelect } from "@/components/shared/FancyMultiSelect";
import { useState } from "react";

const medicalSpecialities = [
  { value: "Allergy and Immunology", label: "Allergy and Immunology" },
  { value: "Anesthesiology", label: "Anesthesiology" },
  { value: "Dermatology", label: "Dermatology" },
  { value: "Diagnostic Radiology", label: "Diagnostic Radiology" },
  { value: "Emergency Medicine", label: "Emergency Medicine" },
  { value: "Family Medicine", label: "Family Medicine" },
  { value: "Internal Medicine", label: "Internal Medicine" },
  { value: "Medical Genetics", label: "Medical Genetics" },
  { value: "Neurology", label: "Neurology" },
  { value: "Nuclear Medicine", label: "Nuclear Medicine" },
  { value: "Obstetrics and Gynecology", label: "Obstetrics and Gynecology" },
  { value: "Ophthalmology", label: "Ophthalmology" },
  { value: "Pathology", label: "Pathology" },
  { value: "Pediatrics", label: "Pediatrics" },
  {
    value: "Physical Medicine and Rehabilitation",
    label: "Physical Medicine and Rehabilitation",
  },
  { value: "Preventive Medicine", label: "Preventive Medicine" },
  { value: "Psychiatry", label: "Psychiatry" },
  { value: "Radiation Oncology", label: "Radiation Oncology" },
  { value: "Surgery", label: "Surgery" },
  { value: "Urology", label: "Urology" },
];

const Doctors = () => {
  const [selected, setSelected] = useState([]);

  return (
    <section>
      <div className="container py-10">
        <div className="mx-auto max-w-xl rounded-xl bg-white p-10">
          <FancyMultiSelect
            selected={selected}
            setSelected={setSelected}
            initialSelectables={medicalSpecialities}
            placeholderText="Select medical specialities..."
          />
        </div>
      </div>
    </section>
  );
};

export default Doctors;
