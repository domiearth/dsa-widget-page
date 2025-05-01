export interface CompanyData {
  公司名稱: string;
  解決方法: string;
  聯絡資訊: string;
  官方網站: string;
  敘述: string;
}

export const TEST_DATA: { items: CompanyData[] } = {
  "items": [
    {
      "公司名稱": "CKPower",
      "解決方法": "提供再生能源發電、推動使用綠電以降低用電碳排放。",
      "聯絡資訊": "Tel: +66 2 431 1700 | Email: information@ckpower.co.th",
      "官方網站": "https://www.ckpower.co.th/en",
      "敘述": "### 分類：店鋪營運\n- 排放項目：電力使用\n- 碳排量：10,200 tCO₂e\n- 建議：導入再生能源（如太陽能）及能源監控管理系統，提升能源利用效率，降低購電依賴傳統火力發電。\n"
    },
    {
      "公司名稱": "BIG Thailand",
      "解決方法": "提供工業節能、天然氣燃料系統最佳化及碳排減量整體方案。",
      "聯絡資訊": "Tel: +66 2 338 4800 | Email: info@bigth.com",
      "官方網站": "https://bigth.com/en/chinese-page/",
      "敘述": "### 分類：店鋪營運\n- 排放項目：天然氣使用\n- 碳排量：7,300 tCO₂e\n- 建議：應用高效率燃燒設備、升級鍋爐及智慧能源管理，降低天然氣用量並提升能源效率。\n"
    },
    {
      "公司名稱": "WHA Utilities & Power",
      "解決方法": "推動建築廢水回收、淨水再利用及工業節能水管理專案。",
      "聯絡資訊": "Tel: +66 2 719 9555 | Email: info@wha-up.com",
      "官方網站": "https://www.wha-industrialestate.com/zh/infrastructure/utilities",
      "敘述": "### 分類：店鋪營運\n- 排放項目：用水\n- 碳排量：950 tCO₂e\n- 建議：導入回收水系統、提升設備效率，並教育員工節約用水以減少碳排放。\n"
    },
    {
      "公司名稱": "Tide Power Technology",
      "解決方法": "以生物質發電及有機廢棄物氣化發電系統處理廚餘，轉換為發電能源。",
      "聯絡資訊": "Tel: +66 2 005 2553 | Email: info@tidepower.uk",
      "官方網站": "https://www.tidepower.uk/zh/news_detail.aspx?pid=384&id=28",
      "敘述": "### 分類：廚房設備\n- 排放項目：瓦斯爐燃燒（液化石油氣）\n- 碳排量：3,500 tCO₂e\n- 建議：採用高效能廚房設備或油氣混用技術，同時將廢棄物導入生質能源回收系統。\n"
    },
    {
      "公司名稱": "Utile Engineering Co., Ltd.",
      "解決方法": "專業空調/冷媒洩漏管理與節能控管，協助企業減少冷媒洩漏及提升整體空調效率。",
      "聯絡資訊": "Tel: +66 2 185 2831-4 | Email: info@utile.co.th",
      "官方網站": "http://www.utile.co.th",
      "敘述": "### 分類：空調設備\n- 排放項目：冷媒 R-410A 洩漏\n- 排放量：無明確數值（高潛在GWP）\n- 建議：定期檢修冷氣、優先使用新型冷媒（如R32），並落實冷媒回收與管理制度以防止洩漏。\n"
    },
    {
      "公司名稱": "FreightAmigo",
      "解決方法": "智慧物流系統，推動柴油車路線優化與低碳運輸管理，減少空轉與冗餘運輸。",
      "聯絡資訊": "Tel: +852 3897 8700 | Email: contact@freightamigo.com",
      "官方網站": "https://www.freightamigo.com",
      "敘述": "### 分類：物流運輸\n- 排放項目：食材運輸（柴油車）\n- 碳排量：2,000 tCO₂e\n- 建議：進行路線規劃最佳化、推動車輛汰舊換新並導入低碳或電動車。\n"
    },
    {
      "公司名稱": "Energy Absolute (EA)",
      "解決方法": "提供食材冷鏈及配送的電動車隊、充電站及智能運輸服務。",
      "聯絡資訊": "Tel: +66 2 617 2180-3 | Email: info@energyabsolute.co.th",
      "官方網站": "https://www.energyabsolute.co.th/en/",
      "敘述": "### 分類：物流運輸\n- 排放項目：食材運輸（電動車）\n- 碳排量：1,000 tCO₂e\n- 建議：加速車隊電動化、建置快充站並與在地電力公司合作購買綠電，提高永續運輸比例。\n"
    },
    {
      "公司名稱": "Kerry Siam Seaport",
      "解決方法": "整合智慧港埠物流作業，將無效移動及空卡搬運減至最低，減少燃油消耗與碳排放。",
      "聯絡資訊": "Tel: +66 2 338 9999 | Email: info.th@kerrylogistics.com",
      "官方網站": "https://www.kerrylogistics.com/en/contact-us/",
      "敘述": "### 分類：供應鏈運輸\n- 排放項目：進口食材運輸（海運）\n- 碳排量：3,100 tCO₂e\n- 建議：最佳化貨櫃調度、推行綠色港埠管理，並參與國際綠色運輸聯盟提升運輸效率。\n"
    },
    {
      "公司名稱": "DHL GoGreen Plus",
      "解決方法": "提供可選永續航空燃料(SAF)方案給航空貨運，實質減少空運碳排放。",
      "聯絡資訊": "DHL Express Thailand Tel: +66 2 345 5000 | Email: th.cs@dhl.com",
      "官方網站": "https://www.dhl.com/discover/zh-tw/ship-with-dhl/services/dhl-gogreen-plus",
      "敘述": "### 分類：供應鏈運輸\n- 排放項目：進口食材運輸（航空貨運）\n- 碳排量：5,800 tCO₂e\n- 建議：優先選用SAF永續航空燃料、減輕貨物包裝，同時促進循環包裝材料利用。\n"
    },
    {
      "公司名稱": "Energy Absolute (EA)",
      "解決方法": "推動員工汽車電動化、提供電動車購置優惠及設立充電樁，並推廣共乘。",
      "聯絡資訊": "Tel: +66 2 617 2180-3 | Email: info@energyabsolute.co.th",
      "官方網站": "https://www.energyabsolute.co.th/en/",
      "敘述": "### 分類：員工通勤\n- 排放項目：私家車（汽油）\n- 碳排量：600 tCO₂e\n- 建議：鼓勵共乘、汰換為油電或全電動車，員工可利用公司設立之充電樁減少個人碳足跡。\n"
    },
    {
      "公司名稱": "泰國交通部運輸政策與規劃辦公室 (OTP)",
      "解決方法": "推動長期及短期公共交通減碳計劃，促進電動大眾交通工具普及，協助企業通勤管理。",
      "聯絡資訊": "Tel: +66 2 141 8155 | Email: otp@otp.go.th",
      "官方網站": "https://www.otp.go.th/",
      "敘述": "### 分類：員工通勤\n- 排放項目：大眾運輸（電車、捷運）\n- 碳排量：200 tCO₂e\n- 建議：推廣員工使用電車、捷運，企業可設立員工交通補助誘因。\n"
    },
    {
      "公司名稱": "Eco Management Industrial Co., Ltd.",
      "解決方法": "專業餐廚及有機廢棄物收集與能源化處理服務，提升垃圾減量與再利用率。",
      "聯絡資訊": "Tel: +66 2 713 6300 | Email: info@eco.co.th",
      "官方網站": "https://www.eco.co.th/zh/about-cn/",
      "敘述": "### 分類：廢棄物管理\n- 排放項目：餐廚廢棄物處理\n- 碳排量：1,200 tCO₂e\n- 建議：導入廚餘收集桶、協作堆肥、廚餘發電與生物甲烷產製，提升餐飲業剩食資源化。\n"
    },
    {
      "公司名稱": "Grand Enpro Trade Co., Ltd.",
      "解決方法": "提供廢水、污水處理工程一站式解決，包括後端水回收再利用，協助企業掌握水資源整合與碳減量。",
      "聯絡資訊": "Tel: +66 2 683 7001 | Email: sales@grandenpro.com",
      "官方網站": "https://www.grandenpro.com/zh/latest-news/294-2024-11-06-08-09-10",
      "敘述": "### 分類：廢水處理\n- 排放項目：污水處理\n- 碳排量：1,500 tCO₂e\n- 建議：建置智慧污水處理系統，導入水資源再生技術，降低排放及化學藥劑耗用以減緩溫室氣體排放。\n"
    }
  ]
};
