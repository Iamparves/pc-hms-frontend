import { getLoggedInUser } from "@/db/auth";
import { useStore } from "@/store";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const setUser = useStore((state) => state.setUser);
  const user = useStore((state) => state.user);
  const isFirstVisit = useStore((state) => state.isFirstVisit);
  const setFirstVisit = useStore((state) => state.setFirstVisit);

  useEffect(() => {
    if (user || !isFirstVisit) return setIsLoading(false);

    (async () => {
      const result = await getLoggedInUser();

      await new Promise((resolve) => setTimeout(resolve, 3000));

      if (result.status === "success") {
        setUser(result.data.user);
      } else {
        setUser(null);
      }

      setFirstVisit(false);
      setIsLoading(false);
    })();
  }, []);

  return { isLoading, user };
};

export default useAuth;