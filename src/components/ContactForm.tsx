"use client";
import React from "react";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xkgbykgz");

  if (state.succeeded) {
    return (
      <section className="py-20 px-4 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Спасибо за сообщение!</h2>
          <p className="text-gray-600">Я свяжусь с вами в ближайшее время.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 lg:pt-20 pb-55">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-sm text-gray-500">
          <p>
            <Link href="/" className="hover:underline text-indigo-600">Главная</Link> / <span className="text-gray-800 font-medium">Контакты</span>
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="flex flex-col justify-between">
            <h2 className="text-6xl font-bold text-gray-900 mb-6">Контакты</h2>

            <div className="grid grid-cols-2 gap-4 mb-8 text-sm text-gray-700 underline underline-offset-4">
              <Link href="https://t.me/kim_ladislao" target="_blank" rel="noopener noreferrer">
                Telegram
              </Link>
              <Link href="https://wa.me/+8201039301828" target="_blank" rel="noopener noreferrer">
                Whatsapp
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=100092400543588" target="_blank" rel="noopener noreferrer">
                Facebook
              </Link>
              <Link href="https://www.instagram.com/vladisflow?igsh=MTFqM2Rzdmd2Mmk2aw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                Instagram
              </Link>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Услуга */}
            <div>

              <div className="space-y-2">
                <label htmlFor="name">
                  Имя
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Введите ваше имя"
                  className="w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 text-sm"
                />

              </div>
            </div>

            {/* Телефон */}
            <div>
              <label htmlFor="phone" className="block font-medium text-gray-700 mb-1">
                Телефон<span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+82 (999) 9999-9999 или +7 (999) 999-99-99"
                className="w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 text-sm"
              />
            </div>

            {/* Сообщение */}
            <div>
              <label htmlFor="message" className="block font-medium text-gray-700 mb-1">
                Сообщение
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Расскажите о проекте, задачах или идее"
                className="w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 text-sm"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            {/* Политика 
            <p className="text-xs text-gray-500">
              Отправляя форму, вы подтверждаете согласие с{" "}
              <a href="/privacy" className="underline hover:text-indigo-600">
                политикой конфиденциальности
              </a>.
            </p>*/}

            {/* Кнопка */}
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}