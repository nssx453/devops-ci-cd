const { Client } = require('pg');

describe('Postgres DB connection', () => {
  test('should connect to the database successfully', async () => {
    const client = new Client({
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME || 'testdb',
      user: process.env.DB_USER || 'testuser',
      password: process.env.DB_PASSWORD || 'testpassword',
    });

    await client.connect();
    const res = await client.query('SELECT 1 as result');
    expect(res.rows[0].result).toBe(1);
    await client.end();
  });
});
