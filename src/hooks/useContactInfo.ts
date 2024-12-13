import { useAppData } from "@/context/AppDataContext";

export const useContactInfo = () => {
  const { contactInfoData } = useAppData();

  const street = contactInfoData?.address?.street || "Nykroppagatan 25";
  const postNumber = contactInfoData?.address?.postNumber || "123 32";
  const municipality = contactInfoData?.address?.municipality || "Farsta";

  const phone = contactInfoData?.phone || "086243555";
  const email = contactInfoData?.email || "alltidhemtjanst@yahoo.se";

  const address = `${street}, ${postNumber} ${municipality}`;

  const days = contactInfoData?.openingHours?.days;
  const time = contactInfoData?.openingHours?.time;

  return {
    address,
    street,
    postNumber,
    municipality,
    phone,
    email,
    days,
    time,
  };
};
