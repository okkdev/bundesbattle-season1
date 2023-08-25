import { error } from "@sveltejs/kit"
import { fetchRange } from "$lib/sheetsAPI"

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  return {
    streamed: {
      dates: fetchRange("ZurichDates"),
      standings: fetchRange("ZurichStandings"),
    },
  }
}
