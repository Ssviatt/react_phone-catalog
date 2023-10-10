import { Product } from '../types/Product';

export function sortDiscount(products: Product[]) {
  return [...products].sort(
    (p1, p2) => (p2.fullPrice - p2.price) - (p1.fullPrice - p1.price),
  );
}

export function sortByYear(products: Product[]) {
  return [...products].sort((p1, p2) => p2.year - p1.year);
}

export function filterByCategory(products: Product[], category = '') {
  return products.filter(prod => prod.category === category);
}
