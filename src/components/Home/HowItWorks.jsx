import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const items = [
  {
    title: "Register",
    description:
      "Create your account to access personalized healthcare services and manage your appointments",
    image: "/icons/register.png",
  },
  {
    title: "Search Doctors",
    description:
      "Use our search feature to find doctors by specialty, location, hospital or availablity date",
    image: "/icons/search.png",
  },
  {
    title: "View Doctor Profiles",
    description:
      "Explore detailed profiles with information on qualifications, specialities and experience",
    image: "/icons/profile.png",
  },
  {
    title: "Book Appointment",
    description:
      "Choose a convenient date and time, then confirm your appointment in just a few clicks",
    image: "/icons/appointment.png",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="mb-10">
          <h2 className="text-center text-2xl font-semibold text-gray-800 md:text-3xl lg:text-4xl">
            How It Works
          </h2>
          <div className="mt-2 flex items-center justify-center gap-1 lg:mt-2.5">
            <div className="h-1 w-2 rounded-full bg-blue"></div>
            <div className="h-1 w-2 rounded-full bg-blue"></div>
            <div className="h-1 w-8 rounded-full bg-blue"></div>
            <div className="h-1 w-2 rounded-full bg-blue"></div>
            <div className="h-1 w-2 rounded-full bg-blue"></div>
          </div>
        </div>
        <div className="mx-auto grid max-w-md grid-cols-1 gap-5 sm:max-w-none sm:grid-cols-2 sm:gap-3 md:gap-5 xl:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={`howItWorks-${index}`}
              className="flex flex-col items-center rounded-md bg-white p-6 shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-md"
            >
              <div
                className={cn(
                  "relative flex size-20 items-center justify-center rounded-full border border-green-500",
                  index % 2 === 1 && "border-sky-500",
                )}
              >
                <img
                  className="size-10 object-contain"
                  src={item.image}
                  alt={item.title}
                />
                <span
                  className={cn(
                    "text-600 absolute right-0 top-1/2 flex size-5 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-green-500 bg-white text-green-500",
                    index === 3 && "hidden",
                    index % 2 === 1 && "border-sky-500 text-sky-500",
                  )}
                >
                  <ChevronRight className="size-4" />
                </span>
              </div>
              <div className="mt-6 text-center">
                <h3 className="mb-2 text-lg font-medium">{item.title}</h3>
                <p className="text-center text-sm text-gray-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
