import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://tqufhiptbueoyksqmlkq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxdWZoaXB0YnVlb3lrc3FtbGtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxOTQ4ODYsImV4cCI6MjA3Nzc3MDg4Nn0.ThLEsqvyU_joF8xiUzWcEhfq75X4Ua7B2qUAn4ZaVVU';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
