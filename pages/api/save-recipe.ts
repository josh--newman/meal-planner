import type { NextApiRequest, NextApiResponse } from "next";

import parseRecipePage from "../../util/parseRecipePage";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { url } = req.body;
    try {
      const htmlText = await fetch(url).then((res) => res.text());
      const recipe = parseRecipePage(htmlText);
      res.status(200).json({
        recipe,
      });
    } catch (error) {
      res.status(500).json({
        error,
        message: "Something went wrong trying to save the recipe.",
      });
    }
  }
};
