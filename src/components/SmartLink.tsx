import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface SmartLinkProps {
  to: string
  children: React.ReactNode
  variant?: 'green' | 'gold' | 'outline'
  className?: string
}

export function SmartLink({ to, children, variant = 'green', className = '' }: SmartLinkProps) {
  return (
    <Link to={to} className={`button button--${variant} ${className}`}>
      {children}
      <ArrowRight size={16} aria-hidden="true" />
    </Link>
  )
}
