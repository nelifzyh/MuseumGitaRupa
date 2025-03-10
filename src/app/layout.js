export const metadata = {
    title: "Museum GitaRupa",
    description: "Cari sejarah tentang seni gita dan rupa disini",
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' className='scroll-smooth'>
            <head>
                <link
                    href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap'
                    rel='stylesheet'
                />
            </head>
            <body>{children}</body>
        </html>
    );
}