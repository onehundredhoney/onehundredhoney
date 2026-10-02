import type { Metadata } from "next";
import { Outfit, Playfair_Display, League_Spartan, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const leagueSpartan = League_Spartan({ subsets: ["latin"], variable: "--font-league-spartan" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "OneHundred Honey",
    description: "Bringing the purity of honey to your table.",
    icons: {
        icon: '/favicon-96x96.png',
        shortcut: '/favicon-96x96.png',
        apple: '/apple-icon-180x180.png',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            </head>
            <body className={`${outfit.variable} ${playfair.variable} ${leagueSpartan.variable} ${inter.variable} font-sans`}>
                {children}
                {/* Klaviyo Sign Up Form */}
                <Script
                    src="https://static.klaviyo.com/onsite/js/SuxZhp/klaviyo.js?company_id=SuxZhp"
                    strategy="afterInteractive"
                />
                <Script id="klaviyo-init" strategy="afterInteractive">
                    {`!function(){if(!window.klaviyo){window._klOnsite=window._klOnsite||[];try{window.klaviyo=new Proxy({},{get:function(n,i){return"push"===i?function(){var n;(n=window._klOnsite).push.apply(n,arguments)}:function(){for(var n=arguments.length,o=new Array(n),w=0;w<n;w++)o[w]=arguments[w];var t="function"==typeof o[o.length-1]?o.pop():void 0,e=new Promise((function(n){window._klOnsite.push([i].concat(o,[function(i){t&&t(i),n(i)}]))}));return e}}})}catch(n){window.klaviyo=window.klaviyo||[],window.klaviyo.push=function(){var n;(n=window._klOnsite).push.apply(n,arguments)}}}}();`}
                </Script>
            </body>
        </html>
    );
}
