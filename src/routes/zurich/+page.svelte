<script>
  import StandingsTable from "$lib/components/StandingsTable.svelte"
  import DateTable from "$lib/components/DateTable.svelte"

  /** @type {import('./$types').PageData} */
  export let data
</script>

<div class="flex gap-8 flex-col">
  <h1 class="text-4xl font-stencil uppercase">Zürich Qualifiers</h1>

  <div class="flex justify-between flex-col sm:flex-row gap-10">
    <div>
      <div class="text-xl font-stencil uppercase">Dates</div>
      <DateTable dates={data.dates} />
    </div>
    <div>
      <div class="text-xl font-stencil uppercase">Location</div>
      <p>HardRead Verein</p>
      <p>Moosmattstrasse 30</p>
      <p>8953 Dietikon</p>
    </div>
  </div>

  <div>
    <div class="text-xl font-stencil uppercase">Standings</div>
    <StandingsTable standings={data.standings} />
  </div>
</div>
