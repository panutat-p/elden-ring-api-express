export interface ExtendedRequest<T> extends Express.Request {
  body: T;
}

export type ItemCommand = {
  action: string;
  item: Array<string>;
};
