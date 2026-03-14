import type { NextApiResponse } from "next";

export type ApiError = {
  code: string;
  message: string;
  details?: Array<{ field?: string; message: string }>;
};

function errorResponse(res: NextApiResponse, error: ApiError, status: number) {
  res.status(status).json({ error });
}

export const Errors = {
  badRequest: (res: NextApiResponse, message = "Bad request", details?: ApiError["details"]) =>
    errorResponse(res, { code: "BAD_REQUEST", message, details }, 400),
  unauthorized: (res: NextApiResponse, message = "Admin access required") =>
    errorResponse(res, { code: "UNAUTHORIZED", message }, 401),
  forbidden: (res: NextApiResponse, message = "Forbidden") =>
    errorResponse(res, { code: "FORBIDDEN", message }, 403),
  notFound: (res: NextApiResponse, message = "Resource not found") =>
    errorResponse(res, { code: "NOT_FOUND", message }, 404),
  validation: (res: NextApiResponse, message: string, details?: ApiError["details"]) =>
    errorResponse(res, { code: "VALIDATION_ERROR", message, details }, 422),
  tooManyRequests: (res: NextApiResponse, message = "Too many requests") =>
    errorResponse(res, { code: "RATE_LIMIT_EXCEEDED", message }, 429),
  internal: (res: NextApiResponse, message = "Internal server error") =>
    errorResponse(res, { code: "INTERNAL_ERROR", message }, 500)
} as const;
