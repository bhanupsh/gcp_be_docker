
import mongoose from "mongoose";

/* 
_id
5a9427648b0beebeb6957b51
name
"Christopher Robinson"
email
"christopher_robinson@fakegmail.com"
movie_id
573a1391f29313caabcd7da6
text
"Laudantium ut modi optio. Ullam accusamus modi dolor ullam laboriosam …"
date
1990-09-16T04:42:56.000+00:00
*/


const commentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    text: {type: String, required: true},
    movie_id: {type: String, required: true}
}, {timestamps: true});

export default mongoose.model("Comment", commentSchema);

