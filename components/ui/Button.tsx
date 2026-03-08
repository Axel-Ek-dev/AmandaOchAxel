import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
}

export default function Button({ variant = 'primary', className = '', children, ...rest }: Props) {
  const base = 'rounded-full px-6 py-2.5 font-medium text-sm tracking-wide transition-all duration-200 inline-flex items-center justify-center cursor-pointer'
  const styles = {
    primary:   'bg-forest text-white hover:bg-forest-600 shadow-sm hover:shadow-md',
    secondary: 'bg-transparent border-2 border-forest text-forest hover:bg-beige',
    ghost:     'text-forest hover:text-olive underline-offset-4 hover:underline',
  }[variant]

  return (
    <button className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </button>
  )
}
