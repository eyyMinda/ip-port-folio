import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { PageInfo } from "../../../typings";
import { Errors } from "../../../lib/api/errors";
import { rateLimitMiddleware } from "../../../lib/api/rateLimit";

const query = groq`*[_type == "pageInfo"][0]`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return Errors.badRequest(res, "Method not allowed");

  const { ok } = rateLimitMiddleware(req);
  if (!ok) return Errors.tooManyRequests(res);

  try {
    const data = await sanityClient.fetch<PageInfo | null>(query);
    if (!data) return Errors.notFound(res, "Page info not found");
    res.status(200).json({ data, meta: {} });
  } catch (err) {
    console.error("[GET /api/v1/page-info]", err);
    return Errors.internal(res);
  }
}
