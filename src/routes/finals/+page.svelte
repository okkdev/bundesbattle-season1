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

<div class="flex flex-col items-center justify-center gap-3 mt-4">
  <div class="text-center">
    <div class="text-5xl uppercase md:text-7xl font-stencil text-bbyellow">
      Grand Finals
    </div>
    <div class="uppercase md:text-xl font-stencil">
      Time to crown Switzerland's best SF6 Player!
    </div>
  </div>

  <div class="mt-6 text-3xl uppercase md:text-5xl font-stencil text-bbyellow">
    December 2nd
  </div>
  <a
    href="https://manabar.ch/"
    target="_blank"
    class="mb-6 text-2xl uppercase md:text-4xl font-stencil text-bbyellow"
  >
    @ ManaBar Basel
  </a>

  <div class="text-center">
    <div class="text-5xl font-semiboldbold font-stencil">
      CHF <div
        class="inline-block font-bold text-7xl tabular-nums text-bbyellow"
      >
        {counter}
      </div>
    </div>
  </div>
</div>

<div class="flex flex-col gap-3 my-8">
  <div class="text-2xl text-center uppercase font-stencil">
    Join the Battle at BundesBattle Season 1 Finals!
  </div>
  <p>
    Prepare for an electrifying showdown as the best Street Fighter 6 warriors
    from Switzerland converge at ManaBar Basel for the grand finale on December
    2nd. This is the culmination of weeks of intense competition, and the stakes
    have never been higher.
  </p>
  <p>
    Are you ready to make your mark? Even if you haven't participated in the
    earlier qualifiers, there's an exciting chance for you to enter the fray. Be
    part of the Last Chance Qualifier (LCQ) happening on the same day as the
    Finals! Two additional players will earn their golden ticket to compete in
    the Finals, and it could be you!
  </p>
  <p>
    Whether you're a seasoned veteran or a newcomer looking to make a splash,
    BundesBattle welcomes all contenders. With a CHF {data.prizepool} prize pool
    and the thrill of the LCQ, this is your moment to step into the spotlight.
  </p>
  <p>
    Can't make it to ManaBar Basel? No worries! Tune in to the live stream on <a
      href="https://twitch.com/hardreadch"
      target="_blank"
      class="text-bbyellow">Twitch</a
    > and witness the action unfold from the comfort of your screen.
  </p>
</div>

<div class="flex justify-center mb-12">
  <!-- href="https://www.start.gg/hub/bundesbattle/details" -->
  <!-- target="_blank" -->
  <!-- class="px-4 py-3 text-2xl rounded shadow text-slate-800 bg-bbyellow hover:bg-neutral-800 hover:text-bbyellow font-stencil" -->
  <button
    class="px-4 py-3 text-2xl rounded shadow opacity-60 bg-bbyellow text-slate-800 font-stencil"
    disabled
  >
    LCQ Signup (coming soon)
  </button>
</div>

<div class="my-8">
  <table class="w-full mx-auto table-auto md:w-1/2">
    <thead>
      <tr>
        <th />
        <th class="text-xl text-left uppercase font-stencil">Program</th>
      </tr>
    </thead>
    <tbody class="text-lg">
      <tr>
        <td>13:00</td>
        <td>Door opening</td>
      </tr>
      <tr>
        <td>14:00 - 17:00</td>
        <td>Last Chance Qualifier (LCQ)</td>
      </tr>
      <tr>
        <td>17:30 - 21:30</td>
        <td>Finals</td>
      </tr>
    </tbody>
  </table>
</div>

<div
  class="grid items-center max-w-xl grid-cols-2 gap-5 px-3 mx-auto my-12 justify-items-center"
