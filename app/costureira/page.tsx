import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Ajuste de jeans",
    image: "/image/jeans-amended.jpeg",
    description: "Ajuste e conserto de jeans para vestir melhor.",
  },
  {
    title: "Ajuste de camisa",
    image: "/image/shir-ammende.jpeg",
    description: "Ajuste de costura, comprimento e pequenos reparos.",
  },
  {
    title: "Ajuste de roupa",
    image: "/image/shirt.jpeg",
    description: "Ajustes simples para mais conforto e melhor caimento.",
  },
  {
    title: "Ajuste de manga",
    image: "/image/suit-amendement-sleeve.jpeg",
    description: "Ajuste de manga para ternos e roupas sociais.",
  },
  {
    title: "Ajuste de terno",
    image: "/image/suit-amendement.jpeg",
    description: "Ajuste de terno para um caimento mais alinhado.",
  },
  {
    title: "Serviço de costureira",
    image: "/image/tailor-icon.jpeg",
    description: "Costura, ajustes e consertos gerais em roupas.",
  },
]

export default function CostureiraPage() {
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
              Costureira
            </p>
            <h1 className="mt-3 text-3xl font-bold sm:text-5xl">
              Serviços de costura e ajustes
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-200 sm:text-lg">
              Ajustes e consertos para camisas, jeans, ternos e roupas do dia a
              dia.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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
