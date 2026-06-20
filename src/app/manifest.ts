import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.tagline}`,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F7F4EE",
    theme_color: "#202A57",
    icons: [
      {
        src: "https://placehold.co/192x192/202A57/F7F4EE/png?text=NOI",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "https://placehold.co/512x512/202A57/F7F4EE/png?text=NOI",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
