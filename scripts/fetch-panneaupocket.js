import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const URL = 'https://app.panneaupocket.com/ville/4275507-saint-savin-65400';
const JSON_OUTPUT_PATH = path.resolve(__dirname, '../src/data/panneaupocket.json');
const CONTENT_NEWS_DIR = path.resolve(__dirname, '../src/content/news');

/**
 * Converts FR date string "DD/MM/YYYY" to "YYYY-MM-DD"
 */
function parseFrDateToIso(dateStr) {
  if (!dateStr) return new Date().toISOString().split('T')[0];
  const parts = dateStr.split('/');
  if (parts.length === 3) {
    const [day, month, year] = parts;
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  }
  return new Date().toISOString().split('T')[0];
}

async function fetchPanneauPocket() {
  console.log(`[PanneauPocket] Récupération des données depuis ${URL}...`);

  const response = await fetch(URL, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    },
  });

  if (!response.ok) {
    throw new Error(`Erreur HTTP: ${response.status} ${response.statusText}`);
  }

  const html = await response.text();
  const $ = cheerio.load(html);

  const publications = [];

  $('.sign-carousel--item').each((index, element) => {
    const $item = $(element);
    const id = $item.attr('data-id') || `item-${index}`;

    // Raw & Formatted Date
    const rawDateText = $item.find('.sign-preview__title .date').text().replace(/\s+/g, ' ').trim();
    const dateMatch = rawDateText.match(/(\d{2}\/\d{2}\/\d{4})/);
    const dateFr = dateMatch ? dateMatch[1] : null;
    const isoDate = parseFrDateToIso(dateFr);

    // Title
    const title = $item.find('.sign-preview__content .title').text().trim();

    // Content: Description HTML & Plaintext
    const $content = $item.find('.sign-preview__content .content').clone();
    $content.find('a, img').remove();

    const descriptionHtml = $content.html() ? $content.html().trim() : '';

    const paragraphs = [];
    $content.find('p').each((_, p) => {
      const pText = $(p).text().trim();
      if (pText) paragraphs.push(pText);
    });

    const descriptionText = paragraphs.length > 0 ? paragraphs.join('\n\n') : $content.text().trim();

    // Media & Attachments
    const $mediaLink = $item.find('.sign-preview__content .content a[target="_blank"]');
    const mediaHref = $mediaLink.attr('href') || null;
    const $img = $item.find('.sign-preview__content .content img');
    const imgSrc = $img.attr('src') || mediaHref;

    let imageUrl = null;
    let documentUrl = null;

    if (mediaHref) {
      if (mediaHref.endsWith('.pdf') || mediaHref.includes('/document/')) {
        documentUrl = mediaHref;
        imageUrl = imgSrc;
      } else {
        imageUrl = mediaHref;
      }
    } else if (imgSrc) {
      imageUrl = imgSrc;
    }

    // Direct URL link
    const directLink =
      $item.find('[data-facebook-share-share-url-value]').attr('data-facebook-share-share-url-value') ||
      `https://app.panneaupocket.com/ville/4275507-saint-savin-65400?panneau=${id}`;

    publications.push({
      id,
      title,
      rawDate: rawDateText,
      date: isoDate,
      dateFr,
      descriptionText,
      descriptionHtml,
      imageUrl,
      documentUrl,
      link: directLink,
    });
  });

  // Ensure target directory exists
  if (!fs.existsSync(CONTENT_NEWS_DIR)) {
    fs.mkdirSync(CONTENT_NEWS_DIR, { recursive: true });
  }

  // Generate / Overwrite Markdown files for PanneauPocket publications only
  for (const pub of publications) {
    const mdPath = path.join(CONTENT_NEWS_DIR, `${pub.id}.md`);
    const frontmatter = [
      '---',
      `title: ${JSON.stringify(pub.title)}`,
      `date: ${pub.date}`,
      `rawDate: ${JSON.stringify(pub.rawDate)}`,
      `category: "PanneauPocket"`,
      `image: ${JSON.stringify(pub.imageUrl || '')}`,
      `imageUrl: ${JSON.stringify(pub.imageUrl || '')}`,
      `documentUrl: ${pub.documentUrl ? JSON.stringify(pub.documentUrl) : 'null'}`,
      `link: ${JSON.stringify(pub.link)}`,
      '---',
      '',
      pub.descriptionHtml || pub.descriptionText,
      '',
    ].join('\n');

    fs.writeFileSync(mdPath, frontmatter, 'utf-8');
    console.log(`[PanneauPocket] Généré: src/content/news/${pub.id}.md`);
  }

  // Save JSON summary in src/data/panneaupocket.json
  const jsonDir = path.dirname(JSON_OUTPUT_PATH);
  if (!fs.existsSync(jsonDir)) {
    fs.mkdirSync(jsonDir, { recursive: true });
  }

  const payload = {
    updatedAt: new Date().toISOString(),
    count: publications.length,
    publications,
  };

  fs.writeFileSync(JSON_OUTPUT_PATH, JSON.stringify(payload, null, 2), 'utf-8');
  console.log(`[PanneauPocket] ${publications.length} publication(s) sauvegardée(s) dans ${JSON_OUTPUT_PATH}`);
}

fetchPanneauPocket().catch((error) => {
  console.error('[PanneauPocket] Erreur lors de la récupération :', error);
  process.exit(1);
});
