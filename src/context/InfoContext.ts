import { createContext } from "react";

import { ProxyGroup } from "../types/ProxyGroupType";
import { CardGroup } from "../types/CardGroupType";
import { TMAccount } from "../types/TMAccountType";

type InfoContextType = {
  ProxyGroup: ProxyGroup | null;
  CardGroup: CardGroup | null;
  TMAccount: TMAccount | null;
}

export const InfoContext = createContext<InfoContextType | null>(null!);