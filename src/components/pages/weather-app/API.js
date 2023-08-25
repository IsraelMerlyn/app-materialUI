import { useState } from "react";

export const API = () => {
  const API_WEATHER = `http://api.weatherapi.com/v1/current.json?key=${
    import.meta.env.VITE_API_KEY
  }&lang=es&q=`;

  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temperature: 0,
    condition: "",
    conditionText: "",
    icon: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log("submit");

    setError({
      error: false,
      message: error.message,
    });
    setLoading(true);

    try {
      if (!city.trim()) throw { message: "El campo ciudad es obligatorio " };

      const res = await fetch(API_WEATHER + city);
      const data = await res.json();
      if (data.error) {
        throw { message: data.error.message };
      }
      console.log(data);
      setWeather({
        city: data.location.name,
        country: data.location.country,
        temperature: data.current.temp_c,
        condition: data.current.condition.code,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon,
      });
    } catch (error) {
      console.log(error);
      setError({
        error: true,
        message: error.message,
      });
    } finally {
      setLoading(false);
    }
  };
  return {
    onSubmit,
    city,
    setCity,
    loading,
    setLoading,
    weather,
    error,
    setError,
    setWeather,
  };
};
