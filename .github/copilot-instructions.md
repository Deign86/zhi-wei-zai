# Zhi Wei Zai Restaurant Website - AI Coding Instructions

## Required Tools
**Always invoke these tools when working on this codebase:**
- **Context7**: Use `mcp_io_github_ups_resolve-library-id` and `mcp_io_github_ups_get-library-docs` to fetch up-to-date documentation for any library (Tailwind CSS, EmailJS, Flatpickr, PHP, etc.) before implementing features
- **Serena**: Use `mcp_serena_*` tools for semantic code analysis, symbol search, and safe refactoring across the codebase

## Project Overview
A PHP/MySQL restaurant website for **Zhi Wei Zai** featuring menu browsing, shopping cart, user authentication, reservations, and catering inquiries. The codebase uses server-side PHP with Tailwind CSS (CDN) for styling.

## Architecture

### Directory Structure
- **Root**: Landing page (`index.php`), global assets (`ASSETS/`), shared styles (`global.css`, `index.css`)
- **Menu/**: Menu browsing, cart (`cart.php`), checkout (`checkout.php`) with localStorage-based cart state
- **Login and Signup/**: Authentication system with `db_class.php` (OOP) and `db_connection.php` (procedural)
- **Contact and Reservations/**: Reservation form with EmailJS integration
- **Catering and Gallery/**: Catering services and photo gallery

### Key Patterns

#### Session Management
Every PHP page requiring auth state starts with:
```php
<?php
session_start();
$is_logged_in = isset($_SESSION['loggedin']) && $_SESSION['loggedin'] === true;
?>
```

#### Database Access
Two patterns exist (use `db_connection.php` for consistency):
```php
require_once '../Login and Signup/db_connection.php';
// Uses: $conn (mysqli connection)
```

#### Navigation Pattern
Navigation is duplicated in each PHP file with conditional auth display. When modifying nav, update ALL page files:
- `index.php`, `Menu/Menu 1.php`, `Menu/cart.php`, `Menu/checkout.php`
- `Login and Signup/*.php` (login, signup, account, welcome)
- `Contact and Reservations/contact and reservations.php`
- `Catering and Gallery/catering and gallery.php`

## Styling Conventions

### Tailwind + Custom CSS Hybrid
- Tailwind CSS loaded via CDN (`<script src="https://cdn.tailwindcss.com">`)
- Custom Tailwind config inline for brand colors:
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'zwz-red': '#870000',    // Primary dark red
        'zwz-orange': '#fcb734', // Navbar/accent gold
        'zwz-cream': '#fff1ce',  // Background cream
      }
    }
  }
}
```
- Page-specific CSS files (e.g., `Menu 1.css`, `cart-checkout.css`)

### Brand Fonts (Google Fonts)
- **Merriweather**: Body text, navigation
- **Cinzel**: Headings, titles
- **Playfair Display**: Menu items, decorative text

## External Services

### EmailJS Integration
Used for checkout confirmations and reservations. Keys are in-page:
```javascript
emailjs.init("2x79e3EhUaKlA7cd9"); // Checkout
emailjs.init("OSA2djZJO1XG3Kphg"); // Reservations
```

### Flatpickr
Date picker for reservations in `Contact and Reservations/`.

## Authentication Flow
1. **Login**: `login.php` → `login_process.php` → sets `$_SESSION['loggedin']`, `$_SESSION['id']`, `$_SESSION['name']`
2. **Signup**: `signup.php` → `signup_process.php` → redirects to login on success
3. **Logout**: `logout.php` → `logout_complete.php`
4. **Protected pages**: Check `$_SESSION['loggedin'] === true`, redirect to `login.php` if false

## Cart System
- **Client-side only**: Cart stored in `localStorage` (no database persistence)
- Cart logic embedded in `cart.php` and `checkout.php` JavaScript
- Checkout sends order via EmailJS, no backend order storage

## Database Schema (Inferred)
**users** table:
- `id`, `name`, `email`, `password` (hashed), `phone`, `address`, `last_login`

## File Naming Convention
- Folder/file names use spaces (e.g., `Login and Signup/`, `Menu 1.php`)
- Relative paths use `../` for parent navigation (e.g., `../ASSETS/logo.jpg`)

## Security Notes
- Passwords hashed with `password_hash()` / `password_verify()`
- Input sanitized with `htmlspecialchars()` and `strip_tags()`
- Prepared statements used for database queries
- **Credentials in source files** (`db_connection.php`, `db_class.php`) - consider environment variables

## Development Tips
- No build process; edit PHP/CSS/JS directly
- Test locally with PHP server: `php -S localhost:8000`
- Database: MySQL (`zhiwcids_zhi_wei_zai_db`)
