📦 PAGINABOOTCAMP-2 — React Native (Expo + TypeScript)

Este repositorio contiene una aplicación móvil de e-commerce completa, inspirada en Amazon, desarrollada con React Native, Expo, TypeScript, y un sistema avanzado de navegación anidada usando:

Stack Navigator

Tab Navigator

Drawer Navigator

Context API para el carrito de compras

Componentes UI profesionales

El objetivo del proyecto es demostrar manejo sólido de navegación, estado global, arquitectura modular y un diseño limpio y reutilizable.

🧱 Estructura del Proyecto
ecommerce-app/
├── App.tsx
├── src/
│   ├── navigation/
│   │   ├── DrawerNavigator.tsx
│   │   ├── TabNavigator.tsx
│   │   ├── HomeStackNavigator.tsx
│   │   ├── CartStackNavigator.tsx
│   │   ├── ProfileStackNavigator.tsx
│   │   └── types.ts
│   │
│   ├── screens/
│   │   ├── home/
│   │   │   ├── HomeScreen.tsx
│   │   │   ├── ProductDetailScreen.tsx
│   │   │   └── ReviewsScreen.tsx
│   │   │
│   │   ├── cart/
│   │   │   ├── CartScreen.tsx
│   │   │   ├── ShippingScreen.tsx
│   │   │   ├── PaymentScreen.tsx
│   │   │   └── ConfirmationScreen.tsx
│   │   │
│   │   ├── profile/
│   │   │   ├── ProfileScreen.tsx
│   │   │   ├── EditProfileScreen.tsx
│   │   │   ├── OrdersScreen.tsx
│   │   │   └── SettingsScreen.tsx
│   │
│   ├── components/
│   │   ├── ProductCard.tsx
│   │   ├── CartItem.tsx
│   │   ├── ReviewCard.tsx
│   │   └── CustomDrawer.tsx
│   │
│   ├── context/
│   │   └── CartContext.tsx
│   │
│   ├── data/
│   │   ├── products.ts
│   │   ├── reviews.ts
│   │   ├── categories.ts
│   │   └── userData.ts
│   │
│   └── utils/
│       └── formatters.ts
│
└── package.json

⚙️ Tecnologías Usadas

React Native + Expo

React Navigation (Stack, Tabs, Drawer)

TypeScript

Context API

Ionicons

Mock Data (productos, reviews, usuario)

🚀 Instalación y Ejecución del Proyecto
1️⃣ Requisitos Previos

Asegúrate de tener instalado:

Node.js (versión recomendada 18+)

Expo CLI

Git

Xcode (para ejecutar en iPhone)

Android Studio (para ejecutar en Android)

📥 2️⃣ Clonar el Repositorio
git clone https://github.com/santulindo/Pagina_Bootcamp_2.git
cd Pagina_Bootcamp_2

📦 3️⃣ Instalar Dependencias
npm install


o

yarn

📱 4️⃣ Ejecutar la App en iPhone (iOS)
✔ Requisitos:

Tener Xcode instalado

Un MacBook

iPhone físico o simulador

🏃‍♂️ Ejecutar:
npx expo start


Cuando se abra el menú de Expo:

Presiona la tecla i para abrir el simulador de iOS
o

Escanea el código QR con tu iPhone usando la app Expo Go

🤖 5️⃣ Ejecutar la App en Android
✔ Requisitos:

Tener Android Studio instalado

Crear un emulador Android

O tener un celular Android físico

🏃 Ejecutar:
npx expo start

Luego:

Presiona la tecla a para abrir un emulador Android
o

Escanea el QR con Expo Go en tu Android

🔧 6️⃣ Variables, Tipos y Navegación

El proyecto usa:

Tipado fuerte con TypeScript

Navegación anidada (Stack + Tabs + Drawer)

Screens organizadas por módulos

Componentes reutilizables

🛒 7️⃣ Funcionalidades Principales
Módulo Funciones
🏠 Home Listado de productos, detalle, reviews
🛍 Cart Agregar, remover, actualizar cantidad, checkout
👤 Profile Editar perfil, órdenes, ajustes
📂 Drawer Categorías dinámicas
🛠 Context Carrito global reactivo
🎨 UI/UX Cards limpias, botones modernos, feedback visual