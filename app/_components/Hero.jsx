import Image from "next/image"
import Link from "next/link"
import React from "react"

const Hero = () => {
  return (
    <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-black px-4 text-white sm:px-6 lg:px-8">
      <Image
        src="/image/shoe-sewing.jpeg"
        alt="Conserto artesanal de sapato"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/35" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col justify-center py-16 sm:py-20">
        <p className="text-sm font-bold uppercase tracking-wide text-yellow-300">
          Real Park Sapataria e Costureira
        </p>
        <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Consertos, ajustes e serviços rápidos em um só lugar
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-100 sm:text-lg sm:leading-8">
          Sapataria, costura, foto 3x4, chaveiro e xerox com atendimento
          prático para o seu dia a dia.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#servicos"
            className="inline-flex justify-center rounded-md bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
          >
            Ver serviços
          </Link>
          <Link
            href="#contacto"
            className="inline-flex justify-center rounded-md border border-yellow-300 px-5 py-3 text-sm font-bold text-yellow-300 transition hover:bg-yellow-300 hover:text-black"
          >
            Falar conosco
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
