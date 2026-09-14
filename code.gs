

const SPREADSHEET_ID = "1rkEB9kao5d9JEDB45O6i2mRNfvYz4xA8qHmtEbWhMtE";

// SCHOOL AUTOFILL (rep-specific history)
const HISTORY_SPREADSHEET_IDS = [
  "1oEyCEf58RE7MIcaO-IiM-ru-duWNlODQVogjHFm92IE",
  "19UuNKsI26DqtDJVE-xwIbwlHVVp1EhP7cQxbESDsRvA"
];


const PACKAGE_PRICES = { A: 100, B: 25, C: 15 };
const DELIVERY_FEE = 20;

const SCHOOL_ID_PREFIX = "BBEK";
const ID_LIST_SHEET_NAME = "ID LIST";
const PENDING_REGION_SHEET_NAME = "PENDING REGION FIX";

const REGION_CODES = {
  "GREATER ACCRA": "GA",
  "ASHANTI": "ASH",
  "EASTERN": "EST",
  "CENTRAL": "CEN",
  "VOLTA": "VOL",
  "WESTERN": "WST",
  "WESTERN NORTH": "WSN",
  "NORTHERN": "NTH",
  "UPPER EAST": "UPE",
  "UPPER WEST": "UPW",
  "OTI": "OTI",
  "BONO": "BNO",
  "BONO EAST": "BNE",
  "AHAFO": "AHF",
  "NORTH EAST": "NE",
  "SAVANNAH": "SAV"
};


const BRANCH_CODES = {
  "GREATER GHANA": "GG",
  "CENTRAL GHANA": "CG",
  "UPPER GHANA": "UG",
  "NORTHERN GHANA": "NG",
  "GENERAL": "HQ"
};

const BRANCH_FOLDER_NAMES = {
  "GG": "Greater Ghana",
  "CG": "Central Ghana",
  "UG": "Upper Ghana",
  "NG": "Northern Ghana",
  "HQ": "HQ - General"
};


// restart invoice at 0001 after string change
const EXAM_MONTH = "OCT";


const ARKESEL_API_KEY   = "T3NMd3lPdkp1bktkVVFhb2pPTVY";
const SMS_SENDER_ID     = "BestBrain";
const ARKESEL_SMS_URL   = "https://sms.arkesel.com/api/v2/sms/send";


const COMPANY_MOMO_LINES = ["0247448883", "0248726958", "0207732900"];
const COMPANY_MOMO_NUMBER  = COMPANY_MOMO_LINES[0]; 
const COMPANY_MOMO_NAME    = "Bacon Atsu Amengor / Best Brain Examinations Konsortium";
const COMPANY_MOMO_NETWORK = "MTN / Telecel"; // 


const EXAM_NAME = "Beta Mock";


