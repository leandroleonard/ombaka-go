import { Destination } from "@/types/destination"
import { DestinationData } from "@/data/destinations"

type TranslateFn = (key: string) => string

export function mapDestination(
  data: DestinationData,
  t: TranslateFn,
  locale: string
): Destination {
  try {
    return {
      title: t(`${data.slug}.title`),
      location: t(`${data.slug}.location`),
      description: t(`${data.slug}.description`),
      imageUrl: data.imageUrl,
      link: `/${locale}/municipios/${data.slug}`,
    }
  } catch (error) {
    console.error("Translation error:", data.slug)

    return {
      title: data.slug,
      location: "",
      description: "",
      imageUrl: data.imageUrl,
      link: `/${locale}/municipios/${data.slug}`,
    }
  }
}

export function mapDestinations(
  data: DestinationData[],
  t: TranslateFn,
  locale: string
): Destination[] {
  return data.map((d) => mapDestination(d, t, locale))
}