/**
 * Tirupati Associates — website enquiry handler (Google Apps Script)
 *
 * Paste this into Extensions → Apps Script of the Google Sheet that should
 * store the enquiries, then deploy it as a Web App (see CONTACT-FORM-SETUP.md).
 *
 * Every enquiry is:
 *   1. appended as a new row in the "Enquiries" sheet, and
 *   2. emailed to NOTIFY_EMAIL (reply-to is set to the customer's email).
 */

// ── Settings ─────────────────────────────────────────────────────────────
const NOTIFY_EMAIL = "Tirupatiassociates07@gmail.com"; // where enquiry emails go (comma-separate for several)
const SHEET_NAME = "Enquiries";
// Must match CONTACT_FORM_SECRET in the website's environment variables.
// Leave "" to disable the check (not recommended).
const SHARED_SECRET = "CHANGE-ME-TO-A-LONG-RANDOM-STRING";
// ─────────────────────────────────────────────────────────────────────────

const HEADERS = [
  "Received At", "Name", "Company", "Email", "Phone / WhatsApp",
  "Country", "Product Category", "Approx. Quantity", "Message", "Page",
];

function doPost(e) {
  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || "{}");

    if (SHARED_SECRET && data.secret !== SHARED_SECRET) {
      return json_({ ok: false, error: "unauthorised" });
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(20000);
    try {
      const sheet = getSheet_();
      sheet.appendRow([
        new Date(),
        safe_(data.name), safe_(data.company), safe_(data.email), safe_(data.phone),
        safe_(data.country), safe_(data.product), safe_(data.quantity), safe_(data.message),
        safe_(data.page),
      ]);
    } finally {
      lock.releaseLock();
    }

    sendEmail_(data);
    return json_({ ok: true });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: String(err) });
  }
}

// Visiting the web-app URL in a browser shows this — handy to confirm the deployment works.
function doGet() {
  return json_({ ok: true, message: "Tirupati Associates enquiry endpoint is running." });
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold").setBackground("#f3e3c3");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function sendEmail_(d) {
  const rows = [
    ["Name", d.name], ["Company", d.company], ["Email", d.email],
    ["Phone / WhatsApp", d.phone], ["Country", d.country],
    ["Product Category", d.product], ["Approx. Quantity", d.quantity],
    ["Message", d.message],
  ];
  const html =
    '<div style="font-family:Arial,sans-serif;font-size:14px;color:#1a1a1a">' +
    '<h2 style="margin:0 0 12px;color:#c8880a">New website enquiry</h2>' +
    '<table cellpadding="8" style="border-collapse:collapse;border:1px solid #e5e2db">' +
    rows.map(function (r) {
      return '<tr><td style="background:#f7f6f3;border:1px solid #e5e2db;font-weight:bold;white-space:nowrap">' +
        esc_(r[0]) + '</td><td style="border:1px solid #e5e2db">' +
        esc_(r[1] || "—").replace(/\n/g, "<br>") + "</td></tr>";
    }).join("") +
    "</table>" +
    '<p style="color:#777;font-size:12px">Saved to the "' + SHEET_NAME + '" Google Sheet. Reply to this email to answer the customer directly.</p>' +
    "</div>";

  const options = {
    to: NOTIFY_EMAIL,
    subject: "New enquiry: " + (d.name || "Website visitor") +
      (d.company ? " (" + d.company + ")" : "") +
      (d.product ? " — " + d.product : ""),
    htmlBody: html,
    name: "Tirupati Associates Website",
  };
  if (d.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) options.replyTo = d.email;
  MailApp.sendEmail(options);
}

// Stop spreadsheet formula injection (values starting with = + - @)
function safe_(v) {
  const s = v == null ? "" : String(v);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function esc_(v) {
  return String(v == null ? "" : v)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
