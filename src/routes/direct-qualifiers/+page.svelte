<script>
  /** @type {import('./$types').PageData} */
  export let data
  console.log(data)
</script>

<div class="grid grid-cols-1 gap-10 sm:grid-cols-2 max-w-4xl mx-auto">
  <div class="flex flex-col justify-center items-center gap-2">
    <img
      src="images/thereset-logo.png"
      alt="TheReset #8 Logo"
      class="object-contain h-80 w-auto"
    />
    <h1 class="font-semibold text-2xl">TheReset #8</h1>
    <div>Jul 28th — 30th, 2023</div>
    {#if data.thereset}
      <div class="py-3 text-lg flex gap-2 items-center justify-center">
        Winner: <span class="font-semibold">{data.thereset[0][0]}</span>
        {#if data.thereset[0][1]}
          <img
            src="/images/wappen/{data.thereset[0][1]}.svg"
            alt={data.thereset[0][1]}
            title={data.thereset[0][1]}
            class="h-5 w-auto"
          />
        {/if}
      </div>
    {/if}

    <a
      href="https://www.start.gg/tournament/thereset-8/details"
      class="p-2 rounded bg-bbyellow text-slate-700 hover:bg-yellow-200"
      >start.gg</a
    >
  </div>
  <div class="flex flex-col justify-center items-center gap-2">
    <img
      src="images/gaminghotel-logo.png"
      alt="GamingHotel2023 Logo"
      class="object-contain h-80 w-auto"
    />
    <h1 class="font-semibold text-2xl">GamingHotel 2023</h1>
    <div>Sep 9th — 10th, 2023</div>
    {#if data.gaminghotel}
      <div class="py-3 text-lg flex gap-2 items-center justify-center">
        Winner: <span class="font-semibold">{data.gaminghotel[0][0]}</span>
        {#if data.gaminghotel[0][1]}
          <img
            src="/images/wappen/{data.gaminghotel[0][1]}.svg"
            alt={data.gaminghotel[0][1]}
            title={data.gaminghotel[0][1]}
            class="h-5 w-auto"
          />
        {/if}
      </div>
    {/if}
    <a
      href="https://www.start.gg/tournament/gaminghotel-2023/details"
      class="p-2 rounded bg-bbyellow text-slate-700 hover:bg-yellow-200"
      >start.gg</a
    >
  </div>
</div>
