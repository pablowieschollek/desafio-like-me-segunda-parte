const pool = require('../utils/dbConector');

const updatePosts = async (req, res) => {
    try {
        const data = req.params;
        const putData = async () => {
            const consulta = "UPDATE posts SET likes = likes + 1 WHERE id = $1";
            const values = [data.id];
            const result = await pool.query(consulta, values);
            console.log("Like agregado");
            return res.status(200).send(result.rows);
        }
        putData();

        
    } catch (error) {
        console.log(error.message);
        return res.status(500).send(error.message)
    }
}

module.exports = updatePosts;