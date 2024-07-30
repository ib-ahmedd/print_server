import app from "@src/app";
import connectToDB from "@src/Config/DatabaseConfig";
import Cart from "@src/Models/cartSchema";
import Orders from "@src/Models/ordersSchema";
import Products from "@src/Models/productsSchema";
import Users from "@src/Models/usersSchema";
import dotenv from "dotenv";
dotenv.config();

const port = 4000;

async function main() {
  try {
    await connectToDB();
    // await Orders.deleteMany();
    app.listen(port, () => {
      console.log(`server running on port:${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
