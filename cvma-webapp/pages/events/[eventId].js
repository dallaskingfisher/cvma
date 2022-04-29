import { Fragment, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/client';
import { getEventById, getFeaturedEvents } from '../../helpers/api-util';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';
import Comments from '../../components/input/comments';

function EventDetailPage(props) {
  const router = useRouter();
  const event = props.selectedEvent;
  console.log(event)
  useEffect(() => {
    getSession().then((session) => {
      if(!session){
        router.replace('/login')
      }
    })
  },[router])

  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{`CVMA 18 - 2 ${event.title}`}</title>
        <meta
          name='description'
          content={event.description}
        />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics 
        date={event.date}
        address={event.address}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event._id} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  
  const event = await getEventById(eventId);
  console.log(event)

  return {
    props: {
      selectedEvent: event.events
    },
    revalidate: 30
  };
}

export async function getStaticPaths() {
  const eventsFeatured = await fetch('http://localhost:3010/api/events/featured')
  const events = await eventsFeatured.json()

  const paths = events.events.map(event => ({ params: { eventId: event._id } }));

  return {
    paths: paths,
    fallback: 'blocking'
  };
}

export default EventDetailPage;
