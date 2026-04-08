import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Free Image Compressor - Compress JPG, PNG, WebP Online | Reduce Image Size",
  description: "Compress images for free online. Reduce JPG, PNG, and WebP file size without losing quality. No signup, no upload limits, 100% free.",
  keywords: [
    "image compressor",
    "compress image",
    "reduce image size",
    "jpg compressor",
    "png compressor",
    "webp compressor",
    "free image compressor",
    "online image compressor",
  ],
  openGraph: {
    title: "Free Image Compressor - Reduce Image Size Online",
    description: "Compress JPG, PNG, and WebP images for free. No limits, no signup.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Free Image Compressor",
              description: "Compress images for free online. Reduce file size without losing quality.",
              applicationCategory: "MultimediaApplication",
              operatingSystem: "Any",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FKHZPC8V2R" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FKHZPC8V2R');
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
