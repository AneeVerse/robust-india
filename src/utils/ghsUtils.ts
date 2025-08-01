export function extractGHSSymbols(regulationsText: string): string[] {
  if (!regulationsText) return [];
  
  const ghsSymbols = [
    'Health Hazard',
    'Flame',
    'Exclamation Mark',
    'Gas Cylinder',
    'Corrosion',
    'Exploding Bomb',
    'Flame Over Circle',
    'Environment',
    'Skull and Crossbones',
    'Skull & Crossbones'
  ];
  
  const foundSymbols: string[] = [];
  
  ghsSymbols.forEach(symbol => {
    if (regulationsText.includes(symbol)) {
      // Normalize the symbol name
      const normalizedSymbol = symbol === 'Skull & Crossbones' ? 'Skull and Crossbones' : symbol;
      foundSymbols.push(normalizedSymbol);
    }
  });
  
  return foundSymbols;
}

export function formatRegulationsText(regulationsText: string): string {
  if (!regulationsText) return '';
  
  // Remove GHS symbols from the text to avoid duplication
  const ghsSymbols = [
    'Health Hazard',
    'Flame',
    'Exclamation Mark',
    'Gas Cylinder',
    'Corrosion',
    'Exploding Bomb',
    'Flame Over Circle',
    'Environment',
    'Skull and Crossbones',
    'Skull & Crossbones'
  ];
  
  let formattedText = regulationsText;
  
  // Replace "GHS Symbols: ..." with just "GHS Symbols."
  formattedText = formattedText.replace(/GHS Symbols?:\s*[^.;]*[.;]?/gi, 'GHS Symbols.');
  
  // Remove individual symbol names
  ghsSymbols.forEach(symbol => {
    formattedText = formattedText.replace(new RegExp(symbol, 'g'), '');
  });
  
  // Clean up extra commas, spaces, and periods
  formattedText = formattedText.replace(/,\s*,/g, ',');
  formattedText = formattedText.replace(/^\s*[,.\s]+/, '');
  formattedText = formattedText.replace(/[,.\s]+\s*$/, '');
  formattedText = formattedText.trim();
  
  return formattedText;
} 