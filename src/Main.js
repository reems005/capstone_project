import React from 'react';
import './Main.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import React, { useState, useReducer } from "react";

const BookingForm = ({ availableTimes, dispatch }) => {
    // Declare state variables for each form field
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // Submit form data here
      const formData = { date, time, guests, occasion };
      submitForm(formData);
    };
  
    return (
      <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={(e) => {
          dispatch({type: 'updateTimes', payload: e.target.value});
          setDate(e.target.value);
        }} />
  
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
  
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
  
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
  
        <input type="submit" value="Make Your reservation" />
      </form>
    );
  };
  
  const Main = () => {
    const [availableTimes, dispatch] = useReducer(reducer, [], () => {
      return reducer(undefined, { type: "initializeTimes" });
    });
  
    const submitForm = (formData) => {
      // Call submitAPI with form data
      submitAPI(formData)
        .then((response) => {
          // Handle successful response
          console.log(response);
        })
        .catch((error) => {
          // Handle error
          console.error(error);
        });
    };
  
    return (
      <div>
        <h1>Little Lemon Restaurant</h1>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        <h2>Available Times:</h2>
        <ul>
          {availableTimes.map((time) => (
            <li key={time}>{time}</li>
          ))}
        </ul>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
        </div>
    );
  };

export default Main;