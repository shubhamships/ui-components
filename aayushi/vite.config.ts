import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
   name:'featureA',
   filename:'remoteEntry.js',
   remotes: {
    remote_app: "http://localhost:3000/assets/remoteEntry.js",
},
   exposes:{
    './App':'./src/App.tsx'
   }   
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
