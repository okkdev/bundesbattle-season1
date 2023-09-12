<script>
  /** @type {import('./$types').PageData} */
  export let data
</script>

<div class="grid grid-cols-1 gap-10 mx-auto max-w-4xl sm:grid-cols-2">
  <div class="flex flex-col gap-2 items-center">
    <img
      src="images/thereset-logo.svg"
      alt="TheReset #8 Logo"
      class="object-contain w-auto h-80 aspect-square"
    />
    <h1 class="text-2xl uppercase font-stencil">TheReset #8</h1>
    <div>Jul 28th — 30th, 2023</div>
    {#if data.thereset}
      <div class="flex gap-2 justify-center items-center py-3 text-lg">
        Winner: <span class="font-semibold">{data.thereset[0][0]}</span>
        {#if data.thereset[0][1]}
          <img
            src="/images/wappen/{data.thereset[0][1]}.svg"
            alt={data.thereset[0][1]}
            title={data.thereset[0][1]}
            class="w-auto h-5"
          />
        {/if}
      </div>
    {/if}

    <a
      href="https://www.start.gg/tournament/thereset-8/details"
      target="_blank"
      class="px-3 py-2 rounded bg-bbyellow text-slate-700 hover:bg-yellow-200"
      >start.gg</a
    >
  </div>
  <div class="flex flex-col gap-2 items-center">
    <img
      src="images/gaminghotel-logo.png"
      alt="GamingHotel2023 Logo"
      class="object-contain w-auto h-80 aspect-square"
    />
    <h1 class="text-2xl uppercase font-stencil">GamingHotel 2023</h1>
    <div>Sep 9th — 10th, 2023</div>
    {#if data.gaminghotel}
      <div class="flex gap-2 justify-center items-center py-3 text-lg">
        Winner: <span class="font-semibold">{data.gaminghotel[0][0]}</span>
        {#if data.gaminghotel[0][1]}
          <img
            src="/images/wappen/{data.gaminghotel[0][1]}.svg"
            alt={data.gaminghotel[0][1]}
            title={data.gaminghotel[0][1]}
            class="w-auto h-5"
          />
        {/if}
      </div>
    {/if}
    <a
      href="https://www.start.gg/tournament/gaminghotel-2023/details"
      target="_blank"
      class="px-3 py-2 rounded bg-bbyellow text-slate-700 hover:bg-yellow-200"
      >start.gg</a
    >
  </div>
</div>
