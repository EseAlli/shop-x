import React from "react";
import { useRouter } from "next/router";

const WomenPage = () => {
  const router = useRouter();
  const { page = [] } = router.query;
  console.log(page);
  return <div>page</div>;
};

export default WomenPage;
