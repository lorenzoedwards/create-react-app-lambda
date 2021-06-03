import React, { Component, useState, useEffect } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import './App.css';
import './main.css';
// import { properties } from '../env/environments.js';

import logo from "./jesusislord_logo-12.png";
import collectionPhoto_1 from "./t1.png";
import collectionPhoto_2 from "./t2.png";
import collectionPhoto_3  from "./t3.png";

const stripePromise = loadStripe("pk_live_51IE2TYHEXOND41quTTKONKWkHme7orWRK82DAXMtTg53Ag3QzrPoywTWjuISY0Smkezh15hPzL4dSgUXNXO7i86100xGHER96i");


const StripeStuff = () => {
  // var stripe = Stripe("pk_live_51IE2TYHEXOND41quTTKONKWkHme7orWRK82DAXMtTg53Ag3QzrPoywTWjuISY0Smkezh15hPzL4dSgUXNXO7i86100xGHER96i");
  // var checkoutButton = document.getElementById("checkout-button");

  // checkoutButton.addEventListener("click", function () {
  //   fetch("/create-checkout-session", {
  //     method: "POST",
  //   })
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (session) {
  //       return stripe.redirectToCheckout({ sessionId: session.id });
  //     })
  //     .then(function (result) {
  //       // If redirectToCheckout fails due to a browser or network
  //       // error, you should display the localized error message to your
  //       // customer using error.message.
  //       if (result.error) {
  //         alert(result.error.message);
  //       }
  //     })
  //     .catch(function (error) {
  //       console.error("Error:", error);
  //     });
  // });

    return "hmmm";
}

const handleClick = async (event) => {
  const stripe = await stripePromise;
  const response = await fetch("/create-checkout-session", {
    method: "POST",
  });
  const session = await response.json();
  // When the customer clicks on the button, redirect them to Checkout.
  const result = await stripe.redirectToCheckout({
    sessionId: session.id,
  });
  if (result.error) {
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `result.error.message`.
  }
};


const App = () => {
  const [myCount, setAnCount] = React.useState(0); 


  return (
    <div>
    <div className="splash-ct">
      <div className="splash-img-ct">
        <img src={logo} alt="jesus is lord logo" />
      </div>
      <div className="splash-text-ct">
        <h1>REPRESENT THE <span>LORD</span>.
        </h1>
        <p>It's all too common to mistaken what god 
          people serve. It’s time to make bold apparel 
          to avoid any confusion that Jesus is Lord. 
          <br /><br />
          This clothing line is 100% free. Learn 
          how we do this.

          What about this: {myCount}
        </p>
      </div>
    </div>
    <div className="collection-ct">
      {/* TODO load this from the database */}
      <div className="collection-item-ct" onClick={() => handleClick()} data-img>
        <img src={collectionPhoto_1} alt="img description" />
      </div>

      <div className="collection-item-ct" onClick={() => setAnCount(myCount + 2)} data-img>
        <img src={collectionPhoto_2} alt="img description" />
      </div>

      <div className="collection-item-ct" onClick={() => setAnCount(myCount + 2)} data-img>
        <img src={collectionPhoto_3} alt="img description" />
      </div>
    </div>
  </div>
  );
 };

// class App extends Component {
//       constructor(props) {
//           super(props);
//           this.state = {
//             myCount : 0
//           };
//       }

//       showAlert () {
//         alert("I'm show");
//       }

//       render() {
//         return (
//           <div>
//           <div className="splash-ct">
//             <div className="splash-img-ct">
//               <img src={logo} alt="jesus is lord logo" />
//             </div>
//             <div className="splash-text-ct">
//               <h1>REPRESENT THE
//                 <span>LORD</span>.
//               </h1>
//               <p>It's all too common to mistaken what god 
//                 people serve. It’s time to make bold apparel 
//                 to avoid any confusion that Jesus is Lord. 
//                 <br /><br />
//                 This clothing line is 100% free. Learn 
//                 how we do this.

//                 What about this: {this.state.myCount}
//               </p>
//             </div>
//           </div>
//           <div className="collection-ct">
//             {/* TODO load this from the database */}
//             <div className="collection-item-ct" onClick={() => this.setState({myCount : this.state.myCount + 2})} data-img>
//               <img src={collectionPhoto} alt="img description" />
//             </div>
//           </div>
//         </div>
//         );
//       }
// }

export default App;
