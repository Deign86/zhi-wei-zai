# 🍜 Zhi Wei Zai Restaurant Website

A modern, responsive restaurant website for **Zhi Wei Zai** - featuring an interactive menu, shopping cart, user authentication, and table reservations.

![Zhi Wei Zai](ASSETS/logo.jpg)

## 🌟 Features

- **Beautiful Landing Page** - Welcoming hero section with restaurant info
- **Interactive Menu** - Browse dishes with descriptions and prices
- **Shopping Cart** - Add items and checkout (powered by localStorage)
- **User Authentication** - Sign up, login, and manage your account
- **Table Reservations** - Book a table with date picker
- **Catering Services** - Information about catering options
- **Photo Gallery** - Showcase of restaurant and food
- **Fully Responsive** - Works great on mobile, tablet, and desktop

## 🛠️ Built With

- **HTML5** - Page structure
- **CSS3 + Tailwind CSS** - Styling and responsive design
- **JavaScript** - Interactive features and localStorage
- **EmailJS** - Form submissions for orders and reservations
- **Flatpickr** - Date picker for reservations

## 📁 Project Structure

```
├── index.html              # Home page
├── js/
│   └── auth.js             # Authentication system (localStorage)
├── Menu/
│   ├── menu.html           # Food menu
│   ├── cart.html           # Shopping cart
│   └── checkout.html       # Checkout page
├── Login and Signup/
│   ├── login.html          # Login page
│   ├── signup.html         # Registration page
│   ├── account.html        # Account settings
│   └── welcome.html        # User dashboard
├── Contact and Reservations/
│   └── contact.html        # Reservations & contact form
├── Catering and Gallery/
│   └── catering.html       # Catering services & gallery
└── ASSETS/                 # Images, icons, and fonts
```

## 🚀 Getting Started

### View Online
Visit the live site: [Deployed on Vercel]

### Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/zhi-wei-zai.git
   ```
2. Open `index.html` in your browser

That's it! No build process or server required.

## 💡 How It Works

### Authentication
User accounts are stored in your browser's localStorage. This means:
- ✅ Works without any backend server
- ✅ Your data stays on your device
- ⚠️ Data is cleared if you clear browser data

### Shopping Cart
The cart uses localStorage to remember your items between pages and sessions.

### Form Submissions
Orders and reservations are sent via EmailJS to the restaurant's email.

## 📱 Screenshots

| Home | Menu | Cart |
|------|------|------|
| Landing page with restaurant info | Browse dishes by category | View your order |

## 🙏 Acknowledgments

- **Tailwind CSS** for the beautiful utility classes
- **Google Fonts** for Merriweather, Cinzel, and Playfair Display
- **EmailJS** for handling form submissions
- **Flatpickr** for the date picker

## 📝 Notes

This was one of my first full-stack web development projects! It started as a PHP/MySQL application and was converted to a static site with localStorage for easier deployment.

---

Made with ❤️ for Zhi Wei Zai Restaurant
