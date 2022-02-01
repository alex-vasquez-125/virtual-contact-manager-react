import 'whatwg-fetch';
import "@testing-library/jest-dom";

import { server } from './mocks/browser';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
