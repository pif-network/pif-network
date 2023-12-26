'use client';

import { useState } from 'react';

import { type AppRouter } from '~/server/api';
import { getBaseUrl, transformer } from './shared';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTRPCReact, httpBatchLink } from '@trpc/react-query';

export const api = createTRPCReact<AppRouter>();

export const TRPCProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    api.createClient({
      transformer: transformer,
      links: [
        httpBatchLink({
          url: getBaseUrl() + '/api/trpc',
        }),
      ],
    })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        {children}
      </api.Provider>
    </QueryClientProvider>
  );
};
