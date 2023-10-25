export default async function RemoveCart(productId) {
  const res = await fetch(
    `https://cart-api.teamrabbil.com/api/remove-cart/{productId}`,
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
