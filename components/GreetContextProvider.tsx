import React from "react";
import Greeting from "./Greeting";

type contextType = {
  hour: number;
};

export const GreetContext = React.createContext<contextType | null>(null);

export default function GreetContextProvider({
  children,
  hour,
}: {
  children?: React.ReactNode;
  hour: number;
}) {
  return (
    <GreetContext.Provider value={{ hour: hour }}>
      {children ? children : null}
      <Greeting />
    </GreetContext.Provider>
  );
}
