import { useLoaderData, json } from "react-router-dom";
import EventsList from "../components/EventsList";

export function EventsPage() {
  const data = useLoaderData();
  const events = data.events;
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    return json({ msg: "some thing went wrong" }, { status: 500 });
  } else {
    return response;
  }
};
