import CategoryCard from "./CategoryCard";

function Categories() {
  const categories = [
    {
      title: "Neurosurgery",
      image: "https://picsum.photos/400/300?1",
    },
    {
      title: "Gynecology",
      image: "https://picsum.photos/400/300?2",
    },
    {
      title: "ENT",
      image: "https://picsum.photos/400/300?3",
    },
    {
      title: "Laparoscopy",
      image: "https://picsum.photos/400/300?4",
    },
    {
      title: "Orthopedic",
      image: "https://picsum.photos/400/300?5",
    },
    {
      title: "Cardiology",
      image: "https://picsum.photos/400/300?6",
    },
  ];

  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Product Categories
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Explore our wide range of surgical instruments.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              image={category.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;