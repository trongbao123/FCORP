import { v4 as uuidv4 } from "uuid"
export const isAuthor = (currentUser, author) => currentUser === author

export const saveComments = (propBook, Comment, Cancel, code) => {
  const data = {
    ...propBook,
    comments: Comment
  }

  if ((Cancel, code)) {
    handleCancelOrEdit(Cancel, code)
  }

  const jsonData = JSON.stringify(data)
  localStorage.setItem("comments", jsonData)
}

export const addComment = (book, Comment, newComment) => {
  const data = {
    bookId: book.id,
    id: uuidv4(),
    author: "Bảo",
    content: newComment,
    PublishDate: new Date(),
    replies: []
  }

  if (book.id) {
    Comment.push(data)
  }
  saveComments(book, Comment)
}

export const deleteComment = (comments, commentId, propBook) => {
  const index = comments.findIndex((comment) => comment.id === commentId)
  comments.splice(index, 1)
  saveComments(propBook, comments)
}

export const addReplyComment = (params, newReplyContent, propBook, Comment) => {
  const newCommentOrReply = {
    id: uuidv4(),
    author: "Bảo",
    content: newReplyContent,
    editing: false,
    PublishDate: new Date(),
    replies: []
  }
  params.replies.push(newCommentOrReply)
  saveComments(propBook, Comment)
}

export const deleteReply = (commentId, replyId, propBook, CommentArray) => {
  const deleteComment = (comment) => {
    for (let i = 0; i < comment.replies.length; i++) {
      const reply = comment.replies[i]
      if (reply.id === replyId) {
        comment.replies.splice(i, 1)
        return true
      }
      if (reply.replies && deleteComment(reply)) {
        return true
      }
    }
    return false
  }

  const comment = CommentArray.find((comment) => comment.id === commentId)
  if (comment && deleteComment(comment)) {
    saveComments(propBook, CommentArray)
  }
  return comment
}

export const handleCancelOrEdit = (comment, code) => {
  let CodeParams = Number
  if (code === 1) {
    CodeParams = comment.editing = false
  } else if (code === 0) {
    CodeParams = comment.editing = true
  }
  return CodeParams
}
