import { useState } from "react";
import IconPlus from "../../icons/IconPlus";
import IconMinus from "../../icons/IconMinus";

function validateEmptyInputs(name, email, date, time, people) {
  let nameError = false;
  let emailError = false;
  let dateError = false;
  let timeError = false;
  let peopleError = false;

  if (!name || name?.length === 0) {
    nameError = true;
  }
  if (!email || email?.length === 0) {
    emailError = true;
  }
  if (!date.day || date?.day?.length === 0) {
    dateError = true;
  }
  if (!date.month || date?.month?.length === 0) {
    dateError = true;
  }
  if (!date.year || date?.year?.length === 0) {
    dateError = true;
  }
  if (!time.hour || time?.hour?.length === 0) {
    timeError = true;
  }
  if (!time.minute || time?.minute?.length === 0) {
    timeError = true;
  }
  if (
    !time.period ||
    (time?.period?.length === 0 &&
      (time?.period === "AM" || time?.period == "PM"))
  ) {
    timeError = true;
  }
  if (!people || people?.length === 0) {
    peopleError = true;
  }

  return {
    nameError,
    emailError,
    dateError,
    timeError,
    peopleError,
  };
}

function ReservationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState({ day: "", month: "", year: "" });
  const [time, setTime] = useState({ hour: "", minute: "", period: "AM" });
  const [people, setPeople] = useState(4);
  const [errors, setErrors] = useState({});

  function handlePeopleChange(change) {
    if (people + change > 0) {
      setPeople(people + change);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const errorResponse = validateEmptyInputs(name, email, date, time, people);
    setErrors(errorResponse);
  }

  function appendZero(value) {
    return value.length === 1 ? `0${value}` : value;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[327px] md:w-[540px] bg-[#fff] p-10 shadow-2xl flex flex-col gap-8"
      id="form"
    >
      <div className="relative">
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className={`w-full  ${
            errors.nameError
              ? "border-[#B54949] placeholder:text-[#B54949]/50"
              : "border-[#8e8e8e]"
          } border-b h-11 p-4 text-darkBlack focus:outline-none focus:border-darkBlack`}
        />
        {errors.nameError && (
          <span className="text-[10px] font-medium text-[#B54949] px-4 absolute left-0 -bottom-5">
            This field is required
          </span>
        )}
      </div>

      <div className="relative">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={`w-full  ${
            errors.emailError
              ? "border-[#B54949] placeholder:text-[#B54949]/50"
              : "border-[#8e8e8e]"
          } border-b h-11 p-4 text-darkBlack focus:outline-none focus:border-darkBlack`}
        />
        {errors.emailError && (
          <span className="text-[10px] font-medium text-[#B54949] px-4 absolute left-0 -bottom-5">
            This field is required
          </span>
        )}
      </div>

      <div
        className={`flex flex-col md:flex-row md:items-end justify-between ${
          errors.dateError
            ? "text-[#B54949] [&>*>input]:placeholder:text-[#B54949]/50 [&>*>input]:border-[#B54949]"
            : "text-darkBlack [&>*>input]:placeholder:text-darkBlack/50 [&>*>input]:border-[#8e8e8e]"
        }`}
      >
        <label className="relative body-text">
          Pick a date
          {errors.dateError && (
            <span className="text-[10px] font-medium absolute left-0 truncate min-w-fit -bottom-5">
              This field is incomplete
            </span>
          )}
        </label>
        <div className="flex gap-4">
          <input
            type="number"
            placeholder="DD"
            min={1}
            max={31}
            value={date.day}
            onChange={(e) =>
              setDate({
                ...date,
                day: appendZero(e.target.value),
              })
            }
            className="w-20 h-11 border-[#8e8e8e] border-b p-4"
          />
          <input
            type="number"
            placeholder="MM"
            min={1}
            max={12}
            value={date.month}
            onChange={(e) =>
              setDate({ ...date, month: appendZero(e.target.value) })
            }
            className="w-20 h-11 border-[#8e8e8e] border-b p-4"
          />
          <input
            type="number"
            min={2025}
            max={2026}
            placeholder="YYYY"
            value={date.year}
            onChange={(e) => setDate({ ...date, year: e.target.value })}
            className="w-24 h-11 border-[#8e8e8e] border-b p-4"
          />
        </div>
      </div>

      <div
        className={`flex flex-col md:flex-row md:items-end justify-between ${
          errors.timeError
            ? "text-[#B54949] [&>*>input]:placeholder:text-[#B54949]/50 [&>*>select]:placeholder:text-[#B54949]/50 [&>*>select]:border-[#B54949] [&>*>input]:border-[#B54949]"
            : "text-darkBlack [&>*>input]:placeholder:text-darkBlack/50 [&>*>select]:placeholder:text-darkBlack/50 [&>*>select]:border-[#8e8e8e] [&>*>input]:border-[#8e8e8e]"
        }`}
      >
        <label className="relative body-text">
          Pick a time
          {errors.timeError && (
            <span className="text-[10px] font-medium absolute left-0 truncate min-w-fit -bottom-5">
              This field is incomplete
            </span>
          )}
        </label>
        <div className="flex gap-4">
          <input
            type="number"
            min={1}
            max={12}
            placeholder="09"
            value={time.hour}
            onChange={(e) =>
              setTime({ ...time, hour: appendZero(e.target.value) })
            }
            className="w-20 h-11 border-b p-4"
          />
          <input
            type="number"
            min={0}
            max={59}
            placeholder="00"
            value={time.minute}
            onChange={(e) =>
              setTime({ ...time, minute: appendZero(e.target.value) })
            }
            className="w-20 h-11 border-b p-4"
          />
          <select
            value={time.period}
            onChange={(e) => setTime({ ...time, period: e.target.value })}
            className="w-24 h-11 border-b p-4"
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
      </div>

      <div className="">
        <label className="sr-only">Number of people</label>
        <div className="flex items-center justify-between h-10 border-[#8e8e8e] border-b p-8">
          <button
            type="button"
            onClick={() => handlePeopleChange(-1)}
            className="p-2 hover:opacity-50"
          >
            <IconMinus />
          </button>
          <span className="text-[#151515] font-bold text-[20px] leading-[24px] tracking-[-0.25px]">
            {people} {people === 1 ? "person" : "people"}
          </span>
          <button
            type="button"
            onClick={() => handlePeopleChange(1)}
            className="p-2 hover:opacity-50"
          >
            <IconPlus />
          </button>
        </div>
      </div>
      <button
        type="submit"
        className="w-full uppercase font-semibold text-[17px] leading-[28px] tracking-[2.5px] text-[#fff] hover:text-darkBlack bg-darkBlack hover:bg-[#fff] border border-transparent hover:border-darkBlack h-16"
      >
        Make Reservation
      </button>
    </form>
  );
}

export default ReservationForm;
