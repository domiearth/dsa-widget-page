# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

### test :
```url
http://localhost:5173/?input_type=mock_fixed_result&testid=wowprime&host=https://n8n.domiearth.com/webhook/b0af5a89-f340-4e0a-a2bb-158f41513dee

https://domiearth.github.io/dsa-widget-page/?input_type=mock_fixed_result&testid=wowprime&host=https%3A%2F%2Fn8n.domiearth.com%2Fwebhook%2F977ed4a2-b5bc-455a-a2ab-131ecd71ff40

```

#### 祥成行_th
```
https://domiearth.github.io/dsa-widget-page/?input_type=mock_fixed_result&testid=祥成行_th&host=https://n8n.domiearth.com/webhook/b0af5a89-f340-4e0a-a2bb-158f41513dee

http://localhost:5173/?input_type=live&sheetid=1NTQAIYCspvVbq4acLu3C5ZvI-u8eCGFIcL-vQAyH4uI&testid=祥成行&lang=th&cache=true&host=https://n8n.domiearth.com/webhook/b0af5a89-f340-4e0a-a2bb-158f41513dee&lang=th
```

#### 優織隆_th
```
https://domiearth.github.io/dsa-widget-page/?input_type=mock_fixed_result&testid=優織隆_th&host=https://n8n.domiearth.com/webhook/b0af5a89-f340-4e0a-a2bb-158f41513dee
```