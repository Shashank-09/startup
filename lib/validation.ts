import { z } from "zod";

// export const formSchema = z.object({
//   title: z.string().min(3).max(100),
//   description: z.string().min(20).max(500),
//   category: z.string().min(3).max(20),
//   link: z
//     .string()
//     .url()
//     .refine(async (url) => {
//       try {
//         const res = await fetch(url, { method: "HEAD" });
//         const contentType = res.headers.get("content-type");

//         return contentType?.startsWith("image/");
//       } catch {
//         return false;
//       }
//     }),
//   pitch: z.string().min(10),
// });



export const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  category: z.string().min(1, "Category is required"),
  link: z.string().url("Link must be a valid URL"),
  pitch: z.string().min(1, "Pitch is required"),
});
