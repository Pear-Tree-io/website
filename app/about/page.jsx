import { revalidateTag } from 'next/cache';
import { SubmitButton } from '../../components/submit-button';
import { Markdown } from '../../components/markdown';

export const metadata = {
    title: 'Privacy Policy'
};

const tagName = 'randomWiki';
const randomWikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/random/summary';
const maxExtractLength = 200;
const revalidateTTL = 60;

export default async function Page() {

    return (
        <main>
        <h1>About</h1>
        <p>Our company, established on May 9, 2024, is growing with a vision to turn imagination into reality through the fusion of technology and ideas. As we grow, the most important aspect we consider is remembering and valuing all our experiences. Currently, we are developing a game called &apos;Count Sheep&apos; which will become a solid stepping stone for our future.</p>
        </main>
    );
}
