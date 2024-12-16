"use client";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function CollectionsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  // Close dropdown on Escape key
  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscape);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <div className="relative flex justify-center items-center ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-[17px] tracking-tight leading-6 flex items-center gap-1 "
      >
        Collections
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-8 w-64 md:w-80 bg-white shadow-lg rounded-2xl z-50"
        >
          <ul className="p-6 space-y-4">
            <li className="text-center text-gray-700 hover:text-primary cursor-pointer">
              Apple Watch Series 10
            </li>
            <hr className="border-gray-300" />
            <li className="text-center text-gray-700 hover:text-primary cursor-pointer">
              Apple Watch Hermès Series 10
            </li>
            <hr className="border-gray-300" />
            <li className="text-center text-gray-700 hover:text-primary cursor-pointer">
              Apple Watch SE
            </li>
          </ul>
        </div>
      )}

      {isOpen && <div className="fixed inset-0 bg-black opacity-40 z-40"></div>}
    </div>
  );
}
