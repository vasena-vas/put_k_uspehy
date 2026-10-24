import { defineConfig } from 'vite';
export default defineConfig({ 
  base: '/put_k_uspehy/', // 👈 Обязательно добавляем слэши по краям!
  esbuild: { jsx: 'automatic' }, 
  server: { host: '0.0.0.0', allowedHosts: true } 
});