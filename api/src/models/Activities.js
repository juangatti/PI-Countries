const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activities', {
    
    name: {
      type: DataTypes.STRING,
    },
   //modificar correctamente  
    difficulty:{
      type: DataTypes.INTEGER
      
    },
    duration:{
      type: DataTypes.STRING
    },
 //modificar correctamente  
    season:{
      type: DataTypes.STRING
    },
  });
};