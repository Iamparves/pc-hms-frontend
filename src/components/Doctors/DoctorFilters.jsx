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
import { useSearchParams } from "react-router-dom";
import FilterSpecialityField from "./FilterSpecialityField";

const DoctorFilters = ({ selectable }) => {
  const [district, setDistrict] = useState("");
  const [hospital, setHospital] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [specialities, setSpecialities] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

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
    setSearchParams((prev) => {
      prev.set("district", district);
      prev.set("hospital", hospital);
      prev.set("doctor", doctor);
      prev.set("specialities", specialities.join(","));
      prev.set("date", date);
      prev.set("page", 1);

      return prev;
    });
  };

  const clearFilters = () => {
    setDistrict("");
    setHospital("");
    setDoctor("");
    setDate("");
    setSpecialities([]);

    setSearchParams((prev) => {
      prev.delete("district");
      prev.delete("hospital");
      prev.delete("doctor");
      prev.delete("specialities");
      prev.delete("date");
      prev.set("page", 1);

      return prev;
    });
  };

  return (
    <>
      <div className="mb-5 flex justify-between">
        <h2 className="text-xl font-semibold">Filters</h2>
        <button onClick={clearFilters} className="text-sm text-blue underline">
          Clear Filters
        </button>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
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
          <label className="mb-1 block text-sm font-medium text-gray-600">
            Specialities
          </label>
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
            onClick={() => {
              handleFilters();
              setCurrentPage(1);
            }}
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </>
  );
};

export default DoctorFilters;