function formatGHS(amount){
  const num = Number(amount) || 0;
  return "GHS " + num.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

const WHATSAPP_ENABLED = false;
const ARKESEL_WHATSAPP_ENDPOINT = "";  
const ARKESEL_WHATSAPP_API_KEY  = "";  

//  Invoice images 
const INVOICES_FOLDER_NAME = "Registration Invoices"; 


// Login lockout tuning
const LOGIN_MAX_FAILS = 5;
const LOGIN_LOCK_SECONDS = 900; // 15 minutes


// REPS

const REPS = {
  // GREATER GHANA BRANCH
  "Nick.MK001": { pin:"1401", status:"ACTIVE", name:"Hunsu Nicholas",  role:"REP", branch:"GREATER GHANA" },
  "Turkson.MK002": { pin:"2002", status:"ACTIVE", name:"Richard Turkson",  role:"REP", branch:"GREATER GHANA" },
  "Nat.MK003": { pin:"1403", status:"ACTIVE", name:"Nathaniel Akunnor",  role:"REP", branch:"GREATER GHANA" },
  "Davor.MK004": { pin:"4404", status:"ACTIVE", name:"Davor Geoffrey",  role:"REP", branch:"GREATER GHANA" },
  "Nii.MK005": { pin:"1405", status:"ACTIVE", name:"Ayitey Emmanuel",  role:"REP", branch:"GREATER GHANA" },
  "Lisa.MK006": { pin:"1206", status:"ACTIVE", name:"Alomenu Elizabeth",  role:"REP", branch:"GREATER GHANA" },
  "Gotfried.MK007": { pin:"7707", status:"ACTIVE", name:"Gottfried Akuffo",  role:"REP", branch:"GREATER GHANA" },
  "Fortune.MK008": { pin:"6608", status:"ACTIVE", name:"Fortune Bless",  role:"REP", branch:"GREATER GHANA" },
  "Matilda.MK009": { pin:"1309", status:"ACTIVE", name:"Matilda Addison",  role:"REP", branch:"GREATER GHANA" },
  "Rita.MK0010": { pin:"1810", status:"ACTIVE", name:"Rita Kweedu",  role:"REP", branch:"GREATER GHANA" },
  "Vanessa.MK0011": { pin:"2211", status:"ACTIVE", name:"Vanessa Boateng",  role:"REP", branch:"GREATER GHANA" },
  "Mavis.MK0012": { pin:"1312", status:"ACTIVE", name:"Essel Mavis",  role:"REP", branch:"GREATER GHANA" },
  "Daniel.MK0013": { pin:"4413", status:"ACTIVE", name:"Daniel Appiah",  role:"REP", branch:"GREATER GHANA" },
  "Emerald.MK0014": { pin:"2014", status:"ACTIVE", name:"Emerald Adjetey", role:"REP", branch:"GREATER GHANA" },
  "Hassan.MK0015": { pin:"8815", status:"ACTIVE", name:"Hassan Abubakar",  role:"REP", branch:"GREATER GHANA" },
  "Mary.MK0016": { pin:"1316", status:"ACTIVE", name:"Mary Denyi",  role:"REP", branch:"GREATER GHANA" },
  "Grace.MK0017": { pin:"5517", status:"ACTIVE", name:"Richard Kudufia",  role:"REP", branch:"GREATER GHANA" },

  // CENTRAL GHANA BRANCH
  "Maxwell.MK0018": { pin:"1318", status:"ACTIVE", name:"Maxwell Peprah",  role:"REP", branch:"CENTRAL GHANA" },
  "Cyril.MK0019": { pin:"3319", status:"ACTIVE", name:"Cyril Godwin",  role:"REP", branch:"CENTRAL GHANA" },
  "Emma.MK0020": { pin:"5520", status:"ACTIVE", name:"Arthur Emmanuel",  role:"REP", branch:"CENTRAL GHANA" },
  "Nadia.MK0021": { pin:"1421", status:"ACTIVE", name:"Nadia Addo",  role:"REP", branch:"CENTRAL GHANA" },
  "Aikins.MK0022": { pin:"1122", status:"ACTIVE", name:"Aikins Elizabeth",  role:"REP", branch:"CENTRAL GHANA" },
  "Jemima.MK0023": { pin:"1023", status:"ACTIVE", name:"Jemima Nyarko",  role:"REP", branch:"CENTRAL GHANA" },

  // UPPER GHANA BRANCH
  "Jackline.MK0027": { pin:"1027", status:"ACTIVE", name:"Jackline",  role:"REP", branch:"UPPER GHANA" },
  "Gabriel.MK0029": { pin:"7729", status:"ACTIVE", name:"Gabriel",  role:"REP", branch:"UPPER GHANA" },
  "Jakon.MK0031": { pin:"1031", status:"ACTIVE", name:"Jakon",  role:"REP", branch:"UPPER GHANA" },
  "Collins.MK0032": { pin:"1732", status:"ACTIVE", name:"Collins",  role:"REP", branch:"UPPER GHANA" },
  "Cynthia.MK0033": { pin:"2533", status:"ACTIVE", name:"Cynthia",  role:"REP", branch:"UPPER GHANA" },
  "Owusu.MK0034": { pin:"1534", status:"ACTIVE", name:"Owusu",  role:"REP", branch:"UPPER GHANA" },
  "Sandra.MK0035": { pin:"2435", status:"ACTIVE", name:"Cosmos",  role:"REP", branch:"UPPER GHANA" }, //cosmos name updated to  sandra 
  "Joan.MK0036": { pin:"2636", status:"ACTIVE", name:"Joan",  role:"REP", branch:"UPPER GHANA" },
  "Ephraim.MK0038": { pin:"553855", status:"ACTIVE", name:"Joan",  role:"REP", branch:"UPPER GHANA" }, //newly added rep Ephraim-upper Ghana
  "Priscila.MK0037": { pin:"1637", status:"ACTIVE", name:"Priscila",  role:"REP", branch:"UPPER GHANA" },

  // NORTHERN GHANA BRANCH (NEW — split out of Upper Ghana Jul 26, 2026)
  "Ayamga.MK0024": { pin:"1924", status:"ACTIVE", name:"Ayamga",  role:"REP", branch:"NORTHERN GHANA" }, //sandra name updated to ayamga
  "Ibrahim.MK0025": { pin:"9925", status:"ACTIVE", name:"Ibrahim",  role:"REP", branch:"NORTHERN GHANA" },
  "Dramani.MK0026": { pin:"4426", status:"ACTIVE", name:"Dramani",  role:"REP", branch:"NORTHERN GHANA" },
  "Abdul.MK0028": { pin:"1128", status:"ACTIVE", name:"Abdul",  role:"REP", branch:"NORTHERN GHANA" },
  "Eugene.MK0030": { pin:"1130", status:"ACTIVE", name:"Eugene",  role:"REP", branch:"NORTHERN GHANA" }, // albert (accountant UG's bro )left and now handing over things to eugene hence the chnage of name .. 
 
  // GENERAL — not tied to any branch, can register schools from anywhere.
  // Invoices from these reps use the "HQ" code (BBEK/HQSEPT/0001, etc.)
  "Eunice.SC001": { pin:"5501", status:"ACTIVE", name:"Eunice Tegbe", role:"SECRETARY", branch:"GENERAL" },
  "Sarah.SC002": { pin:"1902", status:"ACTIVE", name:"Sarah Hammond", role:"SECRETARY", branch:"GENERAL" },
  "Gifty.SC003": { pin:"7703", status:"ACTIVE", name:"Gifty", role:"SECRETARY", branch:"GENERAL" },
  "Adepa.SC004": { pin:"1104", status:"ACTIVE", name:"Adepa Ampomaa", role:"SECRETARY", branch:"GENERAL" },
  "Ampomaa.SC005": { pin:"1105", status:"ACTIVE", name:"Sarah Ampomaa", role:"SECRETARY", branch:"GENERAL" },

  "MD": { pin:"2201", status:"ACTIVE", name:"Francis ", role:"ADMIN", branch:"GENERAL" },
  "REP003": { pin:"9999", status:"ACTIVE", name:"Kwame", branch:"GENERAL" }

  
};



const EDITORS = [
  "henrydadzie007@gmail.com",
  "arhin.kingsley1@gmail.com",
  "w3stsidetm@gmail.com",

];


function cleanValue(val){
  return val === null || val === undefined ? "" : String(val).trim();
}

function normalizePhone(val){
  let digits = String(val || "").replace(/\D/g, "");

  // Ghana format 
  if(digits.length === 9){
    digits = "0" + digits; 
  }

  if(digits.startsWith("233") && digits.length === 12){
    digits = "0" + digits.slice(3);
  }

  return digits;
}



function extractRepCode_(repIdStr){
  const str = String(repIdStr || "").trim();
  if(!str) return "";
  const dotIdx = str.lastIndexOf(".");
  return (dotIdx !== -1 ? str.slice(dotIdx + 1) : str).toUpperCase();
}



function getBranchForRep(repId){
  const rep = REPS[repId];
  if(!rep) return "GENERAL";
  return rep.branch || "GENERAL";
}


function getOrCreateIdListSheet(ss){
  let sheet = ss.getSheetByName(ID_LIST_SHEET_NAME);
  if(sheet) return sheet;

  sheet = ss.insertSheet(ID_LIST_SHEET_NAME);
  const headers = ["School ID", "School Name", "Location", "Contact", "Region", "Branch", "Registered By (Rep ID)", "Date Registered", "Exam"];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  formatIdListSheet_(sheet);
  return sheet;
}

function getOrCreatePendingRegionSheet(ss){
  let sheet = ss.getSheetByName(PENDING_REGION_SHEET_NAME);
  if(sheet) return sheet;

  sheet = ss.insertSheet(PENDING_REGION_SHEET_NAME);
  const headers = ["School ID", "School Name", "Location", "Contact", "Registered By (Rep ID)", "Date Registered"];
  sheet.getRange(1, 1, 1, headers.length)
    .setValues([headers])
    .setFontWeight("bold")
    .setBackground("black")
    .setFontColor("white")
    .setHorizontalAlignment("center");
  sheet.setFrozenRows(1);
  for(let col = 1; col <= headers.length; col++){
    sheet.autoResizeColumn(col);
  }
  return sheet;
}

function migrateAddExamColumnToIdList(){
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = getOrCreateIdListSheet(ss);
  const header = sheet.getRange(1, 9).getValue();
  if(header !== "Exam"){
    sheet.getRange(1, 9).setValue("Exam")
      .setFontWeight("bold").setBackground("black")
      .setFontColor("white").setHorizontalAlignment("center");
  }
  formatIdListSheet_(sheet);
  Logger.log("Exam column ready on ID LIST.");
}

function formatIdListSheet_(sheet){
  const NUM_COLS = 9; // was 8 — added "Exam"
  const headerRange = sheet.getRange(1, 1, 1, NUM_COLS);
  headerRange
    .setFontWeight("bold")
    .setBackground("black")
    .setFontColor("white")
    .setHorizontalAlignment("center")
    .setVerticalAlignment("middle")
    .setFontFamily("Century Gothic");
  sheet.setFrozenRows(1);

  const fullRange = sheet.getRange(1, 1, Math.max(sheet.getMaxRows(), 500), NUM_COLS);
  fullRange.setBorder(true, true, true, true, true, true);
  fullRange.setFontFamily("Century Gothic");

  sheet.setRowHeights(1, Math.max(sheet.getMaxRows(), 500), 27);

  for(let col = 1; col <= NUM_COLS; col++){
    sheet.autoResizeColumn(col);
  }

  const existingFilter = sheet.getFilter();
  if(existingFilter) existingFilter.remove();
  sheet.getRange(1, 1, Math.max(sheet.getLastRow(), 2), NUM_COLS).createFilter();
}

function setupIdListSheet(){
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = getOrCreateIdListSheet(ss);
  formatIdListSheet_(sheet);
  Logger.log("ID LIST sheet ready.");
}

function generateUniqueSchoolId(regionCode, idListSheet){
  const lastRow = idListSheet.getLastRow();
  const existingIds = lastRow > 1
    ? idListSheet.getRange(2, 1, lastRow - 1, 1).getValues().flat().map(String)
    : [];

  let id;
  let attempts = 0;
  do{
    const rand = Math.floor(10000 + Math.random() * 90000); // 5-digit
    id = SCHOOL_ID_PREFIX + (regionCode || "") + rand;
    attempts++;
  } while(existingIds.indexOf(id) !== -1 && attempts < 50);

  return id;
}

function getOrCreateSchoolId(schoolNameUpper, regionRaw, location, phone, repId, idListSheet){
  const lastRow = idListSheet.getLastRow();

  if(lastRow > 1){
    const data = idListSheet.getRange(2, 1, lastRow - 1, 2).getValues();
    for(let i = 0; i < data.length; i++){
      if(String(data[i][1]).trim().toUpperCase() === schoolNameUpper){
        return { id: String(data[i][0]), isNew: false };
      }
    }
  }

  const regionKey = String(regionRaw || "").trim().toUpperCase();
  const regionCode = REGION_CODES[regionKey] || null;

  const newId = generateUniqueSchoolId(regionCode, idListSheet);
  const branch = getBranchForRep(repId);


  idListSheet.appendRow([
    newId,
    schoolNameUpper,
    location,
    phone,
    regionCode ? regionKey : "UNKNOWN",
    branch,
    repId,
    new Date(),
    CURRENT_EXAM_LABEL
  ]);

  if(!regionCode){
    const ss = idListSheet.getParent();
    const pendingSheet = getOrCreatePendingRegionSheet(ss);
    pendingSheet.appendRow([newId, schoolNameUpper, location, phone, repId, new Date()]);
  }

  return { id: newId, isNew: true };
}

function updateIdListContact_(schoolId, location, phone, idListSheet){
  const lastRow = idListSheet.getLastRow();
  if(lastRow < 2) return;
  const ids = idListSheet.getRange(2, 1, lastRow - 1, 1).getValues();
  for(let i = 0; i < ids.length; i++){
    if(String(ids[i][0]).trim() === String(schoolId).trim()){
      idListSheet.getRange(i + 2, 3, 1, 2).setValues([[location, phone]]);
      return;
    }
  }
}



function fixSchoolRegion(oldSchoolId, newRegionFullName){
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const idListSheet = getOrCreateIdListSheet(ss);
  const pendingSheet = getOrCreatePendingRegionSheet(ss);
  const salesSheet = ss.getSheetByName("sales");
  const editsSheet = ss.getSheetByName("edits");
  const logSheet = ss.getSheetByName("logs");

  const regionKey = String(newRegionFullName || "").trim().toUpperCase();
  const regionCode = REGION_CODES[regionKey];

  if(!regionCode){
    Logger.log('Unknown region name "' + newRegionFullName + '". Check spelling against REGION_CODES.');
    return;
  }

  const idData = idListSheet.getDataRange().getValues();
  let idRow = -1;
  for(let i = 1; i < idData.length; i++){
    if(String(idData[i][0]).trim() === String(oldSchoolId).trim()){
      idRow = i + 1;
      break;
    }
  }
  if(idRow === -1){
    Logger.log("School ID not found in ID LIST: " + oldSchoolId);
    return;
  }

  const newId = generateUniqueSchoolId(regionCode, idListSheet);

  idListSheet.getRange(idRow, 1).setValue(newId);
  idListSheet.getRange(idRow, 5).setValue(regionKey);

  const salesData = salesSheet.getDataRange().getValues();
  let salesFixed = 0;
  for(let i = 1; i < salesData.length; i++){
    if(String(salesData[i][5]).trim() === String(oldSchoolId).trim()){
      salesSheet.getRange(i + 1, 6).setValue(newId);
      salesSheet.getRange(i + 1, 4).setValue(regionKey);
      salesFixed++;
    }
  }

  const editsData = editsSheet.getDataRange().getValues();
  let editsFixed = 0;
  for(let i = 1; i < editsData.length; i++){
    if(String(editsData[i][3]).trim() === String(oldSchoolId).trim()){
      editsSheet.getRange(i + 1, 4).setValue(newId);
      editsFixed++;
    }
  }

  const pendingData = pendingSheet.getDataRange().getValues();
  for(let i = pendingData.length - 1; i >= 1; i--){
    if(String(pendingData[i][0]).trim() === String(oldSchoolId).trim()){
      pendingSheet.deleteRow(i + 1);
    }
  }

  logSheet.appendRow([new Date(), "SCHOOL_ID_FIXED", "SYSTEM",
    oldSchoolId + " -> " + newId + " (" + regionKey + ") | sales rows fixed: " + salesFixed + " | edits rows fixed: " + editsFixed]);

  Logger.log("Done: " + oldSchoolId + " -> " + newId + " | sales rows fixed: " + salesFixed + " | edits rows fixed: " + editsFixed);
}


function doPost(e){
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const salesSheet = ss.getSheetByName("sales");
  const logSheet   = ss.getSheetByName("logs");
  const editsSheet = ss.getSheetByName("edits");
  const idListSheet = getOrCreateIdListSheet(ss);

  let data;

  try {
    if (e.parameter && e.parameter.data) {
      data = JSON.parse(e.parameter.data);
    } else {
      data = JSON.parse(e.postData.contents);
    }
  } catch (err) {
    return json({status:"error", message:"Malformed request"});
  }

  try {

    if(data.action === "login"){
      return login(data, logSheet);
    }

    if(data.action === "submit"){
      return submitEnrollment(data, salesSheet, logSheet, editsSheet, idListSheet);
    }

    if(data.action === "download"){
      return downloadReport(data, salesSheet, editsSheet);
    }

    if(data.action === "getHistory"){
      return getHistory(data, salesSheet);
    }

    if(data.action === "schoolSuggest"){
      return schoolSuggest(data, salesSheet);
    }

  
    if(data.action === "schoolHistory"){
      return repSchoolHistory(data, salesSheet);
    }

   if(data.action === "checkBalance"){
  return checkSchoolBalance(data);
}
if(data.action === "checkInvoice"){
  return checkInvoiceStatus(data, salesSheet);
}
return json({status:"no_action"});

  } catch(err){
    try{
      logSheet.appendRow([new Date(), "CRASH", "SYSTEM", (data.action || "unknown") + ": " + err.toString()]);
    }catch(logErr){
    }
    return json({status:"error", message:"Something went wrong. Please try again."});
  }
}


function doGet(e){

  function logDoGet(msg){
    try{
      SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName("logs")
        .appendRow([new Date(), "DOGET_INVOICE", "SYSTEM", msg]);
    }catch(logErr){}
  }

  try{
    if(e && e.parameter && e.parameter.action === "invoice" && e.parameter.fileId){

      const fileId = e.parameter.fileId;
      const file = DriveApp.getFileById(fileId);
      const blob = file.getBlob();
      const size = blob.getBytes().length;

      if(size === 0){
        logDoGet("Blob is EMPTY for fileId=" + fileId + " — serving fallback message instead of a broken file.");
        return ContentService.createTextOutput("This invoice file appears to be empty or corrupted. Please contact support.");
      }

      return blob.setName(file.getName());
    }

    return ContentService.createTextOutput("Not found");

  }catch(err){
    logDoGet("ERROR for fileId=" + (e && e.parameter ? e.parameter.fileId : "unknown") + ": " + err.toString());
    return ContentService.createTextOutput("Invoice not found or no longer available.");
  }
}



const SESSION_KEY_PREFIX = "sess_";
const SESSION_TTL_MS = 21600 * 1000; // 6 hours

function putSession_(token, repId){
  PropertiesService.getScriptProperties()
    .setProperty(SESSION_KEY_PREFIX + token, JSON.stringify({ repId: repId, exp: Date.now() + SESSION_TTL_MS }));
}

function getSessionRepId_(token){
  const props = PropertiesService.getScriptProperties();
  const raw = props.getProperty(SESSION_KEY_PREFIX + token);
  if(!raw) return null;
  try{
    const data = JSON.parse(raw);
    if(Date.now() > data.exp){
      props.deleteProperty(SESSION_KEY_PREFIX + token);
      return null;
    }
    return data.repId;
  }catch(err){
    props.deleteProperty(SESSION_KEY_PREFIX + token);
    return null;
  }
}

function removeSession_(token){
  PropertiesService.getScriptProperties().deleteProperty(SESSION_KEY_PREFIX + token);
}


function authenticate(token){
  if(!token) return null;

  const repId = getSessionRepId_(token);
  if(!repId) return null;

  const rep = REPS[repId];

  if(!rep || rep.status !== "ACTIVE"){
    removeSession_(token);
    return "revoked";
  }

  return { repId: repId, role: rep.role };
}


function login(data, logSheet){

  const cache = CacheService.getScriptCache();
  const repId = data.repId;


  if(!repId){
    return json({status:"error"});
  }

  const lockKey = "lock_" + repId;
  const failKey = "fail_" + repId;


  if(cache.get(lockKey)){
    logSheet.appendRow([new Date(), "LOGIN_BLOCKED", repId, "Attempt while locked out"]);
    return json({status:"locked"});
  }

  const rep = REPS[repId];

  if(rep && rep.pin === data.pin && rep.status === "ACTIVE"){

      const token = Utilities.getUuid();
    putSession_(token, repId);
    cache.remove(failKey);

    logSheet.appendRow([new Date(), "LOGIN", repId, "Successful login"]);

    return json({status:"ok", token, role: rep.role});
  }

  const fails = Number(cache.get(failKey) || 0) + 1;
  cache.put(failKey, String(fails), LOGIN_LOCK_SECONDS);

  if(fails >= LOGIN_MAX_FAILS){
    cache.put(lockKey, "1", LOGIN_LOCK_SECONDS);
    logSheet.appendRow([new Date(), "LOGIN_LOCKED", repId, fails + " failed attempts — locked " + (LOGIN_LOCK_SECONDS/60) + " min"]);
    return json({status:"locked"});
  }

  logSheet.appendRow([new Date(), "LOGIN_FAILED", repId, "Invalid credentials (" + fails + "/" + LOGIN_MAX_FAILS + ")"]);

  return json({status:"error"});
}



function mapLanguage(langStr){

  if(!langStr) return "";

  const map = {
    "Asante Twi": "AST",
    "Akuapem Twi": "AKT"
  };

  return langStr.split(",").map(part => {

    let match = part.match(/^(.+?)(\(\d+\))?$/);

    if(!match) return part;

    let name = match[1].trim();
    let count = match[2] || "";

    let short = map[name] || name;

    return short + count;

  }).join(", ");
}


function toArkeselPhone(localPhone){
  const digits = normalizePhone(localPhone);
  if(!/^0[0-9]{9}$/.test(digits)) return null;
  return "+233" + digits.slice(1);
}

function shortenUrl(longUrl){
  for(let attempt = 1; attempt <= 2; attempt++){
    try{
      const res = UrlFetchApp.fetch(
        "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(longUrl),
        { muteHttpExceptions: true }
      );
      const text = res.getContentText().trim();
      if(res.getResponseCode() === 200 && text.indexOf("http") === 0){
        return text;
      }
      if(attempt === 2){
        try{
          SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName("logs")
            .appendRow([new Date(), "SHORTEN_URL_FAILED", "SYSTEM", "TinyURL said: " + text + " | url: " + longUrl]);
        }catch(logErr){}
      }
    }catch(err){
      if(attempt === 2){
        try{
          SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName("logs")
            .appendRow([new Date(), "SHORTEN_URL_FAILED", "SYSTEM", err.toString() + " | url: " + longUrl]);
        }catch(logErr){}
      }
    }
    Utilities.sleep(400);
  }
  return longUrl;
}


function buildSmsMessage(school, amount, invoiceShortUrl){
  const template = (s) =>
    `Dear ${s}\nYour registration for ${EXAM_NAME} is successful!\nTotal Bill: ${formatGHS(amount)}\nPAY VIA ${COMPANY_MOMO_LINES[0]} | ${COMPANY_MOMO_LINES[1]}\nInvoice: ${invoiceShortUrl}`;

  let msg = template(school);
  let trimmedSchool = school;

 while(msg.length > 459 && trimmedSchool.length > 5){
    trimmedSchool = trimmedSchool.slice(0, trimmedSchool.length - 4) + "...";
    msg = template(trimmedSchool);
  }

  return msg;
}


function buildSmsMessageUpdate(school, amount, invoiceShortUrl){
  const template = (s) =>
    `Dear ${s}\nYour registration for ${EXAM_NAME} has been updated.\nNew Total Bill: ${formatGHS(amount)}\nPAY VIA ${COMPANY_MOMO_LINES[0]} | ${COMPANY_MOMO_LINES[1]}\nInvoice: ${invoiceShortUrl}`;

  let msg = template(school);
  let trimmedSchool = school;

  while(msg.length > 459 && trimmedSchool.length > 5){
    trimmedSchool = trimmedSchool.slice(0, trimmedSchool.length - 4) + "...";
    msg = template(trimmedSchool);
  }

  return msg;
}


function sendArkeselSms(phoneE164, message){
  try{
    const res = UrlFetchApp.fetch(ARKESEL_SMS_URL, {
      method: "post",
      contentType: "application/json",
      headers: { "api-key": ARKESEL_API_KEY },
      payload: JSON.stringify({
        sender: SMS_SENDER_ID,
        message: message,
        recipients: [phoneE164]
      }),
      muteHttpExceptions: true
    });

    const code = res.getResponseCode();
    const body = res.getContentText();

    if(code === 200){
      try{
        const parsed = JSON.parse(body);
        if(parsed.status === "success"){
          return { success: true, detail: body };
        }
      }catch(parseErr){
      }
    }

    return { success: false, detail: "HTTP " + code + ": " + body };

  }catch(err){
    return { success: false, detail: err.toString() };
  }
}


function sendWhatsAppInvoice(phoneE164, school, amount, pdfDirectUrl){
  if(!WHATSAPP_ENABLED){
    return { success: false, status: "NOT_CONFIGURED", detail: "WhatsApp integration not yet connected" };
  }
  if(!pdfDirectUrl){
    return { success: false, status: "FAILED", detail: "No PDF URL available yet" };
  }

  try{
    const caption = `Dear ${school}, your ${EXAM_NAME} invoice.\nTotal: ${formatGHS(amount)}\nPay via ${COMPANY_MOMO_LINES[0]} | ${COMPANY_MOMO_LINES[1]}`;

    const res = UrlFetchApp.fetch(ARKESEL_WHATSAPP_ENDPOINT, {
      method: "post",
      contentType: "application/json",
      headers: { "api-key": ARKESEL_WHATSAPP_API_KEY },
      payload: JSON.stringify({
        recipient: phoneE164,
        type: "document",
        document: {
          link: pdfDirectUrl,
          filename: school + " - Invoice.pdf",
          caption: caption
        }
      }),
      muteHttpExceptions: true
    });

    const code = res.getResponseCode();
    const body = res.getContentText();

    if(code === 200){
      return { success: true, status: "SENT", detail: body };
    }
    return { success: false, status: "FAILED", detail: "HTTP " + code + ": " + body };

  }catch(err){
    return { success: false, status: "FAILED", detail: err.toString() };
  }
}

function getOrCreateInvoicesFolder(branchCode){
  const parentIter = DriveApp.getFoldersByName(INVOICES_FOLDER_NAME);
  const parent = parentIter.hasNext() ? parentIter.next() : DriveApp.createFolder(INVOICES_FOLDER_NAME);

  const subName = BRANCH_FOLDER_NAMES[branchCode] || branchCode;
  const subIter = parent.getFoldersByName(subName);
  if(subIter.hasNext()) return subIter.next();
  return parent.createFolder(subName);
}


const INVOICE_LOGO_BASE64 = PropertiesService.getScriptProperties().getProperty("INVOICE_LOGO_BASE64") || "";
const INVOICE_SIGNATURE_BASE64 = PropertiesService.getScriptProperties().getProperty("INVOICE_SIGNATURE_BASE64") || "";
const BLANK_LETTER_TEMPLATE_ID = PropertiesService.getScriptProperties().getProperty("BLANK_LETTER_TEMPLATE_ID") || "";


const COMPANY_BANKS = [
  ["GCB", "Tesano", "1761180003522"],
  ["CBG", "Apenkwa", "17619676400001"],
  ["ADB", "Accra Newtown", "1201000003976201"]
];

const INVOICE_PREFIX = "BBEK"; 


// ===== SEPTEMBER MAIN SHEET (balance lookups) =====
const SEPTEMBER_MAIN_SHEET_ID   = "17otwSt-AccsatYAv8aeZA9a91672Vq4NL_PbNzaG7mY";
const SEPTEMBER_MAIN_SHEET_TAB  = "MASTER SHEET";
const SEPTEMBER_MAIN_SHEET_EXAM_LABEL = "SEPT"; 

// ===== ID LIST — tags newly-created school IDs with the exam they were made in =====
const CURRENT_EXAM_LABEL = "OCTOBER";


function nextInvoiceSequence_(branchCode){
  const props = PropertiesService.getScriptProperties();
  const key = "invoice_seq_" + branchCode + "_" + EXAM_MONTH;
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try{
    const seq = Number(props.getProperty(key) || "0") + 1;
    props.setProperty(key, String(seq));
    return seq;
  } finally {
    lock.releaseLock();
  }
}

function buildInvoiceNumber(branchCode){
  const seq = nextInvoiceSequence_(branchCode);
  return INVOICE_PREFIX + "/" + branchCode + EXAM_MONTH + "/" + String(seq).padStart(4, "0");
}


function numberToWordsGHS_(amount){
  const num = Number(amount) || 0;
  const cedis = Math.floor(num);
  const pesewas = Math.round((num - cedis) * 100);

  const ones = ["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten",
    "Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"];
  const tens = ["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];

  function chunk(n){
    if(n === 0) return "";
    if(n < 20) return ones[n] + " ";
    if(n < 100) return tens[Math.floor(n/10)] + " " + chunk(n % 10);
    return ones[Math.floor(n/100)] + " Hundred " + chunk(n % 100);
  }

  function full(n){
    if(n === 0) return "Zero";
    let words = "";
    const million = Math.floor(n / 1000000);
    const thousand = Math.floor((n % 1000000) / 1000);
    const rest = n % 1000;
    if(million) words += chunk(million) + "Million ";
    if(thousand) words += chunk(thousand) + "Thousand ";
    if(rest) words += chunk(rest);
    return words.trim();
  }

  let result = full(cedis) + " Ghana Cedis";
  if(pesewas > 0) result += " and " + full(pesewas) + " Pesewas";
  return result + " Only";
}



function generateInvoiceImage(invoiceId, school, location, region, phone, repId, packageOption, b9Count, totalBill){
  let presentation = null;

  function safe(fn){
    try{ fn(); }catch(err){}
  }

  try{
    const branchName = getBranchForRep(repId);
    const branchCode = BRANCH_CODES[branchName] || "HQ";
    const invoiceNumber = buildInvoiceNumber(branchCode);
    const todayStr = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "dd - MM - yyyy");

    const unitPrice = PACKAGE_PRICES[packageOption];
    const itemAmount = b9Count * unitPrice;

 if(!BLANK_LETTER_TEMPLATE_ID){
      throw new Error("BLANK_LETTER_TEMPLATE_ID not set — run runSetBlankTemplate() once first.");
    }

    const copiedFile = DriveApp.getFileById(BLANK_LETTER_TEMPLATE_ID)
      .makeCopy("TEMP_Invoice_" + invoiceId);
    presentation = SlidesApp.openById(copiedFile.getId());
    const slide = presentation.getSlides()[0];
    slide.getPageElements().forEach(function(pe){ try{ pe.remove(); }catch(err){} });

    const bgFileId = PropertiesService.getScriptProperties().getProperty("INVOICE_BACKGROUND_FILE_ID");
    if(!bgFileId){
      throw new Error("INVOICE_BACKGROUND_FILE_ID not set — run setInvoiceBackgroundFileId_('...') first.");
    }
    const bgBlob = DriveApp.getFileById(bgFileId).getBlob();
    slide.insertImage(bgBlob, 0, 0, 612, 792);



   const invoiceToBox = slide.insertTextBox(
      school.toUpperCase() + "\n" + location.toUpperCase() + "\n" + (region || ""),
      38, 150, 220, 55
    );
    safe(function(){ invoiceToBox.getText().getTextStyle().setFontSize(11).setForegroundColor("#000000"); });

    const invNumBox = slide.insertTextBox(invoiceNumber, 312, 163, 118, 24);
    safe(function(){ invNumBox.getText().getTextStyle().setFontSize(10).setForegroundColor("#000000"); });

    const dateBox = slide.insertTextBox(todayStr, 470, 163, 95, 24);
    safe(function(){ dateBox.getText().getTextStyle().setFontSize(10).setForegroundColor("#000000"); });
const qtyBox = slide.insertTextBox(String(b9Count), 375, 300, 64, 28);
safe(function(){
  qtyBox.getText().getTextStyle().setFontSize(9).setForegroundColor("#000000");
  qtyBox.getText().getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
  qtyBox.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE);
});

const unitPriceBox = slide.insertTextBox(unitPrice.toFixed(2), 448, 300, 60, 28);
safe(function(){
  unitPriceBox.getText().getTextStyle().setFontSize(9).setForegroundColor("#000000");
  unitPriceBox.getText().getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
  unitPriceBox.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE);
});

const itemTotalBox = slide.insertTextBox(itemAmount.toFixed(2), 516, 300, 64, 28);
safe(function(){
  itemTotalBox.getText().getTextStyle().setFontSize(9).setForegroundColor("#000000");
  itemTotalBox.getText().getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
  itemTotalBox.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE);
});
    const subtotalBox = slide.insertTextBox(formatGHS(itemAmount), 440, 388, 135, 16);
