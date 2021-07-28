import * as React from "react"
import { BookOpenIcon, RssIcon, ViewListIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { StaticImage } from "gatsby-plugin-image"
import Navbar from "../components/Navbar";
import { Link } from "gatsby";
import Head from "../components/Head";

const links = [
  { title: 'About', description: 'Just a little about me, the mind polluter.', icon: BookOpenIcon, location: "/about" },
  { title: 'Studios', description: 'The product studio I created, dedicated almost exclusively to writing tools and writers', icon: ViewListIcon, location: "/studios" },  
  { title: 'Blog', description: 'I write a lot. That is how I pollute your mind.', icon: RssIcon, location: "/" },
]
const social = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/polluterofminds',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/polluterofminds',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  }
]

// markup
const NotFoundPage = () => {
  return (
    <div className="bg-white">
      <Head title={"Whoops!"} />
      <Navbar />
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto py-16 sm:py-24">
          <div className="text-center">            
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              Where are you trying to go?
            </h1>
            <p className="mt-2 text-lg text-gray-500">Where you are is not the way. This is the way:</p>
            <div className="mt-10">
              <StaticImage style={{borderRadius: 1000}} src="../images/mando.jpeg" alt="The Mandalorian" />
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-sm font-semibold text-gray-500 tracking-wide uppercase">Places you might want to go</h2>
            <ul lassName="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
              {links.map((link, linkIdx) => (
                <li key={linkIdx} className="relative py-6 flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-50">
                      <link.icon className="h-6 w-6 text-indigo-700" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-medium text-gray-900">
                      <span className="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <Link to={link.location} className="focus:outline-none">
                          <span className="absolute inset-0" aria-hidden="true" />
                          {link.title}
                        </Link>
                      </span>
                    </h3>
                    <p className="text-base text-gray-500">{link.description}</p>
                  </div>
                  <div className="flex-shrink-0 self-center">
                    <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a href="/" className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                Or go back home<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 py-12 text-center md:flex md:justify-between">
          <p className="text-base text-gray-400">&copy; Workflow, Inc. All rights reserved.</p>
          <div className="mt-6 flex justify-center space-x-8 md:mt-0">
            {social.map((item, itemIdx) => (
              <a key={itemIdx} href={item.href} className="inline-flex text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default NotFoundPage
