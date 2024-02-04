const express = require("express");
const router =express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const Review=require("../models/review.js");
const Listing=require("../models/listings.js");
const {validateReview, isLoggedIn, isReviewAuthor} =require("../middleware.js");

const reviewController =require("../controllers/reviews.js");


//REVIEWS
  //Post Review
  router.post("/",
  isLoggedIn,
  validateReview , wrapAsync(reviewController.createReview));

  //Delete Review
  router.delete(
    "/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    
    wrapAsync(reviewController.destroyReview))

  module.exports =router;