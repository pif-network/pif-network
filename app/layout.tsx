import '~/assets/style/main.css';

import type { Metadata } from 'next';

import { TooltipProvider } from '~/components/ui/tooltip';
import { TRPCProvider } from '~/lib/trpc/client';

import { ClerkProvider } from '@clerk/nextjs';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <TRPCProvider>
        <TooltipProvider>
          <html lang="en">
            <body>
              {children}
              <SpeedInsights />
            </body>
          </html>
        </TooltipProvider>
      </TRPCProvider>
    </ClerkProvider>
  );
}

export const metadata: Metadata = {
  title: 'PIF Network',
  description: 'The guidance you have always been looking for.',
};
