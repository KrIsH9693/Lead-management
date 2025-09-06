import { useState } from "react";
import LeadForm from "./components/LeadForm";
import LeadList from "./components/LeadList";
import type { Lead } from "./types/lead";


export default function App() {
  const [leads, setLeads] = useState<Lead[]>([]);

  const addLead = (lead: Lead) => {
    setLeads([lead, ...leads]);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <LeadForm onAddLead={addLead} />
      <LeadList leads={leads} />
    </div>
  );
}
