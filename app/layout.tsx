import "@/styles/globals.css";

export const metadata = {
  title: "Smart Business Support Platform",
  description:
    "Smart Business Support Platform: Intelligent Queue Management & Accessibility Solutions - Revolutionize your customer service with real-time queue optimization and inclusive accessibility features",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-primary text-white">{children}</body>
    </html>
  );
};

export default RootLayout;
