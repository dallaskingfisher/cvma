import classes from '../styles/homepage.module.css';

function HomePage() {
  return (
    <div>
      <main>
        <div>
          <h1> CVMA 18 -2 </h1>
          <h3>Clarksville, Tennessee</h3>
        </div>
        <div>
          <div>
            <p>
              We are an Association of Combat Veterans from all branches of the
              United States Armed Forces who ride motorcycles as a hobby. Our
              mission now is to support and defend those who have defended our
              country and our freedoms. Our focus is to help veteran care
              facilities provide a warm meal, clothing, shelter, and guidance,
              or simply to say “Thank You.” and “Welcome Home.”
            </p>
            <p>
              Our membership is comprised of Full Members (those with verified
              combat service) and Supporter Members (those who have non-combat
              military service and have a sincere dedication to helping
              veterans). We have members from nearly all 50 states and living
              abroad. Many members continue to serve in our Armed Forces.
            </p>
            <p>
              We sponsor and/or participate in many motorcycle-related charity
              events each year, and as a 501(c) 3{" "} ( EIN:{" "}
              <a href="https://apps.irs.gov/app/eos/detailsPage?ein=471564659&name=Combat%20Veterans%20Motorcycle%20Association%20Tn%2018-2&city=Clarksville&state=TN&countryAbbr=US&dba=&type=CHARITIES,%20DETERMINATIONLETTERS,%20EPOSTCARD&orgTags=CHARITIES&orgTags=DETERMINATIONLETTERS&orgTags=EPOSTCARD"
               className={classes.span}>
                47-1564659
              </a>
              {" "}) non-profit organization find more information about us at{" "}
              <a href="https://www.guidestar.org/profile/47-1564659" className={classes.span}>
                GUIDESTAR
              </a>
              . We donate to various veteran care facilities and veteran
              charities in our local community.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
export default HomePage;
