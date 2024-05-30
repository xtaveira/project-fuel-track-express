<template>
  <div class="flex flex-col justify-start items-center min-h-[100svh]">
    <div class="p-20 text-2xl font-bold">
      <h1>Fuel Tracker</h1>
    </div>
    <div class="w-[90%]" v-if="auth">
      <div class="flex justify-between items-center">
        <div class="font-bold">
          <h3 @click="deleteVehicle">Vehicles</h3>
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
            <NuxtLink
              :to="{ path: '/refuling', query: { vehicle: vehicle._id } }"
            >
              <button
                class="bg-white text-black rounded-full w-[100%] p-4 sm:p-9"
              >
                <img
                  class="max-w-full h-auto"
                  src="/gas-station.png"
                  alt="refuling-icon"
                />
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-[90%] flex justify-center items-center p-20 mt-20 flex-col border-2 border-red-500"
      v-else
    >
      <div class="">Login</div>
    </div>
  </div>
</template>

<script setup eng="ts">
let auth = false;
const vehicles = useState("vehicles", () => []);
const formattedDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString("pt-BR", { day: "2-digit", month: "2-digit" });
};
const deleteVehicle = async () => {
  const vehicleId = prompt("Vehicle id for delete:");
  await fetch(`http://localhost:3001/deleteVehicle/${vehicleId}`);
};
const fetchData = async () => {
  const response = await fetch("http://localhost:3001/");
  const data = await response.json();
  vehicles.value = data;
};
onMounted(async () => {
  await fetchData();
});
</script>
