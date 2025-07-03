import { useState } from "react";

const CarSearchBox = () => {
  const [searchCar, setSearchCar] = useState("");

  const handleOnChange = (e) => {
    setSearchCar(e.target.value);
  };

  return (
    <div className="max-w-[500px] mx-auto bg-secondary-bg flex items-center gap-1.5 px-4 py-2 rounded-full">
      <img
        src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.8359%2010.6152L14.9999%2014.6949'%20stroke='%237A7B7D'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.14099%2011.7381C11.8699%2010.6019%2013.142%207.51376%2011.9822%204.84043C10.8224%202.1671%207.67004%200.920959%204.94113%202.0571C2.21222%203.19324%200.940171%206.28142%202.09993%208.95475C3.25969%2011.6281%206.41208%2012.8742%209.14099%2011.7381Z'%20stroke='%237A7B7D'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
        alt="Search Icon"
      />

      <input
        type="text"
        value={searchCar}
        onChange={handleOnChange}
        required
        placeholder="Search by car name..."
        className="capitalize w-full border-none outline-none"
      />
    </div>
  );
};

export default CarSearchBox;
