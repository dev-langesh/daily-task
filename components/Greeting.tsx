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
<<<<<<< HEAD
    <header className="p-2 text-center  shadow shadow-orange-100 mb-2">
=======
    <header className="p-2 text-center bg-white  shadow shadow-orange-100 mb-2">
>>>>>>> ab2cb83973c3bcdfb047bfa8281c176f7022622c
      {greet} Dever
    </header>
  );
}
