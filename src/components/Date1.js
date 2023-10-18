import React from 'react'
import {
    Datepicker,
    Input,
    initTE,
  } from "tw-elements";

function Date1() {

      
      initTE({ Datepicker, Input });
      
      const datepickerWithFilter = document.getElementById('datepicker-disabled-dates');
   

      const filterFunction = (date) => {
        const isSaturday = date.getDay() === 6;
        const isSunday = date.getDay() === 0;
      
        return !isSaturday && !isSunday;
      }
      
      new Datepicker(datepickerWithFilter, { filter: filterFunction });
  return (
    <div
    class="relative mb-3"
    id="datepicker-disabled-dates"
    data-te-input-wrapper-init>
    <input
      type="text"
      class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
      placeholder="Select a date" />
    <label
      for="floatingInput"
      class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
      >Select a date</label
    >
  </div>
  );
}

export default Date1