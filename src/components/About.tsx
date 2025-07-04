'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section className="bg-white text-gray-800 py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Заголовок в левом верхнем углу */}
        <h2 className="text-2xl font-semibold mb-10 text-indigo-600 uppercase tracking-wide">
          / Обо мне /
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Левая часть: Фото */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative flex flex-col items-start"
          >
            <div className="relative w-full max-w-xs rounded-xl overflow-hidden shadow-lg border-4 border-indigo-100">
              <Image
                src="/vladislavkim.jpeg"
                alt="Владислав Ким"
                className="object-cover w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-indigo-100 z-[-1] rounded-xl"></div>
            </div>
          </motion.div>

          {/* Правая часть: Текст */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-6 leading-relaxed text-lg"
          >
            <p className="indent-8">
              Меня зовут <span className="font-semibold text-indigo-600">Владислав</span>. Мне 25 лет, живу в Пусане, Южная Корея. Получил высшее образование по направлению <span className="italic">&quot;Информационные системы и технологии&quot;</span> в НИУ МГСУ.
            </p>
            <p className="indent-8">
              Начав с сайтов-визиток, я прошёл путь до создания полноценных многостраничных сайтов и лендингов. Работаю с <span className="text-indigo-600 font-medium">Tailwind CSS</span>, <span className="text-indigo-600 font-medium">JavaScript</span> и <span className="text-indigo-600 font-medium">Next.js</span>.
            </p>
            <p className="indent-8">
              Я не использую шаблоны и конструкторы. Каждый сайт создаю вручную — от дизайна в Figma до финального кода. Это даёт мне гибкость и контроль на каждом этапе.
            </p>
            <p className="indent-8">
              Сайты, которые я делаю, быстро загружаются, логично устроены и адаптированы под бизнес-задачи. Я учитываю не только внешний вид, но и удобство пользователя и SEO-показатели, включая <span className="font-medium text-indigo-600">Google Lighthouse</span>.
            </p>
            <p className="indent-8">
              Я совмещаю роли дизайнера, верстальщика и разработчика. Это даёт мне свободу в работе и уверенность в результате.
            </p>
            <p className="indent-8">
              Если вам нужен сайт, который будет выглядеть современно, работать быстро и приносить пользу — <span className="font-semibold text-indigo-600">давайте пообщаемся</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}