// import 'antd/dist/antd.css';
import '../assets/style/main.css';

import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';

import { TooltipProvider } from '~/components/ui/tooltip';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <TooltipProvider>
        <html lang="en">
          <body>{children}</body>
        </html>
      </TooltipProvider>
    </ClerkProvider>
  );
}

export const metadata: Metadata = {
  title: 'PIF Network',
  description: 'The guidance you have always been looking for.',
};
