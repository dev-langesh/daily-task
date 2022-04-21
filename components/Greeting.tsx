import React, { useContext, useEffect, useState } from "react";
import { GreetContext } from "./GreetContextProvider";

export default function Greeting() {
  const date = useContext(GreetContext);
  const [greet, setGreet] = useState<string | null>(null);

  useEffect(() => {
    if (date) {
      if (date.hour < 12) {
        setGreet("Good Morning");
      } else if (date.hour > 12 && date.hour < 3) {
        setGreet("Good Afternoon");
      } else {
        setGreet("Good Evening");
      }
    }
  }, [date]);

  return (
    <header className="p-2 text-center  shadow shadow-orange-100 mb-2">
      {greet} Dever
    </header>
  );
}
