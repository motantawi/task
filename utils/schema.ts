import * as yup from "yup";

export const createPostSchema = yup
  .object({
    title: yup
      .string()
      .required("Title is required")
      .max(50, "Title cannot exceed 50 characters"),
    body: yup
      .string()
      .required("Body is required")
      .min(20, "Body must be at least 20 characters long"),
    userId: yup
      .number()
      .required("User ID is required")
      .positive("User ID must be a positive number")
      .integer("User ID must be an integer"),
  })
  .required();
