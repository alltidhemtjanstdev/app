import { HOME_PAGE_PATH } from "@/constants";
import { NextPageContext } from "next";
import Link from "next/link";

type Props = {
  statusCode?: number;
};

function Error({ statusCode }: Props) {
  let errorMessage: string;
  let title: string;

  switch (statusCode) {
    case 404:
      title = "Sidan kunde inte hittas!";
      errorMessage = "Hoppsan! Sidan du letade efter finns inte.";
      break;
    case 500:
      title = "Serverfel!";
      errorMessage = "Något gick fel på servern. Försök igen senare.";
      break;
    default:
      title = "Något gick fel!";
      errorMessage = "Något oväntat inträffade. Försök att ladda om sidan.";
  }

  return (
    <section className="container mx-auto">
      <h1>
        {title} {statusCode ? `(${statusCode})` : ""}
      </h1>
      <p>{errorMessage}</p>
      <Link href={HOME_PAGE_PATH} className="link">
        Gå till startsidan
      </Link>
    </section>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext): Props => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
