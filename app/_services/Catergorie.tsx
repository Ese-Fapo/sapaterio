import React from "react"
import Image from "next/image"
import Link from "next/link"
import { googleReviewLink } from "../_components/HomeSections"

const categories = [
  {
    name: "Sapataria",
    image: "/image/shoe-icon.jpeg",
    accent: "border-red-600",
    href: "/sapataria",
  },
  {
    name: "Costureira",
    image: "/image/tailor-icon.jpeg",
    accent: "border-yellow-400",
    href: "/costureira",
  },
  {
    name: "3x4 foto",
    image: "/image/Foto 3x4 icon.png",
    accent: "border-black",
    href: "/foto-3x4",
  },
  {
    name: "Chaveiro",
    image: "/image/key-icon.png",
    accent: "border-red-600",
    href: "/chaveiro",
  },
  {
    name: "Xerox",
    image: "/image/xerox-icon.png",
    accent: "border-yellow-400",
    href: "/xerox",
  },
]

const Catergorie = () => {
  return (
    <section id="servicos" className="bg-black px-4 py-12 text-white sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-yellow-300">
            Categorias
          </p>
          <h2 className="mx-auto mt-2 max-w-2xl text-2xl font-bold sm:text-4xl">
            Escolha o serviço que você precisa
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-red-600" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => {
            const card = (
              <>
                <div className="flex size-24 items-center justify-center rounded-full border-4 border-yellow-300 bg-white p-3 shadow-sm transition group-hover:border-red-600">
                  <Image
                    src={category.image}
                    alt={`${category.name} icon`}
                    width={72}
                    height={72}
                    className="size-16 object-contain"
                  />
                </div>
                <h3 className="mt-5 text-lg font-bold text-black">
                  {category.name}
                </h3>
                <span className="mt-4 inline-flex rounded-md bg-red-600 px-4 py-2 text-sm font-bold text-white transition group-hover:bg-black">
                  Ver mais
                </span>
              </>
            )

            const className = `group flex min-h-40 flex-col items-center justify-center rounded-lg border-2 ${category.accent} bg-white px-4 py-5 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:min-h-44 sm:py-6`

            return (
              <Link key={category.name} href={category.href} className={className}>
                {card}
              </Link>
            )
          })}
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-lg border border-yellow-300 bg-white p-5 text-center text-black shadow-sm">
          <p className="text-lg font-bold">Já foi atendido por nós?</p>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            A sua avaliação ajuda outras pessoas a escolherem o serviço certo.
          </p>
          <a
            href={googleReviewLink}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-md bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-black"
          >
            Avaliar no Google
          </a>
        </div>
      </div>
    </section>
  )
}

export default Catergorie
