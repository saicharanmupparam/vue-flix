import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://ohlgczoocbldqwwpukgn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9obGdjem9vY2JsZHF3d3B1a2duIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0MzY1MjEsImV4cCI6MjAzNTAxMjUyMX0.wNe8U0iPWNodnodlus_M1MAKXw8cSBsHzYd4dMrGWvc'
)
