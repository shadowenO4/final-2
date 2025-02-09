const request = require('supertest');
const app = require('../server');

describe('Server', () => {
  it('should return 200 for the root route', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});
