import './globals.css'
import type { Metadata } from 'next'
import { Rubik, Syne } from 'next/font/google'


const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--ff-rubik',
  display: 'swap'
});
const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--ff-syne',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Manaam Rehan | Embedded Developer',
  description: 'This is my portfolio website. I am an embedded developer. I love to code and learn new things. I am a tech enthusiast and love to explore new technologies.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${rubik.variable} ${syne.variable}`}>{children}</body>
    </html>
  )
}
