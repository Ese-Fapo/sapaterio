"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Menu, Phone, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Sobre nós", href: "/#sobre" },
  { label: "Depoimentos", href: "/#depoimentos" },
  { label: "Contacto", href: "/#contacto" },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-yellow-300/30 bg-black/95 text-white shadow-sm backdrop-blur supports-[backdrop-filter]:bg-black/85">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 sm:gap-3"
          aria-label="Página inicial da Real Park Sapataria e Costureira"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/logo.svg"
            alt="Real Park Sapataria e Costureira"
            width={56}
            height={56}
            className="size-10 shrink-0 rounded-lg sm:size-14"
            priority
          />
          <div className="min-w-0 leading-tight">
            <p className="max-w-[13rem] truncate text-sm font-bold text-white sm:max-w-none sm:text-xl">
              Real Park Sapataria e Costureira
            </p>
            <p className="hidden text-sm font-medium text-yellow-200 sm:block">
              Consertos, ajustes e serviços rápidos
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Menu principal">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-yellow-300 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="lg" className="text-white hover:bg-yellow-300 hover:text-black" asChild>
            <a href="tel:+5548991204464">
              <Phone className="size-4" aria-hidden="true" />
              Ligar agora
            </a>
          </Button>
          <Button size="lg" asChild>
            <Link href="/#contacto">
              <CalendarDays className="size-4" aria-hidden="true" />
              Solicitar serviço
            </Link>
          </Button>
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon-lg"
          className="md:hidden"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "grid border-t border-yellow-300/30 bg-black text-white transition-[grid-template-rows,opacity] duration-200 md:hidden",
          isMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Menu móvel">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-md px-3 py-3 text-base font-semibold text-white transition-colors hover:bg-yellow-300 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <Button variant="outline" size="lg" className="border-yellow-300 text-black hover:bg-yellow-300" asChild>
                <a href="tel:+5548991204464" onClick={() => setIsMenuOpen(false)}>
                  <Phone className="size-4" aria-hidden="true" />
                  Ligar agora
                </a>
              </Button>
              <Button size="lg" asChild>
                <Link href="/#contacto" onClick={() => setIsMenuOpen(false)}>
                  <CalendarDays className="size-4" aria-hidden="true" />
                  Solicitar serviço
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
