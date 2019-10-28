// 貨棧別
const cargoLocationOptions = [
    {show: '台北', code: 'C'},
    {show: '高雄', code: 'K'}
];

// 貨棧別
const cargoLocationWithAllOptions = [
    ...cargoLocationOptions,
    {show: '全部', code: 'A'},
];

// 保證類別 : 定期存單	1/銀行保證	2/質押票據	3/現金	4/連帶保證	5/
const creditTypeOptions = [
    {code: '1', show: '定期存單'},
    {code: '2', show: '銀行保證'},
    {code: '3', show: '質押票據'},
    {code: '4', show: '現金'},
    {code: '5', show: '連帶保證'},
];

// GCO 狀態 : 已出倉	Y/未出倉	N/
const gcoStatusOptions = [
    {code: 'Y', show: '已出倉'},
    {code: 'N', show: '未出倉'},
];

// 特殊品 : 一般	 /貴重品~	V/冷藏品~	C/冷凍品~	Z/危險品~	R/冷藏+危險	D/冷凍+危險	Y/木墊區	W/整盤整櫃	F/
const goodsMeasureSpecialFlagOptions = [
    {code: '', show: '一般'},
    {code: 'V', show: '貴重品'},
    {code: 'C', show: '冷藏品'},
    {code: 'Z', show: '冷凍品'},
    {code: 'R', show: '危險品'},
    {code: 'D', show: '冷藏+危險'},
    {code: 'Y', show: '冷凍+危險'},
    {code: 'W', show: '木墊區'},
    {code: 'F', show: '整盤整櫃'},
];

// 倉別 : 出口	E/轉口	T/無GCI	N/全部	%/
const locaTypeOptions = [
    {code: 'E', show: '出口'},
    {code: 'T', show: '轉口'},
    {code: 'N', show: '無GCI'},
    {code: '%', show: '全部'},
];


// 特殊通關類型 : 一般	/一段式	E/海空聯運	S/三角貿易	*/保稅	P/押運	1/外~貨轉口(空陸空)	O/
const goodsInHouseSpecialFlagOptions = [
    {code: '', show: '一般'},
    {code: 'V', show: '貴重品'},
    {code: 'E', show: '一段式'},
    {code: 'S', show: '海空聯運'},
    {code: '*', show: '三角貿易'},
    {code: 'P', show: '保稅'},
    {code: '1', show: '押運'},
    {code: 'O', show: '外貨轉口(空陸空)'},
    {code: 'Z', show: '冷藏品'},
    {code: 'R', show: '危險品'},
    {code: 'D', show: '冷藏+危險'},
    {code: 'Y', show: '冷凍+危險'},
    {code: 'W', show: '木墊區'},
    {code: 'F', show: '整盤整櫃'},
];


// 優惠金額選擇Add20170601
const preferOptionOptions = [
    {code: 'A', show: '調整後'},
    {code: 'B', show: '原優惠'},
];


// 收費項目
const chargeKindOptions = [
    {code: 'E', show: '出口倉租'},
    {code: 'I', show: '進口倉租'},
    {code: 'T', show: '轉口倉租'},
    {code: 'OT', show: '雜項'},
    {code: 'TT', show: '轉口優惠'},
    {code: 'UP', show: '空盤費'},
    {code: 'UC', show: '空櫃費'},
    {code: 'SP', show: '短溢收倉租'},
    {code: 'SQ', show: '短溢收雜項'},
    {code: 'TD', show: '轉口拆盤'},
    {code: 'TB', show: '轉口裝盤'},
    {code: 'P', show: '機出倉租'},
    {code: 'X', show: '機進倉租'},
    {code: 'O', show: 'OBC倉租'},
    {code: 'RB', show: '出口再裝'},
    {code: 'OTA', show: '空轉空-雜項'},
    {code: 'RBA', show: '空轉空-出口再裝'},
    {code: 'TDA', show: '空轉空-轉口拆盤'},
    {code: 'TA', show: '空轉空-轉口倉租'},
    {code: 'ID', show: '進口拆盤'},
    {code: 'EX', show: 'EHU倉租'},
];


