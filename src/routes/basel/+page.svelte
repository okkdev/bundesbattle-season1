<script>
  import StandingsTable from "$lib/components/StandingsTable.svelte"
  import DateTable from "$lib/components/DateTable.svelte"

  /** @type {import('./$types').PageData} */
  export let data
</script>

<div class="flex gap-8 flex-col">
  <h1 class="font-semibold text-4xl">Basel Qualifiers</h1>

  <div class="flex justify-between max-w-2xl">
    <div>
      <div class="text-xl font-semibold">Dates:</div>
      <DateTable dates={data.dates} />
    </div>
    <div>
      <div class="text-xl font-semibold">Location:</div>
      <p>ManaBar</p>
      <p>Güterstrasse 99</p>
      <p>4053 Basel</p>
    </div>
  </div>

  <div>
    <div class="text-xl font-semibold">Standings:</div>
    <StandingsTable standings={data.standings} />
  </div>
</div>
