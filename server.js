const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');  // Si usas MongoDB

const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Habilita CORS
app.use(bodyParser.json()); // Para parsear cuerpos en formato JSON

// Conexión a la base de datos (MongoDB)
mongoose.connect('mongodb+srv://wilbertvillanuevajimenez:<America14wili!>@cluster0.oc3bzpe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch((err) => console.log('Error de conexión a MongoDB Atlas', err));

// Rutas
app.get('/', (req, res) => {
  res.send('¡Hola mundo!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

const Producto = require('./models/producto');  // Para MongoDB

// CRUD - Productos (MongoDB con Mongoose)
app.get('/productos', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/productos', async (req, res) => {
  const producto = new Producto(req.body);
  try {
    await producto.save();
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get('/productos/:id', async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put('/productos/:id', async (req, res) => {
  try {
    const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
    res.status(200).json(producto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete('/productos/:id', async (req, res) => {
  try {
    const producto = await Producto.findByIdAndDelete(req.params.id);
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
    res.status(200).json({ message: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('C:/Users/wilbe/OneDrive/Documentos/DAW/swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
