import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Foto 3x4 para documento",
    image: "/image/passport 3×4.jpeg",
    description: "Foto 3x4 rápida para documentos, cadastros e fichas.",
  },
  {
    title: "Foto para passaporte",
    image: "/image/passport3×4 -2.jpeg",
    description: "Preparação de foto com padrão limpo para documento.",
  },
  {
    title: "Serviço de foto",
    image: "/image/Passport-Opener.webp",
    description: "Atendimento para fotos de identificação e passaporte.",
  },
  {
    title: "Foto 3x4",
    image: "/image/Foto 3x4 icon.png",
    description: "Serviço rápido de foto 3x4 com atendimento local.",
  },
]

export default function Foto3x4Page() {
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
              3x4 Foto
            </p>
            <h1 className="mt-3 text-3xl font-bold sm:text-5xl">
              Fotos para documentos
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-200 sm:text-lg">
              Fotos 3x4 para documentos, identificações, passaportes e cadastros.
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
