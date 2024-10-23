
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://usigfxoswgdwdzolotlu.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzaWdmeG9zd2dkd2R6b2xvdGx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk0Mzg1MDgsImV4cCI6MjA0NTAxNDUwOH0.BnpxE7XjPW9jw61dRMl6iyBTy7pd7VKBwCB5bdof_VI"
export const supabase = createClient(supabaseUrl, supabaseKey)
