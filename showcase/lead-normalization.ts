export interface RawLead {
  email?: string | null;
  name?: string | null;
  company?: string | null;
  source?: string | null;
}

export interface Lead {
  email: string;
  name?: string;
  company?: string;
  source?: string;
}

export function normalizeLead(input: RawLead): Lead | null {
  const email = input.email?.trim().toLowerCase();

  if (!email || !email.includes("@")) {
    return null;
  }

  return {
    email,
    name: input.name?.trim() || undefined,
    company: input.company?.trim() || undefined,
    source: input.source?.trim() || undefined,
  };
}
