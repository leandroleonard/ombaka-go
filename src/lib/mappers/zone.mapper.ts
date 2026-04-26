import { Zone } from "@/types/zone";
import { ZoneData } from "@/data/zones";

type TranslateFn = (key: string) => string

export function mapZone(
  data: ZoneData,
  t: TranslateFn,
): Zone {
  try {
    return {
      id: data.id,
      slug: data.slug,
      name: t(`zones.${data.slug}.name`),
      category: t(`zones.${data.slug}.category`),
      location: t(`zones.${data.slug}.location`),
      difficulty: t(`zones.${data.slug}.difficulty`),
      description: t(`zones.${data.slug}.description`),
      imageUrl: data.imageUrl,
    }
  } catch (error) {
    console.error("Translation error:", data.slug)

    return {
      id: data.id,
      slug: data.slug,
      name: data.slug,
      category: "",
      location: "",
      difficulty: "",
      description: "",
      imageUrl: data.imageUrl,
    }
  }
}

export function mapZones(
  data: ZoneData[],
  t: TranslateFn,
): Zone[] {
  return data.map((d) => mapZone(d, t))
}