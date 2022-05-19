import { fetchData } from './fetchRequest';

test('mocking api request', async () => {
  const mockFetch = await fetchData();
  expect(mockFetch).toHaveProperty('dates');
});
