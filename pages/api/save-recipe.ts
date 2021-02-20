import type { NextApiRequest, NextApiResponse } from "next";

import { connectToDatabase } from "../../util/mongodb";
import parseRecipePage from "../../util/parseRecipePage";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase();

  if (req.method === "POST") {
    const { url } = req.body;
    try {
      const htmlText = await fetch(url).then((res) => res.text());
      const recipe = parseRecipePage(htmlText);

      const result = await db.collection("recipes").insertOne(recipe);
      res.status(200).json({
        recipe: result,
      });
    } catch (error) {
      res.status(500).json({
        error,
        message: "Something went wrong trying to save the recipe.",
      });
    }
  }
};
