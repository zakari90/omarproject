import { Card, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const id = "1";
export default function ProductCard() {

  return (
    <Card className="w-full max-w-[280px] mx-auto overflow-hidden mb-2">
      <div className="relative h-40">
      <Link href={`/properties/${id}`}>
        <Image
          src={ "/placeholder-image.jpg"}
          width={300}
          height={160}
          alt={`صورة العقار`}
          className="w-full h-40 object-cover"
        />
        </Link>
      </div>
      <CardFooter className="flex justify-between gap-1 p-3 pt-2">
      المزيد
      </CardFooter>
    </Card>
  )
}
