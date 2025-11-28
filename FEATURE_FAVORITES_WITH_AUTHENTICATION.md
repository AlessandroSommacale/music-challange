# Feature: Favorites With User Accounts (Firebase Auth + Cloud Sync)

## Overview
This feature introduces **user authentication** (registration, login, logout) and ties the **Favorites** system to each authenticated user.  
Favorites are stored **in Firebase Realtime Database** (for cloud sync across devices).

The goals of the feature are:
- Provide a personalized, persistable experience for each user.
- Demonstrate integration of external services (Firebase).
- Show Redux Toolkit usage for complex async flows.

---

# Core Functionalities

## 1. User Authentication (Firebase)
We use Firebase Auth REST API (Email + Password) to handle:
- **User registration**
- **User login**
- **User logout**

### UX flow
- A user can open a modal from the **Log in** button inside the header to login or create an account.
- After creation the user is logged in automatically and, after closing the modal, has access to the favorites feature.
- After login the modal is closed automatically and the user has access to the favorites feature.
- A logged-in user sees:
  - Their **email** in the header
  - A **Logout** button in the header
  - A Heart icon in the top right of every album card
- Logging out clears the Redux favorites and disabled favorites feature.

---

## 2. Favorite System (Only when authenticated)

This application allows authenticated users to mark or unmark albums as favorites using a heart icon.  
The favorites system supports:

### ✔ Cloud Sync via Firebase Realtime Database  
When the user is authenticated:
- Favorites are synced to a Firebase Realtime Database under userId

