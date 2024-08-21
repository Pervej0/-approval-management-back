export type TJsonData<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
};
