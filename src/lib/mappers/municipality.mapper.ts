import { Municipality } from "@/types/municipality"
import { MpData } from "@/data/municipalities"

type TranslateFn = (key: string) => string

export function mapMunicipality(
  data: MpData,
  t: TranslateFn,
): Municipality {

  const getAttractions = (municipalityKey: string): string[] => [
    t(`list.${municipalityKey}.attractions.0`),
    t(`list.${municipalityKey}.attractions.1`),
    t(`list.${municipalityKey}.attractions.2`),
  ];

  try {
    return {
      slug: data.slug,
      name: t(`list.${data.slug}.name`),
      subtitle: t(`list.${data.slug}.subtitle`),
      population: data.population,
      imageUrl: data.imageUrl,
      attractions: getAttractions(data.slug),
    }
  } catch (error) {
    console.error("Translation error:", data.slug)

    return {
      slug: data.slug,
      name: data.slug,
      subtitle: "",
      population: "",
      imageUrl: data.imageUrl,
      attractions: [],
    }
  }
}

export function mapMunicipalities(
  data: MpData[],
  t: TranslateFn,
): Municipality[] {
  return data.map((d) => mapMunicipality(d, t))
}