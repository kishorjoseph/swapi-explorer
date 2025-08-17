// Extract numeric id from SWAPI `url` like "https://swapi.dev/api/people/1/"
export const extractId = (url: string): string => {
    const parts = url.split('/').filter(Boolean);
    return parts[parts.length - 1]; // last non-empty piece
  };
  
  // Get page number from a SWAPI page url (e.g., ?page=2)
  export const getPageFromUrl = (url: string | null): number | null => {
    if (!url) return null;
    const u = new URL(url);
    const page = u.searchParams.get('page');
    return page ? Number(page) : 1;
  };
  