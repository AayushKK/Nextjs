import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-black text-white p-4 flex items-end justify-between">
      <h1>
        <Link href={"/"}>Next app</Link>
      </h1>
      <nav className="space-x-4">
        <Link href={"/post"}>Posts</Link>
        <Link href={"/meal"}>Meals</Link>
      </nav>
    </div>
  )
}