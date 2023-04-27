import { useState, useEffect } from "react";
import HTTPClient from "../../HTTPClient";
import '../styles/LandingPage.css';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LandingPage = () => {
    const [user, setUser] = useState(null);
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() =>{ 
        if(inView) {
            controls.start("visible");
        } else {
            controls.start('hidden')
        }
    }, [controls, inView]);

    const logoutUser = async () =>{
        await HTTPClient.post("http://127.0.0.1:5555/logout");
        window.location.href = "/";
    };

    useEffect(() =>{
        (async () => {
            try {
                const resp = await HTTPClient.get("http://127.0.0.1:5555/@me");
                setUser(resp.data);
            } catch (error){
                console.log('Not Authenticated')
            }
        })();
    },[]);
    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
        hidden: { opacity: 0.3, scale: 1 }
      };

    return (
        <div className = "landingpage">
            <div className = "landingpage-left">
                <div className="landingpage-right">
                    
                <section>
                <motion.div
                
                className = "landingpage-title">
                
                <h1 align="center">Crystal Structures</h1>
                </motion.div>
                </section>
                <section>
                <motion.div
                className="landingpage-loading"
                ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={controls}
                >   
                <p align="center">
                    <img src="https://raw.githubusercontent.com/0xPacman/0xPacman/master/spin.gif" alt="loading..." />
                </p>
            </motion.div>
            </section>
            
                <motion.div
                ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={controls} 
                className = "left__subtitle">
                    <h2 align="center">Repetition Is The Key To Success</h2>
                </motion.div>
                
                {user != null ? (
                    <div>
                        <h2>Logged In</h2>
                        <h3>ID: {user.id}</h3>
                        <h3>Username: {user.username}</h3>

                        <button onClick={logoutUser}>Logout</button>
                    </div>
                ) : (
                    <section>
                    <motion.div
                    className="logged-box"
                    ref={ref}
                    variants={boxVariant}
                    initial="hidden"
                    animate={controls}
                    >
                        <h3 align="center">You are not logged in</h3>
                     <motion.div
                      ref={ref}
                      variants={boxVariant}
                      initial="hidden"
                      animate={controls}
                     >
                        <a href="/loginOrSignup">
                            <button className="Login-reg-btn">Login/register</button>
                        </a>
                     </motion.div>
                    </motion.div>
                    </section>
                )}
                </div>
            </div>
        </div>
    );
};

export {LandingPage};