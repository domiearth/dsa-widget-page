import { CarbonSolution } from "./CarbonSolution";

export interface CarbonItem {
    item: string;
    activity_item: string;
    emission_source: string;
    classification: number;
    scope: number;
    sub_category: number;
    biogenic_emission: boolean;
    emission_factor_source: string;
    version: string;
    data_quality: string;
    carbon_emission: number;
    methane_emission: number;
    nitrous_oxide_emission: number;
    HFCs_emission: number | null;
    PFCs_emission: number | null;
    SF6_emission: number | null;
    NF3_emission: number | null;
    other_emission: number | null;
    unit: string;
    CO2_emission_factor: number;
    CH4_emission_factor: number;
    N2O_emission_factor: number;
    HFCs_emission_factor: number | null;
    PFCs_emission_factor: number | null;
    SF6_emission_factor: number | null;
    NF3_emission_factor: number | null;
    other_emission_factor: number | null;
    GWP_CO2: number;
    GWP_CH4: number;
    GWP_N2O: number;
    GWP_HFCs: number | null;
    GWP_PFCs: number | null;
    GWP_SF6: number | null;
    GWP_NF3: number | null;
    solutions: CarbonSolution[];
}
