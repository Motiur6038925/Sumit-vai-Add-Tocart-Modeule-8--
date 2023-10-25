export default async function fetchProduct() {
  const res = await fetch("https://cart-api.teamrabbil.com/api/product-list");
  const data = await res.json();

  return data.data;
}

