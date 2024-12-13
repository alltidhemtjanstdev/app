import SeoData from "@/components/seoData";
import { useContactInfo } from "@/hooks/useContactInfo";

const AccessibilityStatement = () => {
  const { phone, email } = useContactInfo();
  return (
    <>
      <SeoData title={"Tillgänglighetsredogörelse - Alltid Hemtjänst"} />
      <section className="container mx-auto">
        <h1 className="mb-20 text-6xl font-medium">
          Tillgänglighetsredogörelse
        </h1>
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
            Denna webbplats försöker uppfylla WCAG 2.1 (Web Content
            Accessibility Guidelines) på nivå AA. Dessa riktlinjer säkerställer
            att vårt innehåll är begripligt, hanterbart, tillgängligt och
            robust.
          </p>
        </div>
        <div className="mb-10">
          <h2>Kontrastproblem för Call-to-Action (CTA)-knappen</h2>
          <p>
            Vi har upptäckt att kontrasten mellan bakgrundsfärgen och texten på
            vår CTA-knapp inte uppfyller WCAG 2.1-standarderna för tillräcklig
            kontrast. Detta kan göra det svårt för vissa användare att läsa och
            interagera med knappen. Vi arbetar aktivt på att åtgärda detta
            problem och kommer att uppdatera designen för att säkerställa att
            den uppfyller alla krav på tillgänglighet.
          </p>
        </div>
        <div className="mb-10 flex flex-col gap-4">
          <h2>Oskäligt betungande anpassning</h2>
          <p>
            Alltid Hemtjänst och Service hänvisar till undantaget för oskäligt
            betungande anpassning enligt 12 § i lagen om tillgänglighet till
            digital offentlig service för:
          </p>
          <ul className="list-disc ml-6">
            <li>Brukarundersökningar</li>
            <li>Uppföljningsrapporter</li>
          </ul>
          <p>
            Att göra dessa dokument tillgängliga kräver ett mycket omfattande
            arbete. Vi strävar istället efter att presentera innehållet på ett
            mer tillgängligt och användarvänligt sätt än i den nuvarande formen.
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
              <a href={`mailto:${email}`} className="underline">
                {email}
              </a>
            </li>
            <li>
              <span className="font-bold">Telefon:</span>{" "}
              <a href={`tel:${phone}`} className="underline">
                {phone}
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default AccessibilityStatement;
