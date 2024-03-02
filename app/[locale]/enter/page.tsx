"use client"
import { useEffect, useContext } from "react"
import { useRouter } from "next/navigation"
import { ChatbotUIContext } from "@/context/context"
import { supabase } from "@/lib/supabase/browser-client"
import { getHomeWorkspaceByUserId } from "@/db/workspaces"

const ChatRedirector = () => {
  const { setSelectedWorkspace, setWorkspaces } = useContext(ChatbotUIContext)

  const router = useRouter()

  useEffect(() => {
    ;(async () => {
      const session = (await supabase.auth.getSession()).data.session

      if (!session) {
        return router.push("/login")
      } else {
        const user = session.user

        const homeWorkspaceId = await getHomeWorkspaceByUserId(session.user.id)
        return router.push(`/${homeWorkspaceId}/chat`)
      }
    })()
  }, [])
  return null // UIをレンダリングする必要がない場合
}

export default ChatRedirector
