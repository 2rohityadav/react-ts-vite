import { renderHook } from '@testing-library/react';

import useCounter from '../use-counter';

describe('Counter custom hook test cases', () => {
  it('should use counter', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
    expect(typeof result.current.increment).toBe('function');
  });
});
