const supertest = require('supertest');
const app = require('../app/app');
const api = supertest(app);

/**
 * ************************** UNIT TEST SUITES*******************************************
 */

/**
 * Test when api works fine. STATUS 200
 */
test('videos are returned as json', async () => {
  const searchQuery = 'prueba'; 
  const response = await api.get(`/api/youtube?search=${searchQuery}`);

  expect(response.status).toBe(200);
  expect(response.body).toBeDefined(); 
  expect(Array.isArray(response.body)).toBe(true); 

});

/**
 * Test when there is no RequestParam. STATUS 400
 */
test('no request param, should return bad request', async () => {
  const response = await api.get(`/api/youtube?search`);

  expect(response.status).toBe(400);
  expect(response.body).toEqual({ error: 'Query parameter search is missing' });

});

/**
 * Test when endpoint is badly written. STATUS 404
 */
test('endpoint badly written, should return not found', async () => {
  const response = await api.get(`/api/youtu`);

  expect(response.status).toBe(404);
});