safe(function(){
  subtotalBox.getText().getTextStyle().setFontSize(9).setForegroundColor("#000000");
  subtotalBox.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE);
});

const deliveryBox = slide.insertTextBox(formatGHS(DELIVERY_FEE), 452, 408, 123, 16);
safe(function(){
  deliveryBox.getText().getTextStyle().setFontSize(9).setForegroundColor("#000000");
  deliveryBox.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE);
});

const grandTotalBox = slide.insertTextBox(formatGHS(totalBill), 470, 456, 105, 18);
safe(function(){
  grandTotalBox.getText().getTextStyle().setFontSize(12).setBold(true).setForegroundColor("#cc0000");
  grandTotalBox.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE);
});

    const wordsBox = slide.insertTextBox(numberToWordsGHS_(totalBill), 375, 500, 206, 58);
    safe(function(){ wordsBox.getText().getTextStyle().setFontSize(9).setForegroundColor("#000000"); });

    presentation.saveAndClose();

    const presentationId = presentation.getId();
    const exportUrl = "https://docs.google.com/presentation/d/" + presentationId + "/export/pdf";
    const pdfResp = UrlFetchApp.fetch(exportUrl, {
      headers: { Authorization: "Bearer " + ScriptApp.getOAuthToken() },
      muteHttpExceptions: true
    });

    if(pdfResp.getResponseCode() !== 200){
      throw new Error("PDF export failed: HTTP " + pdfResp.getResponseCode());
    }

    const pdfBlob = pdfResp.getBlob().setName("Invoice_" + invoiceId + "_" + school + ".pdf");
    const folder = getOrCreateInvoicesFolder(branchCode);
    const pdfFile = folder.createFile(pdfBlob);
    pdfFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    const directUrl = "https://drive.google.com/file/d/" + pdfFile.getId() + "/view";

    DriveApp.getFileById(presentationId).setTrashed(true);
    return { url: directUrl, fileId: pdfFile.getId(), invoiceNumber: invoiceNumber };

  }catch(err){
    if(presentation){
      try{ DriveApp.getFileById(presentation.getId()).setTrashed(true); }catch(cleanupErr){}
    }
    try{
      SpreadsheetApp.openById(SPREADSHEET_ID)
        .getSheetByName("logs")
        .appendRow([new Date(), "INVOICE_IMAGE_GEN_FAILED", repId || "SYSTEM", (school || "") + ": " + err.toString()]);
    }catch(logErr){}
    return null;
  }
}

function buildInvoiceTemplateFromScratch(){
 const EMU_PER_POINT = 12700;
  const rawPresentation = Slides.Presentations.create({
    title: "BBEK Invoice Template"
  });

  Slides.Presentations.batchUpdate({
    requests: [{
      updatePageSize: {
        pageSize: {
          width:  { magnitude: 612 * EMU_PER_POINT, unit: "EMU" },
          height: { magnitude: 792 * EMU_PER_POINT, unit: "EMU" }
        }
      }
    }]
  }, rawPresentation.presentationId);

  const pres = SlidesApp.openById(rawPresentation.presentationId);

  const slide = pres.getSlides()[0];
  slide.getPageElements().forEach(function(pe){ try{ pe.remove(); }catch(e){} });

  const RED = "#cc0000", GRAY = "#f3f3f3", DARKGRAY = "#808080",
        LIGHTBLUE = "#cfe2f3", MIDBLUE = "#9fc5e8", BORDER = "#999999";

  function box(text, x, y, w, h, opts){
    opts = opts || {};
    const tb = slide.insertTextBox(text, x, y, w, h);
    const style = tb.getText().getTextStyle();
    style.setFontSize(opts.size || 10);
    if(opts.bold) style.setBold(true);
    if(opts.italic) style.setItalic(true);
    if(opts.color) style.setForegroundColor(opts.color);
    if(opts.align) tb.getText().getParagraphStyle().setParagraphAlignment(opts.align);
    return tb;
  }

  function rect(x, y, w, h, fill, border){
    const r = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, x, y, w, h);
    r.getFill().setSolidFill(fill || "#ffffff");
    if(border){ r.getBorder().getLineFill().setSolidFill(border); }
    else { r.getBorder().setTransparent(); }
    return r;
  }

  const logoB64 = PropertiesService.getScriptProperties().getProperty("INVOICE_LOGO_BASE64");
  if(logoB64){
    const logoBlob = Utilities.newBlob(Utilities.base64Decode(logoB64), "image/png", "logo.png");
    slide.insertImage(logoBlob, 15, 20, 70, 55);
  }
  box("Best Brain", 95, 30, 200, 20, {size:18, bold:true, color: RED});
  box("Examinations Konsortium ltd.", 95, 52, 260, 20, {size:14, bold:true});

  box("Adjacent Apenkwa Presby Church", 365, 30, 210, 15, {size:10});
  box("bbexaminers@gmail.com", 365, 48, 210, 15, {size:10});
  box("0247448883 - 0248726958", 365, 66, 210, 15, {size:10});

  rect(0, 88, 612, 6, "#000000");

  // ===== INVOICE TO =====
  rect(32, 121, 237, 91, GRAY);
  box("Invoice To:", 40, 126, 100, 16, {bold:true, size:11});
  box("{{SCHOOL_BLOCK}}", 38, 148, 220, 58, {size:11});

  // ===== INVOICE NUMBER / DATE =====
  rect(281, 120, 305, 92, GRAY);
  rect(281, 120, 10, 92, DARKGRAY);
  box("Invoice Number", 315, 124, 100, 16, {bold:true, size:11});
  box("Date", 511, 124, 60, 16, {bold:true, size:11});
  rect(310, 159, 123, 30, "#ffffff", BORDER);
  rect(464, 160, 110, 32, "#ffffff", BORDER);
  box("{{INV_NUM}}", 312, 166, 118, 20, {size:10});
  box("{{DATE}}", 470, 167, 95, 20, {size:10});

  const colWidthsPt = [68, 263, 73, 68, 72];
  const table = slide.insertTable(2, 5, 40, 256, 544, 76);

  const headers = ["Class","Description","Qty","Unit Price\n(GH\u20B5)","Total\n(GH\u20B5)"];
  headers.forEach(function(h, i){
    const cell = table.getCell(0, i);
    cell.getFill().setSolidFill(LIGHTBLUE);
    cell.getText().setText(h);
    cell.getText().getTextStyle().setFontSize(10).setBold(true);
    cell.getText().getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
  });
  table.getCell(1,0).getText().setText("Basic 9");
  table.getCell(1,1).getText().setText("Akwaaba Mock Examination Materials");
  table.getCell(1,1).getText().getTextStyle().setItalic(true);
  table.getCell(1,2).getText().setText("{{QTY}}");
  table.getCell(1,3).getText().setText("{{UNITPRICE}}");
  table.getCell(1,4).getText().setText("{{ITEMTOTAL}}");
  for(let c = 0; c < 5; c++){ table.getCell(1,c).getText().getTextStyle().setFontSize(9); }



  // PAYMENT METHODS 
  box("Payment Methods:", 45, 382, 150, 16, {bold:true, size:11});
  const payRows = [
    ["Bank","Branch","Account Number"],
    ["Momo","","0248726958"],
    ["Momo","","0247448883"],
    ["Momo","","0249273049"],
    ["GCB","Tesano","1761180003522"],
    ["CBG","Apenkwa","17619676400001"],
    ["ADB","Accra Newtown","1201000003976201"]
  ];
  const payTable = slide.insertTable(payRows.length, 3, 43, 409, 245, 185);
  payRows.forEach(function(row, r){
    row.forEach(function(val, c){
      const cell = payTable.getCell(r, c);
      cell.getText().setText(val);
      if(val){
        cell.getText().getTextStyle().setFontSize(9).setBold(r === 0);
      }
    });
  });

  box("Account Name:\nBest Brain Examinations Konsortium ltd.", 43, 596, 245, 40,
    {size:10, bold:true, color: RED});

  // ===== TOTALS =====
  rect(375, 384, 206, 62, "#ffffff", BORDER);
  box("Sub-Total:", 382, 388, 90, 16, {bold:true, size:10});
  box("{{SUBTOTAL}}", 440, 388, 135, 16, {size:10});
  box("Delivery Fee:", 382, 408, 90, 16, {bold:true, size:10});
  box("{{DELIVERY}}", 452, 408, 123, 16, {size:10});

  rect(375, 452, 206, 28, MIDBLUE);
  box("Grand Total:", 382, 456, 100, 18, {bold:true, size:11});
  box("{{GRANDTOTAL}}", 470, 456, 105, 18, {bold:true, size:12});

  rect(375, 480, 206, 80, GRAY);
  box("Amount in words:", 382, 485, 150, 16, {bold:true, size:10});
  box("{{WORDS}}", 375, 502, 206, 55, {size:9});

  rect(375, 573, 206, 64, GRAY);
  box("At least 80% Advance payment\nbefore delivery", 380, 578, 196, 40,
    {bold:true, size:11, color: RED, align: SlidesApp.ParagraphAlignment.CENTER});

  // ===== FOOTER =====
  const sigB64 = PropertiesService.getScriptProperties().getProperty("INVOICE_SIGNATURE_BASE64");
  if(sigB64){
    const sigBlob = Utilities.newBlob(Utilities.base64Decode(sigB64), "image/png", "sig.png");
    slide.insertImage(sigBlob, 45, 674, 100, 35);
  }
  box("Accountant", 65, 716, 100, 16, {size:10});

  rect(268, 674, 312, 36, GRAY);
  box("Thank you for choosing Best Brain Examination Konsortium.\nWe appreciate your business.",
    272, 678, 305, 32, {size:10, align: SlidesApp.ParagraphAlignment.CENTER});

  pres.saveAndClose();

  const fileId = pres.getId();
  PropertiesService.getScriptProperties().setProperty("INVOICE_TEMPLATE_ID", fileId);
  Logger.log("Template created: https://docs.google.com/presentation/d/" + fileId + "/edit");
  Logger.log("Saved to Script Properties as INVOICE_TEMPLATE_ID.");
  return fileId;
}


