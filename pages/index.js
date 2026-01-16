import Head from "next/head";
import About from "../Components/About";
import Contact from "../Components/Contact/Contact";
import Hero from "../Components/Hero";
import { useTranslation } from "../Components/contexts/TranslationContext";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";

export default function Home() {
  const { language } = useTranslation();

  return (
    <div>
      <Head>
        <title>
          {language === 'en'
            ? "Yehia Abdlkarim. Front-End Developer"
            : "يحيي عبد الكريم. مطور واجهات أمامية"}
        </title>

        <meta
          name="description"
          content={language === 'en'
            ? "Portfolio built with Next.js"
            : "صفحة شخصية باستخدام Next.js"}
        />
      </Head>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
