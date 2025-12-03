import './Team.css'

function Team() {
  return (
    <main className="team">
       <section className="podcast-members test">
        <h2 className="team-title">Les podcasteurs</h2>
        <div className="members">
         <div className="team-member">
            <img src="/images/Karim.jpg" alt="Membre de l'équipe 1" />
            <div className="team-member_description">
              <h3>Karim</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos accusamus voluptates facilis aliquid, fugit ipsum quis deserunt voluptatibus quo, delectus quia mollitia inventore magni et excepturi cumque praesentium optio! Quibusdam!
              </p>
            </div>
          </div>
          <div className="team-member">
            <img src="/images/Justine.jpg" alt="Membre de l'équipe 2" />
            <div className="team-member_description">
              <h3>Justine</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos accusamus voluptates facilis aliquid, fugit ipsum quis deserunt voluptatibus quo, delectus quia mollitia inventore magni et excepturi cumque praesentium optio! Quibusdam!
              </p>
            </div>
          </div>
          <div className="team-member">
              <img src="/images/Suzie.jpg" alt="Membre de l'équipe 3" />
              <div className="team-member_description">
                <h3>Suzie</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos accusamus voluptates facilis aliquid, fugit ipsum quis deserunt voluptatibus quo, delectus quia mollitia inventore magni et excepturi cumque praesentium optio! Quibusdam!
                </p>
            </div>
          </div>
          <div className="team-member">
              <img src="/images/Adrien.jpg" alt="Membre de l'équipe 4" />
              <div className="team-member_description">
                <h3>Adrien</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos accusamus voluptates facilis aliquid, fugit ipsum quis deserunt voluptatibus quo, delectus quia mollitia inventore magni et excepturi cumque praesentium optio! Quibusdam!
                </p>
            </div>
          </div>
        </div>
       </section>

       <section className="commercial-team">
        <h2>L'équipe commerciale</h2>
        <div className="flex">
          <div className="commercial-member">
            <div className="commercial-member_role">
              <h3>CEO</h3>
              <p>Karim</p>
            </div>
            <img src="/images/Karim.jpg" alt="CEO" />
          </div>
          <div className="commercial-member">
            <div className="commercial-member_role">
              <h3>CSO</h3>
              <p>Grégory</p>
            </div>
            <img src="/images/Gregory.jpg" alt="CEO" />
          </div>
          <div className="commercial-member">
            <div className="commercial-member_role">
              <h3>Monteur</h3>
              <p>John</p>
            </div>
            <img src="/images/John.jpg" alt="CEO" />
          </div>
         </div>
       </section>
    </main>
  )
}

export default Team