import {
    ToastViewport,
    ToastProvider,
    Toast as RadixToast,
    ToastTitle,
    ToastDescription,
    ToastClose,
  } from "@radix-ui/react-toast"
  import { Toast } from "./toast"
  import { cn } from "./utils"
  
  export function Toaster() {
    return (
      <ToastProvider>
        <ToastViewport className="fixed bottom-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:max-w-sm" />
      </ToastProvider>
    )
  }
  
  export {
    ToastProvider,
    Toast,
    ToastTitle,
    ToastDescription,
    ToastClose,
  }
  