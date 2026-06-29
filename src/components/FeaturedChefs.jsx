import Image from "next/image"
import chefs from "../data/chefs"

export default function FeaturedChefs() {
  return (
    <section id="chefs" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-2">
              Meet the makers
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Featured chefs of the month
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl leading-relaxed">
              Book a private cooking session, hire them for an event, or simply
              order their signature menus tonight.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {chefs.map((chef) => (
            <div
              key={chef.id}
              className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={chef.image}
                  alt={chef.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {chef.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {chef.specialty}
                  </p>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center gap-1 bg-orange-50 px-3 py-1 rounded-full">
                    <span className="text-orange-400 text-sm">★</span>
                    <span className="text-sm font-bold text-gray-800">{chef.rating}</span>
                  </div>
                  <span className="text-sm text-gray-400">
                    {chef.reviews} reviews
                  </span>
                </div>

                <button className="w-full bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold py-3 rounded-2xl transition-all duration-200">
                  Book chef
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 relative overflow-hidden bg-orange-500 rounded-3xl px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-orange-200 text-sm font-semibold uppercase tracking-widest mb-2">
              Limited offer
            </p>
            <h3 className="text-3xl font-bold text-white mb-2">
              Get 30% off your first three orders
            </h3>
            <p className="text-orange-100 text-sm">
              New here? Use code{" "}
              <span className="bg-white text-orange-500 font-bold px-2 py-0.5 rounded-lg">
                FLAVOR30
              </span>{" "}
              at checkout. Valid until end of the month.
            </p>
          </div>

          <button className="shrink-0 bg-white hover:bg-orange-50 text-orange-500 font-bold px-8 py-4 rounded-full transition-all duration-200 whitespace-nowrap">
            Claim your discount
          </button>

          <div className="absolute -top-8 -right-8 w-40 h-40 bg-orange-400 rounded-full opacity-30" />
          <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-orange-600 rounded-full opacity-20" />
        </div>

      </div>
    </section>
  )
}