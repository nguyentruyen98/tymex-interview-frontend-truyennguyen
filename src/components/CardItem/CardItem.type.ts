import { IAuthor } from "@/apis/type";
export type CardItemProps = {
  category?: string;
  avatar?: string;
  title?: string;
  price?: number;
  imageId: number;
  author: IAuthor;
  creatorAvatar?: string;
  isFavorite?: boolean;
  theme: "Dark" | "Light" | "Colorful" | "Halloween";
};
