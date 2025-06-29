export function calculateExpectedFinalPrice(products: any[], discountCoupon: number): number {
  let total = 0;

  products.forEach(product => {
    const price = product.price;
    let totalDiscount = 0;

    if (product.registeredDiscount) {
      totalDiscount += product.registeredDiscount;
    }

    if (product.couponEnabled) {
      totalDiscount += discountCoupon;
    }

    // Výsledná cena po odečtení celkové slevy z původní ceny (soucet dodatecne slevy + kuponu)
    const finalPrice = price * (1 - totalDiscount);

    total += finalPrice;
  });

  // Zaokrouhlení na 2 desetinná místa
  return Math.round(total * 100) / 100;
}