function CategoryCard({ title, image }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
      <img
        src={image}
        alt={title}
        className="h-52 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default CategoryCard;