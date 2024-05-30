<template>
  <div class="flex flex-col justify-center items-center">
    <div class="p-20 text-2xl font-bold">
      <h1>Fuel Tracker</h1>
    </div>
    <div class="w-[90%]">
      <div class="flex justify-center items-center">
        <div>
          <h3 class="text-[--primary] text-2xl font-bold">newVehicle</h3>
        </div>
      </div>
      <div class="pt-5 flex flex-col gap-1">
        <div class="text-[--primary] flex justify-center items-start flex-col">
          <label for="vehicleName" class="font-bold">vehicleName</label>
          <input
            v-model="formData.vehicleName"
            type="text"
            id="vehicleName"
            name="vehicleName"
            class="py-1 px-4 border-2 border-[--primary] w-full rounded-full"
          />
        </div>
        <div class="text-[--primary] flex justify-center items-start flex-col">
          <label for="vehiclePlate" class="font-bold">vehiclePlate</label>
          <input
            v-model="formData.vehiclePlate"
            type="text"
            id="vehiclePlate"
            name="vehiclePlate"
            class="py-1 px-4 border-2 border-[--primary] w-full rounded-full"
          />
        </div>
        <div class="text-[--primary] flex justify-center items-start flex-col">
          <label for="km" class="font-bold">km</label>
          <input
            v-model="formData.km"
            type="text"
            id="km"
            name="km"
            class="py-1 px-4 border-2 border-[--primary] w-full rounded-full"
          />
        </div>
        <div v-if="formAlert" class="w-full text-center pt-5 text-red-500">
          <p>(todos campos são obrigatórios)</p>
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
            @click="handleButtonFinish"
            class="bg-[--primary] py-2 px-5 rounded-full font-bold text-white"
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const formAlert = useState(() => false);
const formData = useState(() => {
  return {
    vehicleName: "",
    vehiclePlate: "",
    km: "",
  };
});

const resetForm = () => {
  formData.value = {
    vehicleName: "",
    vehiclePlate: "",
    km: "",
  };
};

const addNewVehicle = async (formData) => {
  const vehicle = {
    name: formData.vehicleName,
    plate: formData.vehiclePlate,
    km: formData.km,
  };
  console.log(vehicle);
  try {
    await fetch("http://localhost:3001/newVehicle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vehicle),
    });
  } catch (error) {
    console.log(error);
  }
};

const handleButtonFinish = () => {
  console.log(formData.value);
  if (
    formData.value.km &&
    formData.value.vehicleName &&
    formData.value.vehiclePlate
  ) {
    console.log("tudo preenchido");
    addNewVehicle(formData.value);
    resetForm();
    router.push("/");
    formAlert.value = false;
  } else {
    console.log(formAlert.value);
    console.log("falta preencher");
    formAlert.value = true;
    console.log(formAlert.value);
  }
};

onMounted(() => (formAlert.value = false));
</script>
