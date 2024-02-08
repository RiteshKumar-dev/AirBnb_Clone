const express = require("express");
const router = express.Router({ mergeParams: true });
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const { validateReview, isLoggedIn, isReviewOwner } = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");
//Post Route For Review
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

//Delete Route For Reviews
router.delete("/:reviewId", isLoggedIn, isReviewOwner, wrapAsync(reviewController.destroyReview));

module.exports = router;