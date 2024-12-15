import SwiperCar, { Slide } from "./SwiperCarousel/SwiperCarousel";

const cases: Slide[] = [
  {
    id: 1,
    name: "Aluminium Face 1",
    image: "/case/aluminium/face-1.png",
    price: 299,
  },
  {
    id: 2,
    name: "Aluminium Face 2",
    image: "/case/aluminium/face-2.png",
    price: 299,
  },
  {
    id: 3,
    name: "Aluminium Face 3",
    image: "/case/aluminium/face-3.png",
    price: 299,
  },
  {
    id: 4,
    name: "Titanium Face 4",
    image: "/case/titanium/face-1.png",
    price: 299,
  },
  {
    id: 5,
    name: "Titanium Face 5",
    image: "/case/titanium/face-2.png",
    price: 299,
  },
  {
    id: 6,
    name: "Titanium Face 6",
    image: "/case/titanium/face-3.png",
    price: 299,
  },
];

export default function CaseCarousel() {
  return (
    <div>
      <SwiperCar slides={cases} />
    </div>
  );
}
