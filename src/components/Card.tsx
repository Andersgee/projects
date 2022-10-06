import Image, { StaticImageData } from "next/image";

type CardProps = {
  img: StaticImageData;
  href: string;
  label: string;
  description: string;
  flipOrder?: boolean;
  /**
   * Use this on the largest contentful paint. (disables lazy loading and improves performance score).
   * Only do this when the image is instantly visible on page load (aka "above the fold").
   */
  priority?: boolean;
};

export function Card({ href, img, label, description, flipOrder, priority }: CardProps) {
  return (
    <div className="mb-10 w-full shadow-md bg-white dark:bg-neutral-800 rounded-xl overflow-hidden md:grid md:grid-cols-2">
      <a href={href} className={`${flipOrder ? "md:order-last" : ""}`}>
        <div className="relative h-40 md:h-52">
          <Image alt="Svg Battle" src={img} layout="fill" objectFit="cover" priority={priority} placeholder="blur" />
        </div>
      </a>
      <div className="h-40 p-4 flex flex-col justify-between">
        <div>
          <h3 className="mb-2 text-2xl text-neutral-700 dark:text-neutral-200 font-normal">{label}</h3>
          <p className="">{description}</p>
        </div>

        <a className="text-center md:text-left underline decoration-dotted hover:decoration-solid" href={href}>
          view project
        </a>
      </div>
    </div>
  );
}
