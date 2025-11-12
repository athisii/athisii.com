import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "My World",
    description: "A glimpse into my world.",
    icons: {
        icon: "/favicon.png",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    );
}
