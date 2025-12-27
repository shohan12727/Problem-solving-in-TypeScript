function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
}

function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    const details = `Name: ${this.name}, Age: ${this.age}`;
    return details;
  }
}

type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: Item[]): Item[] {
  const filteredBook = items.filter((item) => item.rating >= 4);
  return filteredBook;
}

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  const filteredUser = users.filter((user) => user.isActive === true);
  return filteredUser;
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
}


function getUniqueValues<T extends string | number>(arr1: T[], arr2: T[]): T[] {
  const result: T[] = [];

  for (let i = 0; i < arr1.length; i++) {
    let exists = false;

    for (let j = 0; j < result.length; j++) {
      if (result[j] === arr1[i]) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    let exists = false;

    for (let j = 0; j < result.length; j++) {
      if (result[j] === arr2[i]) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result.push(arr2[i]);
    }
  }

  return result;
}


type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) {
    return 0;
  }

  return products
    .map(product => {
      const total = product.price * product.quantity;

      if (product.discount !== undefined) {
        return total - (total * product.discount) / 100;
      }

      return total;
    })
    .reduce((sum, current) => sum + current, 0);
}


