import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const lumieButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-elegant focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        hero: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:-translate-y-1 hover:shadow-md",
        ocean: "gradient-ocean text-white shadow-soft hover:shadow-elegant hover:scale-105",
        coral: "bg-lumie-coral text-white shadow-soft hover:bg-lumie-coral/90 hover:-translate-y-1",
        elegant: "gradient-elegant text-primary shadow-soft hover:shadow-elegant hover:scale-105",
        outline: "border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-soft", 
        ghost: "text-primary hover:bg-muted hover:text-primary transition-smooth",
        link: "text-primary underline-offset-4 hover:underline transition-smooth"
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2 text-xs",
        lg: "h-14 px-8 py-4 text-base",
        xl: "h-16 px-10 py-5 text-lg",
        icon: "h-12 w-12"
      }
    },
    defaultVariants: {
      variant: "hero",
      size: "default"
    }
  }
)

export interface LumieButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof lumieButtonVariants> {
  asChild?: boolean
}

const LumieButton = React.forwardRef<HTMLButtonElement, LumieButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(lumieButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
LumieButton.displayName = "LumieButton"

export { LumieButton, lumieButtonVariants }