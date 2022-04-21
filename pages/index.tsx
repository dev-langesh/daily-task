import type { GetStaticProps, NextPage } from "next";
import GreetContextProvider from "../components/GreetContextProvider";
import Motivation from "../components/Motivation";
import styles from "../styles/Home.module.css";
import CreateTodo from "../components/CreateTodo";
import axios from "axios";
import mongoose from "mongoose";
import DisplayTodo from '../components/DisplayTodo';

const Home = ({ hour }: { hour: number }) => {
  return (
    <div className="w-screen h-screen p-4 ">
      <GreetContextProvider hour={hour} />
      <Motivation />
      <CreateTodo />
      <DisplayTodo />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const date = new Date();

  mongoose.connect(`${process.env.MONGO_URI}`, () =>
    console.log("connected to mongo db")
  );

  return {
    props: {
      hour: date.getHours(),
    },
  };
};
