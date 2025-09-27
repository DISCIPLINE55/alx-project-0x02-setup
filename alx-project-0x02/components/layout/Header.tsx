import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">🚀 My Next.js App</h1>
      <nav className="space-x-6">
        <Link href="/home" className="hover:text-blue-400">Home</Link>
        <Link href="/about" className="hover:text-blue-400">About</Link>
        <Link href="/posts" className="hover:text-blue-400">Posts</Link>
      </nav>
    </header>
  );
}
