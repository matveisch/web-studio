export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <head>
        <title>Web Studio</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
