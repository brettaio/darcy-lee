export interface Accolade {
  team: string;
  year: number;
  award: string;
}

export interface Perk {
  item: string;
  description: string;    
}

export interface Player {
  id: string;
  title: string;
  first_name: string;
  middle_name?: string|null;
  last_name: string;
  suffix?: string|null;
  preferred_name?: string|null;
  email: string;
  date_of_birth?: string;
  sport?: string;
  position?: string;
  club?: string;
  sponsorship_currency?: string;
  sponsorship_goal?: number;
  total_sponsorships?: number;
  sponsorship_target?: number;
  is_goal_met?: boolean;

  player_accolades?: { team:string; year: number; award: string }[];
  sponsorship_perks?: { item:string; description: string } [];
}
