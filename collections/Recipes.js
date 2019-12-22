Recipes = new Meteor.Collection('recipes');

RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Nom"
    },
    desc: {
        type: String,
        label: "Description"
    },
    author: {
        type: String,
        label: "Autheur",
        autoValue: function() {
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Créer le",
        autoValue: function() {
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    }
});

Recipes.attachSchema( RecipeSchema );