export interface ScheduledAircraft {
  PrimaryKey: number;
  AC_ID: number;
  Ident: string;
  Booking_ID: number;
  start: string; // "2025-10-10 05:00:00"
  end: string;   // "2025-10-14 04:59:00"
  Status: string;
}

export interface ExternalResponse {
  ServerResponse: 'Success' | string;
  Data: ScheduledAircraft[];
}
