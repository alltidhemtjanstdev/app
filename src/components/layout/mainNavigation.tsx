import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { X, Menu as MenuIcon } from "react-feather";
import { useAppData } from "@/context/AppDataContext";
import classNames from "classnames";
import Logo from "./logo";
import styles from "./mainNavigation.module.scss";
import { HOME_PAGE_PATH, navLinks } from "@/constants";

const MainNavigation: React.FC = () => {
  const router = useRouter();
  const { galleryData, newsData } = useAppData();

  const filteredNavLinks = navLinks.filter((link) => {
    if (link.href === "/galleri" && galleryData.length === 0) return false;
    if (link.href === "/aktuellt" && newsData.length === 0) return false;
    return true;
  });

  return (
    <header className={classNames(styles.header, "container mx-auto")}>
      <Link href={HOME_PAGE_PATH}>
        <Logo />
      </Link>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {filteredNavLinks.map((link) => (
            <li key={link.href} className={styles.navItem}>
              <Link
                href={link.href}
                className={router.pathname === link.href ? styles.active : ""}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className={styles.mobileMenu}>
          <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
              <>
                <MenuButton className="inline-flex justify-center items-center p-2">
                  {open ? (
                    <X className="w-10 h-10" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="w-10 h-10" aria-hidden="true" />
                  )}
                </MenuButton>

                <MenuItems
                  transition
                  anchor="bottom end"
                  className="font-medium w-80 z-10 origin-top-right rounded-xl bg-white shadow-lg p-4 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                  {filteredNavLinks.map((link) => (
                    <MenuItem key={link.href}>
                      <Link
                        href={link.href}
                        className={classNames(
                          "group flex w-full items-center py-4 px-8 data-[focus]:underline data-[focus]:text-[#5a317a]",
                          router.pathname === link.href
                            ? "underline text-[#5a317a]"
                            : ""
                        )}
                      >
                        {link.text}
                      </Link>
                    </MenuItem>
                  ))}
                </MenuItems>
              </>
            )}
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