function setInvoiceBackgroundFileId_(fileId){
  if(!fileId){
    Logger.log("Pass the Drive file ID, e.g. setInvoiceBackgroundFileId_('1sRC2e_OmE5nXuJ7DmJLI-tb42zQKlp9z')");
    return;
  }
  PropertiesService.getScriptProperties().setProperty("INVOICE_BACKGROUND_FILE_ID", fileId);
  Logger.log("Background template file ID saved.");
}


function setupInvoiceBackground() {
  setInvoiceBackgroundFileId_('1lS7xMzYMq-uHFIuMI_61h0Qn5wO7BeB3');
}

function setupInvoiceTrackingColumns(){
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName("sales");
  const headerRow = sheet.getRange(1, 1, 1, Math.max(sheet.getLastColumn(), 21)).getValues()[0];

  const wantedHeaders = ["InvoiceID", "SMS Status", "SMS Sent Time", "Invoice URL", "WhatsApp Status", "WhatsApp Sent Time"];
  const startCol = 16;

  for(let i = 0; i < wantedHeaders.length; i++){
    const col = startCol + i;
    const current = sheet.getRange(1, col).getValue();
    if(!current){
      sheet.getRange(1, col).setValue(wantedHeaders[i]).setFontWeight("bold").setBackground("#dce3f5");
    }
  }

  Logger.log("Invoice tracking columns ready.");
}



function setupEditsTrackingColumns(){
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName("edits");
  const headerRow = sheet.getRange(1, 1, 1, Math.max(sheet.getLastColumn(), 14)).getValues()[0];

  const wantedHeaders = ["Invoice Reissued?", "SMS Status", "WhatsApp Status", "New Invoice URL"];
  const startCol = 11;

  for(let i = 0; i < wantedHeaders.length; i++){
    const col = startCol + i;
    const current = sheet.getRange(1, col).getValue();
    if(!current){
      sheet.getRange(1, col).setValue(wantedHeaders[i]).setFontWeight("bold").setBackground("#dce3f5");
    }
  }

  Logger.log("Edits tracking columns ready.");
}



const NOTIFY_QUEUE_SHEET_NAME = "notify_queue";

function getOrCreateNotifyQueueSheet_(ss){
  let sheet = ss.getSheetByName(NOTIFY_QUEUE_SHEET_NAME);
  if(sheet) return sheet;
  sheet = ss.insertSheet(NOTIFY_QUEUE_SHEET_NAME);
  sheet.getRange(1, 1, 1, 2).setValues([["QueueID", "Payload"]]);
  sheet.hideSheet();
  return sheet;
}


function queueNotification_(payload){
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const queueSheet = getOrCreateNotifyQueueSheet_(ss);

  try{
    queueSheet.appendRow([Utilities.getUuid(), JSON.stringify(payload)]);
    triggerImmediateQueueProcessing_();
  }catch(err){
    try{
      ss.getSheetByName("logs").appendRow([new Date(), "QUEUE_WRITE_FAILED",
        payload.repId || "SYSTEM", (payload.school || "") + ": " + err.toString()]);
    }catch(logErr){}
  }
}

function triggerImmediateQueueProcessing_(){
  try{
    ScriptApp.newTrigger("processNotificationQueue")
      .timeBased()
      .after(1000)
      .create();
  }catch(err){
    // Trigger quota hit or transient issue — the existing 1-minute recurring
    // trigger from setupNotificationQueueTrigger() still catches it as a fallback.
  }
}



function processNotificationQueue(){
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const queueSheet = ss.getSheetByName(NOTIFY_QUEUE_SHEET_NAME);
  const salesSheet = ss.getSheetByName("sales");
  const editsSheet = ss.getSheetByName("edits");
  const logSheet   = ss.getSheetByName("logs");

  if(!queueSheet) return;

  const lock = LockService.getScriptLock();
  try{
    lock.waitLock(20000);
  }catch(lockErr){
    
    return;
  }

  try{
    const lastRow = queueSheet.getLastRow();
    if(lastRow < 2) return;

    const rows = queueSheet.getRange(2, 1, lastRow - 1, 2).getValues();
    const rowsToDelete = [];

    for(let i = 0; i < rows.length; i++){
      const queueId = rows[i][0];
      if(!queueId) continue;

      let payload;
      try{
        payload = JSON.parse(rows[i][1]);
      }catch(parseErr){
        rowsToDelete.push(i + 2);
        continue;
      }

      try{
        if(payload.type === "NEW"){
          notifySubmission(
            salesSheet, payload.rowIndex, payload.invoiceId, payload.repId,
            payload.school, payload.location, payload.region, payload.phone,
            payload.packageOption, payload.b9Count, payload.totalBill, logSheet
          );
        } else if(payload.type === "EDIT"){
          notifyEditedSubmission(
            salesSheet, payload.rowIndex, payload.invoiceId, payload.repId,
            payload.school, payload.location, payload.region, payload.phone,
            payload.packageOption, payload.b9Count, payload.totalBill, payload.oldTotal,
            logSheet, editsSheet, payload.submissionId, payload.originalSchoolLabel,
            payload.lastEditRowIndex, payload.schoolIdForRow
          );
        }
      }catch(processErr){
        logSheet.appendRow([new Date(), "NOTIFY_QUEUE_FAILED", payload.repId || "SYSTEM",
          (payload.school || "") + ": " + processErr.toString()]);
      }

      rowsToDelete.push(i + 2);
    }

    
    rowsToDelete.sort((a, b) => b - a).forEach(r => queueSheet.deleteRow(r));

  } finally {
    lock.releaseLock();
  }
}


function notifySubmission(salesSheet, rowIndex, invoiceId, repId, school, location, region, phone, packageOption, b9Count, totalBill, logSheet){

  const result = { invoiceUrl: "", smsSent: false, whatsappSent: false, whatsappStatus: "NOT_CONFIGURED" };

    const invoice = generateInvoiceImage(invoiceId, school, location, region, phone, repId, packageOption, b9Count, totalBill);
  const invoiceUrl = invoice ? invoice.url : "";           // Drive viewer link — kept for SMS / manual opening
  const directPdfUrl = invoice ? getInvoiceDirectUrl_(invoice.fileId) : ""; // raw PDF bytes — required for WhatsApp document send
  result.invoiceUrl = invoiceUrl;


  const phoneE164 = toArkeselPhone(phone);
  let smsStatus = "FAILED";
  let smsDetail = "Invalid phone number";

  if(phoneE164){
    const shortLink = invoiceUrl ? shortenUrl(invoiceUrl) : "";
    const smsText = shortLink
      ? buildSmsMessage(school, totalBill, shortLink)
      : `Dear ${school}\nYour registration for ${EXAM_NAME}  is successful!\nTotal Bill: ${formatGHS(totalBill)}\nPAY VIA ${COMPANY_MOMO_LINES[0]} | ${COMPANY_MOMO_LINES[1]}`;

    const smsResult = sendArkeselSms(phoneE164, smsText);
    result.smsSent = smsResult.success;
    smsStatus = smsResult.success ? "SENT" : "FAILED";
    smsDetail = smsResult.detail;
  }

 let whatsappStatus = "NOT_CONFIGURED";
  if(phoneE164 && directPdfUrl){
    const waResult = sendWhatsAppInvoice(phoneE164, school, totalBill, directPdfUrl);
    result.whatsappSent = waResult.success;
    whatsappStatus = waResult.status;
  }
  result.whatsappStatus = whatsappStatus;

  const now = new Date();
  salesSheet.getRange(rowIndex, 16, 1, 6).setValues([[
    invoiceId,
    smsStatus,
    now,
    invoiceUrl,
    whatsappStatus,
    (whatsappStatus === "SENT") ? now : ""
  ]]);

  logSheet.appendRow([
    now, "NOTIFY_SUBMISSION", repId,
    school + " | SMS:" + smsStatus + " | WhatsApp:" + whatsappStatus +
    (smsStatus === "FAILED" ? " | SMS error: " + smsDetail : "")
  ]);

  return result;
}



function notifyEditedSubmission(salesSheet, rowIndex, invoiceId, repId, school, location, region, phone, packageOption, b9Count, totalBill, oldTotal, logSheet, editsSheet, submissionId, originalSchoolLabel, lastEditRowIndex, schoolIdForRow){

  const result = { invoiceUrl: "", smsSent: false, whatsappSent: false, whatsappStatus: "NOT_CONFIGURED" };

    const invoice = generateInvoiceImage(invoiceId, school, location, region, phone, repId, packageOption, b9Count, totalBill);
  const invoiceUrl = invoice ? invoice.url : "";           // Drive viewer link — kept for SMS / manual opening
  const directPdfUrl = invoice ? getInvoiceDirectUrl_(invoice.fileId) : ""; // raw PDF bytes — required for WhatsApp document send
  result.invoiceUrl = invoiceUrl;

  const phoneE164 = toArkeselPhone(phone);
  let smsStatus = "FAILED";
  let smsDetail = "Invalid phone number";

  if(phoneE164){
    const shortLink = invoiceUrl ? shortenUrl(invoiceUrl) : "";
    const smsText = shortLink
      ? buildSmsMessageUpdate(school, totalBill, shortLink)
      : `Dear ${school}\nYour registration for ${EXAM_NAME} has been updated.\nNew Total Bill: ${formatGHS(totalBill)}\nPAY VIA ${COMPANY_MOMO_LINES[0]} | ${COMPANY_MOMO_LINES[1]}`;

    const smsResult = sendArkeselSms(phoneE164, smsText);
    result.smsSent = smsResult.success;
    smsStatus = smsResult.success ? "SENT" : "FAILED";
    smsDetail = smsResult.detail;
  }

  let whatsappStatus = "NOT_CONFIGURED";
  if(phoneE164 && directPdfUrl){
    const waResult = sendWhatsAppInvoice(phoneE164, school, totalBill, directPdfUrl);
    result.whatsappSent = waResult.success;
    whatsappStatus = waResult.status;
  }
  result.whatsappStatus = whatsappStatus;

  const now = new Date();
  salesSheet.getRange(rowIndex, 16, 1, 6).setValues([[
    invoiceId,
    smsStatus,
    now,
    invoiceUrl,
    whatsappStatus,
    (whatsappStatus === "SENT") ? now : ""
  ]]);

  logSheet.appendRow([
    now, "NOTIFY_EDIT", repId,
    school + " | SMS:" + smsStatus + " | WhatsApp:" + whatsappStatus +
    (smsStatus === "FAILED" ? " | SMS error: " + smsDetail : "")
  ]);

   if(lastEditRowIndex && lastEditRowIndex > 1){
    editsSheet.getRange(lastEditRowIndex, 11, 1, 4).setValues([[
      "YES", smsStatus, whatsappStatus, invoiceUrl
    ]]);
  } else {
    editsSheet.appendRow([
      now, repId, submissionId, schoolIdForRow, originalSchoolLabel,
      "INVOICE_REISSUED",
      formatGHS(oldTotal), formatGHS(totalBill),
      "UNREAD", "",
      "YES", smsStatus, whatsappStatus, invoiceUrl
    ]);
  }

  return result;
}




