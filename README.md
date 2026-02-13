# Portfolio — Ugo Rastell

Portfolio personnel construit avec Next.js 16, React 19 et Tailwind CSS v4. Design néo-brutaliste.

## Stack

- **Framework** : Next.js 16 (App Router)
- **UI** : React 19, Tailwind CSS v4
- **Langage** : TypeScript (strict)
- **Tests** : Vitest + Testing Library
- **Déploiement** : Vercel
- **CI** : GitHub Actions (lint → test → build)

## Développement

```bash
npm install
npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000).

## Scripts

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run lint` | Lint ESLint |
| `npm run test` | Tests Vitest |
| `npm run test:watch` | Tests en mode watch |

## Structure

```
app/            → Pages (App Router)
components/     → Composants React
components/ui/  → Composants UI réutilisables (Button, Card, Badge)
data/           → Données centralisées du portfolio
types/          → Interfaces TypeScript
public/         → Assets statiques
```

## Configuration

Copier `.env.example` en `.env.local` et renseigner les variables :

```bash
cp .env.example .env.local
```

## Déploiement

Le site est déployé automatiquement sur Vercel à chaque push sur `main`. La CI GitHub Actions exécute lint, tests et build avant le déploiement.
