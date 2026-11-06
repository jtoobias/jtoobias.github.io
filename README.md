# Jonathan Tobias — Engineering Portfolio (V2)

[Jonathan's Portfolio](https://jtoobias.github.io/)

A lightweight, multi-page Astro portfolio for GitHub Pages. Light theme only.

## Run locally
```bash
npm install
npm run dev      # http://localhost:4321
npm run build && npm run preview
```

## Deploy to GitHub Pages
1. Push to the `main` branch of `jtoobias/jtoobias.github.io`.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. `.github/workflows/deploy.yml` builds and deploys on every push to `main`.

## Updating content
- `src/data/site.ts`: name, intro, email (replace `YOUR_EMAIL_HERE`), skills, experience.
- `src/data/projects.ts`: every project card and project page.
- `public/Jonathan-Tobias-CV.pdf`: add your public-safe CV (see `CV-PLACEHOLDER.txt`).

## Project filters
The Projects page filters by **Discipline** and **Employer** (the two combine). Chips are generated from your data:
- Discipline = each value in a project's `disciplines: [...]` list. Reuse an existing label exactly, or a new chip appears.
- Employer = the project's `company` value (for example `Lensor`, `Axis7`, `Personal`, `Master's degree`).

## Adding a project
Copy an existing entry in `projects.ts`, give it a unique `slug`, and fill the fields. `visual` picks the built-in card art (`board`, `robot`, `circuit`, `sensors`, `cart`) until you add a `cover` image. To show it on the homepage, add its slug to `featuredSlugs`.

## Media folders
Everything lives under `public/media/`, one folder per area: `home` (homepage), `lensor`, `axis7`, `bentech`, `masters`, `personal`. Add new area folders as needed. A file at `public/media/axis7/vineyard.mp4` is referenced as `/media/axis7/vineyard.mp4`.

## Homepage hero media
Set `heroMedia` in `src/data/site.ts` to a portrait photo or highlight video. The hero then shows it beside your intro (stacked on mobile). Until you replace the `REPLACE...` value it is hidden on the live site.
```ts
heroMedia: { type: 'image', src: '/media/home/portrait.jpg', alt: 'Portrait of Jonathan Tobias' }
// or a short silent looping highlight clip:
heroMedia: { type: 'video', src: '/media/home/highlight.mp4', poster: '/media/home/highlight.jpg', title: 'Highlights', autoplay: true }
// or YouTube:
heroMedia: { type: 'youtube', url: 'https://www.youtube.com/watch?v=XXXXXXXXXXX', title: 'Introduction' }
```
Use a portrait crop around 4:5 for images. Autoplay clips are muted and loop; leave `autoplay` out to show video controls and sound instead.

## Media guide
Add media to a project's `media: [ ... ]` list in `src/data/projects.ts`. Items appear on the project page in order, each with optional writing.

- `layout: 'side'` puts the heading and blurb next to the media. Consecutive side items swap sides on their own.
- `layout: 'below'` stacks the writing underneath. Wide clips usually want this.
- `flip: true` forces the writing onto the left.
- Leave `layout` unset and a picture with a blurb sits beside the text. A video or embed with a blurb sits underneath it.

```ts
{
  type: 'image',
  src: '/media/personal/CAN_IO_Board.jpg',
  alt: 'CAN input and output board',
  layout: 'side',
  heading: 'An IO board with a CAN habit',
  blurb: 'A few sentences about what the picture shows and what you did.'
}
```

Videos and embeds are full width when the writing is underneath. Images without any writing still show on their own.

**Local images.** Put files in `public/media/<area>/` and reference them without `public`:
```ts
{ type: 'image', src: '/media/masters/front.jpg', alt: 'Golf cart with sensor mast', layout: 'below', heading: 'Optional heading', blurb: 'Optional blurb', caption: 'Optional small note' }
```
Keep images under about 500 KB (about 1600 px wide, JPG or WebP). For a card and page hero image, set `cover: '/media/masters/cover.jpg'` on the project. Use a 4:3 or 16:9 crop.

**YouTube.** Paste any YouTube link (watch, youtu.be or shorts). Privacy-friendly embedding is used.
```ts
{ type: 'youtube', url: 'https://www.youtube.com/watch?v=XXXXXXXXXXX', title: 'Describe the video', start: 31 }
```
`start` (seconds) sets where playback begins; `end` is optional. The Axis7 vineyard entry already has `start: 31`. You only need to replace `REPLACE_WITH_YOUTUBE_LINK`. Set the video to Public or Unlisted on YouTube, otherwise it won't play for visitors.

**MP4 files.** Put the file in `public/media/<area>/` and add a poster image if you like:
```ts
{ type: 'video', src: '/media/axis7/vineyard.mp4', poster: '/media/axis7/vineyard-poster.jpg', title: 'Vineyard run', start: 31 }
```
GitHub limits files to 100 MB and Pages sites to about 1 GB, so keep clips short (H.264, around 720p, under 20 MB each). For long videos use YouTube instead.

**External embeds** (Vimeo, Google Drive previews, Sketchfab, etc.). Use the embed URL from the provider's Share → Embed option. It must start with `https://`.
```ts
{ type: 'embed', url: 'https://player.vimeo.com/video/123456789', title: 'Demo', aspect: '16/9' }
```
Some sites block embedding; if the frame stays blank, use YouTube or MP4 instead.

**Placeholders.** An item whose link or file still starts with `REPLACE` shows a grey placeholder in `npm run dev` and is hidden on the live site, so unfinished media never goes public.

## Before publishing
Check all descriptions, dates, employer permissions and links. Do not publish confidential work details, internal diagrams, customer information or proprietary images or video (including the Axis7 vineyard footage, unless Axis7 has agreed). Replace the CV placeholder with a public-safe version.
