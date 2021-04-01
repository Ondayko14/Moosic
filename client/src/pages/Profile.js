import React from "react";
// import { Redirect, useParams } from "react-router-dom";

// import { useQuery } from "@apollo/react-hooks";
// import { QUERY_USER, QUERY_ME } from "../utils/queries";
// import Auth from "../utils/auth";

const Profile = () => {
    return (
      <body>
        <div className="card text-secondary mb-4">
          <h4 className="card-header pb-3">Pardon our progress!</h4>
          <p className="card-body">This page is still being built.</p>
          <a href="/">
          <button
            type="submit"
            className="signup-btn m-back mb-4"
          >
            Back Home
          </button>
        </a>
        </div>
        
      </body>
    );
  };

// const Profile = (props) => {
//   const { username: userParam } = useParams();

//   const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
//     variables: { username: userParam },
//   });

//   const user = data?.me || data?.user || {};

//   // redirect to personal profile page if username is yours
//   if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
//     return <Redirect to="/profile" />;
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!user?.username) {
//     return (
//       <h4>
//         You need to be logged in to see this. Use the navigation links above to
//         sign up or log in!
//       </h4>
//     );
//   }

//   /* const handleClick = async () => {
//     try {
//       await addFriend({
//         variables: { id: user._id },
//       });
//     } catch (e) {
//       console.error(e);
//     }
//   }; */

//   return (
//     <body>
//       <section className="mooosic d-flex justify-content-center">
//         <a
//           className="logo mt-5"
//           href="https://lit-escarpment-33126.herokuapp.com"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <img
//             className="w-100 mb-5"
//             src="../assets/icons/mooosic.png"
//             alt="Moosic Logo"
//             title="Moosic Logo"
//           />
//         </a>
//       </section>
//       <section className="text-center">
//         <div className="image">
//           <img src={user.profileImg} className="rounded-circle" width="200" alt="Profile" />
//           <h2 className="name mt-5 font-weight-bold text-light">
//             {user.fullname}
//           </h2>
//           <h5 className="mt-2 mb-5 font-weight-light text-light">
//             {user.email}
//           </h5>
//           <div className="d-flex justify-content-center"></div>
//           <h6 className="mx-5 mb-5 font-weight-lighter text-light">
//             {user.description}
//           </h6>
//         </div>
//         {userParam && (
//           <button
//             className="btn text-dark font-weight-bold mb-5"
//           >
//             Follow
//           </button>
//         )}
//       </section>
//     </body>
//   );
// };

export default Profile;