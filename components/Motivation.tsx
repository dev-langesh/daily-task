import React, { useEffect, useState } from "react";
import { motivationData, motivationDataType } from "../data/motivation.data";

export default function Motivation() {
  const [moto, setMoto] = useState<string | null>(null);

  useEffect(() => {
    setMoto(motivationData[Math.floor(Math.random() * motivationData.length)]);
  }, []);

  return (
    <section className=" text-center  p-4 shadow shadow-orange-100">
      {moto}
    </section>
  );
}
