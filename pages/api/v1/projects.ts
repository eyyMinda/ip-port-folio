import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../../sanity";
import { Project } from "../../../typings";
import { Errors } from "../../../lib/api/errors";
import { rateLimitMiddleware } from "../../../lib/api/rateLimit";
import { orderedProjectsFromPageInfoQuery } from "../../../lib/sanity/queries";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return Errors.badRequest(res, "Method not allowed");

  const { ok } = rateLimitMiddleware(req);
  if (!ok) return Errors.tooManyRequests(res);

  try {
    const data = await sanityClient.fetch<(Project | null)[] | null>(orderedProjectsFromPageInfoQuery);
    const list = (data ?? []).filter((x): x is Project => x != null);
    res.status(200).json({ data: list, meta: { total: list.length } });
  } catch (err) {
    console.error("[GET /api/v1/projects]", err);
    return Errors.internal(res);
  }
}
