import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../../sanity";
import { Social } from "../../../typings";
import { Errors } from "../../../lib/api/errors";
import { rateLimitMiddleware } from "../../../lib/api/rateLimit";
import { orderedSocialsFromPageInfoQuery } from "../../../lib/sanity/queries";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return Errors.badRequest(res, "Method not allowed");

  const { ok } = rateLimitMiddleware(req);
  if (!ok) return Errors.tooManyRequests(res);

  try {
    const data = await sanityClient.fetch<(Social | null)[] | null>(orderedSocialsFromPageInfoQuery);
    const list = (data ?? []).filter((x): x is Social => x != null);
    res.status(200).json({ data: list, meta: { total: list.length } });
  } catch (err) {
    console.error("[GET /api/v1/socials]", err);
    return Errors.internal(res);
  }
}
