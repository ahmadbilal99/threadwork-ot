import { useCallback, useEffect, useState } from "react";

// Tiny hash router: pages get real URLs (/#/services) and the back button works.
export function useHashRoute(validIds, fallback = "home") {
  const read = () => {
    const id = window.location.hash.replace(/^#\/?/, "");
    return validIds.includes(id) ? id : fallback;
  };

  const [page, setPage] = useState(read);

  useEffect(() => {
    const onChange = () => {
      setPage(read());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  const go = useCallback((id) => {
    window.location.hash = "/" + id;
  }, []);

  return [page, go];
}
