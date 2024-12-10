import { useAppData } from "@/context/AppDataContext";

export const useContactInfo = () => {
  const { contactInfoData } = useAppData();

  const street = contactInfoData?.address?.street || "Nykroppagatan 23";
  const postNumber = contactInfoData?.address?.postNumber || "123 32";
  const municipality = contactInfoData?.address?.municipality || "Farsta";

  const phone = contactInfoData?.phone || "0812345678";
  const email = contactInfoData?.email || "info@alltidhemtjanst.se";

  const address = `${street}, ${postNumber} ${municipality}`;

  const days = contactInfoData?.openingHours?.days || "Måndag - Fredag";
  const time = contactInfoData?.openingHours?.time || "09:00 - 15:00";

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
