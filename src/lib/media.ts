/** Shared writing that can sit beside or under any media item. */
export type MediaFields = {
  /** `side` puts the writing next to the media. `below` stacks it underneath. `above` stacks it above. */
  layout?: 'side' | 'below' | 'above';
  /** Put the writing on the left. Side-by-side items alternate when this is left unset. */
  flip?: boolean;
  heading?: string;
  blurb?: string;
  caption?: string;
};

export type MediaItem =
  | ({ type: 'image'; src: string; alt: string } & MediaFields)
  | ({ type: 'youtube'; url: string; title: string; start?: number; end?: number } & MediaFields)
  | ({ type: 'video'; src: string; title: string; poster?: string; start?: number; autoplay?: boolean } & MediaFields)
  | ({ type: 'embed'; url: string; title: string; aspect?: string } & MediaFields);

const toSeconds = (v: string): number => {
  const m = v.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s?)?$/);
  return m ? (+(m[1] ?? 0)) * 3600 + (+(m[2] ?? 0)) * 60 + (+(m[3] ?? 0)) : 0;
};

/** Accepts any YouTube link (watch, youtu.be, shorts, embed) or a bare 11-character id. */
export function youtubeEmbedUrl(input: string, start?: number, end?: number): string | null {
  let id = input.trim();
  let t = 0;
  try {
    const u = new URL(id);
    if (u.hostname.includes('youtu.be')) id = u.pathname.split('/')[1] ?? '';
    else if (/^\/(embed|shorts)\//.test(u.pathname)) id = u.pathname.split('/')[2] ?? '';
    else id = u.searchParams.get('v') ?? '';
    t = toSeconds(u.searchParams.get('t') ?? u.searchParams.get('start') ?? '');
  } catch { /* not a URL: treat as a bare id */ }
  if (!/^[\w-]{11}$/.test(id)) return null;
  const params = new URLSearchParams({ rel: '0', modestbranding: '1' });
  const s = start ?? t;
  if (s) params.set('start', String(Math.floor(s)));
  if (end) params.set('end', String(Math.floor(end)));
  return `https://www.youtube-nocookie.com/embed/${id}?${params}`;
}

export const isPlaceholder = (v: string) => /^REPLACE/i.test(v.trim());
