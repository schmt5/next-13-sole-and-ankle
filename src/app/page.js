import Link from "next/link";

export default async function Homepage() {

  return (
    <main>
      <h1>Homepage</h1>
      <Link href="/shop/bestsellers">
        To the shop
      </Link>
    </main>
  )
}
