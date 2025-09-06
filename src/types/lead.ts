export interface Lead {
  id?: number; // Form submit karte waqt id auto-generate ho sakta hai (optional rakha)
  name: string;
  email: string;
  phone: string;
  interest?: string; // 👈 ab interest field bhi support karega
  status?: "New" | "Contacted" | "Qualified" | "Lost"; // optional banaya
}
