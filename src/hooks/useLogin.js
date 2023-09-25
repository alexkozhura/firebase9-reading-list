import { useState } from 'react'

import { signInWithEmailAndPassword } from "firebase/auth"

export const useLogin = () => {
    const [error, setError] = useState(null)

    const login = (auth, email, password) => {
        setError(null)
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log('user logged in: ', res.user)
            })
            .catch((err) => {
                setError(err.message)
            })
    }

    return { error, login }
}