const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mongodb+srv://wilbertvillanuevajimenez:<db_password>@cluster0.oc3bzpe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const Producto = sequelize.define('Producto', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

sequelize.sync()
  .then(() => console.log('Conectado a PostgreSQL y la tabla Producto está lista'))
  .catch((err) => console.log('Error al conectar con PostgreSQL', err));

module.exports = Producto;
