<script>
  /** @type {number[]} */
  export let dates
</script>

<div class="grid grid-cols-1">
  {#each dates as date}
    <div class="p-2" class:line-through={date < Date.now()}>
      {new Date(date).toDateString()}
    </div>
  {/each}
</div>
