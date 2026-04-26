export function AfricanPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      opacity="0.05"
    >
      <defs>
        <pattern
          id="african-pattern"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          {/* Padrão geométrico africano elaborado */}
          {/* Losangos centrais */}
          <path
            d="M50 10 L70 30 L50 50 L30 30 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M50 50 L70 70 L50 90 L30 70 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          
          {/* Triângulos decorativos */}
          <path
            d="M10 10 L20 20 L10 30 Z M90 10 L80 20 L90 30 Z M10 70 L20 80 L10 90 Z M90 70 L80 80 L90 90 Z"
            fill="currentColor"
            opacity="0.3"
          />
          
          {/* Círculos nos vértices */}
          <circle cx="50" cy="10" r="2" fill="currentColor" />
          <circle cx="70" cy="30" r="2" fill="currentColor" />
          <circle cx="50" cy="50" r="3" fill="currentColor" />
          <circle cx="30" cy="30" r="2" fill="currentColor" />
          <circle cx="30" cy="70" r="2" fill="currentColor" />
          <circle cx="70" cy="70" r="2" fill="currentColor" />
          <circle cx="50" cy="90" r="2" fill="currentColor" />
          
          {/* Linhas decorativas */}
          <path
            d="M0 50 L20 50 M80 50 L100 50"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
          <path
            d="M50 0 L50 20 M50 80 L50 100"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
          
          {/* Pequenos quadrados nos cantos */}
          <rect x="5" y="5" width="6" height="6" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <rect x="89" y="5" width="6" height="6" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <rect x="5" y="89" width="6" height="6" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <rect x="89" y="89" width="6" height="6" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#african-pattern)" />
    </svg>
  );
}

// Padrão africano para bordas/divisores
export function AfricanBorder({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100%"
      height="40"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id="african-border-pattern"
          x="0"
          y="0"
          width="60"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          {/* Padrão de losangos repetidos */}
          <path
            d="M10 20 L30 10 L50 20 L30 30 Z"
            fill="currentColor"
            opacity="0.15"
          />
          <path
            d="M10 20 L30 10 L50 20 L30 30 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.3"
          />
          <circle cx="30" cy="20" r="2" fill="currentColor" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#african-border-pattern)" />
    </svg>
  );
}