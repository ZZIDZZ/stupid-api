const mongoose = require('mongoose');

let quoteSchema = mongoose.Schema(
    {
        text: {
            type: String,
        },
        author: {
            type: String,
        }
    }
);
// quoteSchema.set('toJSON', {
//     transform: function (doc, ret, options) {
//         ret.id = ret._id;
//         delete ret._id;
//         delete ret.__v;
//     },
// });
module.exports = mongoose.model('Quote', quoteSchema);
