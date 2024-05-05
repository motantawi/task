export interface PostFormData {
  id?: number;
  title: string;
  body: string;
  userId: number;
}

export interface Comment {
  id?: number;
  body: string;
}
