import * as React from "react"

type ToastType = {
  title: string
  description?: string
  variant?: "error" | "alert" | "success" 
  duration?: number
}

type ToastContextType = {
  toast: (props: ToastType) => void
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined)

export const useToast = () => {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = React.useState<ToastType[]>([])

  const toast = (props: ToastType) => {
    setToasts((prev) => [...prev, props])
    setTimeout(() => {
      setToasts((prev) => prev.slice(1))
    }, props?.duration || 3000)
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed top-4 right-4 space-y-2 z-50">
        {toasts.map((t, i) => (
          <div
            key={i}
            className={`rounded-md border px-4 py-2 shadow ${
              t.variant === "error" ? "bg-red-500 text-white" :
              t.variant === "alert" ? "bg-orange-400 text-white" :
              t.variant === "success" ? "bg-green-500 text-white" 
              : "bg-white text-black"
            }`}
          >
            <strong>{t.title}</strong>
            {t.description && <p className="text-sm">{t.description}</p>}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}
