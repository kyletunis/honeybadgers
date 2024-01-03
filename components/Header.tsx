"use client"
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'home', href: '/' },
  { name: 'team', href: '/pages/team' },
  { name: 'schedule', href: '/pages/schedule' },
]

const mobileNavigation = [
  { name: 'home', href: '/' },
  { name: 'team', href: '/pages/team' },
  { name: 'schedule', href: '/pages/schedule' },
  { name: 'dressing room', href: '/pages/dressing-room' }
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (

    // Header
    <header className="bg-gray-900 text-white shadow-lg border-b border-gray-800/60">
      <nav className="mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex flex-1">
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-julius font-semibold tracking-wide hover:text-amber-500 hover:drop-shadow-md">
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 text-amber-500" aria-hidden="true" />
            </button>
          </div>
        </div>
        <a href="/" className="-m-1.5 p-1.5">
          <span className="md:text-3xl font-fugaz tracking-wide text-amber-500 drop-shadow-md">HONEY</span>
          <span className="md:text-3xl font-fugaz tracking-wide text-white drop-shadow-md"> BADGERS</span>
        </a>
        <div className="flex flex-1 justify-end">
          <a href="/pages/dressing-room" className="text-xs font-julius tracking-wide hover:text-amber-500 hover:drop-shadow-md">
            <span className="md:inline-flex md:mr-2 hidden font-julius">
              Go To Dressing Room
            </span>
            <span aria-hidden="true" className="hidden md:inline text-amber-500">
              &rarr;
            </span>
          </a>
        </div>
      </nav>

      {/* Mobile Section */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-1">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 "
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <a href="/" className="-m-1.5 p-1.5 inline-flex">
              <span className="sr-only">Honey Badgers</span>
              <h1 className="text-sm font-fugaz text-amber-500">H</h1>
              <h1 className="text-sm font-fugaz">B</h1>
            </a>
          </div>
          <div className="mt-6 space-y-2">
            {mobileNavigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-julius font-semibold leading-7  hover:bg-amber-500"
              >
                {item.name}
              </a>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
