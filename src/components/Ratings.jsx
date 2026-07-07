import { testimonials } from "@/data/testimonials";

export default function Ratings() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-orange-500 font-medium">
            Loved by foodies
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-3">
            What our customers say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 p-8 rounded-3xl shadow-sm border"
            >
              {/* Stars */}
              <div className="flex gap-1 text-orange-500 text-xl">
                ★★★★★
              </div>

              {/* Review */}
              <p className="text-gray-600 mt-5 leading-relaxed text-lg">
                "{item.review}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                  {item.avatar}
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    {item.name}
                  </h4>

                  <p className="text-gray-500 text-sm">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}