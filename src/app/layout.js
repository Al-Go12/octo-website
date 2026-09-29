import "./globals.css";

export const metadata = {
  title: "OctoSignals Technologies | We Make Your Signals Better",
  description:
    "OctoSignals Technologies is a technology solutions company helping businesses turn complex challenges into practical digital products, intelligent software, and engaging technology experiences.",
  keywords: [
    "Technology Strategy",
    "Software Engineering",
    "Creative Technology",
    "Broadcast & Media Technology",
    "AI & Intelligent Solutions",
    "Audioprints ACR",
    "Octo Campus CRM",
  ],
  authors: [{ name: "OctoSignals Technologies" }],
  openGraph: {
    title: "OctoSignals Technologies | We Make Your Signals Better",
    description:
      "Digital solutions, intelligent software, and media technology that move your business in the right direction.",
    url: "https://octosignals.com",
    siteName: "OctoSignals Technologies",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
    >
      <body
        style={{ fontFamily: '"Marcellus", serif' }}
        className="min-h-full flex flex-col bg-[#fafbfe] text-[#0b0f19] selection:bg-[#c8102e] selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
