import { error } from "@sveltejs/kit"
import { GOOGLE_API_CREDENTIALS, GOOGLE_SHEET_ID } from "$env/static/private"
import { google } from "googleapis"

const credentials = JSON.parse(
  Buffer.from(GOOGLE_API_CREDENTIALS, "base64").toString()
)

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const auth = new google.auth.GoogleAuth({
    credentials: credentials,
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  })
  const googleSheetsInstance = google.sheets({
    version: "v4",
    auth: auth,
  })

  const dates = await googleSheetsInstance.spreadsheets.values.get({
    spreadsheetId: GOOGLE_SHEET_ID, // spreadsheet id
    range: "BaselDates", //range of cells to read from.
  })

  const standings = await googleSheetsInstance.spreadsheets.values.get({
    spreadsheetId: GOOGLE_SHEET_ID, // spreadsheet id
    range: "BaselStandings", //range of cells to read from.
  })

  return {
    dates: dates.data.values.map((d) => Date.parse(d)),
    standings: standings.data.values,
  }
}