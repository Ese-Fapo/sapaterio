import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./_components/Header"
import { FloatingActions, Footer } from "./_components/HomeSections"

const siteUrl = "https://realpark.com.br"
const siteName = "Real Park Sapataria e Costureira"
const siteDescription =
  "Servicos de sapataria, costureira, xerox, chaveiro e foto 3x4 com atendimento rapido e profissional."

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
    { rel: "apple-touch-icon", url: "/favicon.svg", type: "image/svg+xml" },
  ],
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: "/",
    siteName,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/og-image.png"],
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