function submitEnrollment(data, salesSheet, logSheet, editsSheet, idListSheet){


  const lock = LockService.getScriptLock();

  let haveLock = false;
  try {
    lock.waitLock(30000);
    haveLock = true;
  } catch(lockErr){
    logSheet.appendRow([new Date(), "LOCK_TIMEOUT", data.token ? "" : "", "submitEnrollment could not acquire lock"]);
    return json({status:"busy"});
  }

  try {

    const auth = authenticate(data.token);

    if(auth === "revoked"){
      return json({status:"deactivated"});
    }
    if(!auth){
      logSheet.appendRow([new Date(), "AUTH_FAILED", data.repId || "unknown", "submitEnrollment: bad/missing token"]);
      return json({status:"unauthorized"});
    }
    const repId = auth.repId;

    const submissionId = String(data.submissionId || "");
    if(!submissionId || submissionId === "undefined"){
      return json({status:"invalid_submission"});
    }

    const e = data.enrollments || {};
    const b9Count = Number(e.b9) || 0;


    const school = cleanValue(data.school);
    const location = cleanValue(data.location);
    const normalizedPhone = normalizePhone(data.phone);
    const repInfo = REPS[repId];

    if(!school){
      return json({status:"validation_error", message:"School name is required"});
    }
    if(!location){
      return json({status:"validation_error", message:"Location is required"});
    }
    if(!/^0[0-9]{9}$/.test(normalizedPhone)){
      return json({status:"validation_error", message:"Phone must be 10 digits starting with 0"});
    }
    if(repInfo && repInfo.role !== "SECRETARY" && !cleanValue(data.region)){
      return json({status:"validation_error", message:"Region is required"});
    }
    if(b9Count <= 0){
      return json({status:"validation_error", message:"Basic 9 enrollment must be greater than 0"});
    }
    if(!PACKAGE_PRICES.hasOwnProperty(data.packageOption)){
      return json({status:"validation_error", message:"Select a valid package option"});
    }


    const computedTotal = (b9Count * PACKAGE_PRICES[data.packageOption]) + DELIVERY_FEE;

    let existingRow = -1;

    const idColumn = salesSheet
      .getRange(2, 2, Math.max(salesSheet.getLastRow()-1,1), 1)
      .getValues();

    for (let i = 0; i < idColumn.length; i++) {
      if (String(idColumn[i][0]) === submissionId) {
        existingRow = i + 2;
        break;
      }
    }

    let originalTimestamp = new Date();

    if(existingRow !== -1){
      originalTimestamp = salesSheet.getRange(existingRow,1).getValue();
    }

    const schoolUpper = school.toUpperCase();
    let schoolId;

    if(existingRow !== -1){
      const oldRowForId = salesSheet.getRange(existingRow, 1, 1, 14).getValues()[0];
      const oldSchoolUpper = cleanValue(oldRowForId[6]).toUpperCase();
      if(oldSchoolUpper === schoolUpper){
        schoolId = String(oldRowForId[5]);
      } else {
        schoolId = getOrCreateSchoolId(schoolUpper, data.region, location.toUpperCase(), normalizedPhone, repId, idListSheet).id;
      }
    } else {
      schoolId = getOrCreateSchoolId(schoolUpper, data.region, location.toUpperCase(), normalizedPhone, repId, idListSheet).id;
    }
   
    const balanceInfo = lookupSeptemberBalance_(schoolId);
    if(balanceInfo.found && balanceInfo.balance > 0 && data.balanceOverride !== true){
      logSheet.appendRow([new Date(), "BALANCE_BLOCK", repId,
        school + "(" + schoolId + ") | Owed: " + formatGHS(balanceInfo.balance) + " | held pending override"]);
      return json({
        status: "balance_block",
        schoolId: schoolId,
        balance: balanceInfo.balance,
        examLabel: balanceInfo.examLabel
      });
    }

    const mappedLanguage = mapLanguage(data.language) || "";
    const regionUpper = (data.region || "UNKNOWN").toUpperCase();

    const rowData = [
      originalTimestamp,
      submissionId,
      repId,
      regionUpper,
      "MOCK",
      schoolId,
      school.toUpperCase(),
      location.toUpperCase(),
      normalizedPhone,
      b9Count,
      data.packageOption || "",
      mappedLanguage,
      data.french || "",
      computedTotal
    ];

    const columnNames = [
      "Timestamp","SubmissionID","RepID","Region","ExamType",
      "SchoolID","School","Location","Phone","Basic 9","Package","Language",
      "French","TotalBill"
    ];


    let notifyResult = null;
    let billChanged = false;
    let editNotifyResult = null;

    if(existingRow === -1){

      const newRow = salesSheet.getLastRow() + 1;

      let writeSuccess = false;
      let attempts = 0;

      while(!writeSuccess && attempts < 3){

        attempts++;

        salesSheet
          .getRange(newRow,1,1,rowData.length)
          .setValues([rowData]);

        SpreadsheetApp.flush();

        const verify = salesSheet.getRange(newRow,2).getValue();

        if(String(verify) === submissionId){
          writeSuccess = true;
        } else if(attempts < 3){
          Utilities.sleep(300);
        }
      }

      if(!writeSuccess){
        logSheet.appendRow([
          new Date(),
          "WRITE_FAILED_AFTER_RETRY",
          repId,
          submissionId
        ]);
        return json({status:"error"});
      }

      const finder = salesSheet
        .createTextFinder(submissionId)
        .matchEntireCell(true)
        .findAll();

      if(finder.length > 1){
        logSheet.appendRow([
          new Date(),
          "DUPLICATE_ID_DETECTED",
          repId,
          submissionId
        ]);
      }

       logSheet.appendRow([
        new Date(),
        "NEW_SUBMISSION",
        repId,
        data.school + "(" + schoolId + ")"
      ]);

        if(data.balanceOverride){
        salesSheet.getRange(newRow, BALANCE_FLAG_COL)
          .setValue("HAD BALANCE: " + formatGHS(data.balanceAtSubmission || 0) + "   submitted anyway")
          .setBackground("#f4cccc")
          .setFontColor("#990000")
          .setFontWeight("bold");
        logSheet.appendRow([
          new Date(), "BALANCE_OVERRIDE_SUBMITTED", repId,
          data.school + "(" + schoolId + ") | Owed: " + formatGHS(data.balanceAtSubmission || 0)
        ]);

        logBalanceOverride_(salesSheet.getParent(), {
          schoolId: schoolId,
          school: school.toUpperCase(),
          location: location.toUpperCase(),
          phone: normalizedPhone,
          region: regionUpper,
          repId: repId,
          balanceAtSubmission: data.balanceAtSubmission || 0,
          totalBill: computedTotal,
          submissionId: submissionId
        });
      }

      updateStatsForNewSubmission(repId, rowData[0], data.school);
      highlightDuplicateSchools();

const invoiceId = "INV-" + submissionId.slice(-8).toUpperCase();

      if(haveLock){
        lock.releaseLock();
        haveLock = false;
      }

      
      queueNotification_({
        type: "NEW",
        rowIndex: newRow,
        invoiceId: invoiceId,
        repId: repId,
        school: school.toUpperCase(),
        location: location.toUpperCase(),
        region: regionUpper,
        phone: normalizedPhone,
        packageOption: data.packageOption,
        b9Count: b9Count,
        totalBill: computedTotal
      });

      notifyResult = { invoiceUrl:"", smsSent:null, whatsappSent:null, whatsappStatus:"PENDING" };
    }

    else{

      const oldRow = salesSheet
        .getRange(existingRow, 1, 1, rowData.length)
        .getValues()[0];

      const expectedVersion = data.expectedVersion ? String(data.expectedVersion) : "";

      if(expectedVersion){
        const editedTimeCell = salesSheet.getRange(existingRow, 15).getValue();
        const currentVersionSource = editedTimeCell ? editedTimeCell : oldRow[0];
        let currentVersion = "";
        try{
          currentVersion = currentVersionSource instanceof Date
            ? currentVersionSource.toISOString()
            : String(currentVersionSource);
        }catch(verErr){
          currentVersion = String(currentVersionSource);
        }
        if(currentVersion && currentVersion !== expectedVersion){
          logSheet.appendRow([new Date(), "VERSION_MISMATCH", repId,
            submissionId + " | expected=[" + expectedVersion + "] current=[" + currentVersion + "] (edit allowed to proceed)"]);
        }
      }


      const oldTotal     = Number(oldRow[13]) || 0;
      const oldSchool    = cleanValue(oldRow[6]).toUpperCase();
      const oldLocation  = cleanValue(oldRow[7]).toUpperCase();
      const oldPhone     = normalizePhone(oldRow[8]);
      const oldB9Count   = Number(oldRow[9]) || 0;
      const oldPackage   = cleanValue(oldRow[10]);
      const oldLanguage  = cleanValue(oldRow[11]);
      const oldFrench    = cleanValue(oldRow[12]);

      const newSchool    = school.toUpperCase();
      const newLocation  = location.toUpperCase();
      const newPhone     = normalizedPhone;
      const newPackage   = cleanValue(data.packageOption);
      const newLanguage  = cleanValue(mappedLanguage);
      const newFrench    = cleanValue(data.french);

      if(
        oldSchool   !== newSchool   ||
        oldLocation !== newLocation ||
        oldPhone    !== newPhone    ||
        oldB9Count  !== b9Count     ||
        oldPackage  !== newPackage  ||
        oldLanguage !== newLanguage ||
        oldFrench   !== newFrench   ||
        Math.abs(oldTotal - computedTotal) > 0.001
      ){
        billChanged = true;
      }


      logSheet.appendRow([
        new Date(), "DEBUG_BILLCHANGED", repId,
        submissionId +
        " | billChanged=" + billChanged +
        " | school:[" + oldSchool + "]->[" + newSchool + "]" +
        " | location:[" + oldLocation + "]->[" + newLocation + "]" +
        " | phone:[" + oldPhone + "]->[" + newPhone + "]" +
        " | b9:[" + oldB9Count + "]->[" + b9Count + "]" +
        " | pkg:[" + oldPackage + "]->[" + newPackage + "]" +
        " | lang:[" + oldLanguage + "]->[" + newLanguage + "]" +
        " | french:[" + oldFrench + "]->[" + newFrench + "]" +
        " | total:[" + oldTotal + "]->[" + computedTotal + "]"
      ]);

 let hasChanges = false;
      let lastEditRowIndex = -1;

      for(let c=0; c<rowData.length; c++){
        if(columnNames[c] === "Timestamp" || columnNames[c] === "TotalBill") continue;
        let oldVal = oldRow[c];
        let newVal = rowData[c];
        if(columnNames[c] === "Phone"){
          oldVal = normalizePhone(oldVal);
          newVal = normalizePhone(newVal);
        } else {
          oldVal = cleanValue(oldVal);
          newVal = cleanValue(newVal);
        }
        if(oldVal !== newVal){
          hasChanges = true;
          editsSheet.appendRow([
            new Date(), repId, submissionId, schoolId, data.school,
            columnNames[c], oldRow[c], rowData[c],
            "UNREAD", ""
          ]);
          lastEditRowIndex = editsSheet.getLastRow();
        }
      }

      if(!hasChanges){
        logSheet.appendRow([new Date(), "NO_CHANGE", repId, submissionId]);
        return json({status:"no_change"});
      }

      let updateSuccess = false;
      let attempts = 0;

      while(!updateSuccess && attempts < 3){

        attempts++;

        salesSheet
          .getRange(existingRow, 1, 1, rowData.length)
          .setValues([rowData]);

        SpreadsheetApp.flush();

        const verifyId = salesSheet.getRange(existingRow, 2).getValue();

        if(String(verifyId) === String(submissionId)){
          updateSuccess = true;
        } else if(attempts < 3){
          Utilities.sleep(300);
        }
      }

      if(!updateSuccess){
        logSheet.appendRow([
          new Date(),
          "EDIT_WRITE_FAILED_AFTER_RETRY",
          repId,
          submissionId
        ]);
        return json({status:"error"});
      }

        logSheet.appendRow([
        new Date(),
        "EDITED_SUBMISSION",
        repId,
        data.school + "(" + schoolId + ")"
      ]);

           if(data.balanceOverride){
        salesSheet.getRange(existingRow, BALANCE_FLAG_COL)
          .setValue("HAD BALANCE: " + formatGHS(data.balanceAtSubmission || 0) + " — submitted anyway")
          .setBackground("#f4cccc")
          .setFontColor("#990000")
          .setFontWeight("bold");
        logSheet.appendRow([
          new Date(), "BALANCE_OVERRIDE_SUBMITTED", repId,
          data.school + "(" + schoolId + ") | Owed: " + formatGHS(data.balanceAtSubmission || 0)
        ]);

        logBalanceOverride_(salesSheet.getParent(), {
          schoolId: schoolId,
          school: school.toUpperCase(),
          location: location.toUpperCase(),
          phone: normalizedPhone,
          region: regionUpper,
          repId: repId,
          balanceAtSubmission: data.balanceAtSubmission || 0,
          totalBill: computedTotal,
          submissionId: submissionId
        });
      }

      salesSheet.getRange(existingRow, 15).setValue(new Date());

      updateIdListContact_(schoolId, location.toUpperCase(), normalizedPhone, idListSheet);

      highlightDuplicateSchools();

      if(haveLock){
        lock.releaseLock();
        haveLock = false;
      }

  if(billChanged){
        const invoiceId = "INV-" + submissionId.slice(-8).toUpperCase();
        queueNotification_({
          type: "EDIT",
          rowIndex: existingRow,
          invoiceId: invoiceId,
          repId: repId,
          school: school.toUpperCase(),
          location: location.toUpperCase(),
          region: regionUpper,
          phone: normalizedPhone,
          packageOption: data.packageOption,
          b9Count: b9Count,
          totalBill: computedTotal,
          oldTotal: oldTotal,
          submissionId: submissionId,
          originalSchoolLabel: data.school,
          lastEditRowIndex: lastEditRowIndex,
          schoolIdForRow: schoolId
        });
        editNotifyResult = { invoiceUrl:"", smsSent:null, whatsappSent:null, whatsappStatus:"PENDING" };
      }
    }

    return json({
      status:"success",
      submissionId: submissionId,
      schoolId: schoolId,
      isNew: existingRow === -1,
      billChanged: existingRow === -1 ? null : billChanged,
      smsSent: notifyResult ? notifyResult.smsSent : (editNotifyResult ? editNotifyResult.smsSent : null),
      whatsappSent: notifyResult ? notifyResult.whatsappSent : (editNotifyResult ? editNotifyResult.whatsappSent : null),
      whatsappStatus: notifyResult ? notifyResult.whatsappStatus : (editNotifyResult ? editNotifyResult.whatsappStatus : null),
      invoiceUrl: notifyResult ? notifyResult.invoiceUrl : (editNotifyResult ? editNotifyResult.invoiceUrl : null)
    });

  }
  catch(err){

    logSheet.appendRow([
      new Date(),
      "CRASH",
      "SYSTEM",
      err.toString()
    ]);

    return json({status:"error"});
  }
  finally{
    if(haveLock) lock.releaseLock();
  }
}


function json(obj){
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}


function testSheets() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheets = ss.getSheets().map(s => s.getName());
  Logger.log(sheets);
}




function downloadReport(data, salesSheet, editsSheet){
  const auth = authenticate(data.token);
  if(auth === "revoked") return json({status:"deactivated"});
  if(!auth) return json({status:"unauthorized"});
  const repId = auth.repId;

  const from = data.from ? new Date(data.from) : new Date(0);
  const to   = data.to   ? new Date(data.to) : new Date();
  to.setHours(23,59,59,999);

  const sales = salesSheet.getRange(1,1,salesSheet.getLastRow(),14).getValues();

  let filteredSales = [["No.","School ID","School","Location","Phone","Basic 9","Package","Language","French","Total Bill"]];
  let counter = 1;
  for(let i=1;i<sales.length;i++){
    const rowDate = new Date(sales[i][0]);
    if(sales[i][2] === repId && rowDate>=from && rowDate<=to){
      filteredSales.push([
        counter++,
        sales[i][5],sales[i][6],sales[i][7],sales[i][8],
        sales[i][9],sales[i][10],sales[i][11],
        sales[i][12],sales[i][13]
      ]);
    }
  }

  if(filteredSales.length === 1) return json({status:"no_data"});

  const edits = editsSheet.getDataRange().getValues();
  let filteredEdits = [["Timestamp","SubmissionID","School ID","School","Field","Old Value","New Value"]];
  for(let i=1;i<edits.length;i++){
    const rowDate = new Date(edits[i][0]);
    if(edits[i][1] === repId && rowDate>=from && rowDate<=to){
      filteredEdits.push([
        edits[i][0],edits[i][2],edits[i][3],edits[i][4],
        edits[i][5],edits[i][6],edits[i][7]
      ]);
    }
  }

  const tempSS = SpreadsheetApp.create(`Rep Report - ${repId}`);
  const sheet1 = tempSS.getActiveSheet();
  sheet1.setName("Submissions");

  const totalCols = filteredSales[0].length;

  sheet1.insertRows(1,5);

  sheet1.getRange(1,1,1,totalCols).merge()
    .setValue("SUBMISSIONS REPORT")
    .setFontSize(16).setFontWeight("bold")
    .setHorizontalAlignment("center").setVerticalAlignment("middle");

  sheet1.getRange(2,1,1,totalCols).merge()
    .setValue("Rep ID: "+repId)
    .setFontWeight("bold")
    .setHorizontalAlignment("center");

  sheet1.getRange(3,1,1,totalCols).merge()
    .setValue("Date: "+(data.from||"All Time")+" to "+(data.to||"All Time"))
    .setFontWeight("bold")
    .setHorizontalAlignment("center");

  const downloadedOn = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "dd MMM yyyy, hh:mm a");
  sheet1.getRange(4,1,1,totalCols).merge()
    .setValue("Downloaded on: "+downloadedOn)
    .setFontWeight("bold")
    .setHorizontalAlignment("center");

  sheet1.getRange(6,1,filteredSales.length,totalCols).setValues(filteredSales);

  sheet1.getRange(6,1,1,totalCols)
    .setBackground("#dce3f5")
    .setFontWeight("bold")
    .setHorizontalAlignment("center")
    .setVerticalAlignment("middle");

  if(filteredSales.length > 1){
    sheet1.getRange(7,1,filteredSales.length-1,1).setHorizontalAlignment("center");
  }

  for(let col = 1; col <= totalCols; col++){
    sheet1.autoResizeColumn(col);
    let width = sheet1.getColumnWidth(col);
    if(width < 100) sheet1.setColumnWidth(col, 100);
  }
  sheet1.setColumnWidth(1, 50);

  sheet1.getRange(6,1,filteredSales.length,totalCols).setWrap(true);
  sheet1.autoResizeRows(6, filteredSales.length);

  if(filteredEdits.length>1){
    const sheet2 = tempSS.insertSheet("Edits");
    sheet2.getRange(1,1,filteredEdits.length,filteredEdits[0].length).setValues(filteredEdits);

    sheet2.getRange(1,1,1,filteredEdits[0].length)
      .setBackground("#dce3f5")
      .setFontWeight("bold")
      .setHorizontalAlignment("center");

    for(let col = 1; col <= filteredEdits[0].length; col++){
      sheet2.autoResizeColumn(col);
    }
  }


  SpreadsheetApp.flush();

  const exportUrl = "https://docs.google.com/spreadsheets/d/"+tempSS.getId()+
    "/export?format=pdf&size=A4&portrait=false&fitw=true&sheetnames=false&printtitle=false&pagenumbers=true&gridlines=true&fzr=true";

  let pdfBase64 = null;

  try {
    const response = UrlFetchApp.fetch(exportUrl, {
      headers: { Authorization: "Bearer " + ScriptApp.getOAuthToken() },
      muteHttpExceptions: true
    });
    pdfBase64 = Utilities.base64Encode(response.getBlob().getBytes());
  } finally {
    DriveApp.getFileById(tempSS.getId()).setTrashed(true);
  }

  if(!pdfBase64){
    return json({status:"error", message:"Could not generate PDF"});
  }

  return json({
    status:"success",
    pdfBase64: pdfBase64,
    filename: "Rep_Report_" + repId + ".pdf"
  });
}


