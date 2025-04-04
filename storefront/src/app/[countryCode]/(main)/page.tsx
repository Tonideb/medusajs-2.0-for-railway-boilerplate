import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import HomeCategoryProducts from "@modules/home/components/category-products"
import FeaturedCategories from "@modules/home/components/featured-categories"
import HomeProductsWithInfo from "@modules/home/components/products-with-price"
import DropProducts from "@modules/home/components/drop-pick"
import HomeNewsletter from "@modules/home/components/newsletter"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  redirect("/waitlist")

  return (
    <>
      <Hero />
      <HomeCategoryProducts />
      <FeaturedCategories />
      <HomeProductsWithInfo />
      <DropProducts />
      <HomeNewsletter />
      {/* <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div> */}
    </>
  )
}
