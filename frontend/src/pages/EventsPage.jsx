import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[30px] mb-12">
            {allEvents &&
              allEvents.map((event, index) => (
                <EventCard key={index} data={event} />
              ))}
          </div>
          {allEvents && allEvents.length === 0 ? (
            <h1 className="text-center w-full pb-[100px] text-[20px]">
              No events Found!
            </h1>
          ) : null}
        </div>
      )}
    </>
  );
};

export default EventsPage;
