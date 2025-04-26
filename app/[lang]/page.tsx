import { getDictionary } from "./dictionaries";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: "he" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang); // he

  return <button>{dict.products.cart}</button>; // Add to Cart
}
