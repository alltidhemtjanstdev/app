import { ImageAndTextIn } from "@/types";
import ResponsiveImage from "../responsiveImage";
import { RenderPortableText } from "@/utils/text-utils";
import styles from "./imageAndText.module.scss";
import Button from "../button";
import Image from "next/image";

type CtaButton = {
  href: string;
  text: string;
};

type ImageAndTextProps = {
  imageAndText: ImageAndTextIn;
  layout?: "image-start" | "image-end";
  ctaButton?: CtaButton;
};

const ImageAndText: React.FC<ImageAndTextProps> = ({
  imageAndText,
  layout = "image-start",
  ctaButton,
}) => {
  return (
    <>
      {layout === "image-start" && (
        <div className={styles.section}>
          {imageAndText.image ? (
            <div className={styles.item}>
              <div className={styles.image}>
                <ResponsiveImage
                  image={imageAndText.image}
                  className="object-contain"
                />
              </div>
            </div>
          ) : (
            <div className={styles.item}>
              <div className={styles.image}>
                <Image
                  src="/images/image_placeholder.jpeg"
                  className="object-contain"
                  width={1200}
                  height={800}
                  alt=""
                />
              </div>
            </div>
          )}
          {imageAndText.text && (
            <div className={styles.item}>
              <div className={styles.text}>
                {imageAndText.text.heading && (
                  <h2>{imageAndText.text.heading}</h2>
                )}
                {imageAndText.text.editedText && (
                  <RenderPortableText text={imageAndText.text.editedText} />
                )}
                {ctaButton && ctaButton.href && ctaButton.text && (
                  <Button
                    href={ctaButton.href}
                    variant="primary"
                    size="medium"
                    className="mt-6"
                  >
                    {ctaButton.text}
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {layout === "image-end" && (
        <div className={styles.section}>
          {imageAndText.text && (
            <div className={styles.item}>
              <div className={styles.text}>
                {imageAndText.text.heading && (
                  <h2>{imageAndText.text.heading}</h2>
                )}
                {imageAndText.text.editedText && (
                  <RenderPortableText text={imageAndText.text.editedText} />
                )}
                {ctaButton && ctaButton.href && ctaButton.text && (
                  <Button
                    href={ctaButton.href}
                    variant="primary"
                    size="medium"
                    className="mt-6"
                  >
                    {ctaButton.text}
                  </Button>
                )}
              </div>
            </div>
          )}
          {imageAndText.image ? (
            <div className={styles.item}>
              <div className={styles.image}>
                <ResponsiveImage
                  image={imageAndText.image}
                  className="object-contain"
                />
              </div>
            </div>
          ) : (
            <div className={styles.item}>
              <div className={styles.image}>
                <Image
                  src="/images/image_placeholder.jpeg"
                  className="object-contain"
                  width={1200}
                  height={800}
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ImageAndText;
