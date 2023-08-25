<script>
  import StandingsTable from "$lib/components/StandingsTable.svelte"
  import DateTable from "$lib/components/DateTable.svelte"
  import Loading from "$lib/components/Loading.svelte"

  /** @type {import('./$types').PageData} */
  export let data
</script>

<div class="flex gap-8 flex-col">
  <h1 class="text-4xl font-stencil uppercase">Zürich Qualifiers</h1>

  <div class="flex justify-between flex-col sm:flex-row gap-10">
    <div>
      <div class="text-xl font-stencil uppercase">Dates</div>
      {#await data.streamed.dates}
        <Loading class="w-8 h-8" />
      {:then dates}
        <DateTable dates={dates.map((d) => [new Date(d[0]), d[1]])} />
      {:catch e}
        Error :(
      {/await}
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
    {#await data.streamed.standings}
      <Loading class="w-8 h-8" />
    {:then standings}
      <StandingsTable {standings} />
    {:catch e}
      Error :(
    {/await}
  </div>
</div>
