import React from 'react'
import Layout from '../components/Layout'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { data } from '../lib/data'
import { useState } from 'react'

const schema = z.object({
  name:           z.string().min(1, 'Obligatoriskt'),
  email:          z.string().email('Ogiltig e-postadress'),
  attending:      z.string(),
  guestCount:     z.number().min(0).max(10).optional(),
  speech:         z.string().optional(),
  accommodation:  z.string().optional(),
  mealPreference: z.string().optional(),
  notes:          z.string().optional(),
})
type FormData = z.infer<typeof schema>

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-forest">{label}</label>
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}

export default function RSVP() {
  const [submitted, setSubmitted]     = useState(false)
  const [submitting, setSubmitting]   = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { attending: 'yes', guestCount: 1 },
  })

  async function onSubmit(values: FormData) {
    const payload = {
      name:           values.name,
      email:          values.email,
      attending:      values.attending === 'yes',
      guestCount:     values.guestCount ?? 1,
      speech:         values.speech === 'yes',
      accommodation:  values.accommodation ?? null,
      mealPreference: values.mealPreference ?? null,
      notes:          values.notes ?? null,
    }
    setSubmitting(true)
    setSubmitError(null)
    try {
      await data.saveRsvp(payload)
      setSubmitted(true)
    } catch (err) {
      console.error('Failed to save RSVP', err)
      setSubmitError('Misslyckades att skicka OSA. Försök igen.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) return (
    <Layout title="OSA — Skickad">
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="text-5xl mb-6">🎉</div>
          <h2 className="font-serif text-4xl text-forest mb-4">Tack!</h2>
          <p className="text-taupe leading-relaxed">
            Din OSA är registrerad. Vi ser så mycket fram emot att träffa dig den 5e september!
          </p>
        </div>
      </div>
    </Layout>
  )

  return (
    <Layout title="OSA">

      {/* Page header */}
      <div className="pt-14 pb-10 text-center border-b border-beige">
        <p className="section-label mb-3">Svara nu</p>
        <h1 className="font-serif text-5xl md:text-6xl text-forest">OSA</h1>
      </div>

      <div className="max-w-xl mx-auto px-6 py-16">
        <p className="text-taupe text-center mb-10 leading-relaxed">
          Vi hoppas att du kan komma! Var snäll och svara senast <strong className="text-forest font-medium">15 april 2026</strong>.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          <Field label="Fullständigt namn" error={errors.name?.message}>
            <input type="text" {...register('name')} placeholder="Ditt namn" />
          </Field>

          <Field label="E-post" error={errors.email?.message}>
            <input type="email" {...register('email')} placeholder="din@email.se" />
          </Field>

          <Field label="Närvaro">
            <select {...register('attending')}>
              <option value="yes">Ja, jag kommer!</option>
              <option value="no">Nej, tyvärr kan jag inte</option>
            </select>
          </Field>

          <Field label="Antal gäster (inkl. dig själv)">
            <input type="number" {...register('guestCount', { valueAsNumber: true })} min={1} max={10} />
          </Field>

          <Field label="Måltidsval eller allergier">
            <select {...register('mealPreference')}>
              <option value="No preference">Inga preferenser</option>
              <option value="vegetarian">Vegetarisk</option>
              <option value="vegan">Vegansk</option>
              <option value="allergy">Allergier (ange i meddelande)</option>
              <option value="other">Annat (ange i meddelande)</option>
            </select>
          </Field>

          <Field label="Vill du hålla tal, framföra ett dåligt skämt eller spexa till det lite? Toastmaster kommer kontakta dig på din angivna email för planering.">
            <select {...register('speech')}>
              <option value="no">Nej</option>
              <option value="yes">Ja, gärna!</option>
            </select>
          </Field>

          <Field label="Meddelande (valfritt)">
            <textarea {...register('notes')} placeholder="Allergier, hälsningar eller annat…" />
          </Field>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-forest text-white py-3 text-sm font-medium tracking-wide hover:bg-forest-600 transition-colors disabled:opacity-60 shadow-sm hover:shadow-md"
          >
            {submitting ? 'Skickar…' : 'Skicka OSA'}
          </button>

          {submitError && <p className="text-red-500 text-sm text-center">{submitError}</p>}
        </form>
      </div>
    </Layout>
  )
}
