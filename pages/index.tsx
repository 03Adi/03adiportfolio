import Header from "../components/Header/Header";
import Startup from "../components/Header/StartupLogo/Startup";
import MyName from "../components/Home/MyName/MyName";
import { useContext, useEffect, useState, useRef } from "react";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import ThisCantBeReached from "../components/Home/ThisSiteCantBeReached/ThisCantBeReached";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";
import AppContext from "../components/AppContextFolder/AppContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import ScreenSizeDetector from "../components/CustomComponents/ScreenSizeDetector";
import Maintenance from "../components/Home/Maintenance/Maintenance";

export default function Home() {
  const [ShowElement, setShowElement] = useState(false);
  const [ShowThisCantBeReached, setShowThisCantBeReached] = useState(true);
  const [ShowMe, setShowMe] = useState(false);
  // context Variable to clearInterval
  const context = useContext(AppContext);
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  // userData state that will be used to get user location
  const [userData, setUserData] = useState(null);

  // check if user from Black List
  const [isBlackListed, setIsBlackListed] = useState(false);

  // check if NEXT_PUBLIC_BLACKLIST_COUNTRIES is empty or undefined
  const [IsBlackListEmpty, setIsBlackListEmpty] = useState(
    !process.env.NEXT_PUBLIC_BLACKLIST_COUNTRIES || process.env.NEXT_PUBLIC_BLACKLIST_COUNTRIES === ""
  );

  // this useEffect will be called to get the user location, so we can check if he is from the blackList,
  // this will only run if NEXT_PUBLIC_BLACKLIST_COUNTRIES is not empty
  useEffect(() => {
    if (!IsBlackListEmpty) {
      const fetchData = async () => {
        try {
          const IP_Address = async () => {
            return fetch("https://api.ipify.org/?format=json")
              .then(res => res.json())
              .then(data => data.ip);
          };

          const response = await fetch("/api/userInfoByIP/" + (await IP_Address()));
          const data = await response.json();
          setUserData(data);
        } catch (error) {
          console.error("Error fetching data location and ip address:", error);
          // Handle errors as needed
          setIsBlackListed(false); // Fallback to allow access on error
        }
      };

      fetchData();
    } else {
      setIsBlackListed(false); // No blacklist, allow access
    }
  }, [IsBlackListEmpty]);

  // this useEffect will be called when userData is set
  useEffect(() => {
    if (!IsBlackListEmpty) {
      if (userData) {
        // Add a fallback to prevent undefined error
        const blacklist = process.env.NEXT_PUBLIC_BLACKLIST_COUNTRIES || "";
        if (blacklist.includes(userData.country)) {
          setIsBlackListed(true);
        } else {
          setIsBlackListed(false); // Ensure access if not in blacklist
        }
      }
    } else {
      setIsBlackListed(false); // No blacklist, allow access
    }
  }, [IsBlackListEmpty, userData]);

  useEffect(() => {
    // remove the interval Cookie timer setter when
    clearInterval(context.sharedState.userdata.timerCookieRef.current);
    if (typeof window !== "undefined") {
      // remove UserDataPuller project EventListeners
      window.removeEventListener("resize", context.sharedState.userdata.windowSizeTracker.current);
      window.removeEventListener("mousemove", context.sharedState.userdata.mousePositionTracker.current, false);
      // remove Typing project EventListeners
      window.removeEventListener("resize", context.sharedState.typing.eventInputLostFocus);
      document.removeEventListener("keydown", context.sharedState.typing.keyboardEvent);
    }
    setTimeout(() => {
      setShowElement(true);
    }, 4500);

    setTimeout(() => {
      setShowThisCantBeReached(false);
    }, 5400);
    // ? INFORMATIONAL next function will show the component after changing the state of ShowMe
    setTimeout(() => {
      setShowElement(false);
      setShowMe(true);
      context.sharedState.finishedLoading = true;
      context.setSharedState(context.sharedState);
    }, 10400);
  }, [context, context.sharedState]);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  console.log("website is rendering...");
  const meta = {
    title: "Aditya Prakash Pandey - Software Engineer",
    description: `I've been working on Software development for 5 years straight. Get in touch with me to know more.`,
    image: "/titofCercle.png",
    type: "website",
  };
  const isProd = process.env.NODE_ENV === "production";

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://anaflous.com`} />
        <link rel="canonical" href={`https://anaflous.com`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Manu Arora" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@titofabdo" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      {!isBlackListed ? (
        <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full">
          {context.sharedState.finishedLoading ? <></> : ShowThisCantBeReached ? <ThisCantBeReached /> : <></>}
          {context.sharedState.finishedLoading ? <></> : ShowElement ? <Startup /> : <></>}
          <Header finishedLoading={context.sharedState.finishedLoading} sectionsRef={homeRef} />
          <MyName finishedLoading={context.sharedState.finishedLoading} />
          <SocialMediaArround finishedLoading={context.sharedState.finishedLoading} />
          {context.sharedState.finishedLoading ? <AboutMe ref={aboutRef} /> : <></>}
          {context.sharedState.finishedLoading ? <WhereIHaveWorked /> : <></>}
          {context.sharedState.finishedLoading ? <SomethingIveBuilt /> : <></>}
          {context.sharedState.finishedLoading ? <GetInTouch /> : <></>}
          {context.sharedState.finishedLoading ? (
            <Footer githubUrl={"https://github.com/hktitof/my-website"} hideSocialsInDesktop={true} />
          ) : (
            <></>
          )}
          {!isProd && <ScreenSizeDetector />}
        </div>
      ) : (
        <Maintenance />
      )}
    </>
  );
}