import { Clock, Linkedin, Mail, MapPin, Phone } from "react-feather";
import Link from "next/link";
import classNames from "classnames";
import {
  LINKEDIN_URL,
  navLinks,
  sitemapLink,
  homePageLink,
  cookiesLink,
  accessibilityLink,
} from "@/constants";
import Logo from "./logo";
import styles from "./footer.module.scss";

import { useAppData } from "@/context/AppDataContext";
import { useContactInfo } from "@/hooks/useContactInfo";

const Footer: React.FC = () => {
  const {
    address,
    street,
    postNumber,
    municipality,
    phone,
    email,
    days,
    time,
  } = useContactInfo();
  const { galleryData, newsData } = useAppData();

  const filteredNavLinks = navLinks.filter((link) => {
    if (link.href === "/galleri" && galleryData.length === 0) return false;
    if (link.href === "/aktuellt" && newsData.length === 0) return false;
    return true;
  });

  return (
    <footer className={styles.footer}>
      <div className="container mx-auto grid sm:grid-cols-12 gap-20 sm:gap-10">
        <div className="sm:col-span-3 flex flex-col justify-between space-y-10">
          <Link
            href={homePageLink.href}
            className="max-w-[100px]"
            aria-label="Hem"
          >
            <Logo logoWhite />
          </Link>
          <div className="flex flex-col">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <Link href={sitemapLink.href}>{sitemapLink.text}</Link>
            <Link href={cookiesLink.href}>{cookiesLink.text}</Link>
            <Link href={accessibilityLink.href}>{accessibilityLink.text}</Link>
          </div>
        </div>

        <div
          className={classNames(
            "sm:col-start-7 sm:col-span-4",
            styles.contactInfo
          )}
        >
          <h3>Kontaktinfo</h3>
          <div className={styles.contactItems}>
            <div className={styles.contactItem}>
              <Phone strokeWidth={1} />
              <div className="flex flex-col">
                <span>Telefon:</span>
                <a href={`tel:${phone}`}>{phone}</a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <Mail strokeWidth={1} />
              <div className="flex flex-col">
                <span>E-post:</span>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <MapPin strokeWidth={1} />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <address className="flex flex-col">
                  <span>{street}</span>
                  <span>
                    {postNumber} {municipality}
                  </span>
                </address>
              </a>
            </div>
            {days && time && (
              <div className={styles.contactItem}>
                <Clock strokeWidth={1} />
                <div className="flex flex-col">
                  <span>{days}</span>
                  <span>{time}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="sm:col-start-11 sm:col-span-2">
          <h3>Meny</h3>
          <nav>
            <ul className={styles.navList}>
              {filteredNavLinks.map((link) => (
                <li key={link.href} className={styles.navItem}>
                  <Link href={link.href}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
