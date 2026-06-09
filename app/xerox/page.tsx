import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Cópias xerox",
    image: "/image/xerox-icon.png",
    description: "Cópias de documentos, formulários, certificados e papéis.",
  },
]

export default function XeroxPage() {
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
              Xerox
            </p>
            <h1 className="mt-3 text-3xl font-bold sm:text-5xl">
              Cópias e serviços de documento
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-200 sm:text-lg">
              Cópias rápidas para documentos e papeladas em um lugar prático.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="overflow-hidden rounded-lg border-2 border-black bg-white shadow-md transition hover:-translate-y-1 hover:border-red-600 hover:shadow-xl">
          <div className="relative aspect-[4/3] bg-slate-100">
            <Image
              src={services[0].image}
              alt={services[0].title}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-contain p-10"
            />
          </div>
          <div className="border-t-4 border-yellow-400 p-5">
            <h2 className="text-xl font-bold text-black">{services[0].title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              {services[0].description}
            </p>
          </div>
        </article>
      </section>
    </main>
  )
}
