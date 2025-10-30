"use client";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  description: string;
}

export default function ProductCard({ name, price, image, description }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <img src={image} alt={name} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500 mb-2">{description}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-blue-600 font-bold text-lg">{price}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
