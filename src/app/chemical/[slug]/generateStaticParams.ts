export async function generateStaticParams() {
  return ['naphtha', 'propylene', 'benzene', 'antioxidant-1010'].map((slug) => ({ slug }));
} 