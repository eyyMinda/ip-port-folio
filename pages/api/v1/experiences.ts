import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { Experience } from "../../../typings";
import { Errors } from "../../../lib/api/errors";
import { rateLimitMiddleware } from "../../../lib/api/rateLimit";

const query = groq`
  *[_type == "experience"] {
    ...,
    technologies[]->
  }`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return Errors.badRequest(res, "Method not allowed");

  const { ok } = rateLimitMiddleware(req);
  if (!ok) return Errors.tooManyRequests(res);

  try {
    const data = await sanityClient.fetch<Experience[]>(query);
    res.status(200).json({ data: data ?? [], meta: { total: (data ?? []).length } });
  } catch (err) {
    console.error("[GET /api/v1/experiences]", err);
    return Errors.internal(res);
  }
}
