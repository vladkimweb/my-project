export default function Principles() {
  return (
    <section id="principles" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок и подзаголовок */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          <h2 className="text-2xl font-semibold text-indigo-600 uppercase tracking-wide">
            / Принципы работы /
          </h2>
          <p className="text-gray-800">
            Эффективный проект — это результат совместного сотрудничества заказчика и исполнителя,
            поэтому я стараюсь соблюдать определенные принципы:
          </p>
        </div>

        {/* Принципы */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="col-start-1 md:col-start-2 md:col-end-5 bg-gray-50 rounded-xl shadow-sm p-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start md:items-center">
                {/* Номер */}
                <span className="text-2xl font-bold text-indigo-500">0{n}</span>

                {/* Заголовок + описание */}
                <div className="md:col-span-2 space-y-1">
                  <h3 className="text-xl font-semibold">
                    {n === 1 && 'Открытое общение'}
                    {n === 2 && 'Доверие к экспертизе'}
                    {n === 3 && 'Уважение к времени'}
                    {n === 4 && 'Долгосрочный подход'}
                  </h3>
                  <p className="text-gray-700 text-md">
                    {n === 1 &&
                      'Я ожидаю честного и регулярного диалога. Чем лучше мы понимаем друг друга — тем сильнее результат.'}
                    {n === 2 &&
                      'Я погружаюсь в задачу, предлагаю решения и не боюсь отговорить от лишнего. Ценю, когда это уважают.'}
                    {n === 3 &&
                      'Я соблюдаю сроки и рассчитываю на то же — вовремя согласовывать этапы и предоставлять обратную связь.'}
                    {n === 4 &&
                      'Я не за «сделать и забыть». Ценю, когда проект живёт, развивается, и готов помогать в этом.'}
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