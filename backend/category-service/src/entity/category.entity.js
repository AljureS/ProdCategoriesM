const { EntitySchema } = require('typeorm');

const CategorySchema = new EntitySchema({
    name: "Category",
    tableName: "categories", 
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true 
        },
        name: {
            type: String,
            unique: true,
            nullable: false
        }
    }
});

module.exports = { CategorySchema };
