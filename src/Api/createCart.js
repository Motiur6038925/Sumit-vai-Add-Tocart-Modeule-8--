export default async function createCart(productId) {
  const res = await fetch(
    `https://cart-api.teamrabbil.com/api/create-cart/${productId}`,
    {
      method: "GET",
      headers: {
        token: localStorage.getItem("token"),
      },
    }
  );
  const data = await res.json();

  return data;
}


