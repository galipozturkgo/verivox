import { setupWorker } from 'msw/browser';
import { tariffsHandler } from './Tariffs.handlers';

export const browser = setupWorker(...tariffsHandler);
