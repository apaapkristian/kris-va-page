# Automation & Backend Systems Portfolio

This is a clean portfolio webpage based on the structure of your uploaded resume-style HTML, but rebuilt into a simpler modern setup:

- `index.html` = page structure
- `styles.css` = design/theme
- `script.js` = renders content from JSON
- `content.json` = editable text, images, videos, projects, tools, services, testimonials, and contact links

## How to edit

Open `content.json` and replace:
- profile image paths
- project images
- video URLs
- service descriptions
- testimonials
- contact links

## Media rules

For images:
```json
"image": "assets/project-discord.jpg"
```

For MP4 videos:
```json
"video": "assets/demo.mp4"
```

For YouTube/Loom embeds:
```json
{
  "type": "embed",
  "src": "https://www.youtube.com/embed/YOUR_VIDEO_ID"
}
```

## Important

If you open `index.html` directly from your computer, some browsers block loading `content.json`.
Upload all files to your website/hosting, or run a local server.

Example:
```bash
python -m http.server 8000
```
Then open:
```text
http://localhost:8000
```
