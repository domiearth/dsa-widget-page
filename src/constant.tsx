export interface CompanyData {
  company_name: string;
  solution_description: string;
  email: string;
  phone: string;
  website: string;
  category: string;
  description: string;
  carbon_emission: number;
}

export const TEST_DATA: { items: CompanyData[] } = {
  "items": [
    {
      "company_name": "Constant Energy",
      "solution_description": "太陽能及節能解決方案，協助商業用戶安裝太陽能設備，降低電力來源碳排。",
      "email": "info@constantenergy.net",
      "phone": "+66 2 126 8245",
      "website": "https://constantenergy.net/",
      "category": "店鋪營運",
      "carbon_emission": 10200,
      "description": "### 分類：店鋪營運\n- 排放項目：電力使用\n- 碳排量：10,200 tCO₂e\n- 建議：考慮安裝太陽能發電，結合能源管理系統提升用電效率，降低購電碳排放。"
    },
    {
      "company_name": "Bangchak Corporation (BCPG)",
      "solution_description": "推動天然氣效率與替代再生能源方案，如太陽能、風能等，協助企業替換高碳排燃料。",
      "email": "pr@bangchak.co.th",
      "phone": "+66 2 335 4555",
      "website": "https://www.bangchak.co.th/en/greenovation-group/clean-power-business",
      "category": "店鋪營運",
      "carbon_emission": 7300,
      "description": "### 分類：店鋪營運\n- 排放項目：天然氣使用\n- 碳排量：7,300 tCO₂e\n- 建議：加裝高效率燃氣設備、或尋求再生能源（如熱泵、太陽能熱水器）取代天然氣。"
    },
    {
      "company_name": "Ecolab Thailand",
      "solution_description": "提供智能節水和回收再利用系統，幫助餐廳減少用水，提高水資源效率。",
      "email": "enquiries@ecolab.com",
      "phone": "+66 2774 9800",
      "website": "https://en-th.ecolab.com/expertise-and-innovation/water",
      "category": "店鋪營運",
      "carbon_emission": 950,
      "description": "### 分類：店鋪營運\n- 排放項目：用水\n- 碳排量：950 tCO₂e\n- 建議：安裝節水設備與回收再利用系統，降低用水及其間接碳排放。"
    },
    {
      "company_name": "Advanced Biogas Thailand",
      "solution_description": "推動廚房燃料由LPG轉為沼氣，同時提高轉換效率，也可考慮用電磁爐替換瓦斯爐。",
      "email": "info@advancedbiofuelsusa.info",
      "phone": "+66 2 123 4567",
      "website": "https://advancedbiofuelsusa.info/thailand-new-facility-opens-to-produce-store-and-deliver-biogas",
      "category": "廚房設備",
      "carbon_emission": 3500,
      "description": "### 分類：廚房設備\n- 排放項目：瓦斯爐燃燒（液化石油氣）\n- 碳排量：3,500 tCO₂e\n- 建議：可導入沼氣或高效率燃燒爐具，或考慮電氣化廚房以減少燃燒過程碳排放。"
    },
    {
      "company_name": "CAREL Thailand",
      "solution_description": "提供天然冷媒（如R290）、CO₂及先進制冷監控管理，有效減少冷媒排放及洩漏。",
      "email": "info@carel.com",
      "phone": "+66 2 748 1993",
      "website": "https://www.carel.co.th/natural-refrigerants",
      "category": "空調設備",
      "carbon_emission": 0,
      "description": "### 分類：空調設備\n- 排放項目：冷媒R-410A洩漏\n- 碳排量：依實際洩漏量估算（高暖化係數2088）\n- 建議：高頻率保養、導入低 GWP 冷媒，或以CO₂等替代，降低環境衝擊。"
    },
    {
      "company_name": "DHL Thailand",
      "solution_description": "提供綠色物流方案、電動運輸與生質柴油配送車隊，協助食材供應降低碳足跡。",
      "email": "th.enquiry@dhl.com",
      "phone": "+66 2 345 5000",
      "website": "https://www.dhl.com/th-en/home/about-us/sustainability.html",
      "category": "物流運輸",
      "carbon_emission": 2000,
      "description": "### 分類：物流運輸\n- 排放項目：食材運輸（柴油車）\n- 碳排量：2,000 tCO₂e\n- 建議：採用電動車/生質柴油車，定期車隊維護及路線優化，減少燃油碳排。"
    },
    {
      "company_name": "DSV Thailand",
      "solution_description": "投入電動卡車運輸，專注於廠商、餐飲業配送及減碳物流。",
      "email": "th.customerservice@th.dsv.com",
      "phone": "+66 2 739 5419",
      "website": "https://www.dsv.com/en-nl/destinations/transport-asia-pacific/transport-thailand",
      "category": "物流運輸",
      "carbon_emission": 1000,
      "description": "### 分類：物流運輸\n- 排放項目：食材運輸（電動車）\n- 碳排量：1,000 tCO₂e\n- 建議：優先採用電動車隊配送，搭配智慧派車減少用電。」"
    },
    {
      "company_name": "JAS Thailand",
      "solution_description": "ECONTAINER方案與綠色船運，結合碳排查與碳補償措施，降低國際運輸碳排。",
      "email": "thailand@jas.com",
      "phone": "+66 2 209 9500",
      "website": "https://www.jas.com/countries/thailand",
      "category": "供應鏈運輸",
      "carbon_emission": 3100,
      "description": "### 分類：供應鏈運輸\n- 排放項目：進口食材運輸（海運）\n- 碳排量：3,100 tCO₂e\n- 建議：選擇兼具能源效率與碳補償服務之船運公司。"
    },
    {
      "company_name": "DHL Thailand Air Freight",
      "solution_description": "GoGreen Plus綠色航空貨運，支援SAF可持續航空燃油，降低空運碳排。",
      "email": "th.enquiry@dhl.com",
      "phone": "+66 2 345 5000",
      "website": "https://www.dhl.com/th-en/home/about-us/sustainability.html",
      "category": "供應鏈運輸",
      "carbon_emission": 5800,
      "description": "### 分類：供應鏈運輸\n- 排放項目：進口食材運輸（航空貨運）\n- 碳排量：5,800 tCO₂e\n- 建議：採用SAF航空燃油服務，優化運輸路線，降低碳排。」"
    },
    {
      "company_name": "GrabHitch Thailand",
      "solution_description": "以GrabHitch平台推廣員工共乘服務，減少私家車數量與碳排放。",
      "email": "support.th@grab.com",
      "phone": "02-021-2500",
      "website": "https://www.grab.com/th/en/hitch/",
      "category": "員工通勤",
      "carbon_emission": 600,
      "description": "### 分類：員工通勤\n- 排放項目：私家車（汽油）\n- 碳排量：600 tCO₂e\n- 建議：鼓勵共乘App與企業交通車，提升上班交通載運效率。"
    },
    {
      "company_name": "SYSTRA Thailand",
      "solution_description": "提供企業/機構大眾運輸與捷運團體票管理、路線優化、通勤鼓勵方案。",
      "email": "contact-th@systra.com",
      "phone": "+66 2 267 4310",
      "website": "https://www.systra.com/thailand/",
      "category": "員工通勤",
      "carbon_emission": 200,
      "description": "### 分類：員工通勤\n- 排放項目：大眾運輸（電車、捷運）\n- 碳排量：200 tCO₂e\n- 建議：促進員工使用捷運/公車，提供搭乘鼓勵金，減少單人車輛出勤。」"
    },
    {
      "company_name": "Food Waste Hub Thailand",
      "solution_description": "協助企業與餐廳落實餐廚廢棄物回收，推動有機物資源再利用（如堆肥、餵豬等）",
      "email": "hello@foodwastehub.com",
      "phone": "(+66) 2-123-1234",
      "website": "https://www.foodwastehub.com/en/about-us/",
      "category": "廢棄物管理",
      "carbon_emission": 1200,
      "description": "### 分類：廢棄物管理\n- 排放項目：餐廚廢棄物處理\n- 碳排量：1,200 tCO₂e\n- 建議：與專業回收/堆肥單位合作，實現廚餘分流與資源化減碳。"
    },
    {
      "company_name": "Goshu Kohsan Co., Ltd.",
      "solution_description": "設計並施工高效污水處理系統，專為餐飲和食品產業客戶量身訂做。",
      "email": "info@goshukohsan.com",
      "phone": "+66 2 036 9009–11",
      "website": "https://www.goshukohsan.com/wastewater-treatment",
      "category": "廢水處理",
      "carbon_emission": 1500,
      "description": "### 分類：廢水處理\n- 排放項目：污水處理\n- 碳排量：1,500 tCO₂e\n- 建議：優化污水處理流程，導入高效厭氧/好氧系統以減少碳排放與甲烷逸散。"
    }
  ]
};
