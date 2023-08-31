import { fetchRange } from "$lib/sheetsAPI"
import { BYPASS_TOKEN } from "$env/static/private"

export const config = {
  isr: {
    expiration: 60 * 30,
    bypassToken: BYPASS_TOKEN,
  },
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  return {
    thereset: fetchRange("TheResetQualifier"),
    gaminghotel: fetchRange("GamingHotelQualifier"),
  }
}
