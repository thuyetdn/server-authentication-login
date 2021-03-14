const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://thuyetso20:thuyetahihi123@cluster0.ro6ce.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
})
