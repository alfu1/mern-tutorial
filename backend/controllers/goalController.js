const asyncHandler = require('express-async-handler')

// @desc    Get goals
// @route   Get /api/goals
// @access  Private
const getGoals = asyncHandler(async(red,res) => {
    res.status(200).json({message: 'Get Goals'})
})

// @desc    Set goals
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async(red,res) => {
    if(!red.body.text){
        res.status(400)
        throw new Error('please add a text field')
}
   
    res.status(200).json({message: 'Set Goals'})
})

// @desc    Update goals
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async(red,res) => {
    res.status(200).json({message: 'update goal ${req.params.id}'})
})

// @desc   Delete goals
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async(red,res) => {
    res.status(200).json({message: 'delete goal ${req.params.id}'})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}