export type RetryPolicy = {
  attempts: number;
  baseDelayMs: number;
  maxDelayMs: number;
};

export function getRetryDelay(attempt: number, policy: RetryPolicy) {
  const exponential = policy.baseDelayMs * 2 ** Math.max(0, attempt - 1);
  const jitter = Math.floor(Math.random() * 100);
  return Math.min(policy.maxDelayMs, exponential + jitter);
}

export async function withRetry<T>(
  operation: () => Promise<T>,
  policy: RetryPolicy
): Promise<T> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= policy.attempts; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      if (attempt === policy.attempts) break;
      await new Promise(resolve => setTimeout(resolve, getRetryDelay(attempt, policy)));
    }
  }

  throw lastError;
}
