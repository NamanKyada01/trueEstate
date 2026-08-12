<h1 align="center">
  <img src="./assets/images/icon.png" width="80" alt="trurEstate Logo" /><br/>
  trurEstate
</h1>

<p align="center">
  <strong>A modern, full-featured real estate app built with React Native &amp; Expo</strong><br/>
  Browse properties, view detailed listings, book viewings, and manage your profile — all in one place.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React%20Native-0.76-61DAFB?style=flat-square&logo=react" alt="React Native" />
  <img src="https://img.shields.io/badge/Expo-52-000020?style=flat-square&logo=expo" alt="Expo" />
  <img src="https://img.shields.io/badge/TypeScript-5.3-3178C6?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/NativeWind-4.1-38BDF8?style=flat-square&logo=tailwindcss" alt="NativeWind" />
  <img src="https://img.shields.io/badge/Appwrite-Backend-FD366E?style=flat-square&logo=appwrite" alt="Appwrite" />
</p>

---

## 📱 App Screenshots

### 🔐 Sign In
> Elegant onboarding with Google OAuth — property image grid sets the scene instantly.

<p align="center">
  <img src="./screenshots/compressed/sign-in.jpg" width="270" alt="Sign In Screen" />
</p>

---

### 🔍 Explore Properties
> Search and filter through all listings by type — Houses, Condos, Duplexes, Studios & more.

<p align="center">
  <img src="./screenshots/compressed/explore.jpg" width="270" alt="Explore Screen" />
</p>

---

### 🏡 Property Details
> Full property view with image gallery, beds/baths/sqft, agent info, facilities, map & reviews.

<p align="center">
  <img src="./screenshots/compressed/property-details.jpg" width="270" alt="Property Details - Top" />
  &nbsp;&nbsp;
  <img src="./screenshots/compressed/property-details-bottom.jpg" width="270" alt="Property Details - Bottom" />
</p>

---

### ✅ Booking Confirmation
> Instant booking confirmation with nights booked and total charge summary.

<p align="center">
  <img src="./screenshots/compressed/booking-success.jpg" width="270" alt="Booking Confirmation" />
</p>

---

### 👤 User Profile
> Manage your profile, bookings, payments, notifications, security, and more.

<p align="center">
  <img src="./screenshots/compressed/profile.jpg" width="270" alt="Profile Screen" />
  &nbsp;&nbsp;
  <img src="./screenshots/compressed/profile-details.jpg" width="270" alt="Profile Details" />
</p>

---

### ⚙️ Settings & Preferences

<p align="center">
  <img src="./screenshots/compressed/notifications.jpg" width="200" alt="Notifications" />
  &nbsp;
  <img src="./screenshots/compressed/payments.jpg" width="200" alt="Payments" />
  &nbsp;
  <img src="./screenshots/compressed/security.jpg" width="200" alt="Security" />
</p>

<p align="center">
  <img src="./screenshots/compressed/language.jpg" width="200" alt="Language" />
  &nbsp;
  <img src="./screenshots/compressed/help-center.jpg" width="200" alt="Help Center" />
  &nbsp;
  <img src="./screenshots/compressed/invite-friends.jpg" width="200" alt="Invite Friends" />
</p>

---

## ✨ Features

- 🔐 **Google OAuth** — One-tap sign-in via Appwrite auth
- 🏘️ **Property Listings** — Browse Houses, Condos, Duplexes, Studios, and more
- 🔎 **Search & Filter** — Debounced real-time search with category filters
- 🏡 **Property Details** — Gallery, amenities, agent info, interactive map & user reviews
- 📅 **Booking System** — Book properties with instant confirmation screen
- 💳 **Payments** — Manage saved payment methods
- 🔔 **Notifications** — Configure Push, Email, SMS & promotional alert preferences
- 🌐 **Language Selector** — Multi-language support ready
- 🔒 **Security Settings** — Account security and password management
- 👥 **Invite Friends** — Built-in referral / invite screen
- 👤 **Profile Management** — Edit avatar, name, and view booking history

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React Native 0.76 + Expo 52 |
| Navigation | Expo Router 4 (file-based routing) |
| Styling | NativeWind 4 (TailwindCSS for React Native) |
| Backend / Auth | Appwrite |
| Animations | React Native Reanimated 3 |
| Gestures | React Native Gesture Handler |
| Language | TypeScript 5.3 |
| Fonts | Rubik (Light → ExtraBold) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- [Expo Go](https://expo.dev/go) app on your phone **or** an Android/iOS emulator

### 1. Clone & Install

```bash
git clone https://github.com/NamanKyada01/trueEstate.git
cd trueEstate
npm install
```

### 2. Configure Environment

Create a `.env.local` file in the root:

```env
EXPO_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID=your_collection_id
EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID=your_collection_id
EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID=your_collection_id
EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID=your_collection_id
EXPO_PUBLIC_APPWRITE_BUCKET_ID=your_bucket_id
```

### 3. Start the App

```bash
npx expo start
```

Scan the QR code with **Expo Go** or press:
- `a` — Android emulator
- `i` — iOS simulator
- `w` — Web browser

---

## 📁 Project Structure

```
trurEstate/
├── app/                    # Expo Router screens (file-based routing)
│   ├── (root)/             # Main app tabs & nested screens
│   ├── sign-in.tsx         # Authentication screen
│   └── _layout.tsx         # Root layout & providers
├── components/             # Reusable UI components
├── lib/                    # Appwrite config, hooks, utilities
├── constants/              # Colors, icons, seed data
├── assets/
│   ├── fonts/              # Rubik font family (6 weights)
│   └── images/             # Icons, splash screen, images
└── screenshots/
    └── compressed/         # Optimized screenshots (18–48 KB each)
```

---

## 📄 License

This project is for educational and portfolio purposes.

---

<p align="center">Built with ❤️ using React Native &amp; Expo</p>
