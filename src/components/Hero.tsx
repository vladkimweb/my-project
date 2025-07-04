import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-5 px-4">
      <div
        className="max-w-7xl mx-auto rounded-2xl flex flex-col items-center justify-center text-center px-4 py-20"
        style={{
          backgroundImage: 'linear-gradient(to right, #434343 0%, #000000 100%)'
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Создаю сайты с нуля — <span className="text-white">дизайн + код</span>
        </h1>
        <p className="text-lg md:text-xl text-white max-w-xl mb-8">
          Разработка чистых и продуманных сайтов с учетом целевой аудитории и удобства пользователей.
        </p>
        <Link href="/contact" className="bg-violet-600 text-white font-semibold px-6 py-3 rounded-2xl hover:scale-105 transition">
          Обсудить проект
        </Link>
      </div>

    </section>
  );
}