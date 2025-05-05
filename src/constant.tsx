export interface CompanyData {
  company_name: string;
  company_description: string;
  solution_description: string;
  email: string;
  phone: string;
  website: string;
  category: string;
  emission_source: string;
  description: string;
  carbon_emission: number;
}

export const TEST_DATA: { items: CompanyData[] } = {
  "items":[
    {
      "company_name": "Delta Electronics (Thailand) Public Company Limited",
      "company_description": "Delta Thailand provides energy efficiency and green factory solutions for commercial clients, helping them reduce power consumption and carbon emissions.",
      "solution_description": "Comprehensive building and electronics energy management solutions, including LED lighting, automation, and smart systems for electricity reduction.",
      "email": "deltathailand@deltaww.com",
      "phone": "+66 2 7092800",
      "website": "https://deltathailand.com/",
      "category": "電力使用",
      "emission_source": "店鋪營運/電力使用",
      "carbon_emission": 10200,
      "description": "- **分類：電力使用**\n- **項目名稱：店鋪營運電力使用**\n- **排放量：10,200 tCO₂e**\n- **改善建議：**透過導入智慧型能源管理系統、高效LED照明及自動化設備，提升用電效率並減少浪費，有效降低營運碳排。"
    },
    {
      "company_name": "PTT Public Company Limited",
      "company_description": "PTT 是泰國最大能源集團，擁有天然氣、石油與新能源解決方案，並推動企業客戶減少天然氣排放。",
      "solution_description": "液化天然氣 (LNG) 及替代能源解決方案，提供能源效率提升、碳捕捉及固碳計劃。",
      "email": "ptttic@pttplc.com",
      "phone": "+66 2 5372000",
      "website": "https://www.pttplc.com/en/Business/EnergyBusiness",
      "category": "天然氣使用",
      "emission_source": "店鋪營運/天然氣使用",
      "carbon_emission": 7300,
      "description": "- **分類：天然氣使用**\n- **項目名稱：店鋪營運天然氣**\n- **排放量：7,300 tCO₂e**\n- **改善建議：**導入高效率天然氣設備及能源整合方案、推廣綠色天然氣及碳捕捉技術，有效減少碳排。"
    },
    {
      "company_name": "SCG Packaging Public Company Limited (SCGP)",
      "company_description": "SCGP 為領先的包裝和資源管理公司，致力於水資源循環及工業用水減碳。",
      "solution_description": "協助商業及工業客戶導入3R原則（減量、再利用、回收）與水循環利用技術，大幅減少用水及排放。",
      "email": "scp.info@scg.com",
      "phone": "+66 2586 7777",
      "website": "https://sustainability.scgpackaging.com/en/environmental/water-stewardship",
      "category": "用水",
      "emission_source": "店鋪營運/用水",
      "carbon_emission": 950,
      "description": "- **分類：用水**\n- **項目名稱：店鋪營運用水**\n- **排放量：950 tCO₂e**\n- **改善建議：**鼓勵3R用水管理、提升循環水使用率與水資源回收，有效降低水足跡與相關碳排放。"
    },
    {
      "company_name": "FFT Asia Co., Ltd.",
      "company_description": "FFT Asia 專注於商業廚房的專業設計與能源效率管理，協助餐飲業減少LPG（液化石油氣）消耗。",
      "solution_description": "設計與導入高效商業廚房設備，如能量回收爐、節能電磁爐及廚房能源監控系統，減少傳統瓦斯消耗。",
      "email": "info@fft.asia",
      "phone": "+66 2 101 2898",
      "website": "https://www.fft.asia/kitchen-design/",
      "category": "瓦斯爐燃燒（液化石油氣）",
      "emission_source": "廚房設備/瓦斯爐燃燒（液化石油氣）",
      "carbon_emission": 3500,
      "description": "- **分類：廚房設備**\n- **項目名稱：瓦斯爐燃燒（液化石油氣）**\n- **排放量：3,500 tCO₂e**\n- **改善建議：**建議導入高效率烹調設備或電磁爐，並定期檢修廚具與改善廚房氣密，提升燃氣使用效率。"
    },
    {
      "company_name": "Testo (Thailand) Co., Ltd.",
      "company_description": "Testo 為空調與製冷檢測儀器專家，提供冷媒（R-410A）洩漏偵測解決方案。",
      "solution_description": "供應專業冷媒洩漏偵測儀，可即時發現與監控R-410A 等高GWP冷媒逸散，替商用空調與冷凍提高安全與減碳。",
      "email": "info@testo.co.th",
      "phone": "+66 2 210 9085",
      "website": "https://www.testo.com/en-TH/testo-316-3/p/0563-3163",
      "category": "冷媒洩漏",
      "emission_source": "空調設備/冷媒 R-410A 洩漏",
      "carbon_emission": 0,
      "description": "- **分類：空調設備**\n- **項目名稱：冷媒 R-410A 洩漏**\n- **排放量：依數據檢出判定**\n- **改善建議：**安裝R-410A 專業冷媒洩漏偵測與警報系統，提升冷氣洩漏管理，避免高GWP冷媒逸散。"
    },
    {
      "company_name": "DHL Supply Chain (Thailand) Limited",
      "company_description": "DHL 是全球領先的綠色物流服務商，為泰國商業物流大幅導入 AI 優化柴油車及減碳解決方案。",
      "solution_description": "車隊路線最佳化、車輛性能監控、低排放輪胎與替代燃料技術，提升運輸效率並降低碳排。",
      "email": "mydhl@dhl.com",
      "phone": "+66 2 345 5000",
      "website": "https://www.dhl.com/discover/en-th/logistics-advice/sustainability-and-green-logistics/sustainable-logistics-for-businesses-in-thailand",
      "category": "食材運輸（柴油車）",
      "emission_source": "物流運輸/食材運輸（柴油車）",
      "carbon_emission": 2000,
      "description": "- **分類：物流運輸**\n- **項目名稱：食材運輸（柴油車）**\n- **排放量：2,000 tCO₂e**\n- **改善建議：**建議優化柴油車隊調度、汰換高耗能車輛、推動車輛定期保養與駕駛培訓，確保排放降低。"
    },
    {
      "company_name": "DHL Supply Chain (Thailand) Limited",
      "company_description": "DHL 同時積極推動電動運輸車隊，在物流配送全面創建零排碳模型。",
      "solution_description": "部署商業電動卡車及貨運，提供充電設施與 AI 調度平台，大幅降低車輛用電量與間接碳排。",
      "email": "mydhl@dhl.com",
      "phone": "+66 2 345 5000",
      "website": "https://www.dhl.com/discover/en-th/about-dhl/reports-and-press-releases/sustainable-logistics-electric-fleet-in-thailand",
      "category": "食材運輸（電動車）",
      "emission_source": "物流運輸/食材運輸（電動車）",
      "carbon_emission": 1000,
      "description": "- **分類：物流運輸**\n- **項目名稱：食材運輸（電動車）**\n- **排放量：1,000 tCO₂e**\n- **改善建議：**逐步轉型為電動運輸車隊，配合再生電力使用以進一步接近零碳物流目標。"
    },
    {
      "company_name": "Kuehne + Nagel (Thailand) Ltd.",
      "company_description": "Kuehne+Nagel 是全球頂尖綠色海運物流公司，提供碳抵換與低碳運輸方案。",
      "solution_description": "提供淨零/低碳海運選項（如FCL Pledge、eShipAsia），並推動海運零碳承諾，協助企業客戶取得碳中和運輸。",
      "email": "info.th@kuehne-nagel.com",
      "phone": "+66 2 088 6888",
      "website": "https://home.kuehne-nagel.com/en/-/services/sea-freight/carbon-offset",
      "category": "進口食材運輸（海運）",
      "emission_source": "供應鏈運輸/進口食材運輸（海運）",
      "carbon_emission": 3100,
      "description": "- **分類：供應鏈運輸**\n- **項目名稱：進口食材運輸（海運）**\n- **排放量：3,100 tCO₂e**\n- **改善建議：**選擇具碳抵換、低碳航線及用可再生燃料的運輸服務，降低長途進口過程的碳足跡。"
    },
    {
      "company_name": "DHL Express (Thailand) Ltd.",
      "company_description": "DHL GoGreen Plus 領先推動永續航空燃油SAF方案，有效降低貨運碳排。",
      "solution_description": "企業選用可持續航空燃油（SAF）方案，大幅減少空運配送的溫室氣體排放，是主要的空運減碳解決商。",
      "email": "mydhl@dhl.com",
      "phone": "+66 2 345 5000",
      "website": "https://www.dhl.com/discover/en-th/logistics-advice/sustainability-and-green-logistics/dhl-gogreen-plus-reduces-scope3-emissions",
      "category": "進口食材運輸（航空貨運）",
      "emission_source": "供應鏈運輸/進口食材運輸（航空貨運）",
      "carbon_emission": 5800,
      "description": "- **分類：供應鏈運輸**\n- **項目名稱：進口食材運輸（航空貨運）**\n- **排放量：5,800 tCO₂e**\n- **改善建議：**建議客戶選擇具 SAF 低碳空運方案，優先以減少空運比例及提升貨運整合效率。"
    },
    {
      "company_name": "Mobisoft Infotech (Corporate carpool solutions)",
      "company_description": "Mobisoft 提供企業專屬共乘/拼車平台，有助於降低汽油用量及員工通勤碳排放。",
      "solution_description": "智慧企業拼車平台協助規劃最佳共乘路線、鼓勵同儕之間共乘，並即時追蹤減碳成果。",
      "email": "sales@mobisoftinfotech.com",
      "phone": "+66 2 026 8286",
      "website": "https://mobisoftinfotech.com/solutions/corporate-carpooling-solution",
      "category": "員工通勤（私家車汽油）",
      "emission_source": "員工通勤/私家車（汽油）",
      "carbon_emission": 600,
      "description": "- **分類：員工通勤**\n- **項目名稱：私家車（汽油）**\n- **排放量：600 tCO₂e**\n- **改善建議：**引入企業共乘平台，提升員工搭乘率，協助減少交通擁塞及直接汽油用量。"
    },
    {
      "company_name": "BTS Group Holdings PCL",
      "company_description": "BTS 於曼谷經營BTS Skytrain，並為首間通過碳中和認證的軌道運輸商（含MRT、BTS等大眾運輸）。",
      "solution_description": "提供高效、低碳的大眾運輸系統及智慧綠色票證服務，協助企業鼓勵員工搭乘大眾運輸。",
      "email": "info@btsgroup.co.th",
      "phone": "+66 2 273 8611",
      "website": "https://www.btsgroup.co.th/storage/sustainability/policies-performances/relevant-policies/20210920-bts-group-carbon-neutral-program-2021.pdf",
      "category": "員工通勤（大眾運輸）",
      "emission_source": "員工通勤/大眾運輸（電車、捷運）",
      "carbon_emission": 200,
      "description": "- **分類：員工通勤**\n- **項目名稱：大眾運輸（電車、捷運）**\n- **排放量：200 tCO₂e**\n- **改善建議：**鼓勵員工使用大眾運輸搭配數位化票證, 進一步降低企業交通碳排。"
    },
    {
      "company_name": "Food Waste Hub (Thailand)",
      "company_description": "Food Waste Hub 是泰國國家研究委員會主導之食物廢棄物協作平台，專為企業餐廚廢棄物管理提供解決方案。",
      "solution_description": "推廣高級有機廚餘回收、食物捐助、剩食轉能源技術等，協助餐飲商業減碳與資源再生。",
      "email": "foodwastehub@nrct.go.th",
      "phone": "+66 2 757 2106",
      "website": "https://www.foodwastehub.com/en/home-en/",
      "category": "餐廚廢棄物處理",
      "emission_source": "廢棄物管理/餐廚廢棄物處理",
      "carbon_emission": 1200,
      "description": "- **分類：廢棄物管理**\n- **項目名稱：餐廚廢棄物處理**\n- **排放量：1,200 tCO₂e**\n- **改善建議：**導入廚餘回收、剩食再利用、食物轉廢為能系統，降低廢棄物最終處理量。"
    },
    {
      "company_name": "Air Liquide (Thailand) Ltd.",
      "company_description": "Air Liquide 致力於提供純氧、低碳水處理和減碳專業解決方案。",
      "solution_description": "高效氣浮、純氧曝氣等水處理技術，提升廢水處理效率，減少CO2、CH4、N2O等溫室氣體釋放，優化碳排管理。",
      "email": "info.th@airliquide.com",
      "phone": "+66 2 317 7000",
      "website": "https://th.airliquide.com/gas-applications/water-treatment",
      "category": "污水處理",
      "emission_source": "廢水處理/污水處理",
      "carbon_emission": 1500,
      "description": "- **分類：廢水處理**\n- **項目名稱：污水處理**\n- **排放量：1,500 tCO₂e**\n- **改善建議：**建議設置純氧曝氣系統和碳排監控管理，大幅降低CO₂、CH₄、N₂O的排放。"
    }
  ]
};
