import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, MessageCircle, ShieldCheck, Sparkles, Star } from "lucide-react"

export const whatsappLink = "https://wa.me/5548991204464"
export const googleReviewLink = "https://g.page/r/CbEZNWk2EheKEBM/review"

const serviceHighlights = [
  {
    title: "Consertos e ajustes",
    text: "Reparos em sapatos, bolsas e roupas com acabamento cuidadoso.",
  },
  {
    title: "Serviços rápidos",
    text: "Foto 3x4, xerox e chaveiro para resolver necessidades do dia a dia.",
  },
  {
    title: "Atendimento prático",
    text: "Orientação direta, orçamento claro e entrega combinada com você.",
  },
]

const testimonials = [
  {
    name: "Mariana S.",
    date: "há 2 semanas",
    text: "Atendimento rápido e meu sapato voltou firme para usar no trabalho.",
  },
  {
    name: "Carlos M.",
    date: "há 1 mês",
    text: "Ajustaram minha calça do jeito certo. Serviço caprichado.",
  },
  {
    name: "Juliana P.",
    date: "há 3 semanas",
    text: "Fiz cópia de chave e xerox no mesmo lugar, muito prático.",
  },
  {
    name: "Rafael A.",
    date: "há 1 mês",
    text: "A foto 3x4 ficou pronta rápido e serviu para o documento.",
  },
]

const businessHours = [
  { day: "Segunda-feira", hours: "9h às 18h" },
  { day: "Terça-feira", hours: "7h30 às 18h" },
  { day: "Quarta-feira", hours: "7h30 às 18h" },
  { day: "Quinta-feira", hours: "9h às 18h" },
  { day: "Sexta-feira", hours: "7h30 às 18h" },
  { day: "Sábado", hours: "Fechado" },
  { day: "Domingo", hours: "Fechado" },
]

const address =
  "R. Honória Virgilina Machado, 196 - Real Parque, São José - SC, 88113-478"

