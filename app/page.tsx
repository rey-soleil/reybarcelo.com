import CallsToAction from "../components/CallsToAction";
import Socials from "../components/Socials";
 
export default function Home() {
  return (
    <div className="flew-row flex">
      <div className="md:mr-8">
        <h1 className="header">Rey Barceló</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:mr-14">
            <div className="paragraph">
              <p>
                Hi, I&apos;m Rey! I&apos;m a software engineer with years of
                experience working at Google and in the startup space. I earned
                a B.S. in Computer Science from Stanford University.
              </p>
              <p>
                I love designing and building products that make life easier for
                users.{" "}
                <b>
                  If you&apos;re looking for help building a web app or website,
                  I&apos;d love to chat!
                </b>
              </p>
            </div>
            <CallsToAction />
          </div>
          <Socials />
        </div>
      </div>
    </div>
  );
}
