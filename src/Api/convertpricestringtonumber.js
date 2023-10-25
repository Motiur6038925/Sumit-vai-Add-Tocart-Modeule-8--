export default function convertpricestringtonumberTonumber(string) {
  const priceString = string.product.price;
  const priceStringWithoutComma = priceString.replace(/,/g, "");
  const currentValue = parseFloat(priceStringWithoutComma);

  return currentValue;
}
