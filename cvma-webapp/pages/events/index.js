import { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getSession } from 'next-auth/client';
import { getAllEvents } from '../../helpers/api-util';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';


function AllEventsPage(props) {
  const router = useRouter();
  const { events } = props;

  useEffect(() => {
    getSession().then((session) => {
      if(!session){
        router.replace('/login')
      }
    })
  },[router])

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>CVMA 18 - 2  Events</title>
        <meta name='description' content='Combat Veterans Motorcycle Association 18 - 2 events'/>
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events
    },
    revalidate: 60
  };
}

export default AllEventsPage;
