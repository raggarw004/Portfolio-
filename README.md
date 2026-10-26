# Ritvik Aggarwal

A custom dark portfolio using React, TypeScript, Vite, Tailwind CSS, Three.js, React Three Fiber, Drei, GSAP ScrollTrigger, Framer Motion, Lenis and Lucide React. All libraries are free and open-source. No API keys or paid assets are required.

## Preview first

Open `visual-preview.html` directly in a browser for the standalone visual preview. It uses CSS sculpture artwork and simplified interactions; it is not the compiled React app. The React implementation includes the metallic Three.js sculpture, pointer interaction, lazy loading, magnetic buttons, tilted cards, GSAP horizontal pinned showcase, Lenis scrolling, and animated skill panels.

## Run the full app

Use Node.js 20.19+ (or Node.js 22+) with npm and internet access:

```sh
npm install
npm run dev
```

Open the localhost URL printed by Vite.

```sh
npm run build
npm run preview
```

`build` runs TypeScript checking before generating `dist/`.

## Verification status

Dependency installation was attempted in the creation environment but the npm registry could not resolve (`Could not resolve host: registry.npmjs.org`). The build attempt stopped at `tsc: command not found` because dependencies were unavailable. The production build and browser behavior are therefore **not verified**. No package lock is supplied because installation could not complete. Run the commands above on a network-enabled machine before deployment. The standalone visual preview was regenerated from the updated content. Its seven sections, seven shared effect layers, visible punctuation, internal links, supplied URLs, and removal of obsolete copy were checked programmatically. All TypeScript and TSX files passed syntax parsing using a cached TypeScript compiler. These checks do not replace a production build or visual browser QA.

## Edit your details

All personal content is in `src/data.ts`. This revision uses only the copy supplied by Ritvik: EXL internship, junior at IU studying Computer Science/Informatics, personal details, six projects, three job simulations, campus life, skills, and contact details. Dash punctuation in visible content is replaced with spaces or middle dots. Provided email, social URLs and two live demo destinations are wired directly.

Certificate URLs and a current resume were not supplied. Their original labels remain as plain text until `certificate` and `resumePath` fields are populated. No invented destinations or outdated profile PDF are included. When adding a resume, put it under `public/` and set `resumePath` to its public URL (use a deployment subpath if needed).

All seven sections retain the original dark visual styling and add coordinated wireframe forms, floating glass, moving light and shadow, animated SVG paths, morphing shapes, staggered text reveals and moving grids. The hero keeps its Three.js sculpture and adds a pointer-responsive shader atmosphere. Magnetic links, cursor light, card tilt and project graphic hover transforms remain. The desktop horizontal pinned project showcase runs on sufficiently tall, wide screens; smaller viewports use readable grids. No ordinary animation effects were disabled globally. Offscreen effects pause to avoid unnecessary work, and reduced-motion preferences suppress motion for accessibility.

Regenerate the separate offline preview after content or CSS edits:

```sh
node scripts/build-visual-preview.cjs
```

The offline preview uses CSS 3D sculpture artwork and native browser animation rather than the React/WebGL runtime. It has the same complete copy and shared CSS, but is not evidence of a successful React build.

## Structure

- `src/App.tsx`: all semantic page sections and scroll behavior
- `src/components/Scene.tsx`: lazy-loaded R3F sculpture, local environment lighting and particles
- `src/components/Interactions.tsx`: magnetic targets, card tilt and cursor follower
- `src/data.ts`: editable personal information
- `src/styles.css`: original design rules plus additive styling, motion and Tailwind directives
- `src/components/SectionEffects.tsx`: shared effect layer and split heading text
- `scripts/build-visual-preview.cjs`: generates the offline preview from shared data and CSS
- `public/`: favicon; place your actual resume here when available
- `visual-preview.html`: separate no-install visual preview

The WebGL scene uses locally generated lightforms, so no remote HDRI downloads are required. Google Fonts are optional; system fonts provide a fallback when offline. Native cursor remains available, with a decorative follower on fine pointers. Reduced-motion disables scrolling motion and uses demand-rendered 3D. Mobile uses vertical project cards instead of a pinned horizontal section. A scene error boundary provides a CSS orb when WebGL fails.

## Vercel

1. Push this folder to a Git repository and import it into Vercel.
2. Choose Vite. Install: `npm install`. Build: `npm run build`. Output: `dist`.
3. Deploy. No environment variables are needed.

## Netlify

1. Import the repository into Netlify.
2. Build: `npm run build`. Publish directory: `dist`.
3. The supplied `netlify.toml` sets these values. No backend or redirects are required.

## GitHub Pages

The supplied workflow `.github/workflows/deploy.yml` builds and deploys on a push to `main`, or manual workflow dispatch. In repository Settings → Pages, select GitHub Actions as the source. Vite uses `base: './'`, so the static assets and PDF support repository subpaths. All navigation is single-page anchor navigation.

## Before publication

Run the build, check desktop/mobile layouts, test keyboard navigation and reduced-motion, and add your certificate destinations and actual resume if desired. Hosting is optional and subject to provider account limits; the app itself has no paid service dependency.

## License

Original source is provided under MIT. Third-party dependencies keep their own licenses.

## Screenshot section artwork

Personal details, Life at IU, and Toolbox now include distinct animated SVG illustrations, luminous card lighting, motion accents, and hover transforms. The shared `src/effects/card-art.js` mounts the same decoration in React and the offline preview. `src/effects/immersive.js` adds an animated particle globe and ambient star field. Both return cleanup functions for React lifecycle handling. No additional visible copy is introduced. Motion respects reduced-motion preferences. Syntax checks passed; the dependency-based production build remains unverified.

## Latest content update

The site now contains four ML projects and two experience cards grounded in the supplied screenshot: GitHub Independent Contributor and Snapchat Lens Studio Independent AR Lens Creator. The academic projects and Forage simulations were removed. Each project has exactly three relevant ML topic tags. Toolbox categories are Deep learning, Learning & optimization, and Applied ML. The closing line is “Let's build something together.”

Set `photoPath` in `src/data.ts` to your supplied portrait URL to show the animated portrait frame above the introduction paragraph. The supplied portrait is included as `public/portrait.png`; the standalone HTML embeds the same image so it can be opened independently. The offline preview generator also honors this field.
