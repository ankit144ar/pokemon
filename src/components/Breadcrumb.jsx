import Link from "next/link";
export function Breadcrumb({ name }) {
  return (
    <nav className="mb-4 text-lg">
      <Link href="/" className="text-blue-600 hover:underline">Home</Link> &gt; <span className="capitalize">{name}</span>
    </nav>
  );
}