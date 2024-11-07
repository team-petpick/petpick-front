import { http, HttpResponse } from 'msw';
import orders from './orders.json';
export const handlers = [
  http.get('/orders/:ordersId', () => {
    return HttpResponse.json(orders);
  }),
];
