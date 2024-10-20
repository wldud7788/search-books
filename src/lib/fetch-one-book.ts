import { BookData } from "@/types/types";

export default async function fetchOneBook(
  id: number
): Promise<BookData | null> {
  const url = "http://localhost:12345";
  try {
    const res = await fetch(`${url}/book/${id}`);
    if (!res.ok) {
      throw new Error();
    }
    return await res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}
