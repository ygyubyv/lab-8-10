import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("❌ Всі поля є обов'язковими!", { position: "top-right" });
      return;
    }
    if (!validateEmail(formData.email)) {
      toast.error("❌ Невірний формат email!", { position: "top-right" });
      return;
    }
    onSubmit(formData);
    toast.success("✅ Бронювання успішно збережено!", {
      position: "top-right",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Ім'я"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Телефон"
        value={formData.phone}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Підтвердити бронювання</button>
    </form>
  );
};

export default BookingForm;
