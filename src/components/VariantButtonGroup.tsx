import VariantButton, { VariantButtonProps } from "./VariantButton";

export default function VariantButtonGroup() {
  const data: VariantButtonProps[] = [
    {
      id: 1,
      name: "Size",
      image: "/size-icon.svg",
      options: [
        {
          id: 1,
          name: "42mm",
        },
        {
          id: 2,
          name: "46mm",
          default: true,
        },
      ],
    },
    {
      id: 2,
      name: "Case",
      image: "/case-icon.svg",
      options: [
        {
          id: 1,
          name: "Aluminum",
          default: true,
        },
        {
          id: 2,
          name: "Titanium",
        },
      ],
    },
    {
      id: 3,
      name: "Band",
      image: "/band-icon.svg",
      options: [
        { id: 1, name: "Stainless Steel" },
        { id: 2, name: "Sport Loop" },
        { id: 3, name: "Sport Band" },
        { id: 4, name: "FineWoven" },
        { id: 5, name: "Braided Solo Loop" },
        { id: 6, name: "Solo Loop", default: true },
        { id: 7, name: "Nike Sport Loop" },
        { id: 8, name: "Nike Sport Band" },
      ],
    },
  ];
  return (
    <div className="flex gap-2 justify-center items-center mt-8">
      {data.map((item) => (
        <VariantButton key={item.id} item={item} />
      ))}
    </div>
  );
}
