import { createContext, useEffect, useState, useContext } from "react"
import { getAuth } from "firebase/auth"
import Loading from "./components/Loading"

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const auth = getAuth()
    return auth.onAuthStateChanged(async (user) => {
      if (!user) {
        console.log("no user")
        setCurrentUser(null)
        setIsLoading(false)
        return
      }
      setCurrentUser(user)
      setIsLoading(false)
    })
  }, [])
  if (isLoading) {
    return <Loading />
  }
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
