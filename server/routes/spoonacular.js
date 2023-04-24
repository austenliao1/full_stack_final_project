const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require("../models/User");
const axios = require('axios');
const auth = require("./../middleware/auth");

const apiKey = '17010c15c8e94e889163ebf2cc50f61f'

router.get("/findRecipes", auth, async (req, res) => {
    const ingredientString = req.body.ingredients 

    axios.get('https://api.spoonacular.com/recipes/findByIngredients', {
        params: {
            apiKey: apiKey,
            ingredients: ingredientString
        }
    }).then(body => res.json(body.data))
});

router.get("/savedRecipes", auth, async (req, res) => {
    // have to pass in the token returned from user logging in?
    const user = await User.findById(req.user.id); // get the user requested by their id
    let recipeIds = user.recipes.toString; // converts array to comma separated string of recipe IDs

    axios.get('https://api.spoonacular.com/recipes/informationBulk', {
        params: {
            apiKey: apiKey,
            ids: recipeIds
        }
    }).then(body => res.json(body.data))
})