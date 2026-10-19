# 404 Error Page Project

A responsive, visually engaging custom 404 Error page built with vanilla HTML5, CSS3, and JavaScript.

---

## 🚀 Approach

1. **Semantic HTML5 Structure**:
   - Structured the document using semantic tags (`<main>`, `<h1>`, `<h2>`, `<p>`).
   - Grouped related actions (Home link, Go Back button) into accessible button elements.

2. **Centering & Responsive Layout (CSS3)**:
   - Used **CSS Flexbox** (`display: flex; justify-content: center; align-items: center; min-height: 100vh`) to achieve horizontal and vertical centering regardless of viewport height.
   - Employed `clamp()` typography to keep the "404" heading large, crisp, and responsive across screens.
   - Utilized pure CSS shapes and `@keyframes` floating animations for a lightweight, zero-dependency illustration.

3. **User-Friendly Experience (JavaScript)**:
   - Provided navigation options: return to the homepage or navigate back via `history.back()`.
   - Included an automated 15-second countdown timer redirect to guide stranded users safely home.
   - Added a subtle cursor tilt effect on desktop to add polish.

---

## 🎯 Deliverables & Outcomes

- **Custom Friendly Message**: Replaces harsh server error codes with empathetic, space-themed copy.
- **Pure CSS Illustration**: Astronaut and planet graphics rendered without external image assets, keeping load time near zero.
- **Link Back to Homepage**: Prominent call-to-action button to prevent bounce rates.
- **Responsive Layout**: Fluidly scales from 320px mobile screens to wide monitors.

---

## 💡 Interview Questions Answered

### 1. Why is a custom 404 page useful for user experience?
- **Reduces Drop-off / Bounce Rate**: A default browser 404 page feels broken and prompts users to close the tab. A custom page preserves brand trust and provides clear exit pathways back to valid pages.
- **Guides the User**: It clearly communicates what went wrong without technical jargon and suggests useful links or search options.
- **Maintains Brand Consistency**: Matches the typography, color scheme, and voice of the rest of the application.

### 2. How would you center content both vertically and horizontally?
There are two common modern CSS techniques:

1. **Flexbox on Parent Container** (Used in this project):
   ```css
   .container {
     display: flex;
     justify-content: center; /* Horizontal */
     align-items: center;     /* Vertical */
     min-height: 100vh;
   }