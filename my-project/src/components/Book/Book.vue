<template>
  <div class="container">
    <div class="content">
      <div class="details-content">
        <p class="title-content">{{ book.title }}</p>
        <p class="des">{{ book.description }}</p>
        <p class="author">by {{ book.author }}</p>
        <p>{{ formatDate(book.publishedDate) }}</p>
        <p>{{ book.price }}$</p>
      </div>
      <CommentList :book="book"></CommentList>
    </div>
  </div>
</template>

<script>
import "./Details.css"
import { formatDate } from "@/Methods/Methods"
import { bookData } from "@/Api/BooksData"
import CommentList from "../../../src/components/Commentlist/CommentList.vue"

export default {
  name: "BookDetails",
  components: {
    CommentList
  },
  data() {
    return {
      book: {}
    }
  },
  computed: {
    bookId() {
      return this.$route.params.id
    }
  },
  async mounted() {
    try {
      const data = await bookData.GetBookDetails(this.bookId)
      this.book = data.data.data
    } catch (error) {
      return error
    }
  },
  methods: {
    formatDate
  }
}
</script>
