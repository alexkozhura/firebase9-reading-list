import { useState, useEffect } from 'react'
import { db } from '../firebase/config'

// firebase imports
import { collection, onSnapshot } from 'firebase/firestore'

export const useCollection = (c) => {
    const [documents, setDocuments] = useState(null)

    useEffect(() => {
        console.log('useEffect inside useCollection fired')
        // we use let instead of const because we may want to change ref later
        let ref = collection(db, c)

        const unsub = onSnapshot(ref, (snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => {
                results.push({ ...doc.data(), id: doc.id })
            })
            setDocuments(results)
        })

        return () => unsub()
    }, [c])

    return { documents }
}
