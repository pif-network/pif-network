import { httpBatchLink } from '@trpc/client';
import { appRouter } from '~/server/api';
import { getBaseUrl } from './shared';

// export const rscApi = appRouter.createCaller({
//   links: [
//     httpBatchLink({
//       url: getBaseUrl() + '/api/trpc',
//     }),
//   ],
// });
