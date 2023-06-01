const pool = require('../utils/dbConector');

const postPosts = async (req, res, next) => {
    try {
        const data = req.body;
        const agregarPost = async (req) => {
            const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3, $4)";
            const values = [data.titulo, data.url, data.descripcion, 0];
            const result = await pool.query(consulta, values);
            console.log("Post agregado");
            return res.status(200).json({message:'result' }).send();
        }
        agregarPost();
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).send(error.message);
    }
}


module.exports = postPosts;