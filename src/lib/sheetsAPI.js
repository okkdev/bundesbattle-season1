import { GOOGLE_API_CREDENTIALS, GOOGLE_SHEET_ID } from "$env/static/private"
import { google } from "googleapis"

const credentials = JSON.parse(
  Buffer.from(GOOGLE_API_CREDENTIALS, "base64").toString()
)
const auth = new google.auth.GoogleAuth({
  credentials: credentials,
  scopes: "https://www.googleapis.com/auth/spreadsheets",
})
const googleSheetsInstance = google.sheets({
  version: "v4",
  auth: auth,
})

/** @param {string} range */
export async function fetchRange(range) {
  return await googleSheetsInstance.spreadsheets.values
    .get({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: range,
    })
    .then((res) => res.data.values)
}
