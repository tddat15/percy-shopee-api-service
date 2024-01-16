export class ApiResponse<T = any> {
  constructor(
    public code: number,
    public timestamp: number,
    public data: T,
    public success: boolean = true,
  ) {}
}
