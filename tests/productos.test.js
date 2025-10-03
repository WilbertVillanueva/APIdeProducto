const request = require('supertest');
const app = require('../server');  // Suponiendo que tu app está en server.js

describe('GET /productos', () => {
  it('debe devolver todos los productos', async () => {
    const response = await request(app).get('/productos');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
