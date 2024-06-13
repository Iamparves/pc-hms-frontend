const items = [
  {
    title: "Appointment Management",
    description:
      "Simplify the process of booking and managing appointments with an easy-to-use interface.",
    icon: "/icons/appointment-2.png",
  },
  {
    title: "Doctor Management",
    description:
      "Efficiently manage hospital doctor profiles, schedules, and appointments.",
    icon: "/icons/doctor.png",
  },
  {
    title: "Hospital Dashboard",
    description:
      "Manage hospital resources efficiently with detailed insights and analytics.",
    icon: "/icons/dashboard.png",
  },
  {
    title: "Patient Portal",
    description:
      "Provide patients with access to appointment history and easy appointment booking.",
    icon: "/icons/patient.png",
  },
];

const WhatWeOffer = () => {
  return (
    <section id="whatWeOffer" className="py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="mb-10">
          <h2 className="text-center text-2xl font-semibold text-gray-800 md:text-3xl lg:text-4xl">
            What We Offer
          </h2>
          <div className="mt-2 flex items-center justify-center gap-1 lg:mt-2.5">
            <div className="h-1 w-2 rounded-full bg-blue"></div>
            <div className="h-1 w-2 rounded-full bg-blue"></div>
            <div className="h-1 w-8 rounded-full bg-blue"></div>
            <div className="h-1 w-2 rounded-full bg-blue"></div>
            <div className="h-1 w-2 rounded-full bg-blue"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {items.map((item, index) => (
            <div
              className="rounded-md bg-white p-5 xl:p-7"
              key={`whatWeOffer-${index}`}
            >
              <div className="grid grid-cols-1 items-center gap-5 sm:grid-cols-[auto_1fr] md:grid-cols-1 lg:grid-cols-[auto_1fr]">
                <div className="mx-auto flex size-20 items-center justify-center rounded-full border-[8px] border-lightBG p-3">
                  <img src={item.icon} alt={item.title} />
                </div>
                <div className="text-center sm:text-left md:text-center lg:text-left">
                  <h3 className="mb-2 text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
