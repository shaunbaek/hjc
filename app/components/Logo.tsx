import React from "react";

export default function Logo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" rx="10" fill="#B7D0A4" />
      <path 
        d="M20 30H35V70H20V60H30V55H20V45H30V40H20V30Z" 
        fill="#9A8270" 
      />
      <path 
        d="M40 30H55V40H45V45H55V55H45V60H55V70H40V30Z" 
        fill="#9A8270" 
      />
      <path 
        d="M60 30H80C82.7614 30 85 32.2386 85 35V45C85 47.7614 82.7614 50 80 50H75V70H60V50H80V40H65V70" 
        fill="#9A8270" 
      />
      <circle cx="80" cy="65" r="15" fill="#E9DFD4" />
    </svg>
  );
} 