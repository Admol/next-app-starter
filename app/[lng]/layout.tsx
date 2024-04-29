import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { dir } from 'i18next'
import PrelineScript from "@/app/[lng]/components/PrelineScript";
import {fallbackLng, languages} from "@/app/i18n/settings";
import {useTranslation} from "@/app/i18n";

const inter = Inter({ subsets: ["latin"] });


// @ts-ignore
export async function generateMetadata({ params: { lng } }) {
    if (languages.indexOf(lng) < 0) lng = fallbackLng
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = await useTranslation(lng,"translation")
    return {
        title: t('site_title'),
        keywords: t('site_keywords'),
        description: t('site_description'),
    }
}

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }))
}

// @ts-ignore
function RootLayout({ children, params: { lng }}) {
    return (
        <html suppressHydrationWarning lang={lng} dir={dir(lng)} >
        <body className={inter.className}>{children}</body>
        </html>
    );
}

export default RootLayout;