import './globals.css'
import type { Metadata } from 'next'

// ** Provider
import CartProvider from '@/providers/CartProvider';

// ** Toast
import { Toaster } from 'react-hot-toast';

// ** Components
import NavBar from './components/nav/NavBar';
import Footer from './components/footer/Footer';

// ** Next Font
import localFont from '@next/font/local';


const vazir = localFont({
  src: [
    {
      path: '../public/fonts/Vazir-Medium.ttf',
      weight: '400'
    },
    {
      path: '../public/fonts/Vazir-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-vazir'
})



export const metadata: Metadata = {
    title: 'Digi-Shop',
    description: 'Online Shop App',
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <html lang="fa" dir='rtl' className='__className_f0d1a5'>
            <body className={`text-slate-700`}>

                <Toaster toastOptions={{
                    style: {
                        background: 'rgb(51 65 85)',
                        color: '#fff',
                    },
                }} />
                <CartProvider>
                    <div className='flex flex-col min-h-screen'>
                        <NavBar />
                        <main className='flex-grow'>
                            {children}
                        </main>
                        <Footer />
                    </div>
                </CartProvider>

            </body>
        </html>
    )
}
