import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import clsx from "clsx"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-[#1F2A44] text-white hover:bg-[#2D2D2D]",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export function Button({ className, variant, asChild = false, ...props }) {
  // If `asChild` is true, render with <Slot />, otherwise regular <button>
  const Comp = asChild ? Slot : "button"

  return (
    <Comp className={clsx(buttonVariants({ variant }), className)} {...props} />
  )
}
