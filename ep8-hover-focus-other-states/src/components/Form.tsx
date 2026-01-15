"use client";

import React from "react";
import { cn } from "@/lib/utils";

/* =======================
   Form Component
======================= */
const Form = () => {
  return (
    <form className="h-full w-full bg-gray-200 px-8 py-14">
      <h1 className="text-4xl text-center font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-600">
        This is a{" "}
        <span
          className={cn(
            "inline-block relative z-10 text-white",
            "after:content-[''] after:absolute after:inset-0 after:-z-10 after:bg-red-500"
          )}
        >
          crazy
        </span>{" "}
        good form.
      </h1>

      <div className="my-12 flex flex-col gap-8 max-w-sm mx-auto">
        {/* Email */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
      </div>
    </form>
  );
};

/* =======================
   Label Component
======================= */
const Label = ({
  children,
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      {...props}
      className={cn(
        "after:content-['*'] after:ml-0.5 after:text-red-500",
        className
      )}
    >
      {children}
    </label>
  );
};

/* =======================
   Input Component
======================= */
const Input = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={cn(
        "w-full rounded-md border border-gray-200 py-2 px-4",
        "focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2 focus:border-transparent",
        "bg-white shadow-input transition-all duration-200 placeholder:text-neutral-400",
        className
      )}
    />
  );
};

export default Form;
