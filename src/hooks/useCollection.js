import { useState, useEffect, useRef } from 'react'
import { db } from '../firebase/config'

// firebase imports
import { collection, onSnapshot, query, where } from 'firebase/firestore'

export const useCollection = (c, _q) => {
    const [documents, setDocuments] = useState(null)

    // set up the query
    const q = useRef(_q).current

    useEffect(() => {
        console.log('useEffect inside useCollection fired')
        // we use let instead of const because we may want to change ref later
        let ref = collection(db, c)

        if (q) {
            ref = query(ref, where(...q))
        }

        const unsub = onSnapshot(ref, (snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => {
                results.push({ ...doc.data(), id: doc.id })
            })
            setDocuments(results)
        })

        return () => unsub()
    }, [c, q])

    return { documents }
}
