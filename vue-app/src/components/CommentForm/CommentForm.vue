<template>
  <form class="form-comment" @submit.prevent="submitComment">
    <textarea class="comment-text area" v-model="newComment" placeholder="Write a comment..." :rows="3"></textarea>
    <button class="submit"><img class="icon" src="https://cdn-icons-png.flaticon.com/128/3106/3106794.png" /></button>
  </form>
</template>

<script>
import { addComment } from "../../../src/Action/CommentMethod.js"
import "../../../src/components/Commentlist/Comment.css"

export default {
  name: "CommentForm",

  props: {
    comments: Array,
    book: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      newComment: ""
    }
  },
  methods: {
    submitComment() {
      const newComments = addComment(this.book, this.comments, this.newComment)
      this.$emit("update-comments", newComments)
      this.newComment = ""
      this.comments
    }
  }
}
</script>

<style>
.area {
  width: 70%;
  margin: 0px 0px 10px 160px;
  font-family: serif;
  font-size: 20px;
  font-weight: 600;
}
</style>
