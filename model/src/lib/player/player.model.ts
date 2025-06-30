export interface Player {
  id: string;
  title?: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  suffix?: string;
  preferred_name?: string;
  email: string;
  date_of_birth?: string;
  sport?: string;
  sponsorship_goal?: number;
  sponsorship_currency?: string;
  position?: string;
  club?: string;
  division?: string;
  league?: string;
  player_accolades?: any[];    // or a typed array
  sponsorship_perks?: any[];
  primary_address_id?: string;
  billing_address_id?: string;
}
