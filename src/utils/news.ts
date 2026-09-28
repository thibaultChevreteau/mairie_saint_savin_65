/**
 * Generates an excerpt for news articles following the rules:
 * - Uses the first sentence of the text/markdown body as hook.
 * - If length > 120 characters (or no period marking end of first sentence),
 *   truncates cleanly with '...'.
 */
export function getNewsExcerpt(rawText: string): string {
	if (!rawText) return '';

	// Clean up basic markdown markers (headers, bold, italic, code, etc.)
	const cleanText = rawText
		.replace(/^#+\s+/gm, '')
		.replace(/[*_`]/g, '')
		.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
		.trim();

	const periodIndex = cleanText.indexOf('.');
	let sentence = cleanText;
	let hasPeriod = false;

	if (periodIndex !== -1) {
		sentence = cleanText.substring(0, periodIndex + 1);
		hasPeriod = true;
	}

	if (sentence.length > 120) {
		const truncated = sentence.substring(0, 120);
		const lastSpace = truncated.lastIndexOf(' ');
		const cleanTruncated = lastSpace > 80 ? truncated.substring(0, lastSpace) : truncated;
		return cleanTruncated.trim() + '...';
	}

	if (!hasPeriod && sentence.length > 120) {
		const truncated = sentence.substring(0, 120);
		const lastSpace = truncated.lastIndexOf(' ');
		const cleanTruncated = lastSpace > 80 ? truncated.substring(0, lastSpace) : truncated;
		return cleanTruncated.trim() + '...';
	}

	return sentence;
}
