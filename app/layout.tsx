import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Kinetic Devlog',
  description: 'Development log for the Kinetic F1 Live Dashboard.',
  openGraph: {
    title: 'Kinetic Devlog',
    description: 'Development log for the Kinetic F1 Live Dashboard.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kinetic Devlog',
    description: 'Development log for the Kinetic F1 Live Dashboard.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
