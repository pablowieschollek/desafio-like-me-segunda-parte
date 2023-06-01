const pool = require('../utils/dbConector');
const deletePosts = async (req, res, next) => {
    try {
        const data = req.params;
        console.log(data);
        const deletePost = async () => {
            const consulta = "DELETE FROM posts WHERE id = $1";
            const values = [data.id];
            const result = await pool.query(consulta, values);
            console.log("Post eliminado");
            return res.status(200).send(result.rows);
        }
        deletePost();

    } catch (error) {
        console.log(error.message);
        return res.status(500).send(error.message);
    }
}

module.exports = deletePosts;