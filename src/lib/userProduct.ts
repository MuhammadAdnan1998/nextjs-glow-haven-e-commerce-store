import { client } from "./sanityClient";

async function vercelProduct() {
  try {
    const res = await fetch(`https://nextjs-glow-haven-e-commerce-store.vercel.app/`);
    
    if (res.status === 200) {
      const result = await res.json();
      return result;
    } else {
      console.log("Your cart is empty");
      return null;
    }
  } catch (error) {
    // Re-throw the original error for handling higher up
    throw error;
  }
}
const sanityProduct = async (product_id: string) => {
    const res = await client.fetch(`*[_type == "products" && _id == $product_id] {
      name,
      price,
      description,
      care,
      _id,
      images,
      tag -> {
        tag
      },
      slug,
    }!cache`, {
        product_id
  });
    return res
  }
export {sanityProduct,vercelProduct}