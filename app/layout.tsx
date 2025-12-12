import "@/styles/globals.css";

export const metadata = {
  title: "AI StudyStation",
  description:
    "AI StudyStation: Intelligent Note Generation & Automated Printing System - Revolutionize your academic workflow with AI-powered note creation and secure printing services",
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
      <body className="font-poppins bg-primary text-white">{children}</body>
    </html>
  );
};

export default RootLayout;
