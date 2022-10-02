import Image, { StaticImageData } from "next/image";

type CardProps = {
  img: StaticImageData;
  href: string;
  label: string;
  description: string;
  flipOrder?: boolean;
};

export function Card({ href, img, label, description, flipOrder }: CardProps) {
  return (
    <div className="mb-10 w-full shadow-md bg-white dark:bg-neutral-800 rounded-lg overflow-hidden md:grid md:grid-cols-2">
      <a href={href} className={`${flipOrder ? "md:order-last" : ""}`}>
        <div className={`relative h-40 md:h-52`}>
          <Image alt="Svg Battle" src={img} layout="fill" objectFit="cover" />
        </div>
      </a>
      <div className="h-40 m-4 flex flex-col justify-between">
        <div>
          <h3 className="mb-2 text-4xl text-neutral-700 dark:text-neutral-200 font-normal">{label}</h3>
          <p className="">{description}</p>
        </div>
        <a
          className="mx-auto bg-indigo-200 hover:bg-indigo-100 dark:bg-indigo-900 dark:hover:bg-indigo-800 ease-out duration-150 p-2 rounded-full w-40 text-center underline decoration-dotted hover:decoration-solid"
          href={href}
        >
          {label}
        </a>
      </div>
    </div>
  );
}
