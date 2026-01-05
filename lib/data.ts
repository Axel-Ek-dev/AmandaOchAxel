import { getSupabaseClient } from './supabase'

export type RSVP = {
  id: string
  name: string
  email: string
  attending: boolean
  guestCount: number
  mealPreference?: string | null
  notes?: string | null
  createdAt: string
}

export type Gift = {
  id: string
  name: string
  description?: string
  imageUrl?: string
  link?: string
  reserved?: boolean
  reservedBy?: string | null
  createdAt?: string
}

// DataService: uses Supabase if configured, otherwise falls back to localStorage + public JSON
export const data = {
  async listGifts(): Promise<Gift[]> {
    const SUPABASE = getSupabaseClient()
    if (SUPABASE) {
      const { data: gifts, error } = await SUPABASE.from('gifts').select('*')
      if (error) throw error
      return (gifts as Gift[]) || []
    }
    // fallback: fetch public data file using relative path (works on GitHub Pages subpaths)
    try {
      const res = await fetch('./data/gifts.json')
      if (!res.ok) {
        console.error('Failed to fetch local gifts.json:', res.status, res.statusText)
        return []
      }
      const list = await res.json()
      return list as Gift[]
    } catch (err) {
      console.error('Error fetching local gifts.json', err)
      return []
    }
  },

  async listRsvps(): Promise<RSVP[]> {
    const SUPABASE = getSupabaseClient()
    if (SUPABASE) {
      const { data: rsvps, error } = await SUPABASE.from('rsvps').select('*').order('createdAt', { ascending: false })
      if (error) throw error
      return (rsvps as RSVP[]) || []
    }
    const raw = localStorage.getItem('demo_rsvps')
    if (!raw) return []
    return JSON.parse(raw) as RSVP[]
  },

  async saveRsvp(payload: Omit<RSVP, 'id' | 'createdAt'>): Promise<RSVP> {
    const SUPABASE = getSupabaseClient()
    if (SUPABASE) {
      const { data: created, error } = await SUPABASE.from('rsvps').insert([{ ...payload }]).select().single()
      if (error) throw error
      return created as RSVP
    }
    const list = (await this.listRsvps()) as RSVP[]
    const item: RSVP = {
      ...payload,
      id: 'r_' + Date.now(),
      createdAt: new Date().toISOString()
    }
    list.unshift(item)
    localStorage.setItem('demo_rsvps', JSON.stringify(list))
    return item
  },

  async reserveGift(giftId: string, name?: string | null): Promise<Gift> {
    const SUPABASE = getSupabaseClient()
    if (SUPABASE) {
      const { data: updated, error } = await SUPABASE.from('gifts').update({ reserved: true, reservedBy: name }).eq('id', giftId).select().single()
      if (error) throw error
      return updated as Gift
    }
    const gifts = await this.listGifts()
    const g = gifts.find((x) => x.id === giftId)
    if (!g) throw new Error('Not found')
    g.reserved = true
    g.reservedBy = name || null
    // store in localStorage for demo
    localStorage.setItem('demo_gifts', JSON.stringify(gifts))
    return g
  },

  async unreserveGift(giftId: string) {
    const SUPABASE = getSupabaseClient()
    if (SUPABASE) {
      const { data: updated, error } = await SUPABASE.from('gifts').update({ reserved: false, reservedBy: null }).eq('id', giftId).select().single()
      if (error) throw error
      return updated as Gift
    }
    const gifts = await this.listGifts()
    const g = gifts.find((x) => x.id === giftId)
    if (!g) throw new Error('Not found')
    g.reserved = false
    g.reservedBy = null
    localStorage.setItem('demo_gifts', JSON.stringify(gifts))
    return g
  }
}
