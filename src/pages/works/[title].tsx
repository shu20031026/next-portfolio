import { useRouter } from "next/router";
import React from "react";

const WorksDetailPage = () => {
  const router = useRouter();
  const workTitle = router.query.title;
  
  return(
    <>
      {workTitle}
    </>
  );
};

export default WorksDetailPage;