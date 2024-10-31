import { buildBatchId } from '../helpers/buildBatchId';

describe('buildBatchId', () => {
  it('should concatenate session ID and address with a separator', () => {
    const sessionId = '123';
    const address = 'moa1...';
    const expectedBatchId = '123-moa1...';

    const result = buildBatchId({
      sessionId,
      address
    });

    expect(result).toBe(expectedBatchId);
  });

  it('should handle numeric session ID', () => {
    const sessionId = 456;
    const address = 'moa1...';
    const expectedBatchId = '456-moa1...';

    const result = buildBatchId({
      sessionId,
      address
    });

    expect(result).toBe(expectedBatchId);
  });
});