>
  <div class="col-span-2 text-2xl uppercase font-stencil">Finalists</div>

  <div class="text-xl uppercase font-stencil">Group 1</div>
  <div class="text-xl uppercase font-stencil">Group 2</div>

  <div class="grid grid-cols-4 gap-5">
    <img
      src="/images/wappen/ZH.svg"
      alt="ZH"
      title="Zurich"
      class="w-auto mr-4 justify-self-end h-7"
    />
    <div class="col-span-3 font-bold md:text-xl text-bbyellow">
      HR Calamitas
    </div>

    <img
      src="/images/wappen/BE.svg"
      alt="BE"
      title="Bern"
      class="w-auto mr-4 justify-self-end h-7"
    />
    <div class="col-span-3 font-bold md:text-xl text-bbyellow">Leek</div>

    <img
      src="/images/wappen/ZH.svg"
      alt="ZH"
      title="Zurich"
      class="w-auto mr-4 justify-self-end h-7"
    />
    <div class="col-span-3 font-bold md:text-xl text-bbyellow">
      HR Saltseiya
    </div>

    <img
      src="/images/wappen/LU.svg"
      alt="LU"
      title="Lucern"
      class="w-auto mr-4 justify-self-end h-7"
    />
    <div class="col-span-3 font-bold md:text-xl text-bbyellow">Kyuu</div>

    <div class="col-span-4 font-bold text-center md:text-xl text-bbyellow">
      LCQ Slot
    </div>
  </div>

  <div class="grid grid-cols-4 gap-5">
    <img
      src="/images/wappen/SG.svg"
      alt="SG"
      title="St. Gallen"
      class="w-auto mr-4 justify-self-end h-7"
    />
    <div class="col-span-3 font-bold md:text-xl text-bbyellow">FiveJaw</div>

    <img
      src="/images/wappen/ZH.svg"
      alt="ZH"
      title="Zurich"
      class="w-auto mr-4 justify-self-end h-7"
    />
    <div class="col-span-3 font-bold md:text-xl text-bbyellow">HR Direktor</div>

    <img
      src="/images/wappen/VD.svg"
      alt="VD"
      title="Vaud"
      class="w-auto mr-4 justify-self-end h-7"
    />
    <div class="col-span-3 font-bold md:text-xl text-bbyellow">Elbowings</div>

    <img
      src="/images/wappen/AG.svg"
      alt="AG"
      title="Aargau"
      class="w-auto mr-4 justify-self-end h-7"
    />
    <div class="col-span-3 font-bold md:text-xl text-bbyellow">HR Valiser</div>

    <div class="col-span-4 font-bold text-center md:text-xl text-bbyellow">
      LCQ Slot
    </div>
  </div>
</div>

<div class="mb-8 text-2xl text-center uppercase font-stencil">Details</div>

<div class="text-xl uppercase font-stencil">Last Chance Qualifier (LCQ)</div>
<ul class="pl-6 mb-8 list-disc">
  <li>
    Format:
    <ul class="pl-6 list-disc">
      <li>Double Elimination</li>
      <li>All matches are Best of 3 (First to 2)</li>
    </ul>
  </li>
  <li>
    Qualification:
    <ul class="pl-6 list-disc">
      <li>Winners of Winners Final and Losers Final qualify for the Finals</li>
    </ul>
  </li>
</ul>

<div class="text-xl uppercase font-stencil">Finals</div>
<ul class="pl-6 mb-10 list-disc">
  <li>
    Group Stage:
    <ul class="pl-6 list-disc">
      <li>Two groups, each with 5 players</li>
      <li>Round Robin format</li>
      <li>All matches are Best of 5 (First to 3)</li>
    </ul>
  </li>
  <li>
    Qualification:
    <ul class="pl-6 list-disc">
      <li>Top 2 from each group qualify for the next stage</li>
    </ul>
  </li>
  <li>
    Top 4:
    <ul class="pl-6 list-disc">
      <li>Single Elimination</li>
      <li>Semi-finals and 3rd place match are Best of 7 (First to 4)</li>
      <li>Final is Best of 9 (First to 5)</li>
      <li>Prize pool split is 50/25/15/10</li>
    </ul>
  </li>
</ul>
