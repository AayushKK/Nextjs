"use client";

export default function Button({
  children,
  type = "button",
  loading = false,
  className = "",
  bgColor = "bg-red-500",
  hoverColor = "hover:bg-red-600",
  disabledColor = "bg-red-300 cursor-not-allowed",
  textColor = "text-white",
  ...props
}) {
  return (
    <button
      type={type}
      disabled={loading}
      className={`
        px-4 py-2 rounded 
        ${textColor} 
        ${loading ? disabledColor : `${bgColor} ${hoverColor}`} 
        ${className}
      `}
      {...props}
    >
      {loading ? "Submitting..." : children}
    </button>
  );
}