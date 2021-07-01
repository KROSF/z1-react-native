export interface Items {
  items: Item[];
}

export interface Item {
  id: string;
  title: string;
  image: string;
  author: string;
  category: Category;
  content: string;
}

export interface Category {
  id: string;
  title: string;
}
