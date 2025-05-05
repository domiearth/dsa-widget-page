export interface CompanyData {
  company_name: string;
  company_description: string;
  solution_description: string;
  email: string;
  phone: string;
  website: string;
  activity_item: string;
  emission_source: string;
  description: string;
  carbon_emission: number;
}

export const TEST_DATA: { items: CompanyData[] } = {
  "items":[
    {
      "company_name": "Constant Energy",
      "company_description": "專注於泰國及東南亞的商用與工業太陽能與潔淨能源方案。",
      "solution_description": "為商業客戶建置太陽能電廠、綠電採購，協助降低電力營運碳排放。",
      "email": "info@constantenergy.net",
      "phone": "+66 2 258 6288",
      "website": "https://constantenergy.net/",
      "activity_item": "店鋪營運",
      "emission_source": "電力使用",
      "carbon_emission": 10200,
      "description": "**分類：電力使用**  \n**項目名稱：店鋪營運**  \n**碳排量：10,200 tCO2e**  \n**改善建議：採用現地太陽能電廠或採購綠電（再生能源證書），可大幅降低間接用電之碳排放。建議與專業廠商合作進行評估與規劃。**\n"
    },
    {
      "company_name": "Thai Energy Conservation Co., LTD (ECONOWATT)",
      "company_description": "泰國能源節能及水處理解決領導供應商，涵蓋工業氣體設備及節能方案。",
      "solution_description": "建議導入高效率天然氣設備及能源管理系統，減少耗氣量並提升轉換效率。",
      "email": "info@econowatt.co.th",
      "phone": "+66 2 319 2444",
      "website": "https://econowatt.co.th/en/about-us/",
      "activity_item": "店鋪營運",
      "emission_source": "天然氣使用",
      "carbon_emission": 7300,
      "description": "**分類：天然氣使用**  \n**項目名稱：店鋪營運**  \n**碳排量：7,300 tCO2e**  \n**改善建議：升級為高效能燃氣設備，持續監控與優化燃氣利用率，同時導入能源管理系統。**\n"
    },
    {
      "company_name": "Thai Energy Conservation Co., LTD (ECONOWATT)",
      "company_description": "專精於泰國工業與建築之水處理及節能方案供應商。",
      "solution_description": "導入節水省水科技與循環水利用，降低用水相關能源消耗與碳排。",
      "email": "info@econowatt.co.th",
      "phone": "+66 2 319 2444",
      "website": "https://econowatt.co.th/en/about-us/",
      "activity_item": "店鋪營運",
      "emission_source": "用水",
      "carbon_emission": 950,
      "description": "**分類：用水**  \n**項目名稱：店鋪營運**  \n**碳排量：950 tCO2e**  \n**改善建議：安裝節水裝置、回收再利用廢水，管理用水量以減少間接碳排。**\n"
    },
    {
      "company_name": "ScienceDirect (學術解決方案參考)",
      "company_description": "引用泰國轉用生物沼氣與電廚具減少LPG使用的學術論文。",
      "solution_description": "導入生質能爐、生物沼氣廚房系統或全面切換電磁爐。",
      "email": "N/A（請委託能源顧問公司協助導入）",
      "phone": "N/A",
      "website": "https://www.sciencedirect.com/science/article/abs/pii/S0973082614000842",
      "activity_item": "廚房設備",
      "emission_source": "瓦斯爐燃燒（液化石油氣）",
      "carbon_emission": 3500,
      "description": "**分類：瓦斯(液化石油氣)使用**  \n**項目名稱：廚房設備**  \n**碳排量：3,500 tCO2e**  \n**改善建議：減少LPG用量，轉換沼氣或生質能廚房技術，或改用電磁爐等再生能源關聯設備。**\n"
    },
    {
      "company_name": "ECONOWATT (or equivalent A/C service provider)",
      "company_description": "泰國本地空調設備維保與節能服務企業。",
      "solution_description": "空調冷媒（R-410A）定期維保與洩漏檢測、更換新型低GWP冷媒。",
      "email": "info@econowatt.co.th",
      "phone": "+66 2 319 2444",
      "website": "https://econowatt.co.th/en/about-us/",
      "activity_item": "空調設備",
      "emission_source": "冷媒 R-410A 洩漏",
      "carbon_emission": 0,
      "description": "**分類：冷媒逸散**  \n**項目名稱：空調設備**  \n**碳排量：依實際洩漏量換算（未提供）**  \n**改善建議：定期進行冷媒洩漏檢測與維修，盡量選用低GWP冷媒，如R32或天然冷媒。**\n"
    },
    {
      "company_name": "DHL Express Thailand",
      "company_description": "DHL在泰國推動GoGreen Plus及綠色物流服務，致力交通運輸減碳。",
      "solution_description": "協助企業物流升級綠色車隊（EV/柴油車轉用E20生質柴油）、智能路線、碳中和補償服務。",
      "email": "th.customerservice@dhl.com",
      "phone": "+66 2 345 5000",
      "website": "https://www.dhl.com/discover/en-th/logistics-advice/sustainability-and-green-logistics/dhl-gogreen-plus-reduces-scope3-emissions",
      "activity_item": "物流運輸",
      "emission_source": "食材運輸（柴油車）",
      "carbon_emission": 2000,
      "description": "**分類：物流運輸柴油車**  \n**項目名稱：食材運輸**  \n**碳排量：2,000 tCO2e**  \n**改善建議：快速汰換高排放柴油車，引進EV物流車，並透過DHL GoGreen+碳補償與路線優化系統降低排放。**\n"
    },
    {
      "company_name": "Banpu NEXT",
      "company_description": "Banpu NEXT為商用電動車（EV）車隊管理與租賃服務領導品牌。",
      "solution_description": "提供企業電動車隊（EV Fleet）、能源管理與全方位車輛監控解決方案。",
      "email": "contact@banpunext.co.th",
      "phone": "+66 2 694 6600",
      "website": "https://banpunext.co.th/jvevfleetservicesen/",
      "activity_item": "物流運輸",
      "emission_source": "食材運輸（電動車）",
      "carbon_emission": 1000,
      "description": "**分類：物流運輸電動車**  \n**項目名稱：食材運輸**  \n**碳排量：1,000 tCO2e**  \n**改善建議：利用Banpu NEXT電動車隊服務全面逐步汰換傳統柴油車，大幅降低運輸相關碳排。**\n"
    },
    {
      "company_name": "DSV Air & Sea (Thailand) Ltd.",
      "company_description": "DSV為全球物流及海運巨頭，提供低排放海運與綠色航運解決方案。",
      "solution_description": "採購DSV低碳運輸、船舶排放優化與碳中和選擇（低硫、最佳化路徑）。",
      "email": "info@th.dsv.com",
      "phone": "+66 2 026 6000",
      "website": "https://www.dsv.com/en-nl/destinations/transport-asia-pacific/transport-thailand",
      "activity_item": "供應鏈運輸",
      "emission_source": "進口食材運輸（海運）",
      "carbon_emission": 3100,
      "description": "**分類：海運**  \n**項目名稱：進口食材運輸**  \n**碳排量：3,100 tCO2e**  \n**改善建議：選擇如DSV等國際認證的低碳海運服務，推動船舶最佳化與碳補償方案。**\n"
    },
    {
      "company_name": "DHL Express Thailand",
      "company_description": "DHL為永續航空貨運與碳中和方案全球物流領導者。",
      "solution_description": "DHL GoGreen Plus及永續航空燃料（SAF）替代碳密集之航空貨運。",
      "email": "th.customerservice@dhl.com",
      "phone": "+66 2 345 5000",
      "website": "https://www.dhl.com/discover/en-th/logistics-advice/sustainability-and-green-logistics/dhl-gogreen-plus-reduces-scope3-emissions",
      "activity_item": "供應鏈運輸",
      "emission_source": "進口食材運輸（航空貨運）",
      "carbon_emission": 5800,
      "description": "**分類：航空貨運**  \n**項目名稱：進口食材運輸**  \n**碳排量：5,800 tCO2e**  \n**改善建議：優先選用DHL等具永續航空燃料（SAF）方案之貨運商，降低空運碳足跡並採碳補償。**\n"
    },
    {
      "company_name": "Banpu NEXT",
      "company_description": "Banpu NEXT為泰國B2B交通與電動車隊整合方案龍頭。",
      "solution_description": "推動企業或員工通勤車EV轉型，並協助電動車採購/租賃與路線規劃。",
      "email": "contact@banpunext.co.th",
      "phone": "+66 2 694 6600",
      "website": "https://banpunext.co.th/jvevfleetservicesen/",
      "activity_item": "員工通勤",
      "emission_source": "私家車（汽油）",
      "carbon_emission": 600,
      "description": "**分類：汽油車通勤**  \n**項目名稱：員工通勤**  \n**碳排量：600 tCO2e**  \n**改善建議：提供員工EV通勤方案、設置充電站，並配合政府EV稅收減免計畫。**\n"
    },
    {
      "company_name": "Bangkok Mass Transit System Public Company Limited (BTSC)",
      "company_description": "BTSC營運曼谷BTS Skytrain，為泰國捷運及電車主要系統商。",
      "solution_description": "推動捷運與大眾運輸電氣化、提升載客效率與用電來源最佳化，協助企業通勤碳足跡減半。",
      "email": "customerrelations@bts.co.th",
      "phone": "+66 2 617 6000",
      "website": "https://www.bts.co.th/eng/",
      "activity_item": "員工通勤",
      "emission_source": "大眾運輸（電車、捷運）",
      "carbon_emission": 200,
      "description": "**分類：電氣化捷運/大眾運輸**  \n**項目名稱：員工通勤**  \n**碳排量：200 tCO2e**  \n**改善建議：持續推廣大眾運輸方案（如BTS等），並與用電再生能源掛鉤。**\n"
    },
    {
      "company_name": "LightBlue Consulting",
      "company_description": "專注餐飲、酒店及食品業之專業食物垃圾減量顧問公司。於曼谷營運多年，國內國際客戶眾多。",
      "solution_description": "導入食物浪費預防技術、廚餘管理系統及員工教育課程，定量追蹤和即時分析廢棄物來源，以及串接社會再分配網絡，杜絕糧食浪費。",
      "email": "info@lightblueconsulting.com",
      "phone": "+66 2 026 6151",
      "website": "https://www.lightblueconsulting.com/",
      "activity_item": "廢棄物管理",
      "emission_source": "餐廚廢棄物處理",
      "carbon_emission": 1200,
      "description": "**分類：餐廚廢棄物**  \n**項目名稱：廢棄物管理**  \n**碳排量：1,200 tCO2e**  \n**改善建議：採用專業廢棄物追蹤與預警管理（如LightBlue）、辦理循環再利用及分配剩餘糧食至公益。**\n"
    },
    {
      "company_name": "Thai Energy Conservation Co., LTD (ECONOWATT)",
      "company_description": "水處理與工業節能整合領導企業，提供技術升級與代營運。",
      "solution_description": "高效廢水處理系統與減碳設計，回收水源並減少甲烷溫室氣體排放。",
      "email": "info@econowatt.co.th",
      "phone": "+66 2 319 2444",
      "website": "https://econowatt.co.th/en/about-us/",
      "activity_item": "廢水處理",
      "emission_source": "污水處理",
      "carbon_emission": 1500,
      "description": "**分類：污水/廢水處理**  \n**項目名稱：廢水處理**  \n**碳排量：1,500 tCO2e**  \n**改善建議：以高效專業廢水處理技術結合碳減量設計，並與專業顧問合作定期進行廢水與甲烷減量優化。**\n"
    }
  ]
};
