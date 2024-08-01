// https://docs.astro.build/en/guides/content-collections/

import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: image().refine(img => img.height < 1200, {
            message: "La imagen debe ser menor a 1200px",
        }),

        // relacion
        author: z.string(),

        // relacion
        tags: z.array(z.string()),

        // draft: z.boolean(),
    })
});


export const collections = {
    // en el directorio dentro de content deberemos ponerle el nombre blog
    blog: blogCollection,
}

