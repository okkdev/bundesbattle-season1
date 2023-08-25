<script>
  import StandingsTable from "$lib/components/StandingsTable.svelte"
  import DateTable from "$lib/components/DateTable.svelte"

  /** @type {import('./$types').PageData} */
  export let data
  console.log(data)
</script>

<div class="flex gap-8 flex-col">
  <h1 class="text-4xl font-stencil uppercase">Basel Qualifiers</h1>

  <div class="flex justify-between flex-col sm:flex-row gap-10">
    <div>
      <div class="text-xl font-stencil uppercase">Dates</div>
      <DateTable dates={data.dates} />
    </div>
    <div>
      <div class="text-xl font-stencil uppercase">Location</div>
      <p>ManaBar</p>
      <p>Güterstrasse 99</p>
      <p>4053 Basel</p>
    </div>
  </div>

  <div>
    <div class="text-xl font-stencil uppercase">Standings</div>
    <StandingsTable standings={data.standings} />
  </div>
</div>