function onEdit(e) {
  if(!e) return;

  const sheet = e.range.getSheet();
  if(sheet.getName() !== "edits") return;

  const editedCol = e.range.getColumn();
  const editedRow = e.range.getRow();

  if(editedCol === 9) {
    const statusCell = sheet.getRange(editedRow, 9);
    const readByCell = sheet.getRange(editedRow, 10);
    const status = e.value;

    const userEmail = Session.getActiveUser().getEmail();
    const editor = EDITORS.includes(userEmail) ? userEmail : null;

    if(status === "READ") {
      statusCell.setBackground("blue").setFontColor("white");

      if(editor) {
        readByCell.setValue(editor).setBackground("blue").setFontColor("white");

        const rule = SpreadsheetApp.newDataValidation()
          .requireValueInList([editor])
          .setAllowInvalid(false)
          .build();
        readByCell.setDataValidation(rule);
      } else {
        readByCell.setValue("UNKNOWN").setBackground("blue").setFontColor("white");
      }

    } else if(status === "UNREAD") {
      statusCell.setBackground("red").setFontColor("black");
      readByCell.setValue("").setBackground("white").setFontColor("black");

      const rule = SpreadsheetApp.newDataValidation()
        .requireValueInList(EDITORS)
        .setAllowInvalid(false)
        .build();
      readByCell.setDataValidation(rule);
    }
  }
}




function updateStatsForNewSubmission(repId, submissionDate, schoolName) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const statsSheet = ss.getSheetByName("stats") || ss.insertSheet("stats");

  if (statsSheet.getLastRow() === 0) {
    statsSheet.appendRow(["RepID", "Date", "Schools Submitted"]);
  }

  const formattedDate = Utilities.formatDate(new Date(submissionDate), Session.getScriptTimeZone(), "yyyy-MM-dd");
  const data = statsSheet.getDataRange().getValues().slice(1);

  let rowFound = null;

  for (let i = 0; i < data.length; i++) {
    const rowRep = data[i][0];
    const rowDate = Utilities.formatDate(new Date(data[i][1]), Session.getScriptTimeZone(), "yyyy-MM-dd");

    if (rowRep === repId && rowDate === formattedDate) {
      rowFound = i + 2;
      break;
    }
  }

  if (rowFound) {
    const currentCount = statsSheet.getRange(rowFound, 3).getValue();
    statsSheet.getRange(rowFound, 3).setValue(currentCount + 1);
  } else {
    statsSheet.appendRow([repId, formattedDate, 1]);
  }
}

function testStats() {
  updateStatsForNewSubmission("TEST_REP", new Date(), "Test School");
}



function setupMasterSheet(){
  const MASTER_MAX_ROW = 5000;
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);

  let sheet = ss.getSheetByName("MASTER");
  if(sheet){
    sheet.clear();
  } else {
    sheet = ss.insertSheet("MASTER");
  }

  const headers = [
    "S/N", "SCHOOL ID", "SCHOOL NAME", "LOCATION", "CONTACT", "SALES REP", "OPTION",
    "BASIC 9", "TOTAL BILL (GHC)", "INVOICE ID", "SMS SENT?", "SMS SENT TIME",
    "INVOICE SENT (WHATSAPP)?", "WHATSAPP SENT TIME", "SUBMITTED"
  ];
  sheet.getRange(1, 1, 1, headers.length)
    .setValues([headers])
    .setFontWeight("bold")
    .setBackground("#1c4587")
    .setFontColor("white")
    .setHorizontalAlignment("center");
  sheet.setFrozenRows(1);

  const r = "2:" + MASTER_MAX_ROW;
  const notBlank = `sales!G2:G${MASTER_MAX_ROW}`;

  const columnFormulas = {
    A: `=ARRAYFORMULA(IF(${notBlank}="","",ROW(${notBlank})-1))`,
    B: `=ARRAYFORMULA(IF(${notBlank}="","",sales!F2:F${MASTER_MAX_ROW}))`,
    C: `=ARRAYFORMULA(IF(${notBlank}="","",${notBlank}))`,
    D: `=ARRAYFORMULA(IF(${notBlank}="","",sales!H2:H${MASTER_MAX_ROW}))`,
    E: `=ARRAYFORMULA(IF(${notBlank}="","",sales!I2:I${MASTER_MAX_ROW}))`,
    F: `=ARRAYFORMULA(IF(${notBlank}="","",sales!C2:C${MASTER_MAX_ROW}))`,
    G: `=ARRAYFORMULA(IF(${notBlank}="","",sales!K2:K${MASTER_MAX_ROW}))`,
    H: `=ARRAYFORMULA(IF(${notBlank}="","",sales!J2:J${MASTER_MAX_ROW}))`,
    I: `=ARRAYFORMULA(IF(${notBlank}="","",sales!N2:N${MASTER_MAX_ROW}))`,
    J: `=ARRAYFORMULA(IF(${notBlank}="","",sales!P2:P${MASTER_MAX_ROW}))`,
    K: `=ARRAYFORMULA(IF(${notBlank}="","",sales!Q2:Q${MASTER_MAX_ROW}))`,
    L: `=ARRAYFORMULA(IF(${notBlank}="","",IF(sales!R2:R${MASTER_MAX_ROW}="","",TEXT(sales!R2:R${MASTER_MAX_ROW},"dd/mm/yyyy hh:mm"))))`,
    M: `=ARRAYFORMULA(IF(${notBlank}="","",sales!T2:T${MASTER_MAX_ROW}))`,
    N: `=ARRAYFORMULA(IF(${notBlank}="","",IF(sales!U2:U${MASTER_MAX_ROW}="","",TEXT(sales!U2:U${MASTER_MAX_ROW},"dd/mm/yyyy hh:mm"))))`,
    O: `=ARRAYFORMULA(IF(${notBlank}="","",TEXT(sales!A2:A${MASTER_MAX_ROW},"dd/mm/yyyy hh:mm")))`
  };

  Object.keys(columnFormulas).forEach(function(col, i){
    sheet.getRange(col + "2").setFormula(columnFormulas[col]);
  });


  const needsAttentionRule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo("FAILED")
    .setFontColor("#cc0000")
    .setBold(true)
    .setRanges([sheet.getRange("K2:K" + MASTER_MAX_ROW), sheet.getRange("M2:M" + MASTER_MAX_ROW)])
    .build();
  const notConfiguredRule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo("NOT_CONFIGURED")
    .setFontColor("#b45f06")
    .setRanges([sheet.getRange("M2:M" + MASTER_MAX_ROW)])
    .build();
  sheet.setConditionalFormatRules([needsAttentionRule, notConfiguredRule]);


  const summaryLabelCol = headers.length + 2;
  const summaryValueCol = summaryLabelCol + 1;

  sheet.getRange(1, summaryLabelCol).setValue("SUMMARY").setFontWeight("bold").setBackground("#f3f3f3");
  const summaryRows = [
    ["Total Schools Registered", `=SUMPRODUCT((${notBlank}<>"")*1)`],
    ["Total Basic 9 Enrolled",   `=SUM(sales!J2:J${MASTER_MAX_ROW})`],
    ["Total Revenue (GHC)",      `=SUM(sales!N2:N${MASTER_MAX_ROW})`],
    ["SMS Sent",                 `=COUNTIF(sales!Q2:Q${MASTER_MAX_ROW},"SENT")`],
    ["SMS Failed",               `=COUNTIF(sales!Q2:Q${MASTER_MAX_ROW},"FAILED")`],
    ["WhatsApp Invoice Sent",    `=COUNTIF(sales!T2:T${MASTER_MAX_ROW},"SENT")`],
    ["WhatsApp Needs Manual Send", `=COUNTIF(sales!T2:T${MASTER_MAX_ROW},"FAILED")+COUNTIF(sales!T2:T${MASTER_MAX_ROW},"NOT_CONFIGURED")`]
  ];
  summaryRows.forEach(function(row, i){
    sheet.getRange(i + 2, summaryLabelCol).setValue(row[0]);
    sheet.getRange(i + 2, summaryValueCol).setFormula(row[1]);
  });
  sheet.getRange(2, summaryLabelCol, summaryRows.length, 1).setFontWeight("bold");
  sheet.getRange(2, summaryValueCol, summaryRows.length, 1).setFontWeight("bold");

  for(let col = 1; col <= headers.length; col++){
    sheet.autoResizeColumn(col);
  }
  sheet.autoResizeColumn(summaryValueCol);
  sheet.setColumnWidth(summaryValueCol, Math.max(sheet.getColumnWidth(summaryValueCol), 80));

  Logger.log("MASTER sheet ready.");
}

function setupEditorDropdowns() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName("edits");
  const lastRow = sheet.getLastRow();

  if(lastRow < 2) return;

  const range = sheet.getRange(2, 10, lastRow - 1);
  const rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(EDITORS)
    .setAllowInvalid(false)
    .build();

  range.setDataValidation(rule);
}



function highlightDuplicateSchools() {

  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName("sales");

  const data = sheet.getDataRange().getValues();
  if (data.length < 2) return;

  const schoolCol = 7;
  const repCol = 3;
  const lastCol = sheet.getLastColumn();

  let map = {};

  sheet.getRange(2, 1, sheet.getLastRow()-1, lastCol)
       .setBackground("white")
       .setFontColor("black");

  for (let i = 1; i < data.length; i++) {

   let rep = String(data[i][repCol-1]).trim();
    let school = String(data[i][schoolCol-1]).trim().toUpperCase();

    if (!rep || !school) continue;   

    let key = rep + "|" + school;

    if (map[key]) {

      sheet.getRange(i+1, 1, 1, lastCol)
           .setBackground("#ffe6e6")
           .setFontColor("red");

      sheet.getRange(map[key], 1, 1, lastCol)
           .setBackground("#ffe6e6")
           .setFontColor("red");

    } else {
      map[key] = i+1;
    }
  }
}



function repairSalesTable() {

  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName("sales");

  const lastCol = sheet.getLastColumn();
  const data = sheet.getDataRange().getValues();

  if (data.length < 2) return;


  let cleaned = [data[0]];

  for (let i = 1; i < data.length; i++) {
    let row = data[i];
    if (row[1] || row[6]) {
      cleaned.push(row);
    }
  }

  if (cleaned.length === data.length) {
    Logger.log("No empty rows found — nothing to repair.");
    return;
  }

  sheet.getRange(1, 1, cleaned.length, lastCol).setValues(cleaned);


  const rowsToRemove = data.length - cleaned.length;
  if (rowsToRemove > 0) {
    sheet.deleteRows(cleaned.length + 1, rowsToRemove);
  }


  if (cleaned.length > 1) {
    const formatSource = sheet.getRange(2, 1, 1, lastCol);
    for (let i = 3; i <= cleaned.length; i++) {
      formatSource.copyTo(
        sheet.getRange(i, 1, 1, lastCol),
        { formatOnly: true }
      );
    }
  }

  for (let col = 1; col <= lastCol; col++) {
    sheet.autoResizeColumn(col);
  }

  Logger.log("Sales table repaired successfully. Removed " + rowsToRemove + " empty row(s).");
}

const SEPTEMBER_ID_LIST_SPREADSHEET_ID = "1IAkVwrt9L2FOK-ptrE3eq8PkiSnVSe6GS2r5TypSk_0";
const SEPTEMBER_ID_LIST_SHEET_NAME = "ID LIST";

const SEPTEMBER_ID_LIST_CACHE_KEY = "sept_id_list_table_v1";
const SEPTEMBER_ID_LIST_CACHE_TTL = 300; // 5 min

function getSeptemberIdListTable_(){
  const cache = CacheService.getScriptCache();
  const cached = cache.get(SEPTEMBER_ID_LIST_CACHE_KEY);
  if(cached){
    try{ return JSON.parse(cached); }catch(err){}
  }

  const sheet = SpreadsheetApp.openById(SEPTEMBER_ID_LIST_SPREADSHEET_ID)
    .getSheetByName(SEPTEMBER_ID_LIST_SHEET_NAME);
  if(!sheet) return [];

  const lastRow = sheet.getLastRow();
  if(lastRow < 2) return [];

  const numCols = Math.min(sheet.getLastColumn(), 9);
  const values = sheet.getRange(2, 1, lastRow - 1, numCols).getValues();

  try{
    cache.put(SEPTEMBER_ID_LIST_CACHE_KEY, JSON.stringify(values), SEPTEMBER_ID_LIST_CACHE_TTL);
  }catch(err){
    // too big for one cache entry — fine, just re-reads next call
  }
  return values;
}

function collectSeptemberIdListMatches_(query){
  const q = String(query || "").trim().toUpperCase();
  const values = getSeptemberIdListTable_();

  const matches = [];
  for(let i = 0; i < values.length; i++){
    const row = values[i];
    const schoolId = cleanValue(row[0]);
    if(!schoolId) continue;

    const nameUpper = String(row[1] || "").toUpperCase();
    const idUpper = schoolId.toUpperCase();
    if(q && !nameUpper.includes(q) && !idUpper.includes(q)) continue;

    matches.push({
      school:   row[1],
      schoolId: schoolId,
      location: row[2],
      phone:    row[3],
      region:   row[4],
      language: "",
      ts: row[7] instanceof Date ? row[7].getTime() : 0
    });
  }
  return matches;
}

function repSchoolHistory(data, currentSalesSheet){

  const auth = authenticate(data.token);
  if(auth === "revoked") return json({status:"deactivated", suggestions:[]});
  const repId = auth ? auth.repId : null;

  if(!repId){
    return json({status:"unauthorized", suggestions:[]});
  }

  // Sole source of truth for autofill: September ID List, ID-bearing rows only.
  const suggestions = collectSeptemberIdListMatches_("");

  return json({status:"ok", suggestions:suggestions});
}

function schoolSuggest(data, currentSalesSheet){

  const auth = authenticate(data.token);
  if(auth === "revoked") return json({status:"deactivated", suggestions:[]});
  const repId = auth ? auth.repId : null;

  if(!repId){
    return json({status:"unauthorized", suggestions:[]});
  }

  const query = String(data.query || "").trim();

  if(query.length < 2){
    return json({status:"ok", suggestions:[]});
  }

  const suggestions = collectSeptemberIdListMatches_(query).slice(0, 8);

  return json({status:"ok", suggestions:suggestions});
}


