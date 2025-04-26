import { getDictionary } from "./dictionaries";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: "he" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <button>hello</button>; // Add to Cart
}
