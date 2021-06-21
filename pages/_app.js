import React, { useEffect } from 'react'
import firebase from 'firebase'
import '../styles/globals.css'
import { useAuthState } from "react-firebase-hooks/auth"
import Login from './login'
import { auth, db } from "./firebase"
import Loading from './Component/Loading'
import { de } from 'date-fns/locale'

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth)
  useEffect(() => {
    if (user) {
      db.collection('users').doc(user.uid).set({
          email: user.email,
          lastSeen: Date.now(),
          photoURL: user.photoURL,
        },
          { merge: true }
        );
    }
  }, [user])

  if(loading) return <Loading /> 
  if (!user) return <Login />

  return <Component {...pageProps} />
}

export default MyApp
