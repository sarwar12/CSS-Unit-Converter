# CSS Unit Converter

A simple and responsive web-based tool to convert between various CSS units, built with HTML, CSS (Tailwind CSS), and JavaScript. The project includes a Home page with the converter and an About page with developer information.

## Features
- **Unit Conversion**: Convert between CSS units (px, rem, em, vw, vh, vmin, vmax, %, pt, pc, cm, mm, in, ch, ex).
- **Responsive Design**: Built with Tailwind CSS for a mobile-friendly interface.
- **Sticky Navigation**: Menu stays fixed at the top during scrolling.
- **Interactive Effects**: 
  - Hover scale-up effect on profile picture.
  - Bounce animation on social link clicks.
- **Two Pages**:
  - **Home**: CSS unit converter form.
  - **About**: Developer info with social media links.
- **Footer**: Divided into three sections:
  - Left: Copyright text.
  - Center: Rounded profile picture.
  - Right: Social media icons (Facebook, LinkedIn, GitHub, Instagram, YouTube, X).
- **Font Awesome**: Social media icons integrated via Font Awesome CDN.

## Technologies
- **HTML5**: Structure of the web pages.
- **Tailwind CSS**: Styling and responsive design.
- **JavaScript**: Unit conversion logic and interactive effects.
- **Font Awesome**: Social media icons.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/sarwar12/CSS-Unit-Converter.git
   ```
2. Navigate to the project directory:
   ```bash
   cd CSS-Unit-Converter
   ```
3. Open `index.html` or `about.html` in a web browser. No server is required as the project uses CDN for Tailwind CSS and Font Awesome.

## Usage
- **Home Page (`index.html`)**:
  - Enter a value and select input/output units.
  - Click "Convert" to see the result.
- **About Page (`about.html`)**:
  - View developer information and connect via social media links.
- **Navigation**: Use the sticky menu to switch between Home and About pages.
- **Social Links**: Click social media icons in the About page or footer for a bounce effect.

## File Structure
```
css-unit-converter/
├── index.html       # Home page with converter
├── about.html       # About page with developer info
└── README.md        # Project documentation
```

## Notes
- Replace the placeholder profile picture (`https://via.placeholder.com/150`) with your own image URL in both `index.html` and `about.html`.
- Update social media links in both pages with your actual profiles (currently, only Facebook and LinkedIn are real; others are placeholders).
- The `%`, `ch`, and `ex` units use simplified conversion assumptions (e.g., `%` treated as px, `ch` and `ex` based on font size).

## Connect
Follow me on social media:
- [Facebook](https://facebook.com/w3sarwar)
- [LinkedIn](https://www.linkedin.com/in/w3sarwar)
- [GitHub](https://github.com/sarwar12)
- [Instagram](https://instagram.com/iam_gsarwar)
- [YouTube](https://youtube.com/@learnwithgsarwar)
- [X](https://x.com/w3sarwar)

## License
© 2025 CSS Unit Converter. All rights reserved.
