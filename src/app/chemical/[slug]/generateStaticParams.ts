export async function generateStaticParams() {
  return ['naphtha', 'propylene', 'benzene', 'antioxidant-1010', 'cyanuric-chloride', 'ethylenediamine', 'piperazine', 'diethylene-triamine', 'aminoethyl-ethanolamine', 'aminoethylpiperazine'].map((slug) => ({ slug }));
} 