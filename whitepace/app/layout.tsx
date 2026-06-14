import "./globals.css";
import "@fontsource/inter";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="text-p-regular">{children}</body>
    </html>
  );
}
