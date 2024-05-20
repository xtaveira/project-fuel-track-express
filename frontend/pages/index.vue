<template>
  <div class="flex flex-col justify-center items-center">
    <div class="p-20 text-2xl font-bold">
      <h1>Fuel Tracker</h1>
    </div>
    <div class="w-[90%]">
      <div class="flex justify-between items-center">
        <div class="font-bold">
          <h3>Vehicles</h3>
        </div>
        <div>
          <NuxtLink to="/new-vehicle">
            <button
              class="bg-[--primary] py-2 px-3 rounded-full font-bold text-white"
            >
              New Vehicle
            </button>
          </NuxtLink>
        </div>
      </div>
      <div class="pt-5" v-for="vehicle in vehicles" :key="vehicle.id">
        <div
          class="bg-[--primary] rounded-lg text-white flex justify-between p-3 items-center md:px-20"
        >
          <div class="font-thin">
            <h3 class="font-bold text-[1.1rem]">{{ vehicle.name }}</h3>
            <p>{{ vehicle.kmPerLiter }} Km/l</p>
            <p>Last Refuling: {{ formattedDate(vehicle.updatedAt) }}</p>
          </div>
          <div class="w-[25%] max-w-[200px]">
            <NuxtLink :vehicle="vehicle" to="/refuling">
              <button
                class="bg-white text-black rounded-full w-[100%] p-4 sm:p-9"
              >
                <img src="../public/gas-station.png" alt="refuling-icon" />
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup eng="ts">
defineProps({
  vehicle: any,
});

const vehicles = useState("vehicles", () => []);
const formattedDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString("pt-BR", { day: "2-digit", month: "2-digit" });
};
onMounted(async () => {
  const fetchData = async () => {
    const response = await fetch("http://localhost:3001/");
    const data = await response.json();
    vehicles.value = data;
  };
  fetchData();
});
</script>
