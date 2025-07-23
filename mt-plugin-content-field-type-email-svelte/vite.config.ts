import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'

const production = !process.env.ROLLUP_WATCH
const outDir = "mt-static/plugins/ContentFieldTypeEmailSvelte/dist";

export default defineConfig(({ command, mode }) => {  
  return {
    plugins: [
      svelte({
        preprocess: sveltePreprocess({
          sourceMap: !production,
        }),
        compilerOptions: {
          dev: !production,
        },
      }),
    ],
    build: {
      lib: {
        entry: 'src/email.ts',
        formats: ['es'],
        fileName: () => 'email.js'
      },
      outDir,
      sourcemap: !production,
      minify: production,
    }
  }
})
