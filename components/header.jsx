import Image from 'next/image';
import Link from 'next/link';
import pearTreeLogo from 'public/peartree_logo_192.png';

const navItems = [
    // { linkText: 'Home', href: '/' },
    { linkText: 'About', href: '/about' },
    { linkText: 'Privacy Policy', href: '/privacy-policy' },
    { linkText: 'Terms Of Service', href: '/terms-of-service' },
    // { linkText: 'Image CDN', href: '/image-cdn' },
    // { linkText: 'Edge Function', href: '/edge' },
    // { linkText: 'Blobs', href: '/blobs' },
    // { linkText: 'Classics', href: '/classics' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4">
            <Link href="/">
                <Image src={pearTreeLogo} alt="Pear Tree Logo" />
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="inline-block px-1.5 py-1 transition hover:opacity-80 sm:px-3 sm:py-2">
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
