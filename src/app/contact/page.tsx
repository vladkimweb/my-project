import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title:
    'Контакты',
  description: 'Свяжитесь со мной для создания современного и функционального сайта.',
}

export default function HomePage() {
  return (
    <>
      <Header />
      <ContactForm />
      <Footer />
    </>
  );
}