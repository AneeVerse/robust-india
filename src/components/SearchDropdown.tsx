'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFile, FiPackage, FiSettings, FiLayers, FiLoader } from 'react-icons/fi';

interface LocalizedSearchItem {
  id: string;
  title: string;
  description: string;
  category: 'page' | 'chemical' | 'service' | 'content' | 'category';
  url: string;
  keywords: string[];
}

interface SearchDropdownProps {
  results: { [category: string]: LocalizedSearchItem[] };
  isSearching: boolean;
  hasResults: boolean;
  query: string;
  isVisible: boolean;
  onClose: () => void;
  onItemClick: () => void;
}

const categoryIcons = {
  'Pages': FiFile,
  'Chemical Products': FiPackage,
  'Services': FiSettings,
  'Industries': FiLayers,
  'Categories': FiLayers, // Add icon for Categories
};

const highlightText = (text: string, query: string) => {
  if (!query) return text;
  
  const regex = new RegExp(`(${query})`, 'gi');
  const parts = text.split(regex);
  
  return parts.map((part, index) => 
    regex.test(part) ? (
      <span key={index} className="bg-[#7BB9F7]/20 text-[#7BB9F7] font-medium">
        {part}
      </span>
    ) : part
  );
};

export default function SearchDropdown({
  results,
  isSearching,
  hasResults,
  query,
  isVisible,
  onClose,
  onItemClick
}: SearchDropdownProps) {
  const router = useRouter();
  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.95 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="absolute bottom-full left-0 right-0 mb-2 bg-[#2a2928]/95 backdrop-blur-md border border-[#444]/60 rounded-xl shadow-2xl z-50 max-h-96 overflow-hidden"
      >
        {/* Loading State */}
        {isSearching && (
          <div className="flex items-center justify-center py-8">
            <FiLoader className="w-5 h-5 text-[#7BB9F7] animate-spin mr-2" />
            <span className="text-gray-300 text-sm">Searching...</span>
          </div>
        )}

        {/* No Results */}
        {!isSearching && query.length >= 2 && !hasResults && (
          <div className="py-8 text-center">
            <div className="text-gray-400 text-sm mb-2">No results found for</div>
            <div className="text-white font-medium">&quot;{query}&quot;</div>
          </div>
        )}

        {/* Results */}
        {!isSearching && hasResults && (
          <div className="max-h-96 overflow-y-auto custom-scrollbar">
            {Object.entries(results).map(([category, items]) => (
              <div key={category} className="border-b border-[#444]/30 last:border-b-0">
                {/* Category Header */}
                <div className="sticky top-0 bg-[#2a2928]/95 backdrop-blur-sm px-4 py-2 border-b border-[#444]/20">
                  <div className="flex items-center gap-2">
                    {React.createElement(categoryIcons[category as keyof typeof categoryIcons] || FiFile, {
                      className: "w-4 h-4 text-[#7BB9F7]"
                    })}
                    <span className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                      {category}
                    </span>
                    <span className="text-xs text-gray-500">({items.length})</span>
                  </div>
                </div>

                {/* Category Items */}
                <div className="py-1">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onItemClick();
                        onClose();
                        // Immediate navigation
                        router.push(item.url);
                      }}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onItemClick();
                        onClose();
                        // Immediate navigation on mouse down
                        router.push(item.url);
                      }}
                      onTouchStart={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onItemClick();
                        onClose();
                        // Immediate navigation on touch start
                        router.push(item.url);
                      }}
                      className="block px-4 py-4 hover:bg-[#333]/50 active:bg-[#444]/70 transition-colors duration-150 group cursor-pointer select-none touch-manipulation"
                      style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                    >
                      <div className="flex items-start gap-3 w-full">
                        <div className="flex-1 min-w-0">
                          <div className="text-white font-medium text-sm mb-1 group-hover:text-[#7BB9F7] transition-colors pointer-events-none">
                            {highlightText(item.title, query)}
                          </div>
                          <div className="text-gray-400 text-xs line-clamp-2 leading-relaxed pointer-events-none">
                            {highlightText(item.description, query)}
                          </div>
                        </div>
                        <div className="text-gray-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          →
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        {!isSearching && hasResults && (
          <div className="px-4 py-2 bg-[#232221]/80 border-t border-[#444]/30">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">
                {Object.values(results).reduce((total, items) => total + items.length, 0)} results
              </span>
              <span className="text-xs text-gray-500">
                Press ESC to close
              </span>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

// Custom scrollbar styles (add to globals.css if not already present)
// const styles = `
// .custom-scrollbar::-webkit-scrollbar {
//   width: 6px;
// }

// .custom-scrollbar::-webkit-scrollbar-track {
//   background: rgba(255, 255, 255, 0.05);
//   border-radius: 3px;
// }

// .custom-scrollbar::-webkit-scrollbar-thumb {
//   background: rgba(123, 185, 247, 0.3);
//   border-radius: 3px;
// }

// .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//   background: rgba(123, 185, 247, 0.5);
// }
// `; 