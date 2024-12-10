import Button from "@/components/button";
import { contactPageLink } from "@/constants";

const HeroSection: React.FC<{ title: string }> = ({ title }) => (
  <section className="section-1">
    <div className="section-1__content">
      <h1>{title}</h1>
      <Button href={contactPageLink.href} variant="cta" size="medium">
        {contactPageLink.text}
      </Button>
    </div>
  </section>
);

export default HeroSection;
