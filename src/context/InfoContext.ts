import { createContext } from "react";

import { ProxyGroup } from "../types/ProxyGroupType";
import { CardGroup } from "../types/CardGroupType";

type InfoContextType = {
  ProxyGroup: ProxyGroup | null;
  CardGroup: CardGroup | null;
}

export const InfoContext = createContext<InfoContextType | null>(null!);