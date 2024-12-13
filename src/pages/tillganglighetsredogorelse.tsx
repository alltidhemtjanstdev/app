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
