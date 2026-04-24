# Eleventy Research Group Website Setup

This is the folder structure for your Eleventy-based research group website built with Markdown support.

## Project Structure

```
ResearchGroup/
├── src/                    # Source files
│   ├── _includes/          # Layout templates and partials
│   │   ├── base.html      # Main layout template
│   │   ├── header.html    # Header partial
│   │   └── footer.html    # Footer partial
│   ├── css/               # Stylesheets
│   │   └── style.css      # Main stylesheet
│   ├── assets/            # Static assets (images, files, etc.)
│   ├── pages/             # Content pages
│   │   ├── about.md
│   │   ├── research.md
│   │   ├── team.md
│   │   ├── publications.md
│   │   └── contact.md
│   └── index.md           # Homepage
├── _site/                 # Output directory (generated)
├── .eleventy.js           # Eleventy configuration
├── .gitignore            # Git ignore file
└── package.json          # Project dependencies
```

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```
   This will serve your site at `http://localhost:8080` and watch for changes.

3. **Build for Production**
   ```bash
   npm run build
   ```

## How to Use

### Adding Pages
Create new `.md` files in the `src/` directory or `src/pages/` directory with front matter:

```markdown
---
layout: base.html
title: Page Title
---

# Page content goes here

You can use markdown formatting here.
```

### Editing Navigation
Edit the navigation links in `src/_includes/header.html` to match your page structure.

### Customizing Styles
Modify `src/css/style.css` to customize the look and feel. The current styles are responsive and mobile-friendly.

### Adding Images
1. Place images in `src/assets/images/`
2. Reference them in markdown: `![Alt text](/assets/images/filename.jpg)`

## Front Matter Attributes

Each markdown file should have front matter at the top:

- `layout` - The template to use (currently `base.html`)
- `title` - The page title (used in browser tab and header)

You can add custom attributes that will be available in your templates.

## Markdown Support

Eleventy supports standard markdown syntax:
- Headers: `#`, `##`, `###`, etc.
- Bold: `**text**`
- Italic: `*text*`
- Links: `[text](url)`
- Lists: `- item` or `1. item`
- Code: `` `inline` `` or code blocks with ` ``` `

## Next Steps

1. Customize the header color and fonts in `src/css/style.css`
2. Update `src/_includes/header.html` navigation to match your pages
3. Replace placeholder content in all `.md` files with your actual content
4. Add your logo/images to `src/assets/`
5. Deploy to your hosting provider (Netlify, GitHub Pages, etc.)
