import cheerio from "cheerio";

type Ingredient = {
  quantity: number;
  unitOfMeasurement: string;
  name: string;
};

type Recipe = {
  title: string;
  description?: string;
  serves?: number;
  ingredients: string[];
  method: string[];
  notes?: string;
  imageUrl?: string;
  prepTimeMins?: number;
  cookTimeMins?: number;
};

// Scrapes HTML document and generates a Recipe object
const parseRecipePage = (htmlText: string): Recipe => {
  const $ = cheerio.load(htmlText);

  const title = $("h1").text();
  const ingredients = $(".ingredients-item-name")
    .map((i, item) => $(item).text().trim())
    .toArray();
  const method = $(".instructions-section-item p")
    .map((i, item) => $(item).text().trim())
    .toArray();

  return {
    title,
    ingredients,
    method,
  };
};

export default parseRecipePage;