export function AboutSection() {
  return (
    <section id="sobre" className="bg-yellow-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border-4 border-black bg-white shadow-lg">
          <Image
            src="/image/suit-amendement.jpeg"
            alt="Ajuste de roupa feito por costureira"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-red-700">
            Sobre nós
          </p>
          <h2 className="mt-2 text-2xl font-bold text-black sm:text-4xl">
            Um ponto completo para consertos e serviços úteis
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            A Real Park Sapataria e Costureira reúne serviços de sapataria,
            costura, chaveiro, xerox e foto 3x4 para ajudar você a resolver tudo
            com rapidez e atenção aos detalhes.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="border-l-4 border-red-600 bg-white p-4">
              <Clock className="size-6 text-red-600" aria-hidden="true" />
              <p className="mt-3 text-sm font-bold text-black">Agilidade</p>
            </div>
            <div className="border-l-4 border-yellow-400 bg-white p-4">
              <ShieldCheck className="size-6 text-red-600" aria-hidden="true" />
              <p className="mt-3 text-sm font-bold text-black">Confiança</p>
            </div>
            <div className="border-l-4 border-black bg-white p-4">
              <Sparkles className="size-6 text-red-600" aria-hidden="true" />
              <p className="mt-3 text-sm font-bold text-black">Capricho</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ServiceInfoSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wide text-red-700">
            Serviços
          </p>
          <h2 className="mt-2 text-2xl font-bold text-black sm:text-4xl">
            Feito para quem precisa resolver sem complicação
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {serviceHighlights.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border-2 border-black bg-yellow-50 p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-black">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-700">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TestimonialsCertificatesSection() {
  const testimonialLoop = [...testimonials, ...testimonials]

  return (
    <section id="depoimentos" className="overflow-hidden bg-white py-12 text-black sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-red-700">
              Depoimentos
            </p>
            <h2 className="mt-2 text-2xl font-bold sm:text-4xl">
              Avaliações dos nossos clientes
            </h2>
          </div>
          <div className="w-full rounded-lg border border-slate-200 bg-white px-5 py-4 shadow-sm sm:w-auto">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-white text-xl font-bold shadow-sm ring-1 ring-slate-200">
                <span className="text-blue-600">G</span>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-950">Google Reviews</p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-900">5,0</span>
                  <div className="flex text-[#fbbc04]" aria-label="5 estrelas">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="size-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <a
              href={googleReviewLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-full justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-red-700"
            >
              Avaliar no Google
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mt-10">
        <div className="marquee overflow-hidden">
          <div className="marquee-track">
            {testimonialLoop.map((review, index) => (
              <article
                key={`${review.name}-${index}`}
                className="mx-2 w-[calc(100vw-2rem)] max-w-[360px] shrink-0 rounded-lg border border-slate-200 bg-white p-5 text-black shadow-md sm:mx-3"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-full bg-red-600 text-base font-bold text-white">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-950">{review.name}</h3>
                      <p className="text-xs text-slate-500">{review.date}</p>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-blue-600" aria-label="Google">
                    G
                  </span>
                </div>
                <div className="mt-4 flex text-[#fbbc04]" aria-label="Avaliação 5 estrelas">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="size-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-700">“{review.text}”</p>
                <p className="mt-4 text-xs font-medium text-slate-500">
                  Avaliação de cliente
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="contacto" className="bg-yellow-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-red-700">
            Contacto
          </p>
          <h2 className="mt-2 text-2xl font-bold text-black sm:text-4xl">
            Fale conosco para orçamento ou atendimento
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            Envie uma mensagem, ligue ou passe na loja para conversar sobre o
            serviço que você precisa.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+5548991204464"
              className="inline-flex justify-center rounded-md bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
            >
              Ligar agora
            </a>
            <a
              href={whatsappLink}
              className="inline-flex justify-center rounded-md border border-black px-5 py-3 text-sm font-bold text-black transition hover:bg-black hover:text-white"
            >
              Enviar WhatsApp
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-lg border-2 border-black bg-white p-6">
            <MessageCircle className="size-7 text-red-600" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-bold text-black">Atendimento</h3>
            <p className="mt-2 text-slate-700">Telefone e WhatsApp</p>
            <p className="mt-1 font-bold text-black">(48) 99120-4464</p>
          </article>
          <article className="rounded-lg border-2 border-black bg-white p-6">
            <MapPin className="size-7 text-red-600" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-bold text-black">Localização</h3>
            <p className="mt-2 break-words text-slate-700">
              {address}
            </p>
          </article>
          <article className="rounded-lg border-2 border-black bg-white p-6 sm:col-span-2">
            <Clock className="size-7 text-red-600" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-bold text-black">Horário de funcionamento</h3>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {businessHours.map((item) => (
                <div
                  key={item.day}
                  className="flex flex-col gap-1 border-b border-slate-200 py-2 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <span className="font-semibold text-black">{item.day}</span>
                  <span className="text-slate-700">{item.hours}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-black px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr]">
        <div>
          <p className="text-lg font-bold sm:text-xl">Real Park Sapataria e Costureira</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">
            Consertos, ajustes, foto 3x4, chaveiro e xerox com atendimento
            simples, rápido e cuidadoso.
          </p>
        </div>
        <div>
          <p className="font-bold text-yellow-300">Menu</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-300">
            <Link href="/#servicos" className="hover:text-yellow-300">Serviços</Link>
            <Link href="/#sobre" className="hover:text-yellow-300">Sobre nós</Link>
            <Link href="/#depoimentos" className="hover:text-yellow-300">Depoimentos</Link>
            <Link href="/#contacto" className="hover:text-yellow-300">Contacto</Link>
          </div>
        </div>
        <div>
          <p className="font-bold text-yellow-300">Serviços</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-300">
            <Link href="/sapataria" className="hover:text-yellow-300">Sapataria</Link>
            <Link href="/costureira" className="hover:text-yellow-300">Costureira</Link>
            <Link href="/foto-3x4" className="hover:text-yellow-300">Foto 3x4</Link>
            <Link href="/chaveiro" className="hover:text-yellow-300">Chaveiro</Link>
            <Link href="/xerox" className="hover:text-yellow-300">Xerox</Link>
          </div>
        </div>
        <div>
          <p className="font-bold text-yellow-300">Contacto</p>
          <div className="mt-3 grid gap-2 text-sm leading-6 text-slate-300">
            <p className="break-words">{address}</p>
            <a href="tel:+5548991204464" className="hover:text-yellow-300">
              (48) 99120-4464
            </a>
            <p>Seg, Qui: 9h às 18h</p>
            <p>Ter, Qua, Sex: 7h30 às 18h</p>
            <p>Sábado e domingo: fechado</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 border-t border-white/15 pt-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Real Park Sapataria e Costureira. Todos os direitos reservados.</p>
        <p>Feito para atendimento local.</p>
      </div>
    </footer>
  )
}

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href={googleReviewLink}
        target="_blank"
        rel="noreferrer"
        className="flex size-12 items-center justify-center rounded-full border border-slate-200 bg-white text-lg font-bold text-blue-600 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
        aria-label="Avaliar no Google"
      >
        G
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="flex size-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-xl"
        aria-label="Enviar mensagem pelo WhatsApp"
      >
        <MessageCircle className="size-7" aria-hidden="true" />
      </a>
    </div>
  )
}
