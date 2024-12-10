import { PersonIn } from "@/types";
import ResponsiveImage from "./responsiveImage";

type PersonProps = {
  person: PersonIn;
};

const Person: React.FC<PersonProps> = ({ person }) => {
  if (!person) return null;

  const { image, name, description } = person;

  return (
    <div className="flex items-center gap-6">
      {image && (
        <div className="relative aspect-[1] w-[40px]">
          <ResponsiveImage image={image} />
        </div>
      )}
      <div>
        {name && <p>{name}</p>}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default Person;
