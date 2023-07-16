<template>
  <div class="container">
    <h1 class="title">LIST OF BOOKS</h1>
    <Loading :loading="loading" :message="loadingMessage" />
    <div v-if="!loading">
      <div class="row">
        <div v-for="book in books" :key="book.id" class="col">
          <div class="Book-font">
            <h3 class="font-sans">
              <router-link class="link" :to="'/details/' + book._id">{{ truncateString(book._source.title, 17) }}</router-link>
            </h3>
            <p class="text-3xl font-bold underline">
              <b>By {{ book._source.author }}</b>
            </p>
            <p class="text-gray-700 mb-4">{{ formatDate(book._source.publishedDate) }}</p>
            <p class="des">{{ truncateString(book._source.description, 90) }}</p>
            <p class="price">{{ book._source.price }}$</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./Book.css"
import { bookData } from "@/Api/BooksData"
import { formatDate, truncateString } from "@/Action/Methods"
import Loading from "@/components/Loading/Loading.vue"

export default {
  name: "ListBook",
  data() {
    return {
      books: [],
      loading: true,
      loadingMessage: "Loading books..."
    }
  },
  async mounted() {
    try {
      const data = await bookData.GetBook()
      this.books = data.data
    } catch (error) {
      return error
    } finally {
      setTimeout(() => {
        this.loading = false
      }, 200)
    }
  },
  methods: {
    formatDate,
    truncateString
  },
  components: {
    Loading
  }
}
</script>
