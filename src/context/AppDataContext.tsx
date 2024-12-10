import React, { createContext, useContext } from "react";
import { ContactInfoIn, GalleryIn, PostIn } from "@/types";

interface AppDataContextProps {
  galleryData: GalleryIn[];
  newsData: PostIn[];
  contactInfoData: ContactInfoIn | undefined;
}

const AppDataContext = createContext<AppDataContextProps | undefined>(
  undefined
);

export const useAppData = () => {
  const context = useContext(AppDataContext);
  if (!context) {
    throw new Error("useAppData must be used within an AppDataProvider");
  }
  return context;
};

interface AppDataProviderProps {
  galleryData: GalleryIn[];
  newsData: PostIn[];
  contactInfoData: ContactInfoIn | undefined;
  children: React.ReactNode;
}

export const AppDataProvider: React.FC<AppDataProviderProps> = ({
  galleryData,
  newsData,
  contactInfoData,
  children,
}) => {
  return (
    <AppDataContext.Provider value={{ galleryData, newsData, contactInfoData }}>
      {children}
    </AppDataContext.Provider>
  );
};
