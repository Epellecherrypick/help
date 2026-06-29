import Link from "next/link"
import Image from "next/image"
import { TiShoppingBag } from "react-icons/ti";

export default function Hero() {
  return (
    <section className="min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left column */}
          <div className="flex-1 text-center lg:text-left">

            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <span>🏆</span>
              <span>#1 food experience in your city</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Delicious Meals{" "}
              <span className="text-orange-500">Delivered Fresh</span>{" "}
              To Your Door.
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              Order from the city's best kitchens, book a private chef for tonight,
              and watch every dish travel from pan to plate in real time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link
                href="/menu"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-4 rounded-full transition-all duration-200 text-center shadow-lg shadow-orange-200 flex gap-2" 
              >
                 <span><TiShoppingBag /></span> Order food
              </Link>
              <Link
                href="/book-a-chef"
                className="bg-white hover:bg-orange-50 text-gray-900 font-bold px-8 py-4 rounded-full border border-gray-200 hover:border-orange-300 transition-all duration-200 text-center"
              >
                Book a chef
              </Link>
            </div>

            <div className="flex gap-8 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold text-gray-900">1.2M+</p>
                <p className="text-xs text-gray-500 mt-1">Orders delivered</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold text-gray-900">850+</p>
                <p className="text-xs text-gray-500 mt-1">Partner kitchens</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold text-gray-900">4.9★</p>
                <p className="text-xs text-gray-500 mt-1">Average rating</p>
              </div>
            </div>

          </div>

          {/* Right column */}
          <div className="flex-1 flex justify-center">
            <div className="relative">

              <div className="w-100 h-100 lg:w-130 lg:h-130 rounded-full overflow-hidden shadow-2xl border-4 border-orange-100">
                <Image
                  src="/burger.png"
                  alt="Gourmet burger with golden fries"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-6 -left-8 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-lg">
                  🛵
                </div>
                <div>
                  <p className="text-xs text-gray-500">Arriving in</p>
                  <p className="text-sm font-bold text-gray-900">18 minutes</p>
                </div>
              </div>

              <div className="absolute top-6 -right-1 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                Explore
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}