# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Prueba tecnica

Dadas estas 2 APIs:

-   https://catfact.ninja/fact
-   https://developers.giphy.com/docs/

1. Selecciona un dato sobre gatos usando la primera API
2. De ese dato, usa las tres primeras palabras y busca un gif usando la API de Giphy
3. El resultado se tiene que mostrar con una images a la izquierda y el texto a la derecha,
   todo centrado verticalmente
4. Aqui tines la API Key de Giphy

const GIPHY_API_KEY = '7iaV563OK2Tw8xRxX4hxB5bxYKhYu5pA'
