const request = require('supertest');
const app = require('../server');

describe('Server', () => {
  it('should return 200 for the root route', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });

  it('should return data from the API route', async () => {
    const res = await request(app).get('/api');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeDefined(); // Check if the response body is defined
  });

  it('should handle errors from the API route', async () => {
    const res = await request(app).get('/api?error=true'); // Simulate an error
    expect(res.statusCode).toEqual(500);
    expect(res.text).toEqual('Error fetching data from API'); // Check error message
  });

});
