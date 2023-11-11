'use client'
import { useRouter } from "next/navigation"
import { MessageSquarePlusIcon } from "lucide-react"
import { Button } from "./ui/button"

const CreateChatButton = () => {

    const router = useRouter()

    const handleCreateNewChat = () => {
        // ...
        router.push(`/chat/abc`)
    }

  return (
    <Button variant='ghost' onClick={handleCreateNewChat}>
      <MessageSquarePlusIcon />
    </Button>
  )
}

export default CreateChatButton
