const express = require("express")
const router = express.Router()
const userController = require("../controller/userController")
const bookController = require("../controller/bookController")
const reviewController = require("../controller/reviewController")
const middleware = require('../middleWare/auth')

router.post("/register",middleware.userCreateValidation , userController.createUser)

router.post("/login", userController.userLogin)

router.post("/books",middleware.bookCreateValidation,middleware.authentication ,  bookController.createBook)

router.get("/books",middleware.authentication , bookController.getBook)

router.get("/book/:bookId",middleware.authentication , bookController.getBookById)

router.put("/book/:bookId",middleware.authentication , middleware.autherisation , bookController.updateBook)

router.delete("/book/:bookId",middleware.authentication , middleware.autherisation , bookController.deleteBook)

router.post("/books/:bookId/review",middleware.reviewCreateValidation ,  reviewController.createReview )

router.put("/books/:bookId/review/:reviewId",middleware.putDeeleteReview , reviewController.updateReview ) 

router.delete("/books/:bookId/review/:reviewId",middleware.putDeeleteReview , reviewController.deleteReview )
 
module.exports = router

