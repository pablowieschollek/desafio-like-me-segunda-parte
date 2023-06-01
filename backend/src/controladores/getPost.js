const pool = require('../utils/dbConector');
const getPost = async(req, res) => {
    try {  const getData = async () => {
        const result = await pool.query("SELECT * FROM posts order by id DESC LIMIT all")
        return res.status(200).send(result.rows)
    }
getData()
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).send(error.message)
        
    }
   
} 

module.exports = getPost;
