const fs = require('fs');

const en = JSON.parse(fs.readFileSync('public/locales/en/common.json', 'utf8'));
const ru = JSON.parse(fs.readFileSync('public/locales/ru/common.json', 'utf8'));

const enProducts = Object.keys(en.chemicalDetail?.products || {});
const ruProducts = Object.keys(ru.chemicalDetail?.products || {});

console.log('EN Products:', enProducts.length);
console.log('RU Products:', ruProducts.length);
console.log('\nMissing in RU:');
const missing = enProducts.filter(p => !ruProducts.includes(p));
console.log('Count:', missing.length);
missing.forEach(p => console.log('  -', p));

console.log('\n\nChecking for incomplete translations (products that exist but may be missing fields):');
enProducts.forEach(product => {
  if (ruProducts.includes(product)) {
    const enData = en.chemicalDetail.products[product];
    const ruData = ru.chemicalDetail.products[product];
    
    // Check if overview exists and has name
    if (enData.overview?.name && !ruData.overview?.name) {
      console.log(`  - ${product}: missing overview.name`);
    }
    if (enData.overview?.description && !ruData.overview?.description) {
      console.log(`  - ${product}: missing overview.description`);
    }
  }
});