// 收款方式
const paymentTypeFee0401mOptions = [
    {code: 'C', show: '現金'},
    {code: 'N', show: '週結現開'},
    {code: 'W', show: '週結週開'},
    {code: 'H', show: '半月結'},
    {code: 'M', show: '月結'},
    {code: 'K', show: '半月現開'},
    {code: 'L', show: '月結現開'},
];

// 收款方式
const paymentTypeFee0444mOptions = [
    {code: 'W', show: '週'},
    {code: 'H', show: '半月'},
    {code: 'M', show: '月'},
];

// 收款方式
const paymentType01Options = [
    {code: 'W', show: '週結週開'},
    {code: 'N', show: '週結現開'},
    {code: 'H', show: '半月結'},
    {code: 'M', show: '月結'},
    {code: 'F', show: '免費'},
    {code: 'C', show: '現金'},
];

// 收款方式
const paymentTypeFee0456qOptions = [
    {code: 'W', show: '週結'},
    {code: 'N', show: '週現'},
    {code: 'H', show: '半月結'},
    {code: 'K', show: '半月現'},
    {code: 'M', show: '月結'},
    {code: 'L', show: '月現'},
];

// 收款方式
const paymentTypeFee0109qOptions = [
    {code: 'C', show: '現金'},
    {code: 'W', show: '週結週開'},
    {code: 'N', show: '週結現開'},
    {code: 'H', show: '半月結'},
    {code: 'K', show: '半月現開'},
    {code: 'M', show: '月結'},
    {code: 'L', show: '月結現開'},
    {code: 'A', show: '全部'},
];

// 收款方式
const paymentType02Options = [
    {code: 'W', show: '週結'},
    {code: 'N', show: '週現'},
    {code: 'H', show: '半月結'},
    {code: 'M', show: '月結'},
    {code: 'K', show: '半月現'},
    {code: 'L', show: '月現'},
    {code: '1', show: '現開'},
    {code: '2', show: '記帳'},
    {code: 'A', show: '全部'},
];

// 收款方式
const paymentType03Options = [
    {code: 'W', show: '週結週開'},
    {code: 'N', show: '週結現開'},
    {code: 'H', show: '半月結'},
    {code: 'M', show: '月結'},
    {code: 'K', show: '半月結現開'},
    {code: 'L', show: '月結現開'},
    {code: 'C', show: '現金'},
    {code: 'A', show: '全部'},
];

// 收款方式
const paymentTypeTotalOptions = [
    {code: 'W', show: '週結週開'},
    {code: 'N', show: '週結現開'},
    {code: 'H', show: '半月結'},
    {code: 'M', show: '月結'},
    {code: 'K', show: '半月結現開'},
    {code: 'L', show: '月結現開'},
    {code: 'F', show: '免費'},
    {code: 'C', show: '現金'},
    {code: '1', show: '現開'},
    {code: '2', show: '記帳'},
    {code: 'A', show: '全部'},
];

// 現金/記帳
const payAttrOptions = [
    {code: 'C', show: '現金'},
    {code: 'B', show: '記帳'},
    {code: 'A', show: '不分'},
];

// 借/貸方
const crDbOptions = [
    {code: 'CR', show: '貸方'},
    {code: 'DR', show: '借方'},
];

// 是否已註銷
const deleteMarkOptions = [
    {code: 'Y', show: '註銷'},
    {code: 'N', show: '正常'},
];

// 是否已註銷
const deleteMarkWithAllOptions = [
    ...deleteMarkOptions,
    {code: '0', show: '不分'},
];

// 客戶類型
const customerTypeOptions = [
    {code: 'E', show: '承攬業者'},
    {code: 'I', show: '報關箱號'},
];

// 客戶類型
const customerType02Options = [
    {code: 'A', show: '航空公司'},
    {code: '/', show: '承攬業者'},
    {code: 'F', show: '報關箱號'},
    {code: 'I', show: '客戶統編'},
    {code: 'C', show: '記帳客戶'},
    {code: '0', show: '全部'},
];

