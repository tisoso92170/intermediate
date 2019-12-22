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
            return rhis.userId
        }
    },
    createdAt: {
        type: Date,
        label: "Créer le",
        autoValue: function() {
            return new Date()
        }
    }
});

Recipes.attachSchema( RecipeSchema );