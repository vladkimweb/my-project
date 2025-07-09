// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-5 mt-5">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Владислав Ким — Веб-дизайн и разработка</p>
        <div className="flex space-x-4">
          <a href="https://wa.me/+8201039301828" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href="https://www.facebook.com/profile.php?id=100092400543588" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}