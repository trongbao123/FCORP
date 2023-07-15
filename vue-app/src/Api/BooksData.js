import { BaseService } from "@/Service/Setting/BaseService"

class BooksSevice extends BaseService {
  constructor() {
    super()
  }

  //[Get] BookList
  GetBook = () => {
    return this.get("books")
  }

  //[Get] BookList/:id
  GetBookDetails = (id) => {
    return this.get(`books/${id}`)
  }
}

export const bookData = new BooksSevice()
