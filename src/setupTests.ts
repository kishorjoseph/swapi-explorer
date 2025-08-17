import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'; // Import the matchers from RTL

// extends Vitest's expect with the matchers from @testing-library/jest-dom
// The `vitest` part of the import is crucial for type safety
// It's already been done for you in the test file provided.

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});