import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
// This import works in the development environment but causes a build error during deployment on Vercel.
// Commenting out to prevent issues with the Vercel build process.
// import { visionTool } from '@sanity/vision';
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'app',

  projectId: 'jp5u5q8y',
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
