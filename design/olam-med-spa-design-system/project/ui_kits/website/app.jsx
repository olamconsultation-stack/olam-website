/* OLAM Website UI Kit — app: assembles sections + language state */
function App() {
  const [lang, setLangState] = React.useState('en');
  const setLang = (l) => {
    document.documentElement.setAttribute('data-lang', l);
    setLangState(l);
  };
  React.useEffect(() => { document.documentElement.setAttribute('data-lang', lang); }, [lang]);

  return (
    <div key={lang}>
      <Header lang={lang} setLang={setLang} />
      <main>
        <Hero />
        <Qualification />
        <Leadership />
        <Treat />
        <Technologies />
        <Results />
        <Consult />
        <Pricing />
        <FAQ />
        <Reserve />
      </main>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
