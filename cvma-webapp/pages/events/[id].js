 

 function EventDetail () {
    return (
        <section>
            <header>

            </header>
            <main>
            <iframe
  width="450"
  height="250"
  frameborder="0" style={{boarder:"0"}}
  referrerpolicy="no-referrer-when-downgrade"
  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_KEY}&q=${streetNumber}+${street},${city}+${state}`}
  allowfullscreen>
</iframe>
            </main>
        </section>
    )
 }
 export default EventDetail;

 