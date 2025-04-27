# Product Showcase

A responsive, Redux-powered React application that fetches and displays products from an external API. Built with:

- **React** (via Vite)  
- **Redux Toolkit** for state management  
- **React Router** for client-side routing  
- **Axios** for HTTP requests  
- **Tailwind CSS** for styling  

---


##  Features

- **Product Listing**  
  – Fetches product data from `https://admin.refabry.com/api/all/product/get`  
  – Displays in a responsive 1→2→3→4 column grid  
  – Discount badge, price formatting, hover elevation

- **Search / Filter**  
  – Live search by name or description  
  – “No products found” fallback

- **Dynamic Routes**  
  – `/product/:id` shows a full-page detail view  
  – Image gallery, pricing, stock, SKU, category, and description

- **Redux Toolkit**  
  – `createAsyncThunk` for fetching  
  – Slice state for `products`, `status`, `error`

- **Tailwind CSS**  
  – Utility-first responsive styling  
  – Hover, focus, spacing, typography, grid, flex, aspect-ratio


