"use client";
import { useState } from "react";
export default function AppointmentForm({ onNewAppointment }: { onNewAppointment: () => void }) {
  const [form, setForm] = useState({ name: "", service: "", date: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await fetch("/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ name: "", service: "", date: "" });
    onNewAppointment();
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md bg-white shadow-sm space-y-3">
      <input
        type="text"
        placeholder="Seu nome"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="border p-2 w-full rounded"
        required
      />
      <input
        type="text"
        placeholder="Serviço (ex: Corte de cabelo)"
        value={form.service}
        onChange={(e) => setForm({ ...form, service: e.target.value })}
        className="border p-2 w-full rounded"
        required
      />
      <input
        type="datetime-local"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
        className="border p-2 w-full rounded"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Salvando..." : "Agendar"}
      </button>
    </form>
  );
}