function getHistory(data, salesSheet){

  const auth = authenticate(data.token);
  if(auth === "revoked") return json({status:"deactivated", history: []});
  const repId = auth ? auth.repId : null;

  if(!repId){
    return json({status:"unauthorized", history: []});
  }

  const repCode = extractRepCode_(repId);        

  const rows = salesSheet.getDataRange().getValues();

  let history = [];

  for(let i = rows.length - 1; i > 0; i--){

    if(extractRepCode_(String(rows[i][2])) === repCode){   

      history.push({
        submissionId: rows[i][1],
        repId: rows[i][2],
        region: rows[i][3],
        schoolId: rows[i][5],
        school: rows[i][6],
        location: rows[i][7],
        phone: rows[i][8],
        language: rows[i][11],
        french: rows[i][12],
        packageOption: rows[i][10],
        enrollments: {
          b9: rows[i][9]
        },
        totalBill: rows[i][13],

        createdTime: rows[i][0],
        editedTime: rows[i][14]
      });
    }
  }

  return json({status:"ok", history});
}


function fixMissingTimestampsFromLogs() {

  const ss = SpreadsheetApp.openById("1oEyCEf58RE7MIcaO-IiM-ru-duWNlODQVogjHFm92IE");
  const sales = ss.getSheetByName("sales");
  const logs  = ss.getSheetByName("logs");

  const salesData = sales.getDataRange().getValues();
  const logsData  = logs.getDataRange().getValues();

  let fixed = 0;
  let notFound = 0;

  for (let i = 1; i < salesData.length; i++) {

    let timestamp = salesData[i][0];
    let repId = salesData[i][2];
    let school = String(salesData[i][5]).trim().toUpperCase();

    if (!timestamp || timestamp === "") {

      let foundDate = null;

      for (let j = logsData.length - 1; j >= 1; j--) {

        let logDate   = logsData[j][0];
        let action    = logsData[j][1];
        let logRep    = logsData[j][2];
        let details   = String(logsData[j][3]).trim().toUpperCase();

        if (
          action === "NEW_SUBMISSION" &&
          logRep === repId &&
          details === school
        ) {
          foundDate = logDate;
          break;
        }
      }

      if (foundDate) {
        sales.getRange(i + 1, 1).setValue(foundDate);
        fixed++;
      } else {
        notFound++;
      }
    }
  }

  Logger.log("Fixed: " + fixed);
  Logger.log("Not Found: " + notFound);
}


function debugTimestamps() {

  const ss = SpreadsheetApp.openById("1oEyCEf58RE7MIcaO-IiM-ru-duWNlODQVogjHFm92IE");
  const sheet = ss.getSheetByName("sales");

  const data = sheet.getDataRange().getValues();

  let blankCount = 0;

  for (let i = 1; i < data.length; i++) {

    let timestamp = data[i][0];

    if (
      !timestamp ||
      timestamp === "" ||
      String(timestamp).trim() === "" ||
      timestamp === null
    ) {
      Logger.log("Row " + (i+1) + " is BLANK → value: [" + timestamp + "]");
      blankCount++;
    }
  }

  Logger.log("Total blank detected: " + blankCount);
}


function syncSalesTimestampsWithLogs() {

  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sales = ss.getSheetByName("sales");
  const logs  = ss.getSheetByName("logs");

  const salesData = sales.getDataRange().getValues();
  const logsData  = logs.getDataRange().getValues();

  let fixed = 0;
  let skipped = 0;
  let notFound = 0;

  let logMap = {};

  for (let j = 1; j < logsData.length; j++) {

    let logDate = logsData[j][0];
    let action  = logsData[j][1];
    let repId   = logsData[j][2];
    let school  = String(logsData[j][3]).trim().toUpperCase().replace(/\(.*\)$/, "").trim();

    if (action === "NEW_SUBMISSION") {

      let key = repId + "|" + school;

      if (!logMap[key]) {
        logMap[key] = logDate;
      }
    }
  }

  for (let i = 1; i < salesData.length; i++) {

    let currentTimestamp = salesData[i][0];
    let repId  = salesData[i][2];
    let school = String(salesData[i][6]).trim().toUpperCase();

    let key = repId + "|" + school;

    if (logMap[key]) {

      let correctTimestamp = logMap[key];

      if (String(currentTimestamp) !== String(correctTimestamp)) {

        sales.getRange(i + 1, 1).setValue(correctTimestamp);
        fixed++;

      } else {
        skipped++;
      }

    } else {
      notFound++;
    }
  }

  Logger.log(" Fixed: " + fixed);
  Logger.log(" Skipped (already correct): " + skipped);
  Logger.log(" Not Found in logs: " + notFound);
}



function checkLastRowEdits() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName("edits");

  Logger.log("Last Row: " + sheet.getLastRow());
}


function fixEditsSheetGap() {

  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName("edits");

  const data = sheet.getDataRange().getValues();
  if (data.length < 1) return;

  const lastCol = sheet.getLastColumn();

  let cleaned = [data[0]];
  for (let i = 1; i < data.length; i++) {
    let row = data[i];
    if (row.join("").trim() !== "") {
      cleaned.push(row);
    }
  }

  if (cleaned.length === data.length) {
    Logger.log("No gap rows found — nothing to fix.");
    return;
  }

  sheet.getRange(1, 1, cleaned.length, lastCol).setValues(cleaned);

  const rowsToRemove = data.length - cleaned.length;
  if (rowsToRemove > 0) {
    sheet.deleteRows(cleaned.length + 1, rowsToRemove);
  }

  Logger.log("Edits sheet cleaned. New last row: " + cleaned.length + " (removed " + rowsToRemove + " gap row(s))");
}

function clearStrayNotificationTriggers(){
  const triggers = ScriptApp.getProjectTriggers().filter(t => t.getHandlerFunction() === "runScheduledNotifications");
  Logger.log("Found " + triggers.length + " notification triggers.");
  triggers.forEach(t => ScriptApp.deleteTrigger(t));
}


function migrateAddSchoolIdColumn(){
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const salesSheet = ss.getSheetByName("sales");
  const editsSheet = ss.getSheetByName("edits");
  const idListSheet = getOrCreateIdListSheet(ss);

  const salesHeader = salesSheet.getRange(1, 6).getValue();
  if(salesHeader !== "SchoolID"){
    salesSheet.insertColumnBefore(6);
    salesSheet.getRange(1, 6).setValue("SchoolID").setFontWeight("bold");
  }

  const editsHeader = editsSheet.getRange(1, 4).getValue();
  if(editsHeader !== "SchoolID"){
    editsSheet.insertColumnBefore(4);
    editsSheet.getRange(1, 4).setValue("SchoolID").setFontWeight("bold");
  }

  const lastRow = salesSheet.getLastRow();
  if(lastRow > 1){
    const data = salesSheet.getRange(2, 1, lastRow - 1, 8).getValues();
    for(let i = 0; i < data.length; i++){
      const rowNum = i + 2;
      const existingId = cleanValue(data[i][5]);
      const schoolName = cleanValue(data[i][6]).toUpperCase();
      const region = cleanValue(data[i][3]);
      const location = cleanValue(data[i][7]);
      if(existingId || !schoolName) continue;

      const result = getOrCreateSchoolId(schoolName, region, location, "", "MIGRATION", idListSheet);
      salesSheet.getRange(rowNum, 6).setValue(result.id);
    }
  }

  Logger.log("Migration complete. Re-run setupMasterSheet() next to rebuild MASTER with the new column.");
}

function runSetBlankTemplate(){
  PropertiesService.getScriptProperties().setProperty("BLANK_LETTER_TEMPLATE_ID", "1QTXad7GUjnD-XfHPU0vjbsdTmF7CtUVaIZ5VmxtUFKs");
  Logger.log("Blank letter-size template saved.");
}


// ONE-TIME SETUP 
function setInvoiceLogoBase64_(base64String){
  if(!base64String){
    Logger.log("Pass the base64 string as the argument, e.g. setInvoiceLogoBase64_('/9j/4AAQ...')");
    return;
  }
  PropertiesService.getScriptProperties().setProperty("INVOICE_LOGO_BASE64", base64String);
  Logger.log("Logo saved to Script Properties (" + base64String.length + " chars).");
}

// ONE-TIME SETUP 
//
function setInvoiceSignatureBase64_(base64String){
  if(!base64String){
    Logger.log("Pass the base64 string as the argument, e.g. setInvoiceSignatureBase64_('iVBORw0...')");
    return;
  }
  PropertiesService.getScriptProperties().setProperty("INVOICE_SIGNATURE_BASE64", base64String);
  Logger.log("Signature saved to Script Properties (" + base64String.length + " chars).");
}

function authTestRun(){
  const result = generateInvoiceImage("TEST123", "Test School", "Test Location", "GREATER ACCRA", "0244000000", "MD", "A", 1, 80);
  Logger.log(result);


  const logSheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName("logs");
  const lastRow = logSheet.getLastRow();
  const lastEntries = logSheet.getRange(Math.max(1, lastRow - 4), 1, Math.min(5, lastRow), 4).getValues();
  Logger.log(JSON.stringify(lastEntries));
}


function repairMisalignedSalesRows(){
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const salesSheet = ss.getSheetByName("sales");
  const idListSheet = getOrCreateIdListSheet(ss);

  const lastRow = salesSheet.getLastRow();
  if(lastRow < 2) return;

  const data = salesSheet.getRange(2, 1, lastRow - 1, 14).getValues();
  let fixed = 0;

  for(let i = 0; i < data.length; i++){
    const row = data[i];
    const rowNum = i + 2;

    const colF = String(row[5] || "").trim();
    const colN = row[13];

    if(!colF || colF.toUpperCase().startsWith("BBEK")) continue;
    if(!row[6] && !row[7]) continue;

    const shiftedValues = row.slice(5, 13);
    const school   = String(shiftedValues[0] || "").trim().toUpperCase();
    const location = String(shiftedValues[1] || "").trim().toUpperCase();
    const phone    = normalizePhone(shiftedValues[2]);
    const region   = String(row[3] || "").trim();
    const repId    = String(row[2] || "").trim();

    if(!school){
      Logger.log("Row " + rowNum + ": couldn't identify school name, skipped.");
      continue;
    }

    const schoolId = getOrCreateSchoolId(school, region, location, phone, repId, idListSheet).id;

    const fixedRow = [schoolId].concat(shiftedValues);
    salesSheet.getRange(rowNum, 6, 1, 9).setValues([fixedRow]);

    Logger.log("Row " + rowNum + " fixed: " + school + " -> " + schoolId);
    fixed++;
  }

  Logger.log("Repair complete. Rows fixed: " + fixed);
}


function setupNotificationQueueTrigger(){
  const existing = ScriptApp.getProjectTriggers()
    .filter(t => t.getHandlerFunction() === "processNotificationQueue");

  
  existing.forEach(t => ScriptApp.deleteTrigger(t));

  ScriptApp.newTrigger("processNotificationQueue")
    .timeBased()
    .everyMinutes(1)
    .create();

  Logger.log("Removed " + existing.length + " old trigger(s). Installed fresh recurring trigger (every 1 minute).");
}







// ================== SMS RETRY / RESEND SYSTEM ==================


const SMS_STATUS_COL   = 17; 
const SMS_TIME_COL     = 18; 
const INVOICE_URL_COL  = 19; 
const SMS_RETRY_COL    = 22; 
const MAX_SMS_RETRIES  = 5;
const BALANCE_FLAG_COL = 23;


function setupBalanceFlagColumn(){
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName("sales");
  const current = sheet.getRange(1, BALANCE_FLAG_COL).getValue();
  if(!current){
    sheet.getRange(1, BALANCE_FLAG_COL)
      .setValue("Balance Flag At Submission")
      .setFontWeight("bold")
      .setBackground("#dce3f5");
  }
  Logger.log("Balance flag column ready.");
}

const BALANCE_OVERRIDE_LOG_SHEET_NAME = "OWING SCHOOLS - RE-REGISTERED";

function getOrCreateBalanceOverrideLogSheet_(ss){
  let sheet = ss.getSheetByName(BALANCE_OVERRIDE_LOG_SHEET_NAME);
  if(sheet) return sheet;

  sheet = ss.insertSheet(BALANCE_OVERRIDE_LOG_SHEET_NAME);
  const headers = [
    "Date Registered", "School ID", "School Name", "Location", "Phone",
    "Region", "Rep ID", "Balance Owed (Prior Exam)", "Prior Exam",
    "New Registration Total (This Exam)", "Submission ID"
  ];
  sheet.getRange(1, 1, 1, headers.length)
    .setValues([headers])
    .setFontWeight("bold")
    .setBackground("#990000")
    .setFontColor("white")
    .setHorizontalAlignment("center")
    .setVerticalAlignment("middle");
  sheet.setFrozenRows(1);
  for(let col = 1; col <= headers.length; col++){
    sheet.autoResizeColumn(col);
  }
  return sheet;
}

function logBalanceOverride_(ss, entry){
  const sheet = getOrCreateBalanceOverrideLogSheet_(ss);
  sheet.appendRow([
    new Date(),
    entry.schoolId,
    entry.school,
    entry.location,
    entry.phone,
    entry.region,
    entry.repId,
    entry.balanceAtSubmission,
    SEPTEMBER_MAIN_SHEET_EXAM_LABEL,
    entry.totalBill,
    entry.submissionId
  ]);
}




function setupSmsRetryColumn(){
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName("sales");
  const current = sheet.getRange(1, SMS_RETRY_COL).getValue();
  if(!current){
    sheet.getRange(1, SMS_RETRY_COL)
      .setValue("SMS Retry Count")
      .setFontWeight("bold")
      .setBackground("#dce3f5");
  }
  Logger.log("SMS retry column ready.");
}

function resendFailedSms(){
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const salesSheet = ss.getSheetByName("sales");
  const editsSheet = ss.getSheetByName("edits");
  const logSheet = ss.getSheetByName("logs");

  const lastRow = salesSheet.getLastRow();
  if(lastRow < 2){
    Logger.log("No sales rows.");
    return;
  }

  const numCols = Math.max(salesSheet.getLastColumn(), SMS_RETRY_COL);
  const data = salesSheet.getRange(2, 1, lastRow - 1, numCols).getValues();

  let attempted = 0, resent = 0, skippedInvalidPhone = 0, skippedMaxRetries = 0, editsSynced = 0;

  for(let i = 0; i < data.length; i++){
    const rowNum = i + 2;
    const row = data[i];

    const smsStatus = cleanValue(row[SMS_STATUS_COL - 1]);
    if(smsStatus !== "FAILED") continue;

    const submissionId = cleanValue(row[1]);
    const school   = cleanValue(row[6]);   
    const phone    = cleanValue(row[8]);   
    const totalBill = Number(row[13]) || 0; 
    const invoiceUrl = cleanValue(row[INVOICE_URL_COL - 1]);
    const retryCount = Number(row[SMS_RETRY_COL - 1]) || 0;

    const phoneE164 = toArkeselPhone(phone);

    if(!phoneE164){
      
      skippedInvalidPhone++;
      continue;
    }

    if(retryCount >= MAX_SMS_RETRIES){
      skippedMaxRetries++;
      continue;
    }

    attempted++;

    const shortLink = invoiceUrl ? shortenUrl(invoiceUrl) : "";
    const smsText = shortLink
      ? buildSmsMessage(school, totalBill, shortLink)
      : `Dear ${school}\nYour registration for ${EXAM_NAME} is successful!\nTotal Bill: ${formatGHS(totalBill)}\nPAY VIA ${COMPANY_MOMO_LINES[0]} | ${COMPANY_MOMO_LINES[1]}`;

    const smsResult = sendArkeselSms(phoneE164, smsText);

    const newStatus = smsResult.success ? "SENT" : "FAILED";
    const now = new Date();

    salesSheet.getRange(rowNum, SMS_STATUS_COL).setValue(newStatus);
    if(smsResult.success){
      salesSheet.getRange(rowNum, SMS_TIME_COL).setValue(now);
    }
    salesSheet.getRange(rowNum, SMS_RETRY_COL).setValue(retryCount + 1);

    if(smsResult.success){
      resent++;
      editsSynced += syncEditsSmsStatus_(editsSheet, submissionId, "SENT");
    }

    logSheet.appendRow([
      now, "SMS_RESEND_ATTEMPT", "SYSTEM",
      school + " | attempt " + (retryCount + 1) + "/" + MAX_SMS_RETRIES +
      " | result:" + newStatus +
      (smsResult.success ? "" : " | error: " + smsResult.detail)
    ]);
  }

  const summary = "Resend run: attempted=" + attempted + " resent=" + resent +
    " skipped(invalidPhone)=" + skippedInvalidPhone +
    " skipped(maxRetries)=" + skippedMaxRetries +
    " editsRowsSynced=" + editsSynced;

  Logger.log(summary);
  logSheet.appendRow([new Date(), "SMS_RESEND_RUN", "SYSTEM", summary]);
}

