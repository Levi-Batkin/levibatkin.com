# Levi Batkin — Artist Website

A responsive, dark, animated one-page artist website for `levibatkin.com`.

## Files
- `index.html` — page structure, SEO metadata and social preview metadata
- `styles.css` — visual design, responsive layout and animations
- `script.js` — scroll reveals, progress bar and mobile navigation
- `config.js` — edit social and streaming links in one place

## Add your links
Open `config.js` and replace the empty strings with the full URLs for each platform/release. Empty links are automatically disabled.

Keys include:
- `afterLifeSpotify`, `afterLifeApple`, `afterLifeYouTube`
- `shesLikeSpotify`, `shesLikeApple`, `shesLikeYouTube`
- `hurricaneSpotify`, `hurricaneApple`, `hurricaneYouTube`
- `instagram`, `tiktok`, `spotifyArtist`, `soundcloud`, `youtube`

The contact links already point to `mailto:me@levibatkin.com`.

## Deploy
Upload all four website files to the document root for `levibatkin.com`. Ensure HTTPS is enabled. Replace the default Open Graph image URL in `index.html` with a real 1200×630 image at `/og-image.jpg` when you have artist artwork.

## SEO note
The page includes a title, meta description, canonical URL, Open Graph/Twitter metadata and basic MusicGroup structured data. Add a sitemap.xml and submit the domain in Google Search Console after deployment.
