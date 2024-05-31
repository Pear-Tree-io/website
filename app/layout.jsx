import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Pear Tree Co.,Ltd.'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko" data-theme="lofi">
            <head>
                <link rel="icon" href="/peartree_logo_192.png" sizes="any" />
            </head>
            <body className="antialiased text-black">
                
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <Header />
                        <div className="grow">{children}</div>
                        <Footer />

                </div>
            </body>
        </html>
    );
}
