# Zhi Wei Zai Restaurant Website - AI Coding Instructions

## Required Tools - AUTO-INVOKE
**Always automatically invoke these tools when working on this codebase:**

### Context7 (Library Documentation)
- **Auto-invoke for**: Any library/framework usage (Tailwind CSS, EmailJS, Flatpickr, PHP, MySQL, etc.)
- **Tools**: `mcp_io_github_ups_resolve-library-id` → `mcp_io_github_ups_get-library-docs`
- **When**: Before implementing any feature that uses external libraries

### Serena (Semantic Code Analysis)
- **Auto-invoke for**: Code analysis, symbol search, refactoring, understanding codebase structure
- **Tools**: `mcp_serena_*` (find_symbol, get_symbols_overview, find_referencing_symbols, etc.)
- **When**: Before modifying existing code, finding related code, safe refactoring

### Dev-Agent (Semantic Code Search)
- **Auto-invoke for**: Understanding codebase, finding related code, exploring git history
- **Tools**: 
  - `mcp_dev-agent-deb_dev_search` or `mcp_dev-agent-dei_dev_search` - Semantic code search by meaning
  - `mcp_dev-agent-deb_dev_history` or `mcp_dev-agent-dei_dev_history` - Git commit history search
  - `mcp_dev-agent-deb_dev_plan` or `mcp_dev-agent-dei_dev_plan` - Context assembly for issues
  - `mcp_dev-agent-deb_dev_gh` or `mcp_dev-agent-dei_dev_gh` - GitHub issues/PRs semantic search
- **When**: Starting any task, exploring how features work, finding similar implementations

### UI/UX Pro Max (Design Intelligence)
- **Auto-invoke for**: UI/UX tasks, landing pages, component design, styling decisions
- **Tools**: `mcp__21st-dev_mag_21st_magic_component_*` tools
- **When**: Building new UI components, improving design, creating pages

## Auto-Invocation Rules
1. **Before ANY code modification**: Use `dev_search` to understand existing patterns
2. **Before implementing features**: Use Context7 to get library documentation  
3. **Before refactoring**: Use Serena to find all symbol references
4. **For UI work**: Use UI/UX Pro Max design intelligence
5. **For debugging**: Use `dev_history` to understand code evolution

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
- Custom Tailwind config inline for brand colors (Chinese Traditional Palette):
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        // Chinese Traditional Color Palette (中式传统配色)
        'zwz-crimson': '#902223',      // Primary - 绛红 (Jiàng Hóng)
        'zwz-crimson-light': '#A83234', // Hover state
        'zwz-crimson-dark': '#6E1A1B',  // Dark accent
        'zwz-brown': '#8D5631',          // Secondary - 棕褐 (Zōng Hè)
        'zwz-brown-light': '#A86B42',    // Hover state
        'zwz-brown-dark': '#6B4025',     // Dark accent
        'zwz-cream': '#E2CD9C',          // Background - 米黄 (Mǐ Huáng)
        'zwz-cream-light': '#F5EDD8',    // Light sections
        'zwz-cream-dark': '#D4BE8A',     // Darker cream
        'zwz-gold': '#C4A44A',           // Accent - 金色 (Jīn Sè)
        'zwz-gold-light': '#D4B85E',     // Hover gold
        'zwz-text': '#3D2317',           // Primary text - 深褐 (Shēn Hè)
        'zwz-text-light': '#5C3D2E',     // Secondary text
      }
    }
  }
}
```
- Page-specific CSS files (e.g., `Menu 1.css`, `cart-checkout.css`)

### Brand Fonts (Google Fonts)
- **Cinzel**: Headings, titles (pairs with Noto Serif SC for Chinese)
- **Karla**: Body text, navigation (pairs with Noto Sans SC for Chinese)
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
