const services = [
  {
    title: 'UI/UX Дизайн сайтов',
    days: 'от 10 дней',
    description: 'Разработаю макет сайта в Figma с упором на удобство и структуру.',
    circleColor: 'bg-gray-200',
    bg: 'bg-white',
  },
  {
    title: 'Верстка по макету',
    days: 'от 3 дней',
    description: 'Сверстаю ваш дизайн с нуля на чистом и адаптивном коде.',
    circleColor: 'bg-gray-200',
    bg: 'bg-white',
  },
  {
    skip: true, // Пропуск 3-й
  },
  {
    title: 'Логотипы',
    days: 'от 3 до 7 дней',
    description: 'Строгий минималистичный стиль с универсальным применением.',
    circleColor: 'bg-gray-200',
    bg: 'bg-white',
  },
  {
    title: 'Редизайн сайтов',
    days: 'от 8 дней',
    description: 'Изменение устаревшего или неэффективного дизайна.',
    circleColor: 'bg-gray-200',
    bg: 'bg-white',
  },
  {
    skip: true, // Пропуск 3-й
  },
  {
    title: 'Поддержка сайта',
    days: 'по договоренности',
    description: 'Обновления, правки и улучшения после запуска.',
    circleColor: 'bg-gray-200',
    bg: 'bg-white',
  },

  {
    title: 'Сайт под ключ',
    days: 'от 20 дней',
    description: 'Дизайн + верстка + SEO. Полный цикл: от идеи до готового сайта.',
    circleColor: 'bg-indigo-500',
    bg: 'bg-indigo-200',
  },
];

export default function Services() {
  return (
    <section className="bg-gray-100 text-gray-800 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-10 text-indigo-600 uppercase tracking-wide">/ Мои услуги /</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {services.map((service, i) => {
            if (service.skip) {
              return <div key={`empty-${i}`} className="hidden md:block" />; // пропуск в сетке
            }

            return (
              <div key={i} className={`rounded-xl p-6 shadow ${service.bg}`}>
                <div className="flex justify-between items-start mb-20">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <small className="text-sm text-gray-600">{service.days}</small>
                  </div>
                  <div className={`w-5 h-5 rounded-full shrink-0 ${service.circleColor}`} />
                </div>
                <p className="text-gray-700 text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}