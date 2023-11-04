import { cn } from "#src/utils/cn";
import { imageSizes } from "#src/utils/image-sizes";
import Image from "next/image";
import type { StaticImageData } from "next/image";

type Props = {
  className?: string;
  src: StaticImageData;
  href: string;
  title: string;
  description: string;
};

export function Card({ className, src, title, href, description }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      className={cn(
        "group relative block max-w-[384px] overflow-hidden rounded-lg bg-color-neutral-0 shadow-md hover:bg-color-accent-highlight-50 focus:outline-none focus:focusring ",
        className
      )}
    >
      <div className="relative h-48 max-w-[384px] ">
        <Image src={src} fill alt={title} sizes={imageSizes("w-96")} className="object-cover" />
        <div className="absolute h-48 w-full bg-color-accent-highlight-50 opacity-0 group-hover:opacity-50"></div>
      </div>
      <article className="p-4">
        <h3 className="text-xl">{title}</h3>
        <p>{description}</p>
      </article>
    </a>
  );
}
