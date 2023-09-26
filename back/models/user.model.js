module.exports = mongoose => {
    var schema = mongoose.Schema(
        { // Removed "user" from this position.
            name: String,
            surname: String,
            birthdate: Date,
            function: String,
            email: String,
            address: String,
            postalCode: String,
            phone: String,
            role: {
                type: String,
                enum: ["rep", "admin", "agent"], // It's good practice to enumerate possible values.
                default: "agent"
            },
            agency: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "agency"
            },
            password: String,
            points: {
                type: Number,
                default: 0
            }
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const User = mongoose.model("user", schema);
    return User;
};
