import Image from "next/image";
import { getImageDimensions } from "@sanity/asset-utils";
import { urlFor } from "../../sanity";
import type { SanityImageSource } from "@sanity/image-url";

type SanityImageProps = {
  image: SanityImageSource;
  alt: string;
  className?: string;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
};

const isGif = (url: string) =>
  url.split("?")[0].toLowerCase().endsWith(".gif");

export default function SanityImage({
  image,
  alt,
  className,
  sizes,
  fill = false,
  width,
  height,
  priority = false
}: SanityImageProps) {
  if (!image) return null;

  const url = urlFor(image).url();
  const unoptimized = isGif(url);

  if (fill) {
    return (
      <Image
        src={url}
        alt={alt}
        fill
        sizes={sizes ?? "100vw"}
        unoptimized={unoptimized}
        className={className}
        priority={priority}
      />
    );
  }

  let imgWidth = width;
  let imgHeight = height;

  if (imgWidth == null || imgHeight == null) {
    try {
      const dims = getImageDimensions(image as Parameters<typeof getImageDimensions>[0]);
      imgWidth = imgWidth ?? dims.width;
      imgHeight = imgHeight ?? dims.height;
    } catch {
      return (
        <Image
          src={url}
          alt={alt}
          width={imgWidth ?? 400}
          height={imgHeight ?? 300}
          unoptimized
          className={className}
          priority={priority}
        />
      );
    }
  }

  return (
    <Image
      src={url}
      alt={alt}
      width={imgWidth}
      height={imgHeight}
      unoptimized={unoptimized}
      className={className}
      priority={priority}
    />
  );
}
