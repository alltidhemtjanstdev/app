import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "jp5u5q8y",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-12-10",
  useCdn: process.env.NODE_ENV === "production",
  // token: process.env.SANITY_API_TOKEN,
};

export const sanityClient = createClient(sanityConfig);

export const urlFor = (source: SanityImageSource) =>
  createImageUrlBuilder(sanityConfig).image(source);

// For the image that can't be deletet or show the usage: copy path to see the image id
// Example: https://cdn.sanity.io/images/r22ydnnx/production/edd5db4ae4662dd02b0cdefdec3681f41a0deca1-500x500.png

// Vision Tool query to get all studio images
// Use this query to list all image assets in your Sanity dataset:
// *[_type == "sanity.imageAsset"]
// find the image cmd f and edd5db4ae4662dd02b0cdefdec3681f41a0deca1-500x500.png

// Copy the image ID that is causing the conflict.
// image-edd5db4ae4662dd02b0cdefdec3681f41a0deca1-500x500-png

// Query to find the fields that reference the problematic image
// Replace the image ID in the query below with the actual ID:
// *[references("image-edd5db4ae4662dd02b0cdefdec3681f41a0deca1-500x500-png")]

// Copy the _id of the field referencing the image to delete it.
// Make sure to delete only the field causing the conflict.

// Code to delete a document using the Sanity client:
// sanityClient
//   .delete("9b07ab83-954f-4b7d-b455-7934354e3717") // Replace with the actual _id
//   .then(() => {
//     console.log("Field deleted successfully");
//   })
//   .catch((err) => {
//     console.error("Delete failed: ", err.message);
//   });
