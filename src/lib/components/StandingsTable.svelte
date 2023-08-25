<script>
  /** @type {String[][]} */
  export let standings = []
</script>

<div class="flow-root">
  <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
      <table class="min-w-full">
        <thead>
          <tr>
            <th scope="col" class="relative py-3.5 pr-4 pl-3 sm:pr-0">
              <span class="sr-only">Placing</span>
            </th>
            <th
              scope="col"
              class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"
              ><span class="sr-only">Player</span></th
            >
            <th
              scope="col"
              class="px-3 py-3.5 text-left text-sm font-semibold text-white"
              ><span class="sr-only">Canton</span></th
            >
            <th
              scope="col"
              class="px-3 py-3.5 text-left text-sm font-semibold text-white"
              ><span class="sr-only">Points</span></th
            >
          </tr>
        </thead>
        <tbody class="divide-y divide-neutral-800">
          {#each standings as [player, canton, points], i}
            <tr>
              <td
                class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0"
                class:highlight={i in [0, 1, 2]}>{i + 1}.</td
              >
              <td
                class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0"
                class:highlight={i in [0, 1, 2]}>{player}</td
              >
              <td class="whitespace-nowrap px-3 py-4 text-sm">
                {#if canton}
                  <img
                    src="/images/wappen/{canton}.svg"
                    alt={canton}
                    title={canton}
                    class="h-7 w-auto"
                  />
                {/if}
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-lg font-semibold"
                >{points} {Number(points) > 1 ? "points" : "point"}</td
              >
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>

<style lang="postcss">
  .highlight {
    @apply text-bbyellow font-semibold;
  }
</style>
