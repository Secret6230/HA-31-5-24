import React, { useState, useEffect } from "react";

const Listing = ({ Name, Preis, imageURL }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timerNames = ["Akin"]; 
        const timerNames_1 = ["Sarah"];
        const timerNames_2 = ["Mara"];
        const timerNames_3 = ["Lara"];
        const timerNames_4 = ["Carter"];


        if (timerNames.includes(Name)) {
            const timer = setInterval(() => {
                setCount(prevCount => {
                    if (prevCount > 0) {
                        return prevCount - 1;
                    } else {
                        clearInterval(timer);
                        console.log("Countdown fertig für " + Name);
                        return 0;
                    }
                });
            }, 1);
            setCount(1000);
            return () => clearInterval(timer);
        }


        if (timerNames_1.includes(Name)) {
          const timer = setInterval(() => {
              setCount(prevCount => {
                  if (prevCount > 0) {
                      return prevCount - 1;
                  } else {
                      clearInterval(timer);
                      console.log("Countdown fertig für " + Name);
                      return 0;
                  }
              });
          }, 10);
          setCount(500);
          return () => clearInterval(timer);
      }


      if (timerNames_2.includes(Name)) {
        const timer = setInterval(() => {
            setCount(prevCount => {
                if (prevCount > 0) {
                    return prevCount - 1;
                } else {
                    clearInterval(timer);
                    console.log("Countdown fertig für " + Name);
                    return 0;
                }
            });
        }, 100);
        setCount(200);
        return () => clearInterval(timer);
    }


      if (timerNames_3.includes(Name)) {
        const timer = setInterval(() => {
          setCount(prevCount => {
                if (prevCount > 0) {
                    return prevCount - 1;
                } else {
                    clearInterval(timer);
                    console.log("Countdown fertig für " + Name);
                    return 0;
                }
           });
        }, 1000);
       setCount(10);
        return () => clearInterval(timer);
    }

        if (timerNames_4.includes(Name)) {
            const timer = setInterval(() => {
                setCount(prevCount => {
                    if (prevCount > 0) {
                        return prevCount - 1;
                    } else {
                        clearInterval(timer);
                        console.log("Countdown beendet für " + Name);
                        return 0;
                    }
                });
            }, 1000);
            setCount(5);
            return () => clearInterval(timer);
        }
    }, [Name]); 

    return (
        <div>
            <img src={imageURL} alt={Name} />
            <h2>Name: {Name}</h2>
            <h2>Preis: {Preis}€</h2>
            <p>Verfügbar für: {count} Sekunden</p>
        </div>
    );
};

export default Listing;
