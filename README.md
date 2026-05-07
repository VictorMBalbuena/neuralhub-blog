# NeuralHub — Blog de IA en Español

Blog sobre herramientas de IA construido con Next.js 14, listo para deployar en Vercel gratuitamente.

## 🚀 Deploy en 5 minutos

### 1. Subir a GitHub
```bash
git init
git add .
git commit -m "primer commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/neuralhub.git
git push -u origin main
```

### 2. Conectar con Vercel
1. Ir a [vercel.com](https://vercel.com) → registrarse gratis
2. "Add New Project" → importar el repo de GitHub
3. Click en "Deploy" → listo ✅

Tu blog estará en: `https://neuralhub.vercel.app`

## 📝 Agregar artículos

Crear un archivo `.md` en `content/posts/`:

```markdown
---
title: "Título del artículo"
excerpt: "Resumen breve que aparece en la lista"
date: "2025-05-01"
category: "Comparativas"
emoji: "🤖"
readTime: "5 min"
---

Contenido del artículo en Markdown...
```

## 💰 Monetización

### Afiliados recomendados (registro gratuito)
- **Jasper AI**: [jasper.ai/affiliate](https://jasper.ai/affiliate) — hasta $40/referido
- **Writesonic**: [writesonic.com/affiliate](https://writesonic.com/affiliate) — 30% recurrente
- **Copy.ai**: [copy.ai/affiliate](https://copy.ai/affiliate) — 45% primer mes
- **Notion**: Partners program — 50% del primer año
- **ShareASale**: marketplace con cientos de programas de IA

### Google AdSense
Una vez con 50+ visitas diarias, postularse en [adsense.google.com](https://adsense.google.com).

### Newsletter gratuito
Usar [Formspree](https://formspree.io) — reemplazá `TU_FORM_ID` en `app/page.js` con tu ID real.

## 🛠️ Desarrollo local

```bash
npm install
npm run dev
# abre http://localhost:3000
```

## 📁 Estructura

```
ai-blog/
├── app/
│   ├── layout.js       # Header + Footer globales
│   ├── page.js         # Homepage
│   └── blog/
│       ├── page.js     # Listado de posts
│       └── [slug]/
│           └── page.js # Post individual
├── content/
│   └── posts/          # ← Tus artículos .md acá
├── lib/
│   └── posts.js        # Lógica para leer posts
└── vercel.json
```
