const CookiePolicy = () => {
  return (
    <div className="container mx-auto py-40">
      <h1 className="mb-20 text-6xl font-medium">Kakor (cookies)</h1>
      <div className="mb-10">
        <h2>Vad är kakor?</h2>
        <p>
          Kakor är små textfiler som lagras på din enhet av din webbläsare. De
          kan användas för att förbättra användarupplevelsen genom att komma
          ihåg inställningar, förbättra prestandan och ge analytisk information.
        </p>
      </div>
      <div className="mb-10">
        <h2>Denna webbplats och kakor</h2>
        <p>
          Denna webbplats använder inte kakor. Vi samlar inte in några
          personuppgifter, och det finns inga spårnings- eller analysfunktioner
          som kräver kakor.
        </p>
      </div>
      <div className="mb-10">
        <h2>Din kontroll över kakor</h2>
        <p>
          Om du besöker andra webbplatser som använder kakor kan du hantera
          eller stänga av dem genom att ändra inställningarna i din webbläsare.
          På vår webbplats påverkas dock inga funktioner eftersom vi inte
          använder kakor.
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;
