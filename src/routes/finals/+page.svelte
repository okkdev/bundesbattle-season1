<script>
  /** @type {import('./$types').PageData} */
  export let data

  let counter = 0
  const duration = 2500
  const steps = 100
  let currentStep = 0
  const delay = duration / steps

  // copied this from somewhere ¯\_(ツ)_/¯
  function easeInOut(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
  }

  function countPrizepool() {
    const progress = easeInOut(currentStep / steps)
    counter = Math.round(progress * data.prizepool)
    currentStep++

    if (currentStep <= steps) {
      setTimeout(countPrizepool, delay)
    }
  }

  countPrizepool()
</script>

<div class="flex flex-col gap-3 justify-center items-center mt-4">
  <div class="text-2xl font-semibold uppercase font-stencil">Prizepool</div>
  <div class="text-5xl font-semiboldbold font-stencil">
    CHF <div class="inline-block text-7xl font-bold tabular-nums text-bbyellow">
      {counter}
    </div>
    <div
      class="inline-block text-6xl opacity-0 transition-opacity"
      class:opacity-100={counter == data.prizepool}
    >
      +
    </div>
  </div>
  <div class="mt-5">Date and location to be announced soon...</div>
</div>
