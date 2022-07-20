export type DefaultServerResponse<T> = {
  total_rows: string;
  results: T[];
};
