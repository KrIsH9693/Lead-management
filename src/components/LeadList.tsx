import type { Lead } from "../types/lead";

interface LeadListProps {
  leads: Lead[];
}

export default function LeadList({ leads }: LeadListProps) {
  return (
    <div className="mt-4">
      <h2 className="mb-3">Leads</h2>
      {leads.length === 0 ? (
        <p className="text-muted">No leads yet</p>
      ) : (
        <ul className="list-group">
          {leads.map((lead, i) => (
            <li key={i} className="list-group-item">
              <strong>{lead.name}</strong> ({lead.email}, {lead.phone})  
              {lead.interest && <span> - {lead.interest}</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
