import { setupServer } from 'msw/node';
import { tariffsHandler } from './Tariffs.handlers';

export const server = setupServer(...tariffsHandler);
