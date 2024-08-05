import app from "./src/app";
import connectToDB from "./src/Config/DatabaseConfig";
import "dotenv/config";
import Products from "./src/Models/productsSchema";
import createProducts from "./src/utils/createProducts";

const port = 4000;

async function main() {
  try {
    await connectToDB();
    // await Products.deleteMany();
    // await createProducts();
    app.listen(port, () => {
      console.log(`server running on port:${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
