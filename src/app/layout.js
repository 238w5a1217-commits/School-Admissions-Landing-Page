import "./globals.css";

export const metadata = {
  title: "Admissions Open 2027–28 | EAK International School",
  description: "Official admissions landing page for EAK International School (Academic Session 2027–28). Explore our CBSE & Cambridge curriculum, 15-acre modern campus, transparent fee structure, and 5-step admission process.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Roboto+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Tailwind CSS CDN with Standard Prestige Educational Palette */}
        <script src="https://cdn.tailwindcss.com/3.4.17"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      navy: {
                        900: '#0f172a',
                        800: '#0f2942',
                        700: '#1e3a8a',
                        600: '#1e40af',
                        50: '#f0f7ff',
                      },
                      primary: '#1e40af',
                      accent: '#d97706',
                      gold: '#f59e0b',
                      emerald: {
                        700: '#047857',
                        600: '#059669',
                        50: '#ecfdf5',
                      },
                    },
                    fontFamily: {
                      sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
                      heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
                      mono: ['Roboto Mono', 'monospace'],
                    }
                  }
                }
              }
            `,
          }}
        />
      </head>
      <body className="bg-white text-slate-900 font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
