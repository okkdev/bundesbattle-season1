<script>
  import StandingsTable from "$lib/components/StandingsTable.svelte"
  import DateTable from "$lib/components/DateTable.svelte"

  /** @type {import('./$types').PageData} */
  export let data
</script>

<div class="flex gap-8 flex-col">
  <h1 class="font-semibold text-4xl">Zürich Qualifiers</h1>

  <div>
    <div class="text-xl font-semibold">Dates:</div>
    <DateTable dates={data.dates} />
  </div>

  <div>
    <div class="text-xl font-semibold">Standings:</div>
    <StandingsTable standings={data.standings} />
  </div>
</div>
