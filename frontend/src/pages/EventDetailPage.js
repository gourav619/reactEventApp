import React from "react";
import { useRouteLoaderData, json, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";

export const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");

  return (
    <div>
      <EventItem event={data.event} />
    </div>
  );
};

export const loader = async ({ request, params }) => {
  const id = params.id;
  const response = await fetch(`http://localhost:8080/events/` + id);
  if (!response.ok) {
    return json({ msg: "Event data not found" }, { status: 404 });
  } else {
    return response;
  }
};

export const action = async ({ params,request }) => {
  const id = params.id;
  const response = await fetch(`http://localhost:8080/events/` + id,{
    method:request.method
  });
  if (!response.ok) {
    return json({ msg: "Event not deleted" }, { status: 500 });
  } 
  return redirect("/event");
};
