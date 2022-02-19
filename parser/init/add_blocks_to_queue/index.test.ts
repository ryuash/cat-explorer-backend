import { pgp } from '@db';
import {
  setupTables, tearDownData, tearDownTables,
} from '@tests/utils';

beforeAll(async () => {
  await setupTables();
});
afterAll(async () => {
  await tearDownTables();
  pgp.end();
});

describe('Integration test cases', () => {
  afterEach(async () => {
    await tearDownData();
  });

  it('should match the after count', async () => {
    expect(1 + 2).toBe(3);
  });

  it('should match the after count', async () => {
    expect(4 + 2).toBe(6);
  });
});
