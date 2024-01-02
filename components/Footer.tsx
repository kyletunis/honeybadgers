import { socials } from './SocialButtons'
  
  export default function Footer() {
    return (
      <footer className="bg-gray-900">
        <div className="mx-autopx-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {socials.map((item) => (
              <a key={item.name} href={item.href} className="text-white hover:text-amber-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-white font-manrope">
              Sponsored by: Island Drywall
            </p>
          </div>
        </div>
      </footer>
    )
  }
  