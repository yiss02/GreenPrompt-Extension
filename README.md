# 🌍 GreenPrompt - Chrome Extension

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/yiss02/GreenPrompt-Extension)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## 📌 Présentation
**GreenPrompt** est une extension de navigateur (Manifest V3) conçue pour sensibiliser les utilisateurs à l'impact environnemental caché de l'Intelligence Artificielle générative. 

À chaque interaction sur ChatGPT, l'extension calcule en temps réel l'estimation de la consommation d'eau (refroidissement des serveurs) et l'empreinte carbone (CO2) générée, en affichant un feedback visuel immédiat (Toast UI).

## 🚀 Fonctionnalités
- **Injection de scripts (Content Scripts) :** Détection automatique des prompts envoyés sur `chatgpt.com`.
- **Calcul en temps réel :** Estimation basée sur 10ml d'eau et 2g de CO2 par requête.
- **UI/UX réactive :** Notification flottante injectée dans le DOM et interface popup avec visualisation par jauge (verre d'eau progressif).
- **Persistance des données :** Utilisation de `chrome.storage.local` pour le suivi de la consommation sur le long terme.

## 🛠️ Stack Technique
- **Langages :** JavaScript (ES6+), HTML5, CSS3.
- **API Chrome :** Runtime, Storage, Scripting (Manifest V3).
- **Design :** CSS Keyframes pour les animations de remplissage et UI Toast personnalisée.

## 📊 Méthodologie & Sources
L'IA consomme des ressources physiques massives. Les calculs de cette extension se basent sur les travaux de recherche suivants :
* **Empreinte Hydrique :** Selon l'étude *"Making AI Less Thirsty"* (Univ. Riverside / Google, 2023), une conversation de 20 à 50 messages équivaut à environ 500ml d'eau.
* **Empreinte Carbone :** Estimations moyennes basées sur la consommation énergétique des data centers refroidis par air/eau.

## ⚙️ Installation (Mode Développeur)
1. Clonez ce dépôt : `git clone https://github.com/yiss02/GreenPrompt-Extension.git`
2. Ouvrez Google Chrome et accédez à `chrome://extensions/`.
3. Activez le **Mode développeur** (en haut à droite).
4. Cliquez sur **Charger l'extension non empaquetée** et sélectionnez le dossier du projet.

---
*Projet réalisé dans le cadre d'une démarche personnelle d'ingénierie durable (Green IT).*
