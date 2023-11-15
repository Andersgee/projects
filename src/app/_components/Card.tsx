import { cn } from "#src/utils/cn";
import { imageSizes } from "#src/utils/image-sizes";
import Image from "next/image";
import { ScriptArticleStructuredData } from "./ScriptArticleRichText";
import { absUrl } from "#src/utils/url";

type Props = {
  className?: string;
  href: string;
  title: string;
  description: string;
  priority?: boolean;
  imageUrl: string;
};

export function Card({ className, title, href, description, imageUrl, priority }: Props) {
  return (
    <>
      <ScriptArticleStructuredData headline={title} imageAbsUrl={absUrl(imageUrl)} />
      <a
        href={href}
        target="_blank"
        className={cn(
          "group relative block max-w-[384px] overflow-hidden rounded-lg bg-color-neutral-0 shadow-md hover:bg-color-accent-highlight-50 focus:outline-none focus:focusring",
          className
        )}
      >
        <Image
          priority={priority}
          src={imageUrl}
          alt={title}
          sizes={imageSizes("w-96")}
          className="h-auto w-96 group-hover:opacity-50"
          //width and height only for aspect ratio purpose
          width={600}
          height={315}
        />
        <article className="p-4">
          <h2 className="text-xl">{title}</h2>
          <p>{description}</p>
        </article>
      </a>
    </>
  );
}
