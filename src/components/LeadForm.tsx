import { useState } from "react";
import type { Lead } from "../types/lead";

interface LeadFormProps {
  onAddLead: (lead: Lead) => void;
}

export default function LeadForm({ onAddLead }: LeadFormProps) {
  const [form, setForm] = useState<Lead>({
    name: "",
    email: "",
    phone: "",
    interest: "",
  });

  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      return setError("Please fill all required fields");
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      return setError("Invalid email format");
    }
    if (!/^\d{10}$/.test(form.phone)) {
      return setError("Phone must be 10 digits");
    }

    onAddLead(form);
    setForm({ name: "", email: "", phone: "", interest: "" });
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-white">
      <h2 className="mb-3">Lead Capture Form</h2>
      {error && <p className="text-danger">{error}</p>}

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="form-control mb-2"
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="form-control mb-2"
      />

      <input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        className="form-control mb-2"
      />

      <input
        name="interest"
        placeholder="Interest"
        value={form.interest || ""}
        onChange={handleChange}
        className="form-control mb-3"
      />

      <button type="submit" className="btn btn-primary w-100">
        Submit
      </button>
    </form>
  );
}
