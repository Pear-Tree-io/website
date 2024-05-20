import { revalidateTag } from 'next/cache';
import { SubmitButton } from '../../components/submit-button';
import { Markdown } from '../../components/markdown';

export const metadata = {
    title: 'On-Demand Revalidation'
};

const tagName = 'randomWiki';
const randomWikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/random/summary';
const maxExtractLength = 200;
const revalidateTTL = 60;

const explainer = `
Effective Date: May 20th, 2024

Thank you for playing our games! This Privacy Policy describes:

The ways we collect personal data about you and why we do so

How we use your personal data, and

The choices you have about your personal data.

This Privacy Policy applies to Pear Tree's games, store, sites, and related services, which we here collectively call the Service. We may periodically update this Privacy Policy by posting a new version on peartree.com. If we make any material changes, we will notify you as required under applicable law, including by posting a notice in the Service prior to the change becoming effective. Your continued use of the Service after the effective date will be subject to the new Privacy Policy.

CONTACT US
If you have questions about data protection, or if you have any requests for resolving issues with your personal data, we encourage you to primarily contact us through the support features within each Pear Tree game, so we can reply to you more quickly. Alternatively, you may contact:

Name of the controller: Pear Tree
Address: 79, Gimpohangang 9-ro, Gimpo-si, Gyeonggi-do, Republic of Korea
Attn: Privacy
email: contactus@pear-tree.io

THE DATA WE COLLECT
The categories of personal data we collect depend on the Services you use, and the requirements of applicable law.

Data you provide us directly.
Contact information (such as email address)

Player name or tag and password

Profile information (such as profile photo)

Your messages and other content you submit when you use the Service (such as chat logs and player support tickets)

Data you provide in connection with surveys, promotions, sweepstakes, competitions, and other events

Other data you choose to give us (such as name and phone number when you participate in (Pear Tree Creators or Pear Tree Make)

Our payment service providers will collect your payment details in connection with any purchases you make through the Pear Tree Store

Data we collect automatically.
Data about your account and game progress, including in most cases an automatically created internal account ID

Your IP address and mobile device identifiers (such as your device or advertising ID)

Data about your device, such as device name and operating system, browser type and language, internet service provider, and mobile carrier

Data we collect with cookies and similar technologies (see more below)

Approximate location data (as derived from IP address)

Data about your use of the Service, such as gameplay data, purchases made, and your interactions with other players inside the Service

You also have the option to create a Pear Tree ID using your email address or other contact information.

Data we collect from our partners.
We also use third-party partners, such as social networking sites, data analytics providers, and advertising networks to supplement information we have about you, such as:

Data we receive if you link a third-party tool with the Service (such as LINE, WeChat, or Kakao in some markets)

Demographic data (such as to determine the coarse location of your IP address)

Data to fight fraud (such as refund abuse in games or click fraud in advertising)

Data from platforms that the games run on or data from payment service providers (such as payment verification data)

Data for advertising and analytics purposes (such as surveys), so we can provide you a better Service

Data that you have made available to us from a third-party service (such as LINE, WeChat, or Kakao in some markets) via your privacy settings

WHY DO WE COLLECT YOUR DATA
We use your data for a variety of business purposes, such as:

To make the Service work.
To perform the contract, we process data necessary to

Create accounts and allow you to play our games and use our Service

Operate the Service

Verify and confirm payments

Provide and deliver products and services you request

Send you Service-related communications

To make the Service more suitable for our players.
To provide a great Service to our players, we have a legitimate interest to collect and process necessary data to

Update and develop player profiles

Develop and improve the Service and player experience

Manage our relationship with you

Provide social features as part of the Service

Customize your Service experience

Respond to your comments and questions and provide player support

Provide you Pear Tree offers in the Service as well as in other websites and services (including by email)

Send you related information, such as updates, security alerts, and support messages

Enable you to communicate with other players

To show personalized advertisements.
To show you personalized advertisements in the Service and elsewhere (including email) we have a legitimate interest to process necessary data to

Track the content you access in connection with the Service and your online behavior

Deliver, target, and improve our advertising and the Service

For information on how to opt-out from personalized advertisements, see section 'Your Rights and Options' below.

To keep the Service safe and fair.
Ensuring a level playing field in the Service is a top priority for us. For more information on our acceptable use policy; Pear Tree Terms of Service.

In order to keep the Service and its social features safe and fair, to fight fraud and ensure acceptable use otherwise, we have a legitimate interest to process necessary data to

Analyze and monitor the use of the Service and its social features

Moderate chats either automatically or manually

Take action against fraudulent or misbehaving players

To analyze, profile, and segment.
In all of the above cases and purposes, we may analyze, profile, and segment all collected data.

With your consent.
With your consent, we may process your data for additional purposes.

We may also collect and use your device identifiers to display and personalize in-game ads and serve behaviorally targeted advertising as explained below. Where applicable, we may collect your advertising identifier (IDFA, GAID), vendor identifier, IP address, device ID, and other device identifiers (country, OS version, device model, client version) for these purposes. Under applicable privacy laws, including the General Data Protection Regulation (GDPR), we are required to ask your consent to do so.

This data is shared with your consent so that our ad partners can deliver the right ad and optimize the ad content to make sure you don’t see the same ad multiple times. We share your device identifiers with selected partners for such ad delivery and personalization.

You can manage your consent in the game settings and limit ad tracking in your device settings. Please note that opt-outs are specific to each browser and device and it may take a little bit of time before your opt-out will take effect.

For mobile advertising in apps, you can reset your Advertising Identifier and depending on your device, select to opt out of interest-based ads (Android) or turn on the Limit Ad Tracking setting (iOS).

The partners operate the ad network and mediation platform, as well as facilitate and participate in ad inventory bidding. The partners may also use the device identifiers for fraud detection purposes based on their legitimate interest. For more information, please check the partners’ privacy policies.

ironSource Privacy Policy: https://developers.is.com/ironsource-mobile/air/ironsource-mobile-privacy-policy/#step-1

Vungle Privacy Policy: https://vungle.com/privacy/

Google Privacy Policy: https://policies.google.com/privacy

Fyber Privacy Policy: https://www.digitalturbine.com/fyber-services-privacy-statement/

Liftoff Privacy Policy: https://liftoff.io/privacy-policy/

Mintegral Privacy Policy: https://www.mintegral.com/en/privacy

Supersonic Privacy Policy: https://supersonic.com/privacy/

Unity Ads Privacy Policy: https://unity.com/legal/privacy-policy

Facebook Privacy Policy: https://www.facebook.com/privacy/policy/

Apple Search Ads: https://searchads.apple.com/privacy

Applovin Privacy Policy: https://www.applovin.com/privacy/

WHO CAN SEE YOUR DATA
Apart from Pear Tree, your data can be accessed by others in the following situations:

Other players and users.
Social features are a core component of our games. Other players and users may, for example, see your profile data, in-game activities, and read the messages you have posted.

Our service providers.
Pear Tree has vendors who help us to provide the Service. These vendors process your data only at and according to Pear Tree's instructions to provide the Service, and perform tasks such as hosting, player support, advertising, analytics, and fraud prevention.

Other companies and public authorities.
In order to verify payments (with payment providers such as Paypal) and combat fraud and illegal activity, we may process and disclose data with other companies and organizations and provide it to public authorities in response to lawful requests.

We may also disclose your data based on your consent, to comply with the law, or to protect the rights, property, or safety of us, our players, or others.

Advertising and Social Media partners.
The Service includes features from our partners, such as social media interaction tools, functionalities through application programming interfaces (APIs) or software development kits (SDKs), and in-game advertising. A list of these partners is available at peartree.com/en/partner-opt-out. These partners may access your data and operate under their own privacy policies. We encourage you to check their privacy policies to learn more about their data processing practices.

These partners may access data regarding your activities and your device (such as your IP address, mobile identifiers, page(s) visited, location, time of day). We may also combine and share data we have collected about you with third-party advertising partners. These advertising partners may use this data (and similar data collected from other services) for purposes of delivering targeted advertisements to you when you visit third-party services within their networks. These partners may operate under their own privacy policies. This practice is commonly referred to as “interest-based advertising” or “online behavioral advertising.” If you prefer not to share your personal data with third-party advertising partners, you may follow the instructions in “Your Rights and Options” below.

INTERNATIONAL DATA TRANSFERS
Our Service is global by nature and your data can therefore be transferred to anywhere in the world. Because different countries may have different data protection laws than your own country, we take steps to ensure adequate safeguards are in place to protect your data as explained in this Privacy Policy. Adequate safeguards that we may use include standard contractual clauses approved by the EU Commission and other lawful safeguards.

YOUR RIGHTS AND OPTIONS
Opt out of marketing emails and other direct marketing.
Where allowed under applicable laws, Pear Tree may send you marketing communications based on the existing customer relationship.

You may opt out of receiving promotional communications, such as marketing emails from us by following the instructions in such communications, or by changing your in-game settings. The updated settings may not be effective immediately. Note that you may still continue to receive non-promotional communications from us, such as communications regarding the Service or updates to our Pear Tree Terms of Service or this Privacy Policy or transactional information e.g. relating to your purchases on the Service.

Push Notifications
We may send you push notifications through our mobile applications. You may at any time opt out from receiving these types of communications by changing the settings on your mobile device.

Opt-out of targeted advertising.
You can opt-out of interest-based advertising on mobile applications by checking the privacy settings of your Android or iOS device and turning off “Allow Apps to Request to Track” or selecting "Limit Ad Tracking" (Apple iOS) or "Opt-out of Interest Based Ads" (Android). For more information, see also: peartree.com/en/partner-opt-out.

You can also opt out from personalized in-game offers through the options provided in the game settings (where applicable).

Access the personal data we hold about you.
If you request, we will provide you a copy of your personal data in an electronic format.

Your other rights.
You also have the right to correct your data, have your data deleted, object to how we use or share your data, and restrict how we use or share your data. You can always withdraw your consent.

We will respond to all requests within a reasonable timeframe. If you have an unresolved privacy or data use concern that we have not addressed satisfactorily, you may also contact your local data protection authority within the European Economic Area, Switzerland, or the UK for unresolved complaints.

If you wish to exercise any of your data subject rights described above, please use the support options described in “Contact Us” above. We will respond to all requests in accordance with applicable laws. To protect your privacy, we may also take additional steps to verify your identity before fulfilling your request, such as by requesting you provide us a purchase receipt or other account information, asking you to link your email address with your game account (for example through Pear Tree ID), or asking you to answer questions regarding your activities on our Services. Once you have verified your identity, you may also designate an authorized agent to exercise your rights on your behalf by providing the agent’s contact information to our customer support staff, as required by applicable law.

You have the right not to receive discriminatory treatment as a result of your exercise of these rights.

COOKIES AND SIMILAR TECHNOLOGIES
Like most online services, we and our partners use cookies and similar technologies to provide and personalize the Service, analyze use, target advertisements, and prevent fraud. Cookies and similar technologies allow us and our partners to store preferences and track your activities within the Service. Note that our partners may operate under their own privacy policies.

We and our partners collect and store information about users' interactions with unaffiliated websites and applications that use our technologies, including cookies and similar tracking technologies. This allows us to infer the presence of a common user or household behind multiple devices or browsers, for instance, and then link those browsers and devices into a device graph. We do so in order to

detect and prevent fraud;

improve the Service;

allow users to use the Service on one device and pick up seamlessly where they left off on another device;

analytics, personalization, and attribution;

limit the number of times a user is shown the same advertisement, across all known or inferred devices; and/or

provide personalized advertising on each device that is inferred from the browsing patterns on all of the devices.

You can disable cookies in your browser settings, but some parts of the Service may then not function properly. Here are links to some popular browsers where you can adjust your cookie and web data settings:

Apple Safari

Google Chrome

Microsoft Edge

Mozilla Firefox

For display advertising on the Web, you can also adjust your browser settings to limit certain tracking by means of cookies, and by visiting the following sites:

http://www.aboutads.info/choices and http://www.youronlinechoices.eu/.

On some of our websites, we use third-party analytics and telemetry providers and certain marketing providers for the above purposes. Where applicable, we ask for your consent on the site.

Google Analytics for visitor and usage analytics

Google Ads for ad targeting, analytics, and reporting

Facebook Pixel for marketing

Please note that above 3rd parties are not necessarily being used at all sites, or on all market areas. For further information (including how to opt out), please visit peartree.com/en/partner-opt-out.

HOW DO WE PROTECT YOUR DATA
Security Safeguards.
In order to help ensure a secure and safe player experience, we are continuously developing and implementing administrative, technical, and physical security measures to protect your data from unauthorized access or against loss, misuse, or alteration.

Data retention.
We retain your data for as long as your account is active or as needed to provide you the Service. We may for example periodically de-identify unused game accounts, and we may regularly review and de-identify unnecessary data.
Note that if you ask us to remove your personal data, we will retain your data as necessary for our legitimate business interests, such as to comply with our legal obligations, resolve disputes, and enforce our agreements.

CHILDREN
Protecting children’s privacy online is very important to us. Generally, our Services are not directed to children under 13 (or other ages as required by local law), and the Services do not knowingly collect personal data from children, except as described in the following paragraph.

For games that are not directed at children but nonetheless may appeal to them, we take additional steps to limit access to these Services based on the player’s age. For these Services, when a player indicates they are under 13 (or the applicable age in their territory), we will limit their access to certain features, such as social media and chat features, as well as certain types of notification alerts. We also limit the processing of personal data to only what is necessary to support the internal operations of our Services.

Please note that for some of our Services we may use a higher age limit (such as 16) than described in the above two paragraphs. We do this to provide a safe game experience for our players and to protect Young Players.

If you are a parent or guardian and wish to review personal data collected from your child, or have that information modified or deleted, you may contact us as described above. If we become aware that a child has provided us with personal data contrary to the above, we will delete any personal data we have collected, unless we have a legal obligation to keep it, and terminate the child’s account and/or revert them to the underage experience, as applicable.`;


