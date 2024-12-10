import HeadingAndText from "@/components/headingAndText/headingAndText";
import { HeadingAndTextIn } from "@/types";

const TextSection: React.FC<{
  section: HeadingAndTextIn;
  HeadingEl: "h1" | "h2";
  background?: "light" | "default";
  contactBtn?: boolean;
}> = ({ section, HeadingEl, background = "default", contactBtn = false }) => (
  <section className={background === "light" ? "bg-accent-light" : ""}>
    <div className="container mx-auto">
      <HeadingAndText
        section={section}
        HeadingEl={HeadingEl}
        contactBtn={contactBtn}
      />
    </div>
  </section>
);

export default TextSection;
