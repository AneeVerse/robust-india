const fs = require('fs');

const en = JSON.parse(fs.readFileSync('public/locales/en/common.json', 'utf8'));
const ru = JSON.parse(fs.readFileSync('public/locales/ru/common.json', 'utf8'));

const enProducts = Object.keys(en.chemicalDetail?.products || {});
const ruProducts = Object.keys(ru.chemicalDetail?.products || {});

const missing = enProducts.filter(p => !ruProducts.includes(p));

console.log('Missing chemicals:', missing.length);
console.log('List:', missing.join(', '));

// Write each missing chemical to a separate file for review
missing.forEach((product, index) => {
  const productData = en.chemicalDetail.products[product];
  fs.writeFileSync(
    `missing-chemical-${index + 1}-${product}.json`,
    JSON.stringify({ [product]: productData }, null, 2),
    'utf8'
  );
});

console.log(`\nExtracted ${missing.length} missing chemicals to individual JSON files.`);

