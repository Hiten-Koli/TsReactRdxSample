import React, { useEffect } from "react";

interface Props{
  title:string;
  array:string[];
  fetchData:(type: string) => Promise<void>;
}

const ChildComponent:React.FC<Props> = ({ title, array, fetchData }) => {
  console.log("CHILD RE_RENDER");
  useEffect(() => {
    fetchData("users");
  }, [fetchData]);
  return (
    <div>
      <h2>{title}</h2> <p>Child Component!</p>
    </div>
  );
};

export default React.memo(ChildComponent);