# NyXia V3 - Worker Cloudflare

## Description
NyXia V3 est une agente IA personnelle avec interface dashboard complète.

## Structure
- `worker.js` - Worker Cloudflare complet avec HTML inline

## Fonctionnalités
- 🔐 Authentification (Email + Google OAuth)
- 💬 Chat avec IA (OpenRouter/GLM-5)
- 📁 Gestion de projets
- 📖 Base de connaissance
- 🔗 Intégrations (GitHub, Cloudflare, ManyChat, Systeme.io)
- 🔑 Tokens & Secrets (configuration sécurisée)
- 📚 Gestion des livres
- 🧠 Mémoire
- 📎 Support fichiers (PDF, Images, ZIP)

## Déploiement sur Cloudflare

1. Aller sur Cloudflare Dashboard > Workers & Pages
2. Créer un nouveau Worker "nyxia-v3"
3. Copier le contenu de `worker.js`
4. Configurer les variables d'environnement:
   - `VAULT_SECRET` - Secret pour le vault
   - `OPENROUTER_API_KEY` - Clé API OpenRouter

## Sécurité
⚠️ **IMPORTANT**: Les clés API (OpenRouter, GitHub, etc.) doivent être configurées dans les secrets Cloudflare, JAMAIS dans le code!

## Auteur
Diane Boyer - NyXia Publication
