import { getMessages } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = (await getMessages({ locale })) as any;

  return {
    title: messages.metadata?.aboutTitle || "About - Adama Soaps",
    description:
      messages.metadata?.aboutDescription ||
      "Learn the story behind Adama Soaps.",
  };
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
