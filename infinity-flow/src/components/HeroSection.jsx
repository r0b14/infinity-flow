// src/components/HeroSection.jsx
export default function HeroSection() {
  return (
    <section className="pt-16 pb-24 bg-transparent">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-50 mb-4">
          Bem-vindo ao Infinity Flow
        </h2>
        <p className="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto">
          Uma demonstração de consumo de APIs, Infinite Scroll e CRUD 
          em React + Tailwind
        </p>
      </div>
    </section>
  );
}
