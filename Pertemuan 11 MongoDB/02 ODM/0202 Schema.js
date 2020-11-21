const { Mongoose } = require("mongoose");

const memberSchema = mongoose.Schema({
    name: String,
    email: String,
    credit: Number
});

const Member = mongoose.model("Member", memberSchema);

// Type 1
var member1 = new Member({
    name: "Space The Final Frontier",
    email: "these-are@the-voyages.com"
});
member1.save((error, savedDocument) => {
    if (error) console.log(error);
    console.log(savedDocument);
});

// Type 2
Member.create(
    {
        name: "Starship Enterprise",
        email: "to-boldly-go@no1hasgonebefore.com",
        credit: 1701000
    },
    function (error, savedDocument) {
        if (error) console.log(error);
        console.log(savedDocument);
    }
);