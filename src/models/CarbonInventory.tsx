import { CarbonItem } from './CarbonItem';

export interface CarbonInventory {
  company_name: string;
  version: string;
  items: CarbonItem[];
}