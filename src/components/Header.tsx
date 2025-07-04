import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-50 shadow top-0 z-50 px-4">
      <div className="max-w-7xl mx-auto py-4 flex justify-between items-center">
        <Link href="/" className="block">
          <Image src="/vladislavkim-logo.png" alt="Логотип" width={200} height={100} />
        </Link>
        {/* <Link href="/" className="text-xl font-bold text-indigo-500">Владислав Ким</Link> */}
        <nav className="space-x-6 hidden md:block">
          {/* <Link href="/blog" className="text-gray-700 hover:text-indigo-500">Блог</Link> */}
          <Link href="/contact" className="text-gray-700 hover:text-indigo-600">Контакты</Link>
        </nav>
      </div>
    </header>
  );
}