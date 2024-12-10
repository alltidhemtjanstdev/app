import { File } from "react-feather";
import HeadingAndText from "@/components/headingAndText/headingAndText";
import { AboutPageData } from "@/pages/om-oss";

const DocumentSection: React.FC<{
  section: AboutPageData["socialAgencyDocumentsSection"];
}> = ({ section }) => (
  <section id="document">
    <div className="container mx-auto">
      {section?.document && (
        <HeadingAndText section={section.document} HeadingEl="h2" />
      )}
      {section?.files && (
        <div className="max-w-[80rem] mx-auto mt-10">
          <ul className="flex flex-col gap-2">
            {section.files.map((file, index) => (
              <li key={index} className="flex gap-2 link">
                <File />
                <a
                  href={file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Download ${file.description}`}
                >
                  {file.description}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </section>
);

export default DocumentSection;
