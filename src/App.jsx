import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import { Toaster } from "./components/ui/sonner";
import useAuth from "./hooks/useAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import VerifyAccount from "./pages/VerifyAccount";
import { useStore } from "./store";

const App = () => {
  const { isLoading } = useAuth();
  const setFirstVisit = useStore((state) => state.setFirstVisit);

  useEffect(() => {
    if (!isLoading) {
      setFirstVisit(false);
    }
  }, [isLoading]);

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" index element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify" element={<VerifyAccount />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
