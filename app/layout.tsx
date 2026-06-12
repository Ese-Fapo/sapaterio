import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./_components/Header"
import { FloatingActions, Footer } from "./_components/HomeSections"

const siteUrl = "https://www.sapatariarealpark.com.br"
const siteName = "Real Park Sapataria e Costureira"
const siteDescription =
  "Servicos de sapataria, costureira, xerox, chaveiro e foto 3x4 com atendimento rapido e profissional."
const logoUrl = "/logo.svg"
const shareImageUrl = "/og-image.png"
const shareImageAbsoluteUrl = `${siteUrl}${shareImageUrl}`
const shareImageType = "image/png"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteName,
  description: siteDescription,
  url: siteUrl,
  logo: `${siteUrl}${logoUrl}`,
  image: shareImageAbsoluteUrl,
}

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  icons: [
    { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
    { rel: "shortcut icon", url: "/favicon.svg", type: "image/svg+xml" },
    { rel: "apple-touch-icon", url: logoUrl, type: "image/svg+xml" },
  ],
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [shareImageAbsoluteUrl],
  },
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: "/",
    siteName,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: shareImageAbsoluteUrl,
        width: 1200,
        height: 630,
        alt: `${siteName} logo`,
        type: shareImageType,
      },
    ],
  },
}

export const viewport = {
  themeColor: "#000000",
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className="antialiased"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={shareImageAbsoluteUrl} />
        <meta property="og:image:secure_url" content={shareImageAbsoluteUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content={shareImageType} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteName} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={shareImageAbsoluteUrl} />
        <meta name="twitter:image:src" content={shareImageAbsoluteUrl} />
      </head>
      <body className="bg-white">
        <ThemeProvider>
          <div className="min-h-screen bg-white">
            <Header />
            {children}
            <Footer />
            <FloatingActions />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
