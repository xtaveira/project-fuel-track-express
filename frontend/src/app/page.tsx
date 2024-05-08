"use client";

import { useEffect, useState } from "react";

type vehicleType = {
  name: string;
  km: number;
  kmPerLiter: number;
};

export default function Home() {
  const [vehicles, setVehicles] = useState<vehicleType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/");
        const vehicles = await response.json();
        console.log(`vehicles : ${vehicles}`);
        setVehicles(vehicles);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <h1>oi</h1>
      {vehicles &&
        vehicles.map((vehicle, index) => <div key={index}>{vehicle.name}</div>)}
    </main>
  );
}
