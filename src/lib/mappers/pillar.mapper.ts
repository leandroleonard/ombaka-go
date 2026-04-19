import { Leaf, Heart, TrendingUp } from "lucide-react"
import { Pillar } from "@/types/pillar"

type TranslateFn = (key: string) => string

export function mapPillars(t: TranslateFn): Pillar[] {
  return [
    {
      icon: Leaf,
      title: t("sustainable.title"),
      description: t("sustainable.description"),
    },
    {
      icon: Heart,
      title: t("culture.title"),
      description: t("culture.description"),
    },
    {
      icon: TrendingUp,
      title: t("investment.title"),
      description: t("investment.description"),
    },
  ]
}