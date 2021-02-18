import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const url = req.body;
    console.log(url);
  }
  res.status(200).json({ name: "John Doe" });
};
