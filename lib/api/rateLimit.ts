import type { NextApiRequest } from "next";

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 60;

const store = new Map<string, { count: number; resetAt: number }>();

export function getClientIp(req: NextApiRequest): string {
  const xff = (req.headers["x-forwarded-for"] as string) || "";
  const ip = xff.split(",")[0]?.trim();
  if (ip) return ip;
  const socket = req.socket as { remoteAddress?: string };
  return socket?.remoteAddress ?? "anonymous";
}

export function checkRateLimit(identifier: string): { ok: boolean; remaining: number } {
  const now = Date.now();
  const entry = store.get(identifier);

  if (!entry || now > entry.resetAt) {
    store.set(identifier, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true, remaining: MAX_REQUESTS - 1 };
  }

  entry.count++;
  const remaining = Math.max(0, MAX_REQUESTS - entry.count);
  return { ok: entry.count <= MAX_REQUESTS, remaining };
}

export function rateLimitMiddleware(req: NextApiRequest): { ok: boolean; remaining: number } {
  const id = getClientIp(req);
  return checkRateLimit(id);
}
