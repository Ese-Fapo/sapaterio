"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Menu, Phone, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Sobre nós", href: "/sobre" },
  { label: "Contato", href: "/contato" },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          aria-label="Página inicial da Sapaterio"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/logo.svg"
            alt="Sapaterio"
            width={56}
            height={56}
            className="size-12 shrink-0 rounded-lg sm:size-14"
            priority
          />
          <div className="min-w-0 leading-tight">
            <p className="truncate text-lg font-bold text-slate-950 sm:text-xl">
              Sapaterio
            </p>
            <p className="hidden text-sm font-medium text-slate-500 sm:block">
              Consertos e ajustes
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Menu principal">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="lg" asChild>
            <a href="tel:+554891204464">
              <Phone className="size-4" aria-hidden="true" />
              Ligar agora
            </a>
          </Button>
          <Button size="lg" asChild>
            <a href="#contato">
              <CalendarDays className="size-4" aria-hidden="true" />
              Agendar ajuste
            </a>
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
          "grid border-t border-slate-200 bg-white transition-[grid-template-rows,opacity] duration-200 md:hidden",
          isMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Menu móvel">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-md px-3 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+5548991204464" onClick={() => setIsMenuOpen(false)}>
                  <Phone className="size-4" aria-hidden="true" />
                  Ligar agora
                </a>
              </Button>
              <Button size="lg" asChild>
                <a href="#contato" onClick={() => setIsMenuOpen(false)}>
                  <CalendarDays className="size-4" aria-hidden="true" />
                  Agendar ajuste
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
