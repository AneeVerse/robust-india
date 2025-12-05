const fs = require('fs');

const en = JSON.parse(fs.readFileSync('public/locales/en/common.json', 'utf8'));
const ru = JSON.parse(fs.readFileSync('public/locales/ru/common.json', 'utf8'));

const enProducts = Object.keys(en.chemicalDetail?.products || {});
const ruProducts = Object.keys(ru.chemicalDetail?.products || {});

const missing = enProducts.filter(p => !ruProducts.includes(p));

console.log('Missing chemicals:', missing.length);
console.log('\nExtracting full content for missing chemicals:\n');

missing.forEach(product => {
  const productData = en.chemicalDetail.products[product];
  console.log(`\n// ${product}`);
  console.log(JSON.stringify({ [product]: productData }, null, 2).substring(0, 2000) + '...');
});

