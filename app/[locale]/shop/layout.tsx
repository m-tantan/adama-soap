import { getMessages } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = (await getMessages({ locale })) as any;

  return {
    title: messages.metadata?.shopTitle || "Shop - Adama Soaps",
    description:
      messages.metadata?.shopDescription ||
      "Browse our collection of handmade vegan coffee soaps.",
  };
}

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
