import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./_components/Header"
import { FloatingActions, Footer } from "./_components/HomeSections"

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
