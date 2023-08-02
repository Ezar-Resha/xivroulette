import "./globals.css";
import type { Metadata } from "next";
import { StoreProvider } from "./storeProvider";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "XIV Role Randomizer",
    description: "Spice up your roulettes with random roles",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StoreProvider>{children}</StoreProvider>
                <Analytics />
            </body>
        </html>
    );
}
