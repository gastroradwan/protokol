// supabase-config.js
const SUPABASE_URL = 'https://srfadohfltldewiexpfg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyZmFkb2hmbHRsZGV3aWV4cGZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM5NjAzNzEsImV4cCI6MjA1OTUzNjM3MX0.hx8FOabs21uUvcmemNNdzxQUUgXZHbWZ3JKBjh6YFB0'; 

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);