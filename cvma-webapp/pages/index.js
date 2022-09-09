import classes from '../styles/homepage.module.css';
import content from '../styles/homepageContent.module.css';
import { useState } from 'react';
import IMAGE from 'next/image';
function HomePage() {
    const [ membership, setMembership ] = useState(false);

  return (
    <div>
      <main>
        <div>
          <h1> CVMA 18 -2 </h1>
          <h3>Clarksville, Tennessee</h3>
        </div>
        <hr/>
        <div>
          <section className={content.section}>
            <article className={content.article}> 
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
            </article>
          </section>
          <section className={content.section}>
            <article className={content.article}>
                  <IMAGE src="/images/cvmaStateMap.png" height="150vw" width="800vw"/>
                  <p className={content.family}>We are a family that is brought together by our service to our country and the lobe of Motorcycles.</p>
                  <p className={content.membership}style={{cursor:"pointer"}} onClick={() => setMembership(!membership)}>What does it take to become a member?</p>
                  {membership ? (<div><h1>Membership</h1>
                  <h3>Definitions:</h3>
                  <p> The Term "good standing" shall be  defined as any person who has 
                    fulfilled the requirements for membership in the Combat Veterans Motorcycle Assocaiton,
                    who is not currently under disciplinary review or probationary status for disciplinary reasons,
                    who has paid the necessary dues and conformed to the requirements as set forth in these bylaws </p>
                    <h3>Full Members</h3>
                     <ol>
                      <li>Of good character</li>
                      <li>Who is a veteran of a Foreign War,<bold>"Combat"</bold></li>
                      <li>The <bold>ONlY</bold> Acceptable proof for membershiip to the Combat Veterans Motorcycle
                      Motorcycle Assocaiton is a copy of one's DD214 or Official Military Personnel File or Officer/Enlisted record brief
                      which must be surrender to the NBOD for verification.</li>
                      <li>Must own and operate a motorcycle of 500cc or above</li>
                      <li>Should  a Full Member resign they will be given a 5 day grace period  to rescind their  resignation with no repercussions.
                        After the 5 day grace period  a member will have to re-apply for membership as a new member and will require NBOD approval.</li>
                      <li>Active members in good standing with the CVMA who become infirm, disabled or otherwise unable to ride their motorcycles 
                        will be able to keep their patch and be retired as members in good standing with the CVMA. Members must submit medical 
                        documentation and a minimum of one year as a member and/or NBOD approval is required.</li>
                      <li>Member will be assigned to a chapter upon application approval. Member’s initial
                         assignment of a chapter will be in the State of physical residence, and closest chapter.
                          Once membership is approved, he or she can request in writing for a change of Chapter to 
                          the gaining and losing State Representative. Chapter affiliation to any Chapter of his or her 
                          choosing may be requested, to include a chapter in another state if that chapter is closer than
                           the existing chapter and the losing and gaining states share a border. If the distance is shorter, 
                           the request will be approved. The member will only have all rights as a Full Member in the State 
                           that they claim membership in.</li>
                        </ol> 
                        <h3>Auxiliary Member</h3>
                        <ol>
                          <li>Must be of good character</li>
                          <li>All Auxiliary members must be a spouse, widow or widower of a
                             member who is in good standing with the CVMA.An Auxiliary widow 
                             or widower cannot sponsor an additional Auxiliary member.
                          </li>
                          <li>Must support the efforts of ALL branches of the United States 
                            of America’s Armed Forces and the Combat Veterans 
                            Motorcycle Association.</li>
                          <li>Will not have a vote in CVMA Business.</li>
                          <li>Cannot hold a position on the NBOD</li>
                        </ol>
                        <h3>Support Members</h3>
                        <ol>
                          <li>Must be of good character</li>
                          <li>Must own a motorcycle  of 500cc or above</li>
                          <li>Maximum number of support members will not 
                            exceed 10% of total CVMA full Combat membership</li> 
                          <li>Support Members must be a veteran of the United States Armed Forces</li> 
                          <li>Support members will read and abide by all CVMA by-laws applicable to them. Sections excluded:
                            <ol>
                              <li>Article 5: Elections</li>
                              <li>Article 6: Duties of Officers</li>
                            </ol>
                          </li>
                          <li>Support members are required to submit their application with proof of military service through 
                            a full member of the CVMA who has held a membership for not less than one year. Support members are 
                            required to have either ridden a minimum of 3,000 miles with their sponsor, attended three CVMA events 
                            or be known by their sponsor for a minimum of 6 months. A full member submitting an application for a 
                            support member should verify they meet the above criteria. Only 1 support member can be vouched on per
                             year by an individual CVMA member. Support members will be at a 1 to 10 ratio, 1 support member to 10 
                             full members based on state.
                          </li>
                          <li>Will have no vote in National CVMA business but my vote in Chapter CVMA business if it is addressed 
                            in the Chapter Bylaws.</li>
                          <li>Cannot hold a position on the NBOD</li>
                          <li>Support members in good standing can wear a small CVMA Support Patch on the front of thier vest or jacket
                             which will be supplied by thier sponsor. Support members can also wear the 10 inch support back patch which will be supplied
                             by thier sponsor.
                          </li>
                        </ol></div>) : null}
                        <hr/>
                        <h2 className={content.charities}>Charities Supported</h2>
                        <div className={content.images}>
                          <div>
                            <IMAGE src="/images/Operation-HomeFront.jpeg" width="150px" height="150px"  alt="Operation Homefront"/>
                          </div>
                          <div>
                            <IMAGE src="/images/safe.png" width="200px" height="100px" alt="Soldiers and Family Embraced"/>
                          </div>
                          <div>
                            <IMAGE src="/images/jrotc.png" width="100px" height="150px" alt="West Creek JROTC" />
                          </div>
                          <div>
                            <IMAGE src="/images/purpleHearts.png" width="200px" height="100px" alt="Purple Hearts Reunited" />
                          </div>
                          <div>
                            <IMAGE src="/images/WAA-MasterLogo.png" width="100px" height="100px" alt="Wreaths Accross America"/>
                          </div>
                        </div>
            </article>
          </section>
          <footer><p>developed by fishworks copyright 2022</p></footer>
          <div>
           
          </div>
        </div>
      </main>
    </div>
  );
}
export default HomePage;
