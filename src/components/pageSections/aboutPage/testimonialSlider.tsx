import Slider, { SwiperModules } from "@/components/slider";
import { TestimonialIn } from "@/types";
import styles from "./testimonialSlider.module.scss";

const TestimonialSlider: React.FC<{ quotes: TestimonialIn[] }> = ({
  quotes,
}) => {
  const slides = quotes.map((testimonial) => (
    <article key={testimonial._id} className={styles.testimonial}>
      <blockquote>“{testimonial.quote}”</blockquote>
      <p>— {testimonial.author}</p>
    </article>
  ));

  return (
    <section className="bg-accent-light py-32">
      <div className="container mx-auto">
        <Slider
          slides={slides}
          params={{
            spaceBetween: 20,
            pagination: { clickable: true },
            keyboard: { enabled: true },
            navigation: true,
            breakpoints: { 640: { slidesPerView: 1 } },
          }}
          sliderModules={[
            SwiperModules.Keyboard,
            SwiperModules.Navigation,
            SwiperModules.A11y,
          ]}
        />
      </div>
    </section>
  );
};

export default TestimonialSlider;
