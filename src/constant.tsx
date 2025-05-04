export interface CompanyData {
  company_name: string;
  solution_description: string;
  email: string;
  phone: string;
  website: string;
  category: string;
  description: string;
}

export const TEST_DATA: { items: CompanyData[] } = {
  "items": [
    {
      "company_name": "BECIS - Berkeley Energy Commercial Industrial Solutions",
      "solution_description": "能源使用管理及電力效率改善方案，例如安裝能源管理系統、使用數位分析優化店鋪能源耗用。",
      "email": "info@be-cis.com",
      "phone": "+66 2 248 4635",
      "website": "https://be-cis.com/contact-us/",
      "category": "店鋪營運",
      "description": "### 分類：店鋪營運\n- 排放項目：電力使用\n- 碳排量：10,200 tCO₂e\n- 建議：導入能源管理系統與智慧監控，減少能源浪費，提升照明與空調設備效率，加強員工教育等。"
    },
    {
      "company_name": "Osaka Gas (Thailand) Co., Ltd.",
      "solution_description": "天然氣高效率設備與諮詢（如高效鍋爐維優/燃燒器調校/能源整合等）。",
      "email": "info@ogt.co.th",
      "phone": "+66 2 108 0872",
      "website": "https://www.ogt.co.th/about-us",
      "category": "店鋪營運",
      "description": "### 分類：店鋪營運\n- 排放項目：天然氣使用\n- 碳排量：7,300 tCO₂e\n- 建議：導入高效燃燒設備、定期檢修、使用智慧監控用氣設備。"
    },
    {
      "company_name": "Sentinel Solution Co., Ltd.",
      "solution_description": "企業淨水、節水解決方案，包括節水閥、減少用水與水處理系統優化。",
      "email": "info@eatdgrease.com",
      "phone": "+66 2 258 4545",
      "website": "https://www.eatdgrease.com/water-saving",
      "category": "店鋪營運",
      "description": "### 分類：店鋪營運\n- 排放項目：用水\n- 碳排量：950 tCO₂e\n- 建議：更換節水裝置、推動用水回收與再利用，安裝即時用水管理系統。"
    },
    {
      "company_name": "FUG Kitchen Equipment",
      "solution_description": "商用廚房LPG設備升級，高效燃燒器與設備節能設計。",
      "email": "fug@kitchenequip.com",
      "phone": "018-298-3070",
      "website": "https://www.facebook.com/FUGkichenequipment/",
      "category": "廚房設備",
      "description": "### 分類：廚房設備\n- 排放項目：瓦斯爐燃燒（液化石油氣）\n- 碳排量：3,500 tCO₂e\n- 建議：更新高效燃燒器與定期維護、教育廚房人員節能操作。"
    },
    {
      "company_name": "A-Gas Thailand",
      "solution_description": "冷媒全生命週期管理解決方案，協助冷媒回收，防止R-410A 洩漏。",
      "email": "sales.th@agas.com",
      "phone": "+66 2 136 7000",
      "website": "https://www.agas.com/th/?c=en",
      "category": "空調設備",
      "description": "### 分類：空調設備\n- 排放項目：冷媒 R-410A 洩漏\n- 排放量：依實際使用量計算，高GWP指數（GWP=2088）\n- 建議：冷媒回收管理、安裝洩漏檢測系統、改用低GWP冷媒。"
    },
    {
      "company_name": "DHL Express Thailand",
      "solution_description": "食品運輸碳排減量與綠色物流，包括運輸路線優化及車隊升級。",
      "email": "th.customerservice@dhl.com",
      "phone": "+66 2 345 5000",
      "website": "https://www.dhl.com/discover/en-th/logistics-advice/sustainability-and-green-logistics/sustainable-logistics-for-businesses-in-thailand",
      "category": "物流運輸",
      "description": "### 分類：物流運輸\n- 排放項目：食材運輸（柴油車）\n- 碳排量：2,000 tCO₂e\n- 建議：優化路線、車隊升級至更高能源效率與採購生質柴油。"
    },
    {
      "company_name": "Thai EV (Electric Vehicle Logistics)",
      "solution_description": "電動物流車隊整合，為食品產業提供電動運輸解決方案。",
      "email": "sales@thai-ev.com",
      "phone": "087-8888-700",
      "website": "https://thai-ev.com/contact-us/",
      "category": "物流運輸",
      "description": "### 分類：物流運輸\n- 排放項目：食材運輸（電動車）\n- 碳排量：1,000 tCO₂e\n- 建議：導入電動商用車隊、充電網路優化，降低排放及營運成本。"
    },
    {
      "company_name": "DSV Thailand",
      "solution_description": "可持續發展國際海運/空運服務，包含低碳運輸報告和減碳解決方案。",
      "email": "info@th.dsv.com",
      "phone": "+66 2 787 8888",
      "website": "https://www.dsv.com/en-nl/destinations/transport-asia-pacific/transport-thailand",
      "category": "供應鏈運輸",
      "description": "### 分類：供應鏈運輸\n- 排放項目：進口食材運輸（海運）\n- 碳排量：3,100 tCO₂e\n- 建議：選擇使用低硫燃料的船舶、優化貨櫃利用率、協議綠色運輸。"
    },
    {
      "company_name": "Yusen Logistics Thailand",
      "solution_description": "空運減碳服務，包括碳盤查、碳抵換與低碳航線建議。",
      "email": "ylth.ml.ssmg.sales.mgt@th.yusen-logistics.com",
      "phone": "+66 2 034 8000",
      "website": "https://www.yusen-logistics.com/th_en/services/end-to-end-transportation/air-freight-forwarding",
      "category": "供應鏈運輸",
      "description": "### 分類：供應鏈運輸\n- 排放項目：進口食材運輸（航空貨運）\n- 碳排量：5,800 tCO₂e\n- 建議：優先選擇直飛／高載重航班、參與航空碳補償計畫。"
    },
    {
      "company_name": "Mobisoft Infotech (Corporate Carpool Solutions)",
      "solution_description": "企業員工共乘出勤方案，減少私人汽車通勤和交通壅塞。",
      "email": "sales@mobisoftinfotech.com",
      "phone": "+1 855 572 2777",
      "website": "https://mobisoftinfotech.com/solutions/corporate-carpooling-solution",
      "category": "員工通勤",
      "description": "### 分類：員工通勤\n- 排放項目：私家車（汽油）\n- 碳排量：600 tCO₂e\n- 建議：推動企業員工共乘方案、提供接駁車、提倡低排交通工具。"
    },
    {
      "company_name": "Mass Rapid Transit Authority of Thailand (MRTA)",
      "solution_description": "推廣大眾運輸/捷運轉乘解決方案，強化企業/員工聯繫與團體票優惠。",
      "email": "saraban@mrta.co.th",
      "phone": "+66 2 716 4000",
      "website": "https://www.mrta.co.th/en/contact",
      "category": "員工通勤",
      "description": "### 分類：員工通勤\n- 排放項目：大眾運輸（電車、捷運）\n- 碳排量：200 tCO₂e\n- 建議：鼓勵使用捷運/電車通勤、推動企業團體月票補助。"
    },
    {
      "company_name": "LightBlue Consulting (Thailand)",
      "solution_description": "餐飲及餐廚廢棄物減量系統，包含食材管理與智慧監控。",
      "email": "info@lightblueconsulting.com",
      "phone": "+66 2 107 1374",
      "website": "https://www.lightblueconsulting.com/",
      "category": "廢棄物管理",
      "description": "### 分類：廢棄物管理\n- 排放項目：餐廚廢棄物處理\n- 碳排量：1,200 tCO₂e\n- 建議：導入智慧廚餘管理系統、廚餘堆肥循環再利用並減少浪費。"
    },
    {
      "company_name": "WHA Utilities & Power Public Company Limited",
      "solution_description": "工業/商業污水處理減排與再利用工程，提升水處理效率，減少GHG排放。",
      "email": "info@wha-up.com",
      "phone": "+66 2 719 9559",
      "website": "https://www.wha-up.com/en/utilities/wastewater-treatment",
      "category": "廢水處理",
      "description": "### 分類：廢水處理\n- 排放項目：污水處理\n- 碳排量：1,500 tCO₂e\n- 建議：導入高效污水處理、回收再利用、設置厭氧處理減甲烷排放。"
    }
  ]
};
