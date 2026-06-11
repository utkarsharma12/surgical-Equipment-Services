function Stats() {
  const stats = [
    { value: "69K+", label: "Products" },
    { value: "236+", label: "Countries" },
    { value: "25+", label: "Years Experience" },
    { value: "500+", label: "Hospitals Served" },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-4xl font-bold text-blue-600">
                {stat.value}
              </h2>
              <p className="text-gray-600 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;