<template>
  <div class="mt-5">
    <h2 class="title bg-dark">Comments {{ book.title }}</h2>
    <div v-for="comment in comments" :key="comment.id">
      <div v-if="comment.bookId === this.book.id">
        <div class="comment-Form">
          <div class="title-form">
            <p class="avatar">{{ comment.author.charAt(0) }}</p>
            <p class="day">{{ comment.author }}</p>
            <p class="day">{{ formatDate(comment.PublishDate) }}</p>
          </div>
          <p class="comment" v-if="!comment.editing">{{ comment.content }}</p>
          <textarea class="comment-edit" v-if="comment.editing" v-model="comment.content"></textarea>
          <div class="comment-flex">
            <div class="comment-flex" @click="showReplyForm(comment)">
              <img class="icon" src="https://cdn-icons-png.flaticon.com/128/10191/10191794.png" />
              <p>Reply</p>
            </div>
            <div class="comment-flex" v-if="!comment.editing && isAuthor(this.currentUser, comment.author)" @click="handleCancelOrEdit(comment, 0)">
              <img class="icon" src="https://cdn-icons-png.flaticon.com/128/1159/1159633.png" />
              <p>Edit</p>
            </div>
            <div class="comment-flex" v-if="comment.editing && isAuthor(this.currentUser, comment.author)" @click="saveComments(this.book, this.comments, comment, 1)">
              <img class="icon" src="https://cdn-icons-png.flaticon.com/128/3580/3580085.png" />
              <p>Save</p>
            </div>
            <div class="comment-flex" v-if="comment.editing && isAuthor(this.currentUser, comment.author)" @click="handleCancelOrEdit(comment, 1)">
              <img class="icon" src="https://cdn-icons-png.flaticon.com/128/561/561189.png" />
              <p>Cancel</p>
            </div>
            <div class="comment-flex" v-if="isAuthor(this.currentUser, comment.author)" @click="deleteComment(this.comments, comment.id, this.book.id)">
              <img class="icon" src="https://cdn-icons-png.flaticon.com/128/484/484662.png" />
              <p>Delete</p>
            </div>
          </div>
        </div>
        <form class="form-comment" v-if="comment === replyCommentId" @submit.prevent="addReply(comment)">
          <textarea class="comment-text" v-model="newReplyContent" placeholder="Write a reply..." :rows="3" required></textarea>
          <button class="submit"><img class="icon" src="https://cdn-icons-png.flaticon.com/128/3106/3106794.png" /></button>
        </form>
        <div>
          <div v-for="reply in comment.replies" :key="reply.id">
            <div class="comment-Form1">
              <div class="title-form">
                <p class="avatar">{{ reply.author.charAt(0) }}</p>
                <p class="day">{{ reply.author }}</p>
                <p class="day">{{ formatDate(reply.PublishDate) }}</p>
              </div>

              <span class="comment" v-if="!reply.editing">{{ reply.content }}</span>
              <textarea class="comment-edit" v-if="reply.editing" v-model="reply.content"></textarea>
              <div class="comment-flex">
                <div class="comment-flex" @click="showReplyForm(reply)">
                  <img class="icon" src="https://cdn-icons-png.flaticon.com/128/10191/10191794.png" />
                  <p>Reply</p>
                </div>
                <div class="comment-flex" v-if="!reply.editing && isAuthor(this.currentUser, reply.author)" @click="handleCancelOrEdit(reply, 0)">
                  <img class="icon" src="https://cdn-icons-png.flaticon.com/128/1159/1159633.png" />
                  <p>Edit</p>
                </div>
                <div class="comment-flex" v-if="reply.editing && isAuthor(this.currentUser, reply.author)" @click="saveComments(this.book, this.comments, reply, 1)">
                  <img class="icon" src="https://cdn-icons-png.flaticon.com/128/3580/3580085.png" />
                  <p>Save</p>
                </div>
                <div class="comment-flex" v-if="reply.editing && isAuthor(this.currentUser, reply.author)" @click="handleCancelOrEdit(reply, 1)">
                  <img class="icon" src="https://cdn-icons-png.flaticon.com/128/561/561189.png" />
                  <p>Cancel</p>
                </div>
                <div class="comment-flex" v-if="isAuthor(this.currentUser, reply.author)" @click="deleteReply(comment.id, reply.id, this.book, this.comments)">
                  <img class="icon" src="https://cdn-icons-png.flaticon.com/128/484/484662.png" />
                  <p>Delete</p>
                </div>
              </div>
            </div>
            <form class="form-comment" v-if="reply === replyCommentId" @submit.prevent="addReply(reply)">
              <textarea class="comment-text" v-model="newReplyContent" placeholder="Write a reply..." :rows="3" required></textarea>
              <button class="submit"><img class="icon" src="https://cdn-icons-png.flaticon.com/128/3106/3106794.png" /></button>
            </form>
            <div class="pl-5">
              <div v-for="reply1 in reply.replies" :key="reply1.id">
                <div class="comment-Form1 reply">
                  <div class="title-form">
                    <p class="avatar">{{ reply1.author.charAt(0) }}</p>
                    <p class="day">{{ reply1.author }}</p>
                    <p class="day">{{ formatDate(reply1.PublishDate) }}</p>
                  </div>

                  <span class="comment" v-if="!reply1.editing">{{ reply1.content }}</span>
                  <textarea class="comment-edit" v-if="reply1.editing" v-model="reply1.content"></textarea>
                  <div class="comment-flex">
                    <div class="comment-flex" @click="showReplyForm(reply1)">
                      <img class="icon" src="https://cdn-icons-png.flaticon.com/128/10191/10191794.png" />
                      <p>Reply</p>
                    </div>
                    <div class="comment-flex" v-if="!reply1.editing && isAuthor(this.currentUser, reply1.author)" @click="handleCancelOrEdit(reply1, 0)">
                      <img class="icon" src="https://cdn-icons-png.flaticon.com/128/1159/1159633.png" />
                      <p>Edit</p>
                    </div>
                    <div class="comment-flex" v-if="reply1.editing && isAuthor(this.currentUser, reply1.author)" @click="saveComments(this.book, this.comments, reply1, 1)">
                      <img class="icon" src="https://cdn-icons-png.flaticon.com/128/3580/3580085.png" />
                      <p>Save</p>
                    </div>
                    <div class="comment-flex" v-if="reply1.editing && isAuthor(this.currentUser, reply1.author)" @click="handleCancelOrEdit(reply1, 1)">
                      <img class="icon" src="https://cdn-icons-png.flaticon.com/128/561/561189.png" />
                      <p>Cancel</p>
                    </div>
                    <div class="comment-flex" v-if="isAuthor(this.currentUser, reply1.author)" @click="deleteReply(comment.id, reply1.id, this.book, this.comments)">
                      <img class="icon" src="https://cdn-icons-png.flaticon.com/128/484/484662.png" />
                      <p>Delete</p>
                    </div>
                  </div>
                </div>
                <form class="form-comment" v-if="reply1 === replyCommentId" @submit.prevent="addReply(reply)">
                  <textarea class="comment-text" v-model="newReplyContent" placeholder="Write a reply..." :rows="3" required></textarea>
                  <button class="submit"><img class="icon" src="https://cdn-icons-png.flaticon.com/128/3106/3106794.png" /></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CommentForm :comments="this.comments" :book="this.book" />
  </div>
