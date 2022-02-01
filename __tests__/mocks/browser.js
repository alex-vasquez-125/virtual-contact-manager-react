import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

const server = setupServer(...handlers);
export { server, rest }

// import { setupWorker } from 'msw';
// import { handler } from './handlers';
//
// export const worker = setupWorker(...handler);
