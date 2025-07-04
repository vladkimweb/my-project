import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    slug: 'orbita',
    title: 'Орбита триатлон',
    image: '/projects/project_orbita.png',
    description: 'Дизайн и разработка сайта-визитки для спортивного клуба на HTML, CSS и JavaScript.',
  },
  {
    slug: 'ns-auto',
    title: 'NS Auto',
    image: '/projects/project_nsauto.png',
    description: 'Дизайн и разработка сайта-визитки для автомобильного сайта на HTML, CSS и JavaScript.',
  },
  {
    slug: 'ns-medtravel',
    title: 'NS Med Travel',
    image: '/projects/project_nsmed.png',
    description: 'Дизайн и разработка многоязычныго сайта-визитки для медицинского туризма на Tailwind CSS и Next.js.',
  },
  {
    slug: 'mediana',
    title: 'Mediana',
    image: '/projects/media.webp',
    description: 'Редизайн нескольких страниц сайта Mediana с использованием Figma.',
  },
];

export default function PortfolioGrid() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4">
      <h2 className="text-2xl font-semibold mb-10 text-indigo-600 uppercase tracking-wide">/ Мои работы /</h2>
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <div
            key={p.slug}
            className="rounded-2xl"
          >
            <Link href={`/portfolio/${p.slug}`}>
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="py-5">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-600 text-md">{p.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
