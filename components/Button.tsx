import Link from "next/link";

type Props = {
  className: string;
  text: string;
};
export default function Button({ className, text }: Props) {
  return (
    <Link href="/register" className={className}>
      {text}
      <span className="arr">↗</span>
    </Link>
  );
}
