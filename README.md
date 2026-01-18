# TurboSpare

TurboSpare is a modern auto-parts web application built with **Next.js (App Router)**.  
It includes secure authentication using **NextAuth.js**, Google OAuth, credentials-based login, and dynamic routing with a responsive user interface.

---

## Route Summary

| Route | Description |
|------|------------|
| `/` | Home page |
| `/login` | User login page |
| `/register` | User registration page |
| `/items` | Product listing page |
| `/items/[id]` | Single product details page |
| `/blog` | Blog page |
| `/contact` | Contact page |
| `/api/auth/[...nextauth]` | NextAuth authentication API |

---

## Implemented Features

- Google OAuth authentication  
- Email & password (Credentials) login  
- Secure authentication using NextAuth.js  
- Responsive navigation bar  
- Dynamic routing for products  
- App Router architecture  
- Tailwind CSS styling  

---

## Feature Explanation

### Google OAuth Authentication
Allows users to sign in using their Google account securely without managing passwords manually.

### Credentials Login
Provides traditional email and password login functionality using the NextAuth Credentials Provider.

### Secure Authentication with NextAuth.js
NextAuth.js manages authentication providers, sessions, callbacks, and security best practices.

### Responsive Navigation Bar
The user interface adapts smoothly across mobile, tablet, and desktop devices.

### App Router Architecture
Uses Next.js App Router for cleaner layouts, improved performance, and structured routing.

### Tailwind CSS Styling
A modern utility-first CSS framework used for fast and consistent UI development.
