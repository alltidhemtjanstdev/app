export const HOME_PAGE_PATH = "/";
export const HOMECARE_PAGE_PATH = "/hemtjanst";
export const ABOUT_PAGE_PATH = "/om-oss";
export const GALLERY_PAGE_PATH = "/galleri";
export const NEWS_PAGE_PATH = "/aktuellt";
export const WORK_PAGE_PATH = "/jobb";
export const CONTACT_PAGE_PATH = "/kontakt";
export const SITEMAP_PAGE_PATH = "/sidkarta";
export const COOKIES_PAGE_PATH = "/kakor-cookies";
export const ACCESSIBILITY_PAGE_PATH = "/tillganglighetsredogorelse";

type NavLink = {
  href: string;
  text: string;
};

export const navLinks: NavLink[] = [
  { href: HOME_PAGE_PATH, text: "Hem" },
  { href: HOMECARE_PAGE_PATH, text: "Hemtjänst" },
  { href: NEWS_PAGE_PATH, text: "Aktuellt" },
  { href: GALLERY_PAGE_PATH, text: "Galleri" },
  { href: ABOUT_PAGE_PATH, text: "Om oss" },
  { href: WORK_PAGE_PATH, text: "Jobb" },
  { href: CONTACT_PAGE_PATH, text: "Kontakt" },
];

export const documentLink: NavLink = {
  href: ABOUT_PAGE_PATH + "#document",
  text: "Läs dokument",
};

export const contactPageLink: NavLink = {
  href: CONTACT_PAGE_PATH,
  text: "Kontakta oss",
};

export const homePageLink: NavLink = {
  href: HOME_PAGE_PATH,
  text: "Hem",
};

export const homecarePageLink: NavLink = {
  href: HOMECARE_PAGE_PATH,
  text: "Hemtjänst",
};

export const sitemapLink: NavLink = {
  href: SITEMAP_PAGE_PATH,
  text: "Sidkarta",
};

export const cookiesLink: NavLink = {
  href: COOKIES_PAGE_PATH,
  text: "Kakor (cookies)",
};

export const accessibilityLink: NavLink = {
  href: ACCESSIBILITY_PAGE_PATH,
  text: "Tillgänglighetsredogörelse",
};
