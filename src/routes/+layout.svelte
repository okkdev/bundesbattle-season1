<script>
  import "../app.css"

  let mobileMenuOpen = false
</script>

<nav class="bg-neutral-800">
  <div class="mx-auto max-w-7xl px-2 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center">
        <div class="hidden lg:ml-6 lg:block">
          <div class="flex space-x-4">
            <a
              href="/basel"
              class="hover:bg-bbyellow hover:text-slate-800 rounded-md px-3 py-2 text-sm font-medium"
              >Basel</a
            >
            <a
              href="/zurich"
              class="hover:bg-bbyellow hover:text-slate-800 rounded-md px-3 py-2 text-sm font-medium"
              >Zürich</a
            >
            <a
              href="/direct-qualifiers"
              class="hover:bg-bbyellow hover:text-slate-800 rounded-md px-3 py-2 text-sm font-medium"
              >Direct Qualifiers</a
            >
            <a
              href="/finals"
              class="hover:bg-bbyellow hover:text-slate-800 rounded-md px-3 py-2 text-sm font-medium"
              >Finals</a
            >
          </div>
        </div>

        <!-- Mobile menu button-->
        <button
          type="button"
          class="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-bbyellow lg:hidden hover:text-slate-800"
          aria-controls="mobile-menu"
          aria-expanded="false"
          on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
        >
          <span class="absolute -inset-0.5" />
          <span class="sr-only">Open main menu</span>
          {#if mobileMenuOpen}
            <svg
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          {:else}
            <svg
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          {/if}
        </button>
      </div>

      <div class="flex flex-1 items-center justify-center">
        <div class="flex flex-shrink-0 items-center">
          <a href="/">
            <img
              src="images/bundesbattle-logo.svg"
              alt="BundesBattle Logo"
              class="h-8 w-auto"
            />
          </a>
        </div>
      </div>
    </div>
  </div>

  {#if mobileMenuOpen}
    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="lg:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <a
          href="/basel"
          class="hover:bg-bbyellow hover:text-slate-800 block rounded-md px-3 py-2 text-base font-medium"
          >Basel</a
        >
        <a
          href="/zurich"
          class="hover:bg-bbyellow hover:text-slate-800 block rounded-md px-3 py-2 text-base font-medium"
          >Zürich</a
        >
        <a
          href="/direct-qualifiers"
          class="hover:bg-bbyellow hover:text-slate-800 block rounded-md px-3 py-2 text-base font-medium"
          >Direct Qualifiers</a
        >
        <a
          href="/finals"
          class="hover:bg-bbyellow hover:text-slate-800 block rounded-md px-3 py-2 text-base font-medium"
          >Finals</a
        >
      </div>
    </div>
  {/if}
</nav>

<main class="container mx-auto mt-4 max-w-4xl">
  <slot />
</main>
