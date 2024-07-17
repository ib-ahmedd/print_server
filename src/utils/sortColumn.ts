export function sortColumn(option: string) {
  let sort = {};
  switch (option) {
    case "Default sorting": {
      sort = {};
      break;
    }

    case "Sort by popularity": {
      sort = { sold: 1 };
      break;
    }

    case "Sort by average rating": {
      sort = { rating: 1 };
      break;
    }

    case "Sort by latest": {
      sort = { date_in_stock: 1 };
      break;
    }

    case "Sort by price: high to low": {
      sort = { price: -1 };
      break;
    }

    case "Sort by price: low to high": {
      sort = { price: 1 };
      break;
    }

    default: {
      sort = {};
    }
  }
  return sort;
}
