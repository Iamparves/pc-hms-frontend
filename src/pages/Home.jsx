import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="bg-[url(/hospital-beds.jpg)]">
      <div className="flex min-h-screen flex-col justify-center bg-black/60 p-5 text-center text-white">
        <h1 className="mb-5 text-7xl font-bold">Posh Code</h1>
        <h3 className="text-4xl">Hospital Management System</h3>
        <div className="mx-auto mt-7 flex items-center justify-center gap-2">
          <Button size="lg" to="/signup">
            Signup
          </Button>
          <Button
            className="text-black"
            variant="outline"
            size="lg"
            to="/login"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
