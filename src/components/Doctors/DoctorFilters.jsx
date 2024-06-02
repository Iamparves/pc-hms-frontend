import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import FilterSpecialityField from "./FilterSpecialityField";

const DoctorFilters = ({ setQueryString, selectable }) => {
  const [district, setDistrict] = useState("");
  const [hospital, setHospital] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [specialities, setSpecialities] = useState([]);

  const handleSpecialitiesChange = (speciality, checked) => {
    setSpecialities((prev) => {
      if (checked) {
        return [...prev, speciality];
      } else {
        return specialities.filter((s) => s !== speciality);
      }
    });
  };

  const handleFilters = () => {
    const query = new URLSearchParams();
    if (district) query.append("district", district);
    if (hospital) query.append("hospital", hospital);
    if (doctor) query.append("name", doctor);
    if (specialities.length)
      query.append("specialities", specialities.join(","));
    if (date) query.append("date", date);
    setQueryString(`?${query.toString()}`);
  };

  const clearFilters = () => {
    setDistrict("");
    setHospital("");
    setDoctor("");
    setSpecialities([]);
    setDate("");
    setQueryString("");
  };

  return (
    <>
      <div className="mb-5 flex justify-between">
        <h2 className="text-xl font-semibold">Filters</h2>
        <button onClick={clearFilters} className="text-sm text-blue underline">
          Clear Filters
        </button>
      </div>
      <div className="space-y-5">
        <div className="">
          <label
            htmlFor="district"
            className="mb-1 block text-sm font-medium text-gray-600"
          >
            District
          </label>
          <input
            id="district"
            type="text"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="w-full rounded-md border px-3 py-2 outline-none"
          />
        </div>
        <div className="">
          <label
            htmlFor="hospital"
            className="mb-1 block text-sm font-medium text-gray-600"
          >
            Hospital
          </label>
          <input
            id="hospital"
            type="text"
            value={hospital}
            onChange={(e) => setHospital(e.target.value)}
            className="w-full rounded-md border px-3 py-2 outline-none"
          />
        </div>
        <div className="">
          <label
            htmlFor="doctor"
            className="mb-1 block text-sm font-medium text-gray-600"
          >
            Doctor Name
          </label>
          <input
            id="doctor"
            type="text"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            className="w-full rounded-md border px-3 py-2 outline-none"
          />
        </div>
        <div className="">
          <FilterSpecialityField
            specialities={selectable}
            checkedspecialities={specialities}
            onCheckedChange={handleSpecialitiesChange}
          />
        </div>
        <div className="">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start py-5 text-left font-normal",
                  !date && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(date) => setDate(date.toISOString())}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="">
          <Button
            className="w-full bg-blue py-[22px] hover:bg-blue/90"
            onClick={handleFilters}
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </>
  );
};

export default DoctorFilters;
