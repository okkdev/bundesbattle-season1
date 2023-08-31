<script>
  import StandingsTable from "$lib/components/StandingsTable.svelte"
  import DateTable from "$lib/components/DateTable.svelte"
  import Loading from "$lib/components/Loading.svelte"

  /** @type {import('./$types').PageData} */
  export let data
</script>

<div class="flex flex-col gap-8">
  <h1 class="text-4xl uppercase font-stencil">Basel Qualifiers</h1>

  <div class="flex flex-col gap-10 justify-between sm:flex-row">
    <div>
      <div class="text-xl uppercase font-stencil">Dates</div>
      <DateTable dates={data.dates.map((d) => [new Date(d[0]), d[1]])} />
    </div>
    <div>
      <div class="text-xl uppercase font-stencil">Location</div>
      <p>ManaBar</p>
      <p>Güterstrasse 99</p>
      <p>4053 Basel</p>
    </div>
  </div>

  <div>
    <div class="text-xl uppercase font-stencil">Standings</div>
    <StandingsTable standings={data.standings} />
  </div>
</div>
