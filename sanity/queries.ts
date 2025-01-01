const imageFields = `
  "image": image {
    ...,
    asset-> {
      _id,
      url,
      metadata {
        dimensions {
          width,
          height
        }
      }
    },
    altText
  }
`;

const post = `
  _id,
  _createdAt,
  title,
  ${imageFields},
  content
`;

const gallery = `
  _id,
  _createdAt,
  title,
  description,
  galleryImages[]{
   ...,
   asset->{
      _id,
      url,
      metadata {
        dimensions {
          width,
          height
        }
      }
    }
  },
`;

const homePageFields = `
  _id,
  pageTitle,
  mainHeadingSection,
  strengthsSection{
    firstSection{
      ...,
      ${imageFields}
    },
    secondSection{
      ...,
      ${imageFields}
    },
    thirdSection{
      ...,
      ${imageFields}
    }
  },
  socialAgencyResultsSection{
    ...,
    ${imageFields}
  },
  locationsSection{
    ...,
    ${imageFields}
  },
  servicesSection{
    ...,
    ${imageFields}
  },
  customerSection,
  testimonialsSection,
`;

const homeCarePageFields = `
  _id,
  pageTitle,
  ${imageFields},
  descriptionSection,
  personalizedCareSection{
    ...,
    ${imageFields}
  },
  servicesSection,
  customerSection,
`;

const workPageFields = `
  _id,
  pageTitle,
  ${imageFields},
  descriptionSection,
`;

const aboutPageFields = `
  _id,
  pageTitle,
  ${imageFields},
  descriptionSection{
    ...,
    person{
      ...,
      ${imageFields}
    }
  },
  socialAgencyResultsSection{
    ...,
    ${imageFields}
  },
  socialAgencyDocumentsSection{
    ...,
    files[]{
    description,
    "url": asset->url
    }
  },
  testimonialsSection
`;

const contactPageFields = `
  _id,
  pageTitle,
  ${imageFields},
  descriptionSection,
`;

const contactInfoFields = `
  _id,
  phone,
  email,
  address,
  openingHours
`;

export const homePageQuery = `*[_type == "homePage"][0] {${homePageFields}}`;
export const homeCarePageQuery = `*[_type == "homeCarePage"][0] {${homeCarePageFields}}`;
export const workPageQuery = `*[_type == "workPage"][0] {${workPageFields}}`;
export const aboutPageQuery = `*[_type == "aboutPage"][0] {${aboutPageFields}}`;
export const contactPageQuery = `*[_type == "contactPage"][0] {${contactPageFields}}`;
export const newsPageQuery = `*[_type == "post" && hidden != true] | order(_createdAt desc) {${post}}`;
export const galleryListQuery = `*[_type == "gallery" && hidden != true] | order(_createdAt desc) {${gallery}}`;
export const galleryByIdQuery = `*[_type == "gallery" && _id == $pageId][0] {${gallery}}`;
export const contactInfoQuery = `*[_type == "contactInfo"][0] {${contactInfoFields}}`;
