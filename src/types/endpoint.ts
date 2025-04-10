export type ResponseDefinition = {
  status: number;
  description: string;
  type: any;
  isArray?: boolean;
};

export type HttpMethod =
  | 'GET'
  | 'POST'
  | 'PATCH'
  | 'PUT'
  | 'DELETE'
  | 'OPTIONS'
  | 'HEAD';

export type EndpointParams = {
  method: HttpMethod;
  summary: string;
  route: string;
  responses: ResponseDefinition[];
};
