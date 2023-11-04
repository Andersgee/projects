import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Nothing here</h1>
      <Link href="/" className="bg-color-neutral-200 px-3 py-2 text-color-neutral-1000">
        Go home
      </Link>
    </div>
  );
}