// 要印帳單
const billPrintOptions = [
    {code: 'Y', show: '要印帳單'},
    {code: 'N', show: '不印帳單'},
    {code: 'A', show: '不分'},
];

// 客戶性質
const custAttributeOptions = [
    {code: 'N', show: '一般'},
    {code: 'F', show: '免費'},
    {code: 'A', show: '航空公司'},
    {code: 'B', show: '快遞客戶'},
    {code: '0', show: '全部'},
];

// 列印日報
const dailyReportOptions = [
    {code: 'A', show: '全部'},
    {code: 'N', show: '不印'},
    {code: 'Y', show: '印'},
];

// 客戶額度
const notEnoughOptions = [
    {code: '1', show: '不足'},
    {code: '2', show: '不限'},
    {code: '3', show: '低於'},
];

// 額度警示
const warningFlagOptions = [
    {code: 'Y', show: '有'},
    {code: 'N', show: '無'},
    {code: 'A', show: '不分'},
];

// 額度警示
const invTaxAdjustOptions = [
    {code: 'Y', show: '可調'},
    {code: 'N', show: '不可'},
    {code: 'A', show: '所有'},
];

// 是 / 否
const yesNoOptions = [
    {code: 'Y', show: '是'},
    {code: 'N', show: '否'},
];

// FEE0459M flag
const flagOptions = [
    {code: 'Y', show: '正常'},
    {code: 'N', show: '終止'},
];

// 貨別 : 一般	N/OFLD	2/直轉	Y/押運	1/外~倉	3/公司貨	4/出(未進)	5/轉(未進)	6/機出	P/高倉轉	K/空陸空	O/
const goFlagOptions = [
    {code: 'N', show: '一般'},
    {code: '2', show: 'OFLD'},
    {code: 'Y', show: '直轉'},
    {code: '1', show: '押運'},
    {code: '3', show: '外倉'},
    {code: '4', show: '公司貨'},
    {code: '5', show: '出(未進)'},
    {code: '6', show: '轉(未進)'},
    {code: 'P', show: '機出'},
    {code: 'K', show: '高倉轉'},
    {code: 'O', show: '空陸空'},
];

// 是 / 否
const yesNoWithAllOptions = [
    ...yesNoOptions,
    {code: 'A', show: '所有'},
];

// 發票品名代碼
const invDescOptions = [
    {code: '0', show: '全部'},
    {code: 'H', show: '航空公司倉儲費、倉庫使用費'},
    {code: 'D', show: '延遲倉租費'},
    {code: 'G', show: '航空公司空轉空倉儲費'},
    {code: 'S', show: '進口貨物海關拍賣費'},
    {code: 'U', show: 'EHU倉租費'},
    {code: 'A', show: '承攬業者倉儲費'},
    {code: 'C', show: 'SBP補倉租'},
    {code: '1', show: '週結倉租費'},
    {code: '2', show: '半月結倉租費'},
    {code: '3', show: '月結倉租費'},
    {code: '4', show: '裝盤費'},
    {code: '5', show: '空盤櫃保管費'},
    {code: '6', show: '裝備費用'},
    {code: '7', show: 'EHU暫繳現金'},
    {code: '8', show: '快遞出口暫繳現金'},
    {code: 'O', show: '快遞出口倉租費'},
    {code: 'B', show: 'EHU+快遞出口暫繳現金'},
    {code: '9', show: '堆高機使用費'},
];

// 計費狀態 : 全部	A/已計費	Y/未計費	N/
const feeStatusOptions = [
    {code: 'N', show: '未計費'},
    {code: 'Y', show: '已計費'},
    {code: 'A', show: '全部'},
];


// 發票狀態
const invoiceMasterStatusOptions = [
    {code: 'L', show: '申報'},
    {code: 'C', show: '作廢'},
    {code: 'N', show: '一般'},
    {code: 'A', show: '全部'},
];

// 稅別
const taxMarkOptions = [
    {code: '1', show: '應稅'},
    {code: '2', show: '零稅率'},
    {code: '3', show: '免稅'},
    {code: 'A', show: '全部'},
];

