import React, { useState } from "react";
import { Star, MessageSquare, Send } from "lucide-react";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the feedback to your backend
    console.log({ rating, comment });
  };

  return (
    <div className=" bg-base-200 from-orange-50 to-white py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center space-x-3 mb-8">
            <MessageSquare className="h-8 w-8 text-orange-600" />
            <h1 className="text-2xl font-bold text-gray-800">
              Share Your Feedback
            </h1>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  How would you rate your experience?
                </label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="focus:outline-none transition-transform hover:scale-110"
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      onClick={() => setRating(star)}
                    >
                      <Star
                        className={`h-8 w-8 ${
                          star <= (hoveredRating || rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        } transition-colors`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your feedback
                </label>
                <textarea
                  id="comment"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none transition"
                  placeholder="Tell us what you think..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2 group"
              >
                <span>Submit Feedback</span>
                <Send className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="text-orange-600 mb-4">
                <MessageSquare className="h-16 w-16 mx-auto" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Thank You!
              </h2>
              <p className="text-gray-600">
                We appreciate your feedback. It helps us improve our service.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setRating(0);
                  setComment("");
                }}
                className="mt-6 text-orange-600 hover:text-orange-700 font-medium"
              >
                Submit another response
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
