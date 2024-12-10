const AccessibilityStatement = () => {
  return (
    <div className="container mx-auto  py-40">
      <h1 className="mb-20 text-6xl font-medium">Tillgänglighetsredogörelse</h1>
      <div className="mb-10">
        <h2>Vårt åtagande</h2>
        <p>
          Vi strävar efter att göra vår webbplats tillgänglig för alla,
          inklusive personer med funktionsnedsättning. Vårt mål är att erbjuda
          en användarvänlig upplevelse som möter alla besökares behov.
        </p>
      </div>
      <div className="mb-10">
        <h2>Standarder vi följer</h2>
        <p>
          Denna webbplats försöker uppfylla WCAG 2.1 (Web Content Accessibility
          Guidelines) på nivå AA. Dessa riktlinjer säkerställer att vårt
          innehåll är begripligt, hanterbart, tillgängligt och robust.
        </p>
      </div>
      <div className="mb-10">
        <h2>Hur du kontaktar oss</h2>
        <p>
          Om du upplever några svårigheter med att komma åt innehållet på
          webbplatsen, vänligen kontakta oss:
        </p>
        <ul>
          <li>
            <span className="font-bold">E-post:</span>{" "}
            <a href="mailto:info@alltidhemtjanst.se" className="underline">
              info@alltidhemtjanst.se
            </a>
          </li>
          <li>
            <span className="font-bold">Telefon:</span>{" "}
            <a href="tel:0812345678" className="underline">
              08 123 456 78
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccessibilityStatement;
