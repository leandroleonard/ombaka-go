import { Event } from "@/types/event"
import { EventData } from "@/data/events"

type TranslateFn = (key: string) => string

export function mapEvent(
  data: EventData,
  t: TranslateFn,
  locale: string
): Event {
  try {
    return {
      name: t(`${data.slug}.name`),
      date: t(`${data.slug}.date`),
      type: t(`${data.slug}.type`),
      description: t(`${data.slug}.description`),
      municipality: t(`${data.slug}.municipality`),
      location: t(`${data.slug}.location`),
      imageUrl: data.imageUrl,
      link: `/${locale}/eventos/${data.slug}`,
    }
  } catch (error) {
    console.error("Event translation error:", data.slug)

    return {
      name: data.slug,
      date: "",
      type: "",
      description: "",
      municipality: "",
      location: "",
      imageUrl: data.imageUrl,
      link: `/${locale}/eventos/${data.slug}`,
    }
  }
}

export function mapEvents(
  data: EventData[],
  t: TranslateFn,
  locale: string
): Event[] {
  return data.map((e) => mapEvent(e, t, locale))
}