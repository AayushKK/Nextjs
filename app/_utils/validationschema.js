import * as Yup from "yup";
export const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  detail: Yup.string().required("Detail is required"),
  image: Yup.string()
    .url("Must be a valid URL")
    .required("Image URL is required"),
}); 