import app from "@src/app";
import connectToDB from "@src/Config/DatabaseConfig";
import Products from "@src/Models/productsSchema";
import createProducts from "@src/utils/createProducts";
import dotenv from "dotenv";
dotenv.config();

const port = 4000;

async function main() {
  try {
    await connectToDB();
    await createProducts();
    const products = await Products.find();
    console.log(products);
    app.listen(port, () => {
      console.log(`server running on port:${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
