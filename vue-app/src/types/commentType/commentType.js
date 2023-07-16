import { v4 as uuidv4 } from "uuid"
import { userType } from "../userType/userType"

export const commentType = (book, newComment) => {
  const data = {
    bookId: book.id,
    id: uuidv4(),
    author: userType.currentUser,
    content: newComment,
    PublishDate: new Date(),
    editing: false,
    replies: []
  }

  return data
}
