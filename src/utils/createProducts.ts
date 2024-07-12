import Products from "@src/Models/productsSchema";
import { ProductsType } from "@src/types";

const host = "http://localhost:4000";

const productsArray: ProductsType[] = [
  {
    product_name: "Black Printed Coffee Mug",
    product_image: host + "/images/black_printed_coffee_mug.jpg",
    price: 15.5,
    category: "Mug",
    free_shipping: false,
    rating: 0,
    sold: 22,
    date_in_stock: "2021-12-23",
  },
  {
    product_name: "Brown Printed Tshirt",
    product_image: host + "/images/brown_printed_tshirt.jpg",
    price: 25.3,
    category: "Tshirt",
    free_shipping: true,
    rating: 0,
    sold: 100,
    date_in_stock: "2024-01-20",
  },
  {
    product_name: "Brown Printed Tshirt",
    product_image: host + "/images/brown_printed_tshirt.jpg",
    price: 22.4,
    category: "Tshirt",
    free_shipping: false,
    rating: 0,
    sold: 53,
    date_in_stock: "2023-12-04",
  },
  {
    product_name: "Dark Green Printed Tshirt",
    product_image: host + "/images/dark_green_printed_tshirt.jpg",
    price: 21.2,
    category: "Tshirt",
    free_shipping: false,
    rating: 0,
    sold: 67,
    date_in_stock: "2024-07-20",
  },
  {
    product_name: "Fathers Day Coffee Mug",
    product_image: host + "/images/fathers_day_coffee_mug.jpg",
    price: 17.9,
    category: "Mug",
    free_shipping: true,
    rating: 0,
    sold: 110,
    date_in_stock: "2022-12-11",
  },
  {
    product_name: "Green Printed Tshirt",
    product_image: host + "/images/green_printed_tshirt.jpg",
    price: 23.4,
    category: "Tshirt",
    free_shipping: false,
    rating: 0,
    sold: 37,
    date_in_stock: "2023-01-12",
  },
  {
    product_name: "Orange Printed Tshirt",
    product_image: host + "/images/orange_printed_tshirt.jpg",
    price: 14.7,
    category: "Tshirt",
    free_shipping: true,
    rating: 0,
    sold: 76,
    date_in_stock: "2021-12-20",
  },
  {
    product_name: "Personalised Mug",
    product_image: host + "/images/personalised_mug.jpg",
    price: 25,
    category: "Mug",
    free_shipping: false,
    rating: 0,
    sold: 56,
    date_in_stock: "2022-02-12",
  },
  {
    product_name: "Pink Printed Tshirt",
    product_image: host + "/images/pink_printed_tshirt.jpg",
    price: 15,
    category: "Tshirt",
    free_shipping: false,
    rating: 0,
    sold: 86,
    date_in_stock: "2022-12-10",
  },
  {
    product_name: "Valentines Day Special Mug",
    product_image: host + "/images/valentines_day_special_mug.jpg",
    price: 18.2,
    category: "Mug",
    free_shipping: true,
    rating: 0,
    sold: 97,
    date_in_stock: "2022-12-10",
  },
  {
    product_name: "White Printed Coffee Mug",
    product_image: host + "/images/white_printed_coffee_mug.jpg",
    price: 19.3,
    category: "Mug",
    free_shipping: false,
    rating: 0,
    sold: 33,
    date_in_stock: "2023-10-07",
  },
];

export default async function createProducts() {
  try {
    await Products.insertMany(productsArray);
    console.log("products added successfully");
  } catch (e) {
    console.log(e);
  }
}
