import { useState, type ImgHTMLAttributes } from 'react'

interface SmartImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
}

export function SmartImage({ src, alt, className = '', loading = 'lazy', ...props }: SmartImageProps) {
  const [failedSrc, setFailedSrc] = useState<string>()

  return (
    <img
      {...props}
      src={failedSrc === src ? '/images/fallback.svg' : src}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => setFailedSrc(src)}
    />
  )
}
