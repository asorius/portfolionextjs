import Head from 'next/head';
import Landing from '../components/Landing';
import React from 'react';
import Bulb from '../components/Bulb';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import About from '../components/About';
export default function Home() {
  const [theme, setTheme] = React.useState('light');

  React.useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setTheme('dark');
    }
    document.documentElement.className = 'scroll-smooth';
  }, []);

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    document.documentElement.classList.toggle('dark');
  };

  // console.log(window.matchMedia('(prefers-color-scheme: dark)'));
  return (
    <div className='bg-bg-light dark:bg-bg-dark relative '>
      <Bulb theme={theme} toggler={toggleTheme} />
      <Head>
        <title>A.Sorius</title>
        {/* <link rel='icon' href='/favicon.ico' /> */}
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Raleway&display=swap'
          rel='stylesheet'
        />
      </Head>

      <Landing></Landing>
      <main className='w-full'>
        <Skills />
        <Projects />
        <About />
      </main>
    </div>
  );
}
