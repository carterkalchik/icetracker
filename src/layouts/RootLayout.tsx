import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { MobileNav } from './MobileNav'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export function RootLayout() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header onMenuToggle={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