// 倉別
const workTypeOptions = [
    {code: 'I', show: '進口'},
    {code: 'E', show: '出口'},
    {code: 'T', show: '轉口'},
    {code: 'X', show: '機放進口'},
    {code: 'P', show: '機放出口'},
    {code: 'O', show: '快遞出口'},
];

// 發票字軌狀態
const invoiceNoStatusOptions = [
    {code: 'N', show: '未用完'},
    {code: 'Y', show: '用完'},
];

// 發票聯式
const invoiceTypeOptions = [
    {code: '31', show: '三聯'},
    {code: '32', show: '二聯'},
];

// 收費資料狀態
const chargeSpStatusOptions = [
    {code: '0', show: '未計費'},
    {code: '1', show: '已計費'},
    {code: '2', show: '已開發票'},
    {code: '3', show: '已作廢'},
    {code: '4', show: '改標作廢'},
];

// 優惠發票更改抬頭狀態
const preferInvChgStatusOptions = [
    {code: '1', show: '已計費'},
    {code: '2', show: '已開發票'},
    {code: '3', show: '已作廢'},
];

// 優惠方案
const preferFlagOptions = [
    {code: 'F', show: '班機'},
    {code: 'N', show: '無'},
    {code: 'P', show: '合併分批'},
    {code: 'Y', show: '個案'},
    {code: '1', show: '1'},
    {code: '2', show: '2'},
    {code: '3', show: '3'},
    {code: '4', show: '4'},
    {code: '5', show: '5'},
    {code: '6', show: '6'},
];

// 優退方式
const returnTypeOptions = [
    {code: '1', show: '線上'},
    {code: '2', show: '後退'},
    {code: null, show: '無'},
];

// 實質保證金狀態 : 無效	N/有效	Y/
const validOptions = [
    {code: 'N', show: '無效'},
    {code: 'Y', show: '有效'},
];

// 收入類型
const storageMarkOptions = [
    {code: 'Y', show: '倉租'},
    {code: 'N', show: '雜項'},
    {code: 'A', show: '全部'},
];

// 繳款期限 : 0.通則	0/1.次月	1/2.次次月	2/3.天數增加	3/4.期數(一期半個月)	4/
const periodOptions = [
    {code: '0', show: '0.通則'},
    {code: '1', show: '1.次月'},
    {code: '2', show: '2.次次月'},
    {code: '3', show: '3.天數增加'},
    {code: '4', show: '4.期數(一期半個月)'},
];

const feeOptions = {
    billPrintOptions,
    cargoLocationOptions,
    cargoLocationWithAllOptions,
    chargeKindOptions,
    chargeSpStatusOptions,
    crDbOptions,
    creditTypeOptions,
    custAttributeOptions,
    customerType02Options,
    customerTypeOptions,
    dailyReportOptions,
    deleteMarkOptions,
    deleteMarkWithAllOptions,
    flagOptions,
    gcoStatusOptions,
    invDescOptions,
    invoiceMasterStatusOptions,
    invoiceNoStatusOptions,
    invoiceTypeOptions,
    invTaxAdjustOptions,
    notEnoughOptions,
    payAttrOptions,
    paymentType01Options,
    paymentType02Options,
    paymentType03Options,
    paymentTypeFee0109qOptions,
    paymentTypeFee0401mOptions,
    paymentTypeFee0444mOptions,
    paymentTypeFee0456qOptions,
    paymentTypeTotalOptions,
    periodOptions,
    locaTypeOptions,
    preferFlagOptions,
    goFlagOptions,
    preferInvChgStatusOptions,
    preferOptionOptions,
    returnTypeOptions,
    goodsInHouseSpecialFlagOptions,
    goodsMeasureSpecialFlagOptions,
    storageMarkOptions,
    feeStatusOptions,
    taxMarkOptions,
    validOptions,
    warningFlagOptions,
    workTypeOptions,
    yesNoOptions,
    yesNoWithAllOptions,
};

export default feeOptions;