export default async function Page() {
    async function revalidateWiki() {
        'use server';
        revalidateTag(tagName);
    }

    return (
        <>
            <h1>PRIVACY POLICY</h1>
            <p1>{explainer}</p1>
            {/* <Markdown content= /> */}
            {/* <form className="mt-4" action={revalidateWiki}>
                <SubmitButton text="Click to Revalidate" />
            </form>
            <RandomWikiArticle /> */}
        </>
    );
}

async function RandomWikiArticle() {
    const randomWiki = await fetch(randomWikiUrl, {
        next: { revalidate: revalidateTTL, tags: [tagName] }
    });

    const content = await randomWiki.json();
    let extract = content.extract;
    if (extract.length > maxExtractLength) {
        extract = extract.slice(0, extract.slice(0, maxExtractLength).lastIndexOf(' ')) + ' [...]';
    }

    return (
        <div className="bg-white text-neutral-600 card my-6 max-w-2xl">
            <div className="card-title text-3xl px-8 pt-8">{content.title}</div>
            <div className="card-body py-4">
                <div className="text-lg font-bold">{content.description}</div>
                <p className="italic">{extract}</p>
                <a target="_blank" rel="noopener noreferrer" href={content.content_urls.desktop.page}>
                    From Wikipedia
                </a>
            </div>
        </div>
    );
}
