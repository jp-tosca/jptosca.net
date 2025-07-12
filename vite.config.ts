import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
})

// export default ({ mode }: { mode: string }) => {
//     const isDev = mode === 'development';

//     // GH-pages has /<repo>/ in the path (see "homepage" in package.json)
//     const splitHomepage = packageJSON.homepage.split('/');
//     const base = !isDev ? `/${splitHomepage[splitHomepage.length - 2]}/` : '/';

//     return defineConfig({
//         base,
//         plugins: [
//             react(),
//             checker({
//                 typescript: isDev,
//                 overlay: {
//                     initialIsOpen: false,
//                 },
//             }),
//         ],
//     });
// };
