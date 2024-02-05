import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://myyoxnvhlcexmxnhdmha.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15eW94bnZobGNleG14bmhkbWhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMxOTUwNDIsImV4cCI6MjAxODc3MTA0Mn0.zEyYKDpqfKcocEYe3Q_P_r734pLZcAfhBcZ-pE5o-Ak";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
