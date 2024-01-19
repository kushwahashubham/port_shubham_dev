// hooks/useHash.ts
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function useHash(): string | null {
  const router = typeof window !== "undefined" ? useRouter() : null;
  const [hash, setHash] = useState<string | null>(null);

  useEffect(() => {
    if (router) {
      // Access the hash from the URL
      const hashFromUrl = router.asPath.split("#")[1];

      // Update the state with the hash
      setHash(hashFromUrl);
    }
  }, [router?.asPath]);

  return hash;
}

export default useHash;
