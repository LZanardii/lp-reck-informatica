import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Process } from '@/components/process'
import { Business } from '@/components/business'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Process />
        <Business />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
