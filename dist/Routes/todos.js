"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todo = [];
router.get("/", (req, res, next) => {
    res.json({ todos: todo });
});
router.post("/todo", (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todo.push(newTodo);
    res.status(201).json({ message: "Todos created sucessfully" });
});
router.put("/todo/:todoId", (req, res, next) => {
    const params = req.params;
    const tId = params.todoId;
    const todoIndex = todo.findIndex((todoItem) => todoItem.id === tId);
    if (todoIndex >= 0) {
        todo[todoIndex] = { id: todo[todoIndex].id, text: req.body.text };
        return res.status(201).json({ message: "Updated todo", todo: todo });
    }
    else {
        res.json({ error: "Could not find todo for this id" });
    }
});
router.delete("/todo/:todoId", (req, res, next) => {
    const params = req.params;
    const tId = params.todoId;
    todo = todo.filter((todoItem) => todoItem.id !== tId);
    res.status(200).json({ message: "Todo deleted sucessfully" });
});
exports.default = router;
