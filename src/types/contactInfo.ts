export interface ContactInfoIn {
  _id: string;
  phone?: string;
  email?: string;
  address?: {
    street?: string;
    postNumber?: string;
    municipality?: string;
  };
  openingHours?: {
    days?: string;
    time?: string;
  };
}
