import Link from "next/link";

export default function PostTag({ tag }: { tag: string }) {
  return (
    <Link className="underline cursor-pointer" href={`/blog/?tag=${tag}`}>
      <span>#{tag}</span>
    </Link>
  );
}
