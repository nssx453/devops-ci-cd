const request = require('supertest');
const app = require('./app');

describe('App tests', () => {
  test('GET / should return string', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('KT3 App is running!');
  });

  test('GET /health should return ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});
