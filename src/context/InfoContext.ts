import { createContext } from "react";

import { proxyGroup } from "../types/proxyGroupType";
import { cardGroup } from "../types/cardGroupType";

type InfoContextType = {
  proxyGroup: proxyGroup | null;
  cardGroup: cardGroup | null;
}

export const InfoContext = createContext<InfoContextType | null>(null!);