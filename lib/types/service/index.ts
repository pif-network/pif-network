const hasMessageError = (error: unknown): error is Error => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
};

export const getErrorMessage = (error: unknown): string => {
  if (hasMessageError(error)) {
    return error.message;
  }

  return 'Something went wrong, please try again later.';
};