
import Hero from "./_components/Hero"
import {
  AboutSection,
  ContactSection,
  ServiceInfoSection,
  TestimonialsCertificatesSection,
} from "./_components/HomeSections"
import Catergorie from "./_services/Catergorie"

export default function Page() {
  return (
    <div>
      <Hero />
      <Catergorie />
      <AboutSection />
      <ServiceInfoSection />
      <TestimonialsCertificatesSection />
      <ContactSection />
    </div>
  )
}
