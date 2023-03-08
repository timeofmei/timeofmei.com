import Link from "next/link";

export default function Custom404() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <Link href="/">
        <div className="card text-white opacity-80">404 Not Found</div>
      </Link>
    </main>
  );
}
