import { fetchRange } from "$lib/sheetsAPI"
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  return {
    thereset: fetchRange("TheResetQualifier"),
    gaminghotel: fetchRange("GamingHotelQualifier"),
  }
}
