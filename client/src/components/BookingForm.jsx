import React, { useState } from "react";
import DatePicker from "react-datepicker";

const BookingForm = ({ dailyPrice }) => {
  const [pickupDate, setPickupDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  return (
    <form className="py-5">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-accent font-semibold text-2xl">${dailyPrice}</h3>
        <p className="text-input-placeholder">per day</p>
      </div>

      <hr className="my-6 border-none h-[0.5px] bg-input-placeholder" />

      {/* Pickup Date */}
      <div className="w-full flex flex-col items-start space-y-1 mb-5">
        <label htmlFor="pickupdate" className="text-sm text-input-placeholder">
          Pick-up Date
        </label>
        <DatePicker
          selected={pickupDate}
          onChange={(date) => setPickupDate(date)}
          placeholderText="Pickup Date"
          className="w-full block bg-input-bg text-input-text border border-input-border rounded px-4 py-2 outline-none"
        />
      </div>

      {/* Return Date */}
      <div className="w-full flex flex-col items-start space-y-1 mb-5">
        <label htmlFor="returndate" className="text-sm text-input-placeholder">
          Return Date
        </label>
        <DatePicker
          selected={returnDate}
          onChange={(date) => setReturnDate(date)}
          placeholderText="Return Date"
          className="w-full bg-input-bg text-input-text border border-input-border rounded px-4 py-2 outline-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-accent hover:bg-accent-hover text-primary-bg font-bold py-2 px-6 rounded-md transition cursor-pointer"
      >
        Book Now
      </button>
    </form>
  );
};

export default BookingForm;
