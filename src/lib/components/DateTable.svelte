<script>
  /** @type {Array<Array<Date|string>>} */
  export let dates
</script>

<div class="grid grid-cols-1 gap-2">
  {#each dates as [date, link]}
    <div class:line-through={date < new Date(new Date().toDateString())}>
      {#if link}
        <a href={link} target="_blank" class="text-bbyellow">
          {date.toDateString()}
        </a>
      {:else}
        {date.toDateString()}
      {/if}
    </div>
  {/each}
</div>
