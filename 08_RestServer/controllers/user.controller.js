const {  request, response } = require('express');

const getAllUsers = (req=request, res=response)=>{
    res.json({
        msg: 'get /'
    })
}

module.exports = {
    getAllUsers
}