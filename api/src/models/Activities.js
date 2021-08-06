const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activities', {
    
    name: {
      type: DataTypes.STRING,
    },
    
    difficulty:{
      type: DataTypes.INTEGER
      
    },
    duration:{
      type: DataTypes.STRING
    },

    season:{
      type: DataTypes.INTEGER
    },
  });
};