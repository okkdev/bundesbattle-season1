import { fetchRange } from "$lib/sheetsAPI"

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  return {
    streamed: {
      dates: fetchRange("BaselDates"),
      standings: fetchRange("BaselStandings"),
    },
  }
}
