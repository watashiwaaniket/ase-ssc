import { GET, POST } from '../products/route';
import { ProductSchema, CartItem } from '@/app/utils/interfaces';

describe('API /products', () => {
  describe('GET', () => {
    it('should return a list of products with status 200', async () => {
      const response = await GET();
      const products = await response.json();

      expect(response.status).toBe(200);
      expect(Array.isArray(products)).toBe(true);
    });
  });

  describe('POST', () => {
    it('should return 201 with a success message for a valid order', async () => {
      const validCart: CartItem[] = [
        { id: '1', quantity: 1 },
        { id: '2', quantity: 2 },
      ];

      const request = new Request('http://localhost:3000/products', {
        method: 'POST',
        body: JSON.stringify(validCart),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(201);
      expect(data.message).toBe('Order Successful!');
      expect(data.order).toBeDefined();
      expect(data.order.length).toBe(2);
      expect(data.order[0].name).toBe('ANC Wireless Earbuds');
    });

    it('should return 400 for an empty cart', async () => {
      const emptyCart: CartItem[] = [];

      const request = new Request('http://localhost/products', {
        method: 'POST',
        body: JSON.stringify(emptyCart),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.message).toBe('Cart is empty');
    });

    it('should return 400 for an invalid item in the cart', async () => {
      const invalidCart = [{ id: '1' , quantity: 0}];

      const request = new Request('http://localhost/products', {
        method: 'POST',
        body: JSON.stringify(invalidCart),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe('Invalid request');
    });

    it('should return 400 for a malformed request body', async () => {
        const malformedBody = 'not a json';

        const request = new Request('http://localhost/products', {
            method: 'POST',
            body: malformedBody,
        });

        const response = await POST(request);
        const data = await response.json();

        expect(response.status).toBe(400);
        expect(data.error).toBeDefined();
    });

    it('should handle items with non-existent IDs gracefully', async () => {
      const cartWithInvalidId: CartItem[] = [
        { id: '999', quantity: 1 },
        { id: '1', quantity: 1 },
      ];

      const request = new Request('http://localhost/products', {
        method: 'POST',
        body: JSON.stringify(cartWithInvalidId),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(201);
      expect(data.message).toBe('Order Successful!');
      expect(data.order.length).toBe(2);
      expect(data.order[0].name).toBe(null);
      expect(data.order[0].quantity).toBe(0);
      expect(data.order[1].name).toBe('ANC Wireless Earbuds');
    });
  });
});