</template>

<script>
import Data from "../../../src/json/CommentData.json"
import { isAuthor, deleteComment, addReplyComment, deleteReply, handleCancelOrEdit, saveComments } from "../../../src/Action/CommentMethod.js"
import CommentForm from "../../../src/components/CommentForm/CommentForm.vue"
import "../../../src/components/Commentlist/Comment.css"
import { formatDate } from "@/Action/Methods"
import { userType } from "../../../src/types/userType/userType"

export default {
  name: "CommentsView",
  props: {
    book: {
      type: Object,
      required: true
    }
  },

  components: {
    CommentForm
  },
  data() {
    return {
      comments: Data,
      replyCommentId: null,
      newReplyContent: "",
      newComment: "",
      currentUser: userType.currentUser
    }
  },
  methods: {
    formatDate,
    isAuthor,
    deleteComment,
    addReplyComment,
    deleteReply,
    handleCancelOrEdit,
    saveComments,
    showReplyForm(comment) {
      this.replyCommentId = comment
    },
    addReply(params) {
      addReplyComment(params, this.newReplyContent, this.book, this.comments)
      this.replyCommentId = null
      this.newReplyContent = ""
    }
  },
  async created() {
    const jsonData = localStorage.getItem("comments")
    if (jsonData) {
      const data = JSON.parse(jsonData)
      this.comments = data.comments
    }
  }
}
</script>
