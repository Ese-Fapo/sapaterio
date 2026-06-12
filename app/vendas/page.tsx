import Image from "next/image"
import Link from "next/link"

const sizes = ["34", "35", "36", "37", "38", "39"]

const boots = [
  "/image/new-shoe-1.jpeg",
  "/image/new-shoe-2.jpeg",
  "/image/new-shoe-3.jpeg",
  "/image/new-shoe-4.jpeg",
  "/image/new-shoe-5.jpeg",
  "/image/new-shoe-6.jpeg",
  "/image/new-shoe-7.jpeg",
  "/image/new-shoe-8.jpeg",
  "/image/new-shoe-9.jpeg",
]

export default function VendasPage() {
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
              Vendas
            </p>
            <h1 className="mt-3 text-3xl font-bold sm:text-5xl">
              Botas femininas de inverno
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-200 sm:text-lg">
              Botas femininas pretas, do mesmo modelo de inverno, disponiveis
              nos tamanhos :34, 35, 36, 37, 38 e 39.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {boots.map((image, index) => (
            <article
              key={image}
              className="overflow-hidden rounded-lg border-2 border-black bg-white shadow-md transition hover:-translate-y-1 hover:border-red-600 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] bg-slate-100">
                <Image
                  src={image}
                  alt={`Bota feminina de inverno preta ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="border-t-4 border-yellow-400 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-black">
                      Bota feminina de inverno
                    </h2>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-red-600">
                      Cor preta
                    </p>
                  </div>
                  <span className="rounded-md bg-black px-3 py-1 text-xs font-bold uppercase tracking-wide text-yellow-300">
                    Venda
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-700">
                  Modelo feminino de inverno. Todos os pares seguem o mesmo
                  tipo de bota.
                </p>

                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    Tamanhos BR
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <span
                        key={size}
                        className="inline-flex size-9 items-center justify-center rounded-full border border-black bg-white text-sm font-bold text-black"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
