import { createClient } from '@supabase/supabase-js'
import type { SupabaseClient } from '@supabase/supabase-js'

/**
 * Explicitly type the Supabase client to avoid excessive type-instantiation
 * issues from deep generic inference in @supabase/supabase-js.
 */
let supabase: SupabaseClient<any, 'public', any> | null = null

export function getSupabaseClient(): SupabaseClient<any, 'public', any> | null {
  // Only initialize in the browser (GitHub Pages is static; avoid SSR/build-time initialization)
  if (typeof window === 'undefined') {
    return null
  }
  if (supabase) return supabase
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) {
    console.error('Supabase not configured: missing NEXT_PUBLIC_SUPABASE_URL and/or NEXT_PUBLIC_SUPABASE_ANON_KEY')
    return null
  }
  try {
    // Provide explicit generics to `createClient` to prevent deep generic inference
    supabase = createClient<any, 'public', any>(url, key)
  } catch (err) {
    console.error('Failed to create Supabase client', err)
    return null
  }
  return supabase
}
