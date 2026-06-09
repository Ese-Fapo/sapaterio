import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Conserto de bolsa",
    image: "/image/bag-amendement.jpeg",
    description: "Costura e reforço para manter sua bolsa em uso no dia a dia.",
  },
  {
    title: "Conserto de zíper de bolsa",
    image: "/image/bag-zip-amadement.jpeg",
    description: "Troca e ajuste de zíper para bolsas que precisam fechar melhor.",
  },
  {
    title: "Zíper de bolsa finalizado",
    image: "/image/bag-zip-done.jpeg",
    description: "Serviço finalizado com acabamento limpo e prático.",
  },
  {
    title: "Reparo de zíper",
    image: "/image/bag-zipper.jpeg",
    description: "Conserto para zíper travado, gasto ou danificado.",
  },
  {
    title: "Conserto de sapato",
    image: "/image/shoe-amendement.jpeg",
    description: "Reparo em solado, costura e desgaste de uso diário.",
  },
  {
    title: "Detalhe de conserto",
    image: "/image/shoe-amendement-2.jpeg",
    description: "Ajuste cuidadoso em áreas danificadas do calçado.",
  },
  {
    title: "Costura de sapato",
    image: "/image/shoe-sewing.jpeg",
    description: "Costura reforçada para recuperar e firmar o calçado.",
  },
  {
    title: "Serviço de sapataria",
    image: "/image/shoe-icon.jpeg",
    description: "Consertos gerais para sapatos, tênis e bolsas.",
  },
]

export default function SapatariaPage() {
  return (
    <main className="bg-yellow-50">
      <section className="bg-black px-4 py-10 text-white sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex rounded-md border border-yellow-300 px-4 py-2 text-sm font-bold text-yellow-300 transition hover:bg-yellow-300 hover:text-black"
          >
            Voltar
          </Link>
          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wide text-red-500">
              Sapataria
            </p>
            <h1 className="mt-3 text-3xl font-bold sm:text-5xl">
              Consertos de sapatos e bolsas
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-200 sm:text-lg">
              Reparos para sapatos e bolsas com acabamento prático para o uso
              diário.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.image}
              className="overflow-hidden rounded-lg border-2 border-black bg-white shadow-md transition hover:-translate-y-1 hover:border-red-600 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="border-t-4 border-yellow-400 p-5">
                <h2 className="text-xl font-bold text-black">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
