export type Image = {
  alt: string;
  src: string;
};

export type Category = {
  id: string;
  name: string;
};

export type Node = {
  id: string;
  name: string;
  images: Image[];
  category: Category;
  shortDescription: string;
};

export type FilterData = {
  nodes: Node[];
};
