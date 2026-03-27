"use client";

import { useEffect } from "react";
import { useRouter } from "@/i18n/navigation";

const Admin = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("admin/users");
  }, [router]);

  return <div>Redirecting...</div>;
};

export default Admin;