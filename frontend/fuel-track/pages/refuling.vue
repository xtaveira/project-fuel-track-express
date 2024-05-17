<template>
  <div class="flex flex-col justify-center items-center">
    <div class="p-20 text-2xl font-bold">
      <h1>Fuel Tracker</h1>
    </div>
    <div class="w-[90%]">
      <div class="flex justify-between items-center">
        <div class="font-bold">
          <h3>Refuling</h3>
        </div>
        <div>
          <h3 class="text-[--primary] text-lg font-bold">vehicleName</h3>
        </div>
      </div>
      <div class="pt-5 flex flex-col gap-1">
        <div class="text-[--primary] flex justify-center items-start flex-col">
          <label for="input" class="font-bold">vehiclePlate</label>
          <input
            type="text"
            id="input"
            name="input"
            class="py-1 px-4 border-2 border-[--primary] w-full rounded-full"
          />
        </div>
        <div class="text-[--primary] flex justify-center items-start flex-col">
          <label for="input" class="font-bold">newKm</label>
          <input
            type="text"
            id="input"
            name="input"
            class="py-1 px-4 border-2 border-[--primary] w-full rounded-full"
          />
        </div>
        <div class="text-[--primary] flex justify-center items-start flex-col">
          <label for="input" class="font-bold">litersRefuled</label>
          <input
            type="text"
            id="input"
            name="input"
            class="py-1 px-4 border-2 border-[--primary] w-full rounded-full"
          />
        </div>
        <div class="text-[--primary] flex justify-center items-start flex-col">
          <label for="input" class="font-bold">refulingDate</label>
          <input
            type="text"
            id="input"
            name="input"
            class="py-1 px-4 border-2 border-[--primary] w-full rounded-full"
          />
        </div>
        <div class="flex justify-between pt-5">
          <button
            class="bg-[--primary] py-2 px-5 rounded-full font-bold text-white"
          >
            Cancel
          </button>
          <button
            class="bg-[--primary] py-2 px-5 rounded-full font-bold text-white"
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
