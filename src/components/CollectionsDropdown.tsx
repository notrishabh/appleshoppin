"use client";
import useWatchStore from "@/lib/store";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const COLLECTIONS: { id: number; name: string }[] = [
  {
    id: 0,
    name: "Apple Watch Series 10",
  },
  {
    id: 1,
    name: " Apple Watch Hermès Series 10",
  },
  {
    id: 2,
    name: "Apple Watch Se",
  },
];

export default function CollectionsDropdown() {
  const { selectedCollection, setSelectedCollection } = useWatchStore();
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

  const selectCollectionHandler = (id: number) => {
    setSelectedCollection(id);
    setIsOpen(false);
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
          <ul className="p-6 space-y-4 text-center text-gray-700">
            {COLLECTIONS.map((collection, index) => (
              <div key={collection.id} className="space-y-4">
                <li
                  onClick={() => selectCollectionHandler(collection.id)}
                  className={`hover:text-primary cursor-pointer ${selectedCollection === collection.id && "text-gray-400 pointer-events-none"}`}
                >
                  {collection.name}
                </li>
                {index < COLLECTIONS.length - 1 && (
                  <hr className="border-gray-300" />
                )}
              </div>
            ))}
          </ul>
        </div>
      )}

      {isOpen && <div className="fixed inset-0 bg-black opacity-40 z-40"></div>}
    </div>
  );
}
