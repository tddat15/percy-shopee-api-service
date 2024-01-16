export declare class ApiResponseDto<T = void> {
  success: boolean;
  code: number;
  data?: T;
  timestamp: number;
}
export declare class ApiListResponseDto<T> {
  success: boolean;
  code: number;
  data: T[];
  timestamp: number;
}

export declare class PaginatedApiResponseDto<T> {
  skippedRecords: number;
  totalRecords: number;
  data: T[];
  payloadSize: number;
  hasNext: boolean;
}
