export async function generateStaticParams() {
  return ['naphtha', 'propylene', 'benzene'].map((slug) => ({ slug }));
} 