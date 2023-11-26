import './globals.css'
import type { Metadata } from 'next'
import { Inter, IBM_Plex_Sans, Poppins } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

const ibmPlex = IBM_Plex_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700',],
  subsets: ['latin'],
  variable: '--font-ibm'
})

export const metadata: Metadata = {
  title: 'Joël Vappiani - Developer Fullstack JS',
  description: 'React | Nextjs | Node | Express | NestJS | MongoDB ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlex.variable} ${poppins.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
