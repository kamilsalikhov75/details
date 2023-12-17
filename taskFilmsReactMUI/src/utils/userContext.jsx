// import { createContext, useContext, useEffect, useReducer, useState } from "react";

// export const FetchContext = createContext('');

// export function FetchProvider({ children, fetchURL }) {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     const selectedURL = fetchURL();

//     if (selectedURL) {
//       fetch(selectedURL, {
//         method: 'GET',
//         headers: {
//           'X-API-KEY': 'e43bd03c-839c-4000-9f8b-274957f6431d',
//           'Content-Type': 'application/json',
//         },
//       })
//         .then(result => result.json())
//         .then(json => setData(json))
//         .catch(err => console.log(err));
//     }

//   }, [fetchURL]);
//   return (
//     <FetchContext.Provider value={data}>
//       {children}
//     </FetchContext.Provider>
//   );
// }

// export function useFetchData() {
//   return useContext(FetchContext);
// }



// export const TokenContext = createContext('');

// export function TokenProvider({ children }) {
//   const [token, setToken] = useState(localStorage.getItem('token'));

//   return(
//     <TokenContext.Provider value={[token, setToken]}>
//       {children}
//     </TokenContext.Provider>
//   )
// }

// export function useTokenData(){
//   return useContext(TokenContext)
// }