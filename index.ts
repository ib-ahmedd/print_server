import app from "@src/app";
import connectToDB from "@src/Config/DatabaseConfig";
import Products from "@src/Models/productsSchema";
import dotenv from "dotenv";
dotenv.config();

const port = 4000;

async function main() {
  try {
    await connectToDB();
    const product = await Products.find().sort({ price: 1 });
    console.log(product);
    console.log("connect success");
    app.listen(port, () => {
      console.log(`server running on port: ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
