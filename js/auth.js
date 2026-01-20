/**
 * Zhi Wei Zai - Authentication System (localStorage-based)
 * This file handles user authentication, registration, and session management
 */

const ZWZAuth = {
  // Storage keys
  USERS_KEY: 'zwz_users',
  CURRENT_USER_KEY: 'zwz_current_user',
  
  /**
   * Initialize the auth system
   */
  init() {
    // Ensure users array exists in localStorage
    if (!localStorage.getItem(this.USERS_KEY)) {
      localStorage.setItem(this.USERS_KEY, JSON.stringify([]));
    }
    this.updateNavigation();
  },
  
  /**
   * Get all registered users
   */
  getUsers() {
    return JSON.parse(localStorage.getItem(this.USERS_KEY) || '[]');
  },
  
  /**
   * Save users array to localStorage
   */
  saveUsers(users) {
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
  },
  
  /**
   * Get currently logged in user
   */
  getCurrentUser() {
    const userData = localStorage.getItem(this.CURRENT_USER_KEY);
    return userData ? JSON.parse(userData) : null;
  },
  
  /**
   * Check if user is logged in
   */
  isLoggedIn() {
    return this.getCurrentUser() !== null;
  },
  
  /**
   * Register a new user
   */
  register(userData) {
    const { name, email, password, phone, address } = userData;
    
    // Validation
    if (!name || name.length < 2) {
      return { success: false, error: 'Name must be at least 2 characters' };
    }
    
    if (!email || !this.isValidEmail(email)) {
      return { success: false, error: 'Please enter a valid email address' };
    }
    
    if (!password || password.length < 8) {
      return { success: false, error: 'Password must be at least 8 characters' };
    }
    
    if (!phone) {
      return { success: false, error: 'Phone number is required' };
    }
    
    if (!address || address.length < 5) {
      return { success: false, error: 'Please enter a complete delivery address' };
    }
    
    // Check if email already exists
    const users = this.getUsers();
    if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, error: 'This email is already registered. Please use a different email or sign in.' };
    }
    
    // Create new user
    const newUser = {
      id: Date.now(),
      name,
      email: email.toLowerCase(),
      password: this.hashPassword(password), // Simple hash for demo
      phone,
      address,
      createdAt: new Date().toISOString(),
      lastLogin: null
    };
    
    users.push(newUser);
    this.saveUsers(users);
    
    return { success: true, message: 'Registration successful! You can now log in.' };
  },
  
  /**
   * Login user
   */
  login(email, password) {
    if (!email || !password) {
      return { success: false, error: 'Email and password are required' };
    }
    
    const users = this.getUsers();
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    
    if (!user) {
      return { success: false, error: 'No account found with this email. Please sign up.' };
    }
    
    if (user.password !== this.hashPassword(password)) {
      return { success: false, error: 'Incorrect password. Please try again.' };
    }
    
    // Update last login
    user.lastLogin = new Date().toISOString();
    this.saveUsers(users);
    
    // Set current user (without password)
    const currentUser = { ...user };
    delete currentUser.password;
    localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(currentUser));
    
    return { success: true, user: currentUser };
  },
  
  /**
   * Logout user
   */
  logout() {
    localStorage.removeItem(this.CURRENT_USER_KEY);
    return { success: true };
  },
  
  /**
   * Update user profile
   */
  updateProfile(updates) {
    const currentUser = this.getCurrentUser();
    if (!currentUser) {
      return { success: false, error: 'Not logged in' };
    }
    
    const users = this.getUsers();
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    
    if (userIndex === -1) {
      return { success: false, error: 'User not found' };
    }
    
    // Validate email if changed
    if (updates.email && updates.email.toLowerCase() !== currentUser.email.toLowerCase()) {
      if (!this.isValidEmail(updates.email)) {
        return { success: false, error: 'Invalid email format' };
      }
      if (users.find(u => u.email.toLowerCase() === updates.email.toLowerCase() && u.id !== currentUser.id)) {
        return { success: false, error: 'Email already in use' };
      }
    }
    
    // Update user data
    users[userIndex] = { ...users[userIndex], ...updates };
    this.saveUsers(users);
    
    // Update current user session
    const updatedUser = { ...users[userIndex] };
    delete updatedUser.password;
    localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(updatedUser));
    
    return { success: true, message: 'Profile updated successfully!' };
  },
  
  /**
   * Update password
   */
  updatePassword(currentPassword, newPassword) {
    const currentUser = this.getCurrentUser();
    if (!currentUser) {
      return { success: false, error: 'Not logged in' };
    }
    
    const users = this.getUsers();
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    
    if (userIndex === -1) {
      return { success: false, error: 'User not found' };
    }
    
    // Verify current password
    if (users[userIndex].password !== this.hashPassword(currentPassword)) {
      return { success: false, error: 'Current password is incorrect' };
    }
    
    // Validate new password
    if (!newPassword || newPassword.length < 8) {
      return { success: false, error: 'New password must be at least 8 characters' };
    }
    
    // Update password
    users[userIndex].password = this.hashPassword(newPassword);
    this.saveUsers(users);
    
    return { success: true, message: 'Password updated successfully!' };
  },
  
  /**
   * Simple password hash (for demo purposes - in production use bcrypt)
   */
  hashPassword(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
      const char = password.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return 'zwz_' + Math.abs(hash).toString(16);
  },
  
  /**
   * Validate email format
   */
  isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },
  
  /**
   * Update navigation based on login state
   */
  updateNavigation() {
    const isLoggedIn = this.isLoggedIn();
    
    // Update desktop account link
    const accountLinks = document.querySelectorAll('#accountText, #mobileAccountText');
    accountLinks.forEach(link => {
      if (link) {
        const basePath = this.getBasePath();
        link.href = isLoggedIn 
          ? `${basePath}Login and Signup/account.html` 
          : `${basePath}Login and Signup/login.html`;
      }
    });
  },
  
  /**
   * Get base path relative to current page
   */
  getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/Menu/') || path.includes('/Login and Signup/') || 
        path.includes('/Contact and Reservations/') || path.includes('/Catering and Gallery/')) {
      return '../';
    }
    return '';
  },
  
  /**
   * Protect a page (redirect to login if not authenticated)
   */
  requireAuth(redirectUrl = null) {
    if (!this.isLoggedIn()) {
      const basePath = this.getBasePath();
      const returnUrl = encodeURIComponent(window.location.href);
      window.location.href = `${basePath}Login and Signup/login.html?from=${returnUrl}`;
      return false;
    }
    return true;
  }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  ZWZAuth.init();
});
