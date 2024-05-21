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
          <h3 class="text-[--primary] text-lg font-bold">
            {{ vehicle?.name }}
          </h3>
        </div>
      </div>
      <div class="pt-5 flex flex-col gap-1">
        <div class="text-[--primary] flex justify-center items-start flex-col">
          <div class="flex w-full gap-20">
            <label for="vehiclePlate" class="font-bold">vehiclePlate</label>
            <p v-if="!formSubmittedSuccessfully.value" class="text-red-500">
              placa incorreta
            </p>
          </div>
          <input
            v-model="formData.vehiclePlate"
            type="text"
            id="vehiclePlate"
            name="vehiclePlate"
            class="py-1 px-4 border-2 border-[--primary] w-full rounded-full"
          />
        </div>
        <div class="text-[--primary] flex justify-center items-start flex-col">
          <label for="newKm" class="font-bold">newKm</label>
          <input
            v-model="formData.newKm"
            type="text"
            id="newKm"
            name="newKm"
            class="py-1 px-4 border-2 border-[--primary] w-full rounded-full"
          />
        </div>
        <div class="text-[--primary] flex justify-center items-start flex-col">
          <label for="litersRefuled" class="font-bold">litersRefuled</label>
          <input
            v-model="formData.litersRefuled"
            type="text"
            id="litersRefuled"
            name="litersRefuled"
            class="py-1 px-4 border-2 border-[--primary] w-full rounded-full"
          />
        </div>
        <div class="text-[--primary] flex justify-center items-start flex-col">
          <label for="refuelingDate" class="font-bold">refulingDate</label>
          <input
            v-model="formData.refuelingDate"
            type="text"
            id="refuelingDate"
            name="refuelingDate"
            class="py-1 px-4 border-2 border-[--primary] w-full rounded-full"
          />
        </div>
        <div class="flex justify-between pt-5">
          <NuxtLink to="/">
            <button
              class="bg-[--primary] py-2 px-5 rounded-full font-bold text-white"
            >
              Cancel
            </button>
          </NuxtLink>
          <button
            @click="handleFinishButtonClick"
            class="bg-[--primary] py-2 px-5 rounded-full font-bold text-white"
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const vehicle = useState();
const vehicleId = route.query.vehicle;
const formSubmittedSuccessfully = useState(() => true);
const formData = useState(() => {
  return {
    vehiclePlate: "",
    newKm: "",
    litersRefuled: "",
    refuelingDate: "",
  };
});

const resetForm = () => {
  formData.value.vehiclePlate = "";
  formData.value.newKm = "";
  formData.value.litersRefuled = "";
  formData.value.refuelingDate = "";
};

const handleFinishButtonClick = () => {
  console.log(formData.value);

  if (formData.value.vehiclePlate != vehicle.value.plate) {
    formSubmittedSuccessfully.value = false;
    console.log("placa digitada errado");
    console.log("placa digitada: " + formData.value.vehiclePlate);
    console.log("placa certa: " + vehicle.value.plate);
  } else {
    console.log("veiculo certo");
    formSubmittedSuccessfully.value = true;
  }

  if (formSubmittedSuccessfully.value) {
    router.push("/");
  }
  resetForm();
};

onMounted(async () => {
  try {
    const response = await fetch(
      `http://localhost:3001/findVehicle/${vehicleId}`
    );
    vehicle.value = await response.json();
    formSubmittedSuccessfully.value = true;
  } catch (error) {
    console.log("Failed to fetch vehicle " + error.message);
  }
});
</script>
