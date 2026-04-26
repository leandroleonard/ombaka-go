import { MapPin, Users, Waves, Clock, User } from 'lucide-react';
import { Stats } from "@/types/stats";

type TranslateFn = (key: string) => string

export function mapStats(t: TranslateFn): Stats[] {
    return [
        {
            icon: MapPin,
            label: t("municipalities"),
            number: "23",
        },
        {
            icon: Users,
            label: t("partners"),
            number: "50+",
        },
        {
            icon: Waves,
            label: t("beaches"),
            number: "15+",
        },
        {
            icon: Clock,
            label: t("history"),
            number: "300+",
        },
    ]
}