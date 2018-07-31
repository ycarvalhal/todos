var express = require('express');
var router = express.Router();
var todos = require('../models/todos');

router.get('/', function(request, response) {
	response.render('todos', 
		{
			title: 'Todos', 
			todos: todos
		}
	);
});

module.exports = router;