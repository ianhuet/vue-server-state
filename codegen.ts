import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  documents: ['src/queries/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    './src/generated/': {
      preset: 'client',
      config: {
        useTypeImports: true
      }
    }
  }
}
 
export default config;
