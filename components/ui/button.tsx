import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva('inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all', {
  variants: {
    variant: {
      default: 'bg-transparent border-none px-2',
      outline: 'border border-input bg-transparent rounded-[50em]',
      header: 'bg-transparent px-[10px] text-[16px]',
      whiteOutlineArrow: 'border border-input bg-white rounded-[50em] text-[14px] hover:border-[#ddd]',
      blackOutlineArrow: 'border border-input bg-black text-white rounded-[50em] text-[14px] hover:border-[#ddd]',
      onlyIcon: 'px-2',
      textIcon: 'flex flex-col items-center justify-center gap-y-[2px] text-[13px]',
    },
    size: {
      12: 'text-[12px]',
      13: 'text-[13px]',
      14: 'text-[14px]',
      15: 'text-[15px]',
      16: 'text-[16px]',
      18: 'text-[18px]',
      20: 'text-[20px]',
      24: 'text-[24px]',
      26: 'text-[26px]',
      28: 'text-[28px]',
      48: 'text-[48px]',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 14,
  },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = 'Button';

export { Button, buttonVariants };
