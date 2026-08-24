"use client";

import * as React from "react";
import { Button as ButtonPrimitive, type ButtonProps as BaseButtonProps } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type AsChildProps = {
  asChild?: boolean;
};

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type ButtonProps = Omit<BaseButtonProps, "className"> &
  ButtonVariantProps &
  AsChildProps & {
    className?: string;
  };

/**
 * Polymorphic slot helper（类似 Radix Slot 的轻量实现）：
 * 把子元素（single child）和它接收的 className / 事件合并后渲染。
 * 由于不依赖 @base-ui/react/button 的 render=function 模式，
 * 不会在 RSC / Client 边界上报 "Functions cannot be passed directly"。
 */
const Slot = React.forwardRef<HTMLElement, { className?: string; children: React.ReactNode } & Record<string, unknown>>(
  function Slot({ className, children, ...props }, ref) {
    if (React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        ...props,
        ref,
        className: cn(className, (children as any).props?.className),
      });
    }
    return (
      <span className={className} ref={ref as any} {...props}>
        {children}
      </span>
    );
  }
);

const Button = React.forwardRef<HTMLElement, ButtonProps>(function Button(
  { className, variant, size, asChild, children, render, nativeButton, ...props },
  ref
) {
  const baseVariantClass = buttonVariants({ variant, size, className: undefined });
  const classes = cn(baseVariantClass, className);

  if (asChild) {
    return (
      <Slot ref={ref as any} className={classes} data-slot="button" {...props}>
        {children}
      </Slot>
    );
  }

  return (
    <ButtonPrimitive
      ref={ref as any}
      data-slot="button"
      render={render as any}
      nativeButton={nativeButton}
      className={classes}
      {...props}
    >
      {children}
    </ButtonPrimitive>
  );
});

export { Button, buttonVariants };
export type { ButtonProps };
