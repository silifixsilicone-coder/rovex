export interface SilifixProductImage {
  id: string;
  url: string;
  title: string;
  description: string;
  order: number;
}

export const INITIAL_SILIFIX_IMAGES: SilifixProductImage[] = [
  {
    id: "silifix-1",
    url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    title: "Silifix High-Performance Silicone Sealant",
    description: "Industrial grade 300ml sealant cartridge for architectural and weatherproofing applications.",
    order: 1,
  },
  {
    id: "silifix-2",
    url: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    title: "Silifix Clear Architectural Sealant",
    description: "Multi-purpose clear silicone tube formulated for glass and aluminium joints.",
    order: 2,
  },
  {
    id: "silifix-3",
    url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    title: "Silifix Industrial Manufacturing Batch",
    description: "Precision automated silicone compounding & packaging line.",
    order: 3,
  },
];

const LOCAL_STORAGE_KEY = "rovex_silifix_product_images_v1";

export function getStoredSilifixImages(): SilifixProductImage[] {
  if (typeof window === "undefined") return INITIAL_SILIFIX_IMAGES;
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length >= 0) {
        return parsed.sort((a, b) => a.order - b.order);
      }
    }
  } catch (e) {
    console.error("Error reading Silifix images from localStorage", e);
  }
  return INITIAL_SILIFIX_IMAGES;
}

export function saveStoredSilifixImages(images: SilifixProductImage[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(images));
    window.dispatchEvent(new Event("silifix_images_updated"));
  } catch (e) {
    console.error("Error saving Silifix images to localStorage", e);
  }
}
