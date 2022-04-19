import { todo } from "../../models/todo.model";
import { NextApiRequest, NextApiResponse } from "next";

export default async function createTodo(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const todoExists = await todo.find({ todo: req.body.todo });

    if (todoExists.length !== 0) {
      res.status(400).json({ error: "Todo already exists" });
      return;
    }

    const response = await todo.create({
      todo: req.body.todo,
    });

    res.json(response);
  } catch (err) {
    console.log(err);
    res.json({ error: "Something went wrong" });
  }
}