// Finds matching "INVOICE_REISSUED" rows in the edits sheet for a given
// SubmissionID whose SMS Status is FAILED, and updates them to newStatus.
function syncEditsSmsStatus_(editsSheet, submissionId, newStatus){
  if(!submissionId) return 0;

  const lastRow = editsSheet.getLastRow();
  if(lastRow < 2) return 0;

  const EDITS_SUBMISSIONID_COL = 3;  // C
  const EDITS_FIELD_COL        = 6;  // F - holds "INVOICE_REISSUED"
  const EDITS_SMS_STATUS_COL   = 12; // L

  const values = editsSheet.getRange(2, 1, lastRow - 1, 14).getValues();
  let updated = 0;

  for(let i = 0; i < values.length; i++){
    const rowNum = i + 2;
    const row = values[i];

    if(cleanValue(row[EDITS_SUBMISSIONID_COL - 1]) === submissionId &&
       cleanValue(row[EDITS_FIELD_COL - 1]) === "INVOICE_REISSUED" &&
       cleanValue(row[EDITS_SMS_STATUS_COL - 1]) === "FAILED"){
      editsSheet.getRange(rowNum, EDITS_SMS_STATUS_COL).setValue(newStatus);
      updated++;
    }
  }

  return updated;
}


function setupSmsRetryTrigger(){
  const existing = ScriptApp.getProjectTriggers()
    .filter(t => t.getHandlerFunction() === "resendFailedSms");
  existing.forEach(t => ScriptApp.deleteTrigger(t));

  ScriptApp.newTrigger("resendFailedSms")
    .timeBased()
    .everyMinutes(30)
    .create();

  Logger.log("Removed " + existing.length + " old trigger(s). Installed resendFailedSms every 30 min.");
}

function removeSmsRetryTrigger(){
  const existing = ScriptApp.getProjectTriggers()
    .filter(t => t.getHandlerFunction() === "resendFailedSms");
  existing.forEach(t => ScriptApp.deleteTrigger(t));
  Logger.log("Removed " + existing.length + " resendFailedSms trigger(s).");
}





function deleteSalesRows4to7(){

  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const salesSheet = ss.getSheetByName("sales");
  const logSheet = ss.getSheetByName("logs");

  if(!salesSheet){
    Logger.log("sales sheet not found — aborting.");
    return;
  }

  const lock = LockService.getScriptLock();
  let haveLock = false;
  try{
    lock.waitLock(30000);
    haveLock = true;
  }catch(lockErr){
    Logger.log("Could not acquire lock — another operation is in progress. Try again shortly.");
    return;
  }

  try{
    const startRow = 4;
    const numRows = 4;

    if(salesSheet.getLastRow() < startRow){
      Logger.log("sales sheet doesn't have rows 4-7 — nothing to delete.");
      return;
    }

    salesSheet.deleteRows(startRow, numRows);

    SpreadsheetApp.flush();

    const summary = "Deleted sales rows 4-7. Rows below shifted up; MASTER updates automatically.";
    Logger.log(summary);
    if(logSheet){
      logSheet.appendRow([new Date(), "MASTER_REPAIR_TARGETED", "SYSTEM", summary]);
    }

  } finally {
    if(haveLock) lock.releaseLock();
  }
}

function wipeMockDataForNewMonth(){
  const boundId = SpreadsheetApp.getActiveSpreadsheet().getId();
  if(boundId !== SPREADSHEET_ID){
    throw new Error(
      "SPREADSHEET_ID (" + SPREADSHEET_ID + ") does not match the file this script " +
      "is bound to (" + boundId + "). Update SPREADSHEET_ID before wiping."
    );
  }

  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const sheetsToWipe = ["sales", "edits", "stats", "logs"];
    const results = [];

    sheetsToWipe.forEach(function(name){
      const sheet = ss.getSheetByName(name);
      if(!sheet){
        results.push(name + ": NOT FOUND, skipped");
        return;
      }
      const lastRow = sheet.getLastRow();
      const lastCol = sheet.getLastColumn();
      if(lastRow <= 1){
        results.push(name + ": already empty (only header)");
        return;
      }
      sheet.getRange(2, 1, lastRow - 1, Math.max(lastCol, 1)).clearContent();
      results.push(name + ": cleared " + (lastRow - 1) + " row(s)");
    });

    const queueSheet = ss.getSheetByName(NOTIFY_QUEUE_SHEET_NAME);
    if(queueSheet){
      const qLastRow = queueSheet.getLastRow();
      if(qLastRow > 1){
        queueSheet.getRange(2, 1, qLastRow - 1, queueSheet.getLastColumn()).clearContent();
        results.push("notify_queue: cleared " + (qLastRow - 1) + " row(s)");
      }
    }

    Logger.log(results.join("\n"));
    SpreadsheetApp.getActive().toast(results.join(" | "), "Wipe complete", 10);

  } finally {
    lock.releaseLock();
  }
}


// Pulls matches straight from the ID LIST — the one source of truth for
// School ID <-> Name across ALL reps, not just the one currently typing.
function collectIdListMatches_(idListSheet, query){
  const q = String(query || "").trim().toUpperCase();
  const lastRow = idListSheet.getLastRow();
  if(lastRow < 2) return [];

  const numCols = Math.min(idListSheet.getLastColumn(), 9);
  const values = idListSheet.getRange(2, 1, lastRow - 1, numCols).getValues();

  const matches = [];
  for(let i = 0; i < values.length; i++){
    const row = values[i];
    const idUpper   = String(row[0] || "").toUpperCase();
    const nameUpper = String(row[1] || "").toUpperCase();
    if(q && !nameUpper.includes(q) && !idUpper.includes(q)) continue;

    matches.push({
      school:   row[1],
      schoolId: row[0],
      location: row[2],
      phone:    row[3],
      region:   row[4],
      language: "",
      ts: row[7] instanceof Date ? row[7].getTime() : 0
    });
  }
  return matches;
}

// Merges ID-LIST matches with a rep's personal history matches, deduping
// by School ID (or by name if no ID yet) so the SAME school never shows
// up twice, and so a school registered by ANY rep still surfaces for
// everyone else. primaryMatches wins on conflicting fields; gaps (like
// language, which ID LIST doesn't track) get filled from secondaryMatches.
function mergeSchoolMatches_(primaryMatches, secondaryMatches){
  const byKey = {};
  const order = [];

  function keyFor(m){
    if(m.schoolId) return "ID:" + String(m.schoolId).toUpperCase();
    return "NAME:" + String(m.school || "").toUpperCase();
  }

  [primaryMatches, secondaryMatches].forEach(function(list){
    list.forEach(function(m){
      const key = keyFor(m);
      if(!byKey[key]){
        byKey[key] = Object.assign({}, m);
        order.push(key);
      } else {
        const existing = byKey[key];
        if(!existing.language && m.language) existing.language = m.language;
        if(!existing.schoolId && m.schoolId) existing.schoolId = m.schoolId;
      }
    });
  });

  return order.map(function(key){ return byKey[key]; })
    .sort(function(a, b){ return (b.ts || 0) - (a.ts || 0); });
}

const SEPTEMBER_BALANCE_CACHE_KEY = "sept_balance_table_v1";
const SEPTEMBER_BALANCE_CACHE_TTL = 300; // 5 minutes — long enough to make repeat lookups instant, short enough to stay fresh

function getSeptemberBalanceTable_(){
  const cache = CacheService.getScriptCache();
  const cached = cache.get(SEPTEMBER_BALANCE_CACHE_KEY);
  if(cached){
    try{ return JSON.parse(cached); }catch(err){}
  }

  const mainSheet = SpreadsheetApp.openById(SEPTEMBER_MAIN_SHEET_ID).getSheetByName(SEPTEMBER_MAIN_SHEET_TAB);
  if(!mainSheet) return [];

  const lastRow = mainSheet.getLastRow();
  if(lastRow < 3) return [];

  const values = mainSheet.getRange(3, 2, lastRow - 2, 7).getValues();

  try{
    cache.put(SEPTEMBER_BALANCE_CACHE_KEY, JSON.stringify(values), SEPTEMBER_BALANCE_CACHE_TTL);
  }catch(err){
    // table too big for one cache entry (100KB cap) — just skip caching, lookups still work, just uncached
  }

  return values;
}



function lookupSeptemberBalance_(schoolId){
  const idUpper = cleanValue(schoolId).toUpperCase();
  if(!idUpper) return { found:false, balance:0 };
  try{
    const values = getSeptemberBalanceTable_();
    for(let i = 0; i < values.length; i++){
      const rowId = String(values[i][0] || "").trim().toUpperCase();
      if(rowId === idUpper){
        return {
          found: true,
          balance: Number(values[i][6]) || 0,
          examLabel: SEPTEMBER_MAIN_SHEET_EXAM_LABEL
        };
      }
    }
  }catch(err){
    // fail closed on lookup errors — don't silently let an owing school through
    return { found:false, balance:0, error:true };
  }
  return { found:false, balance:0 };
}
function checkSchoolBalance(data){
  const auth = authenticate(data.token);
  if(auth === "revoked") return json({status:"deactivated", found:false});
  if(!auth) return json({status:"unauthorized", found:false});

  const schoolId = cleanValue(data.schoolId).toUpperCase();
  if(!schoolId) return json({status:"ok", found:false});

  const info = lookupSeptemberBalance_(schoolId);
  if(info.error) return json({status:"error", found:false});

  return json({
    status: "ok",
    found: info.found,
    schoolId: schoolId,
    balance: info.balance,
    hasBalance: info.balance > 0,
    examLabel: info.examLabel || ""
  });
}

function checkInvoiceStatus(data, salesSheet){
  const auth = authenticate(data.token);
  if(auth === "revoked") return json({status:"deactivated", ready:false});
  if(!auth) return json({status:"unauthorized", ready:false});

  const submissionId = cleanValue(data.submissionId);
  if(!submissionId) return json({status:"ok", ready:false});

  const lastRow = salesSheet.getLastRow();
  if(lastRow < 2) return json({status:"ok", ready:false});

  const idColumn = salesSheet.getRange(2, 2, lastRow - 1, 1).getValues();
  let rowIndex = -1;
  for(let i = 0; i < idColumn.length; i++){
    if(String(idColumn[i][0]) === submissionId){
      rowIndex = i + 2;
      break;
    }
  }
  if(rowIndex === -1) return json({status:"ok", ready:false});

  const invoiceUrl = cleanValue(salesSheet.getRange(rowIndex, INVOICE_URL_COL).getValue());
  return json({ status:"ok", ready: !!invoiceUrl, invoiceUrl: invoiceUrl });
}





function diagnoseNotificationSystem(){
  const report = [];

  // 1. Is the queue-processing trigger actually installed?
  const triggers = ScriptApp.getProjectTriggers()
    .filter(t => t.getHandlerFunction() === "processNotificationQueue");
  report.push(triggers.length
    ? "✅ processNotificationQueue trigger installed (" + triggers.length + ")"
    : "❌ NO trigger for processNotificationQueue — run setupNotificationQueueTrigger() now.");

  // 2. Required script properties for invoice generation
  const props = PropertiesService.getScriptProperties();
  ["BLANK_LETTER_TEMPLATE_ID", "INVOICE_BACKGROUND_FILE_ID"].forEach(key => {
    const val = props.getProperty(key);
    report.push(val
      ? "✅ " + key + " is set"
      : "❌ " + key + " is MISSING — invoice generation will throw immediately.");
  });

  // 3. Is anything stuck waiting in the queue right now?
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const queueSheet = ss.getSheetByName(NOTIFY_QUEUE_SHEET_NAME);
  if(queueSheet){
    const backlog = Math.max(queueSheet.getLastRow() - 1, 0);
    report.push(backlog > 0
      ? "⚠️ " + backlog + " job(s) stuck in notify_queue — trigger isn't draining them."
      : "✅ notify_queue is empty (nothing backed up).");
  } else {
    report.push("ℹ️ notify_queue sheet doesn't exist yet (fine if no submissions yet).");
  }

  // 4. Recent errors in the logs sheet related to SMS/invoice
  const logSheet = ss.getSheetByName("logs");
  if(logSheet){
    const lastRow = logSheet.getLastRow();
    const scanFrom = Math.max(2, lastRow - 200);
    const rows = logSheet.getRange(scanFrom, 1, lastRow - scanFrom + 1, 4).getValues();
    const watchActions = [
      "INVOICE_IMAGE_GEN_FAILED", "SHORTEN_URL_FAILED",
      "NOTIFY_QUEUE_FAILED", "CRASH"
    ];
    const hits = rows.filter(r => watchActions.includes(r[1]));
    if(hits.length){
      report.push("⚠️ Found " + hits.length + " relevant error(s) in the last 200 log rows:");
      hits.slice(-10).forEach(r => {
        report.push("   " + r[0] + " | " + r[1] + " | " + r[2] + " | " + r[3]);
      });
    } else {
      report.push("✅ No INVOICE_IMAGE_GEN_FAILED / CRASH / NOTIFY_QUEUE_FAILED entries in recent logs.");
    }
  }

  // 5. Quick live test of the Arkesel key/endpoint (does NOT send a real SMS)
  try{
    const res = UrlFetchApp.fetch(ARKESEL_SMS_URL, {
      method: "post",
      contentType: "application/json",
      headers: { "api-key": ARKESEL_API_KEY },
      payload: JSON.stringify({ sender: SMS_SENDER_ID, message: "test", recipients: [] }),
      muteHttpExceptions: true
    });
    report.push("ℹ️ Arkesel test call → HTTP " + res.getResponseCode() + " | " + res.getContentText());
  } catch(err){
    report.push("❌ Arkesel test call threw: " + err.toString());
  }

  Logger.log(report.join("\n"));
}



function debugBackgroundFile(){
  const fileId = PropertiesService.getScriptProperties().getProperty("INVOICE_BACKGROUND_FILE_ID");
  Logger.log("Stored file ID: " + fileId);

  try {
    const file = DriveApp.getFileById(fileId);
    Logger.log("File name: " + file.getName());
    Logger.log("MIME type: " + file.getMimeType());

    const blob = file.getBlob();
    Logger.log("Blob content type: " + blob.getContentType());
    Logger.log("Blob size (bytes): " + blob.getBytes().length);
  } catch(err) {
    Logger.log("ERROR reading file: " + err.toString());
  }
}




function getInvoiceDirectUrl_(fileId){
  return ScriptApp.getService().getUrl() + "?action=invoice&fileId=" + fileId;
}