import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-3 last:mb-0 leading-relaxed">{children}</p>,
    h2: ({ children }) => <h2 className="mt-4 mb-2 text-xl font-bold">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-3 mb-2 text-lg font-semibold">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="my-3 border-l-2 border-current/40 pl-3 italic opacity-90">{children}</blockquote>
    )
  },
  list: {
    bullet: ({ children }) => <ul className="mb-3 list-disc space-y-1 pl-5">{children}</ul>,
    number: ({ children }) => <ol className="mb-3 list-decimal space-y-1 pl-5">{children}</ol>
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => {
      const href = typeof value?.href === "string" ? value.href : "";
      const blank = value?.blank !== false;
      if (!href) return <>{children}</>;
      return (
        <a
          href={href}
          className="underline decoration-1 underline-offset-2"
          rel="noopener noreferrer"
          target={blank ? "_blank" : undefined}>
          {children}
        </a>
      );
    }
  }
};

type Props = {
  /** Portable Text blocks, or legacy plain string from older documents */
  value: PortableTextBlock[] | PortableTextBlock | string | null | undefined;
  className?: string;
};

function isBlockContent(v: unknown): v is PortableTextBlock[] {
  if (!Array.isArray(v) || v.length === 0) return false;
  const first = v[0];
  return typeof first === "object" && first !== null && "_type" in first && (first as { _type: string })._type === "block";
}

export default function PortableRichText({ value, className }: Props) {
  if (value == null) return null;
  if (typeof value === "string") {
    const t = value.trim();
    if (!t) return null;
    return <p className={className}>{value}</p>;
  }
  const blocks = Array.isArray(value) ? value : [value];
  if (!isBlockContent(blocks)) return null;
  return (
    <div className={className}>
      <PortableText value={blocks} components={components} />
    </div>
  );
}
