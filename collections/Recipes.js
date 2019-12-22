Recipes = new Mongo.Collection('recipes');

Recipes.allow({
  insert: function (userId, doc) {
    return !!userId;
  }
});

Ingredient = new SimpleSchema({
  name: {
    type: String,
    label: "Produits"
  },
  amount: {
    type: String,
    label: "Quantité(s)"
  }
});

RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Nom"
    },
    desc: {
        type: String,
        label: "Description"
    },
    ingredient: {
      type: [Ingredient]
    },
    inMenu: {
      type: Boolean,
      defaultValue: false,
      optional: true,
      autoform: {
        type: "hidden"
      }
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
