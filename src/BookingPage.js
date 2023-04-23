const BookingForm = () => {
    // Declare state variables for each form field
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");
    const [availableTimes, setAvailableTimes] = useState([]);
  
    // Fetch available times for today's date on component mount
    useEffect(() => {
      const today = new Date();
      fetchAPI(today).then((times) => {
        setAvailableTimes(times);
        setTime(times[0]);
      });
    }, []);
  
    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      // Submit form data here
      const formData = { date, time, guests, occasion };
      const success = await submitAPI(formData);
      console.log(success);
    };
  
    // Update available times when date changes
    const handleDateChange = (e) => {
      const selectedDate = new Date(e.target.value);
      fetchAPI(selectedDate).then((times) => {
        setAvailableTimes(times);
        setTime(times[0]);
      });
      setDate(e.target.value);
    };
  
    return (
      <form
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          min={new Date().toISOString().split("T")[0]} // Prevent selection of past dates
          required // Field is required
        />
  
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required // Field is required
        >
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
          min="1" // Minimum value is 1
          max="10" // Maximum value is 10
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required // Field is required
        />
  
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
  
        <input type="submit" value="Make Your reservation" />
      </form>
    );
  };
  