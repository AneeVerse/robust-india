import { useState, useMemo, useEffect } from 'react';
import Fuse from 'fuse.js';
import { getLocalizedSearchData, SearchItem, getCategoryNames } from '@/data/searchData';

interface LocalizedSearchItem {
  id: string;
  title: string;
  description: string;
  category: 'page' | 'chemical' | 'service' | 'content';
  url: string;
  keywords: string[];
}

interface UseSearchResult {
  results: GroupedResults;
  isSearching: boolean;
  hasResults: boolean;
  totalResults: number;
}

interface GroupedResults {
  [category: string]: LocalizedSearchItem[];
}

const fuseOptions = {
  keys: [
    { name: 'title', weight: 0.4 },
    { name: 'description', weight: 0.3 },
    { name: 'keywords', weight: 0.3 }
  ],
  threshold: 0.4, // Lower = more strict matching
  includeScore: true,
  minMatchCharLength: 2
};

export function useSearch(query: string, t: (key: string) => string | string[], maxResults: number = 15) {
  const [isSearching, setIsSearching] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState('');

  // Debounce the search query
  useEffect(() => {
    setIsSearching(true);
    const timer = setTimeout(() => {
      setDebouncedQuery(query.trim());
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  // Convert translation keys to actual text
  const localizedSearchData = useMemo((): LocalizedSearchItem[] => {
    const rawData = getLocalizedSearchData(t);
    return rawData.map(item => ({
      id: item.id,
      title: t(item.titleKey) as string,
      description: t(item.descriptionKey) as string,
      category: item.category,
      url: item.url,
      keywords: item.keywordsKey ? (t(item.keywordsKey) as string[]) : []
    }));
  }, [t]);

  // Initialize Fuse instance with localized data
  const fuse = useMemo(() => new Fuse(localizedSearchData, fuseOptions), [localizedSearchData]);

  // Get category names
  const categoryNames = useMemo(() => {
    const tString = t as (key: string) => string;
    return getCategoryNames(tString);
  }, [t]);

  // Perform search and group results
  const results = useMemo((): GroupedResults => {
    if (!debouncedQuery || debouncedQuery.length < 2) {
      return {};
    }

    const searchResults = fuse.search(debouncedQuery, { limit: maxResults });
    const groupedResults: GroupedResults = {};

    searchResults.forEach(({ item }) => {
      const category = categoryNames[item.category];
      if (!groupedResults[category]) {
        groupedResults[category] = [];
      }
      groupedResults[category].push(item);
    });

    return groupedResults;
  }, [debouncedQuery, fuse, maxResults, categoryNames]);

  const totalResults = useMemo(() => {
    return Object.values(results).reduce((total, items) => total + items.length, 0);
  }, [results]);

  const hasResults = totalResults > 0;

  return {
    results,
    isSearching: isSearching && query.length >= 2,
    hasResults,
    totalResults
  };
} 