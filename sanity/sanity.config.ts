import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

console.log('Sanity Project ID:', process.env.SANITY_STUDIO_PROJECT_ID)
console.log('Sanity Dataset:', process.env.SANITY_STUDIO_DATASET)

export default defineConfig({
  name: 'default',
  title: 'nextjs blog',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
 