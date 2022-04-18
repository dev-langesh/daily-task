import type { GetStaticProps, NextPage } from "next";
import GreetContextProvider from "../components/GreetContextProvider";
import Motivation from "../components/Motivation";
import styles from "../styles/Home.module.css";

const Home = ({ hour }: { hour: number }) => {
  return (
    <div className="w-screen h-screen p-4 ">
      <GreetContextProvider hour={hour} />
      <Motivation />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const date = new Date();

  return {
    props: {
      hour: date.getHours(),
    },
  };
};
